import {KnowledgeBaseContent} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Knowledge Base',
})

export default function KnowledgeBase() {
  return <KnowledgeBaseContent />
}
