import productApiRequest from "@/apiRequest/product"
import ProductDetail from "@/app/(public)/products/[slug]/product-detail"

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const res = await productApiRequest.getBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: res.payload.data.metaTitle,
    description: res.payload.data.metaDescription,
    keywords: res.payload.data.metaKeyword
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default async function ProductDetailPage({ params: { slug } }: { params: { slug: string } }) {

  const res = await productApiRequest.getBySlug(slug);

  return (
    <div className="bg-body py-5">
      <div className="w-content mx-auto my-0 px-[10px]">
        <div className="w-full h-full bg-secondary rounded-[0.15rem]">
          <ProductDetail {...res.payload.data} />
        </div>
      </div>
    </div>
  )
}
