'use client'

import {JobFilters} from '@job-location/components/compound'

// function JobLocationContent() {
//   return (
//     <Container maw={rem(1920)} my='lg'>
//       <Grid gutter='xl'>
//         <Grid.Col maw={rem(280)} offset={{xs: 0, lg: 1}} span='auto' w={280}>
//           <JobFilters />
//         </Grid.Col>

//         <Grid.Col span={{lg: 'auto'}}>
//           <JobsList />
//         </Grid.Col>
//       </Grid>
//     </Container>
//   )
// }

// export default function JobLocation() {
//   const isMobile = useMobileDevice()
//   return (
//     <Box pt={isMobile ? 0 : rem(80)}>
//       <JobsSiderbar />
//       <JobLocationHeader />
//       <JobLocationContent />
//     </Box>
//   )
// }

export default function JobLocation() {
  return <JobFilters />
}
