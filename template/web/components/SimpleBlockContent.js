import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import {pick} from 'lodash'

export default function SimpleBlockContent(props) {
  if (!props || !props.blocks) {
    console.error('Missing blocks')
    return null
  }
  return <BlockContent {...props} {...pick(client.clientConfig, ['projectId', 'dataset'])} />
}
