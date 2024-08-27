'use client'

import cartApiRequest from "@/apiRequest/cart"
import { clientAccessToken } from "@/lib/http"
import { getCart } from "@/redux/slices/cart-slice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"



export default function CountCart() {
  const cart = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async () => {
      if (clientAccessToken.value) {
        const res = await cartApiRequest.getCart();
        dispatch(getCart({
          cart: res.payload.data.cart,
          totalPrice: res.payload.data.totalPrice,
          totalQty: res.payload.data.totalQty,
        }))
      }
    }
    getData()
  }, [cart.totalQty])

  return (
    <div className='absolute font-semibold flex items-center justify-center text-primary text-[12px] -top-1.5 -right-1 border border-white rounded-full size-5 bg-yellow-400'>
      {cart.totalQty}
    </div>
  )
}
