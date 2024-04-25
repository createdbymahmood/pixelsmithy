import {Bell} from 'lucide-react'
import React from 'react'

import {Button} from '@/components/job-location/components/ui'

export function NavbarNotifications() {
  return (
    <Button size='icon' variant='outline'>
      <Bell className='text-primary' size={20} />
    </Button>
  )
}
