export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa80f98f25e864a539f4bc6',
                  title: 'Sanity Studio',
                  name: 'jumpstart-jamstack-development-studio',
                  apiId: '66453501-8e69-4260-915e-68afe66f9fe9'
                },
                {
                  buildHookId: '5fa80f9874dee796d5d11199',
                  title: 'Blog Website',
                  name: 'jumpstart-jamstack-development',
                  apiId: 'f45642c6-9820-4fea-b1ae-f867bda272c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VincenzoGambino/Jumpstart-Jamstack-Development',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jumpstart-jamstack-development.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
