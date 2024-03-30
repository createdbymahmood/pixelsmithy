import {Badge, Card, CardBody, HStack, Text} from '@chakra-ui/react'
import React from 'react'

interface PageHeaderProps {
  badge: string
  category: string
  description: string
  title: string
}

export function PageHeader({
  badge,
  category,
  description,
  title,
}: PageHeaderProps) {
  return (
    <Card
      border='1px solid'
      borderColor='gray.300'
      borderRadius='3xl'
      boxShadow='none'
      py={6}
      w='100%'
    >
      <CardBody>
        <Badge
          color='black'
          colorScheme='gray'
          fontSize='sm'
          fontWeight='500'
          px={3}
          py={1.5}
          rounded='full'
          textTransform='none'
          variant='outline'
        >
          {category}
        </Badge>

        <HStack mt={5}>
          <Text fontSize='4xl' fontWeight='700'>
            {title}
          </Text>
          <Badge
            colorScheme='teal'
            fontWeight='500'
            px={3}
            py={1.5}
            rounded='full'
            textTransform='none'
            variant='subtle'
          >
            {badge}
          </Badge>
        </HStack>

        <Text color='gray.600'>{description}</Text>
      </CardBody>
    </Card>
  )
}
