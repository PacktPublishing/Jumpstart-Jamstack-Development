import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Event from '../components/event'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query EventTemplateQuery($id: String!) {
    event: sanityEvent(id: {eq: $id}) {
      id
      name
      _rawBody
      venue {
        name
      }
    }
  }
`

const EventTemplate = props => {
  const {data, errors} = props
  const event = data && data.event
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {event && <SEO title={event.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {event && <Event {...event} />}
    </Layout>
  )
}

export default EventTemplate
