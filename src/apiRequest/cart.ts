import http from "@/lib/http";

const cartApiRequest = {
  getCart: () => http.get<any>('api/carts/cart'),
  addItem: (payload: { product: string, qty: number }) => http.post('api/carts/cart/add', payload)
}

export default cartApiRequest;