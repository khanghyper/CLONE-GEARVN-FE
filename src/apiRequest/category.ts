import { GetCategoriesRes } from "@/app/(private)/admin/categories/all/test-context";
import http from "@/lib/http";

const categoryApiRequest = {
  findAll: (queryString: string) => {

    return http.get<GetCategoriesRes>(`api/categories?${queryString}`, {
      cache: 'no-cache'
    })
  },
  findv1: () => {
    return http.get<any>(`api/categories/v1`, {
      cache: 'no-cache'
    })
  },
  findById: (id: string) => http.get<any>(`api/categories/category/${id}`, {
    cache: 'no-cache'
  }),
  create: (payload: any) => http.post('api/categories/category', payload),
}

export default categoryApiRequest;