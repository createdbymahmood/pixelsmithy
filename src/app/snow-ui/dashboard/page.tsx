import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Snow UI',
})

export default function SnowUI() {
  // return redirect('/snow-ui/projects')
  return <div style={{height: '200vh'}}>Hello World</div>
}
