import {PageContent, PageHeader} from '@dash-stack/components'

import {ProductsCarousel, PromotionsCarousel} from './components'

export function Products() {
  return (
    <PageContent>
      <PageHeader>Products</PageHeader>
      <PromotionsCarousel />
      <ProductsCarousel />
    </PageContent>
  )
}
