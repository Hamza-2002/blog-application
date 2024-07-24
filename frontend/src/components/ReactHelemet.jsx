import React from 'react'
import { Helmet } from 'react-helmet'

const ReactHelemet = ({title  , image}) => {
  return (
    <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="icon" type="image/svg+xml" href={image} />
            </Helmet>
  )
}


export default ReactHelemet