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
  Typography,
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

      <DropdownMenuContent align='end' side='bottom' sideOffset={12}>
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

function UserAvatar() {
  return (
    <Avatar className='size-14 rounded-xl'>
      <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
      <AvatarFallback className='rounded-xl'>CN</AvatarFallback>
    </Avatar>
  )
}

export function NavbarProfile() {
  return (
    <Group gap='md' noWrap>
      <UserAvatar />

      <Dropdown>
        <Stack className='font-serif'>
          <Typography
            className='text-muted-foreground'
            size='xs'
            weight='medium'
          >
            Hello!
          </Typography>

          <Group gap='xs' noWrap>
            <Typography className='line-clamp-1' size='xs' weight='medium'>
              Sahil Dobariya
            </Typography>
            <ChevronDown className='size-4 fill-muted-foreground text-muted-foreground transition-all group-data-[state=open]:rotate-180' />
          </Group>
        </Stack>
      </Dropdown>
    </Group>
  )
}
