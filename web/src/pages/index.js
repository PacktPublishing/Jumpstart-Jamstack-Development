import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }  
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    venues: allSanityVenue {
      edges {
        node {
          _id
          name
       }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const venueNodes = (data || {}).venues
    ? mapEdgesToNodes(data.venues)
    : []


  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {postNodes && (
          <BlogPostPreviewList
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/archive/'
          />
        )}
        <form name='propose-event' method='POST' data-netlify='true' >
          <input type='hidden' name='form-name' value='propose-event' />
          <div className='mt-10 block'>
            <label className='label'>Full name:
              <input className='form-input mt-1 block w-full' type='text' name='name'/>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Email:
              <input className='form-input mt-1 block w-full' type='email' name='email'/>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Event Title:
              <input className='form-input mt-1 block w-full' type='text' name='eventTitle'/>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Date:
              <input className='form-input mt-1 block w-full' type='datetime-local' name='date'/>
            </label>
          </div>
          <div className="mt-10 block">
            <label className="label">Venue:
              <select className="form-select mt-1 block w-full" name="venue">
                {
                  venueNodes && venueNodes.map((venue) => (
                    <option id={venue._id}>{venue.name}</option>
                  ))
                }
              </select>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Virtual:
              <input className='form-input mt-1 block w-full' type='checkbox' name='virtual'/>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Event url:
              <input className='form-input mt-1 block w-full' type='text' name='eventUrl'/>
            </label>
          </div>
          <div className='mt-10 block'>
            <label className='label'>Message:
              <textarea className='form-textarea mt-1 block w-full' name='message'></textarea>
            </label>
          </div>
          <div className='mt-10 block'>
            <button className='button' type='submit'>Send
            </button>
          </div>
        </form>

      </Container>
    </Layout>
  )
}

export default IndexPage
