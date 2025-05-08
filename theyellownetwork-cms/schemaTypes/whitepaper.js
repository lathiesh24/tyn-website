export default {
  name: 'whitepaper',
  title: 'Whitepaper',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'file',
      title: 'Download File',
      type: 'file',
    },
  ],
}
