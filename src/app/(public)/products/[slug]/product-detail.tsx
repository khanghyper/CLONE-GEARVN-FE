'use client'

import cartApiRequest from "@/apiRequest/cart";
import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { toast } from "@/components/ui/use-toast";
import { getCart } from "@/redux/slices/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { StarFilledIcon } from "@radix-ui/react-icons"

export default function ProductDetail(props: any) {
  const cart = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch();

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  const handleAddItem = async () => {
    try {
      const addItemRes = await cartApiRequest.addItem({
        product: props._id,
        qty: 1
      })
      const getCartRes = await cartApiRequest.getCart();
      dispatch(getCart({
        cart: getCartRes.payload.data.cart,
        totalPrice: getCartRes.payload.data.totalPrice,
        totalQty: getCartRes.payload.data.totalQty,
      }))
      toast({
        title: 'Thanh cong',
        description: 'Them gio hang thanh cong!',
        variant: 'success'
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex'>
      <div className='flex-[35%] p-6'>
        <div className='w-full'>
          <div className='size-[372px]'>
            <img src={props.thumbnail} alt="" className='size-[372px] object-cover' />
          </div>
        </div>
        <div className='mt-4 w-full'>
          <div className='grid grid-cols-5 gap-4'>
            {props.images.map((item: any) => (
              <div key={item} className='w-full'>
                <img src={item} alt="" className='w-full h-full object-cover' />
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className='flex-[65%] p-6 border-r border'>
        <div className='size-full'>
          <div className="info-top">
            <div className='mb-2 text-[24px] font-semibold'>
              {props.name}
            </div>
            <div className='mb-4 flex text-[16px] font-semibold items-center gap-1'>
              <span className='text-[#FF8A00]'>0</span>
              <StarFilledIcon color='#FF8A00' />
            </div>
            <div className='size-full'>
              <div className="flex items-center gap-4">
                {props.priceSale ? (
                  <>
                    <span className='text-[#E30019] font-semibold text-[32px]'>{formatCurrentcy(props.priceSale)}</span>
                    <del className='text-[18px] text-[#6D6E72] font-normal'>{formatCurrentcy(props.price)}</del>
                    <div className='px-2 py-[3px] text-red-600 rounded border border-red-600 text-[12px] font-normal'>-{props.promotionPercentText}</div>
                  </>
                ) : (
                  <>
                    <span className='text-[#E30019] font-semibold text-[32px]'>{formatCurrentcy(props.price)}</span>
                  </>
                )}
              </div>
              <div className='py-2'>
                <input type="number" className='p-1 border' step={1} min={1} />
              </div>
              <div className='pt-2.5 pb-4'></div>
              <div className='size-full'>
                <div className='mb-2'>
                  <button onClick={handleAddItem} className='px-2.5 pt-2.5 pb-[14px] rounded-sm border border-[#E30019] text-white text-center w-[380px] bg-[#E30019]'>
                    <span className='block text-[18px] font-semibold'>MUA NGAY</span>
                    <span className='block text-[14px] font-normal mt-[3px]'>Giao tận nơi hoặc nhận tại cửa hàng</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
