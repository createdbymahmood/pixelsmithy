import {ChevronDown} from 'lucide-react'
import type {ReactNode} from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Group,
  Stack,
} from '@/components/job-location/components/ui'

interface DropdownProps {
  children: ReactNode
}

function Dropdown({children}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='group' asChild>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent side='bottom'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function NavbarProfile() {
  return (
    <Group gap='md' noWrap>
      <Avatar className='size-16 rounded-xl'>
        <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Stack className='font-serif'>
        <p className='text-xs font-medium text-muted-foreground'>Hello!</p>

        <Dropdown>
          <Group gap='xs' noWrap>
            <p className='line-clamp-1 text-xs font-medium'>Sahil Dobariya</p>
            <ChevronDown className='size-4 fill-muted-foreground text-muted-foreground transition-all group-data-[state=open]:rotate-180' />
          </Group>
        </Dropdown>
      </Stack>
    </Group>
  )
}
