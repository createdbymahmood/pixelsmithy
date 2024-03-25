import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react'
import React from 'react'

export default function Preline() {
  return (
    <Container>
      <Breadcrumb variant=''>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  )
}
