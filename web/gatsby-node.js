const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

async function createEventPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityEvent {
        edges {
          node {
            id
            dateAndTime
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const eventEdges = (result.data.allSanityEvent || {}).edges || []

  eventEdges
    .forEach((edge, index) => {
      const {id, dateAndTime} = edge.node
      const dateSegment = format(dateAndTime, 'YYYY/MM')
      const path = `/event/${dateSegment}/${id}/`
      createPage({
        path,
        component:
          require.resolve('./src/templates/event.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
  await createEventPages(graphql, actions)
}
