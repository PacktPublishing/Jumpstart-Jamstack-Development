const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'my_poject_id',
  dataset: 'my_dataset',
  token: process.env.SANITY_STUDIO_PROPOSE_EVENT
})
exports.handler = async function (event, context, callback) {
  const {payload} = JSON.parse(event.body)
  const doc = {
    _type: 'event',
    name: payload.data.eventTitle,
    dateAndTime: payload.data.date,
    virtual: payload.data.virtual === 'on',
    eventUrl: payload.data.eventUrl,
    venue: {
      _ref: payload.data.venue,
      _type: 'reference'
    },
    body: [{
      '_type': 'block',
      'children': [{
        '_type': 'span',
        'text': payload.data.message
      }]
    }],
    approved: false
  }

  // Create document
  await client.create(doc)
    .then(res => {
      callback(null, {statusCode: 200})
    })
}
