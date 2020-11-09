export default {
  name: 'venue',
  type: 'document',
  title: 'Venue',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    },
    {
      name: 'location',
      type: 'geopoint',
      title: 'Location'
    },
    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website'
    },
  ]
}
