import http from "@/lib/http";

const productApiRequest = {
  create: (payload: any) => http.post('api/products/product', payload),
  getList: () => http.get('api/products'),
  getBySlug: (slug: string) => http.get<any>(`api/products/product/${slug}`)
}

export default productApiRequest