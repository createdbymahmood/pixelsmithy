import {
  AccordionPanel as OriginalAccordionPanel,
  chakra,
  Text,
} from '@chakra-ui/react'

export const AccordionPanel = chakra(OriginalAccordionPanel, {
  baseStyle: {
    position: 'relative',
    p: 0,
    ml: 10,
    pr: 1,
    _before: {
      content: "''",
      display: 'block',
      width: 0.5,
      borderRadius: 'xl',
      bg: 'gray.200',
      position: 'absolute',
      left: -3,
      top: 1,
      bottom: 1,
    },
  },
})

export const SectionTitle = chakra(Text, {
  baseStyle: {
    color: 'gray.500',
    fontSize: 'xs',
    fontWeight: '600',
    mb: 2,
    ml: 4,
    mt: 4,
    textTransform: 'uppercase',
  },
})
