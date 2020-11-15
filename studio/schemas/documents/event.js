export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'dateAndTime',
      type: 'datetime',
      title: 'Date and Time'
    },
    {
      name: 'venue',
      type: 'reference',
      to: {type: 'venue'}
    },
    {
      name: 'virtual',
      type: 'boolean',
      title: 'Virtual Event'
    },
    {
      name: 'eventUrl',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ]
}
