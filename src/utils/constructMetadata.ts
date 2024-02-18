import type {Metadata} from 'next'

interface ConstructMetadataParams {
  title?: string
  description?: string
  image?: string
  icons?: string
}

const defaultMetadata: Required<ConstructMetadataParams> = {
  title: 'Pixelsmithy',
  description: '',
  icons: '/next.svg',
  image: '',
}

export const constructMetadata = ({
  title,
  description,
  image,
  icons,
}: ConstructMetadataParams = defaultMetadata): Metadata => {
  return {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    title: `${title} | Pixelsmithy`,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image!}],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image!],
      creator: '@madebymahmood',
    },
    icons,
  }
}
