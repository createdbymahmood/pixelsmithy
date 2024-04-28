import {Ban, Bookmark, MoreHorizontal} from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Group,
  Stack,
  Typography,
} from '@/components/job-location/components/ui'
import {Badge} from '@/components/job-location/components/ui/badge'
import {useResponsiveVariant} from '@/components/job-location/utils/useResponsiveVariant'

function JobsListCardHeader() {
  return (
    <Group gap='md' noWrap>
      <Avatar className='size-16 rounded-xl'>
        <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
        <AvatarFallback className='rounded-xl'>CN</AvatarFallback>
      </Avatar>

      <Stack>
        <Typography
          className='line-clamp-2 max-w-40'
          family='serif'
          weight='medium'
        >
          Senior Product Designer - Growth
        </Typography>

        <Typography className='text-primary' family='serif' size='sm'>
          United States
        </Typography>
      </Stack>

      <MoreHorizontal className='ml-auto cursor-pointer text-gray-400' />
    </Group>
  )
}

function JobsListCardBody() {
  return (
    <Stack className='mt-5'>
      <Typography className='text-gray-400' size='sm'>
        United States, California
      </Typography>

      <Group className='mt-1' justify='between'>
        <Typography size='sm' weight='semibold'>
          Mid-Senior
        </Typography>
        <Typography size='sm' weight='semibold'>
          Full-Time
        </Typography>
        <Typography size='sm' weight='semibold'>
          $10520 PA
        </Typography>
      </Group>

      <Typography
        className='mt-2 text-gray-400'
        letterSpacing='wider'
        size='sm'
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </Typography>

      <Group
        className='mt-3'
        gap={useResponsiveVariant({base: 'sm', lg: 'md'})}
        // gap='md'
      >
        <Badge variant='job-description-tag'>Design</Badge>
        <Badge variant='job-description-tag'>User Experience</Badge>
        <Badge variant='job-description-tag'>Senior</Badge>
      </Group>
    </Stack>
  )
}

function JobsListCardFooter() {
  return (
    <Group className='mt-4' justify='between'>
      <Typography className='text-gray-400' size='sm'>
        28 March 2021
      </Typography>

      <Group gap='md'>
        <Ban className='cursor-pointer text-gray-400' />
        <Bookmark className='cursor-pointer text-gray-400' />
      </Group>
    </Group>
  )
}

export function JobsListCard() {
  return (
    <Box className='w-full rounded-md bg-white px-7 pb-5 pt-8 shadow-sm'>
      <JobsListCardHeader />
      <JobsListCardBody />
      <JobsListCardFooter />
    </Box>
  )
}
