import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './blog-post.module.css'

function Event (props) {
  const {_rawBody, name, venue} = props
  return (
    <article className={styles.root}>

      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.name}>{name} @ {venue.name}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Event
