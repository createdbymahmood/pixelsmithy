import {Ban, Bookmark, MoreHorizontal} from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Group,
  Stack,
} from '@/components/job-location/components/ui'
import {Badge} from '@/components/job-location/components/ui/badge'

function JobsListCardHeader() {
  return (
    <Group gap='md' noWrap>
      <Avatar className='size-16 rounded-xl'>
        <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
        <AvatarFallback className='rounded-xl'>CN</AvatarFallback>
      </Avatar>

      <Stack>
        <p className='line-clamp-2 max-w-40 font-serif text-base font-medium'>
          Senior Product Designer - Growth
        </p>

        <p className='font-serif text-sm text-primary'>United States</p>
      </Stack>

      <MoreHorizontal className='ml-auto cursor-pointer text-gray-400' />
    </Group>
  )
}

function JobsListCardBody() {
  return (
    <Stack className='mt-5'>
      <p className='text-sm text-gray-400'>United States, California</p>

      <Group className='mt-1' justify='between'>
        <p className='text-sm font-semibold'>Mid-Senior</p>
        <p className='text-sm font-semibold'>Full-Time</p>
        <p className='text-sm font-semibold'>$10520 PA</p>
      </Group>

      <p className='mt-2 text-sm tracking-wider text-gray-400'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </p>

      <Group className='mt-3' gap='md'>
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
      <p className='text-sm text-gray-400'>28 March 2021</p>

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
