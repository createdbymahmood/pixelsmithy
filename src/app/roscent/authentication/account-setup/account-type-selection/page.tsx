import {AccountTypeSelection as AccountTypeSelectionView} from '@/components/Roscent/components/authentication/AccountSetup/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Type Selection',
})

export default function AccountTypeSelection() {
  return <AccountTypeSelectionView />
}
