import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { deleteProduct, ProductInCart, updateQty } from "@/redux/slices/cart-slice"
import { Trash2Icon } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"

const CartItem = (props: ProductInCart) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState<number>(props.qty)


  return (
    <div className='cart-item flex'>
      <div className="left w-[90px] ">
        <div className="item-img w-full h-[90px] border-[0.8px]">
          <a className='block w-full h-full' href="#">
            <img className='w-full h-full object-cover' src={props.images[0]} alt="" />
          </a>
        </div>
        <div className="item-remove mt-2 flex justify-center gap-2	cursor-pointer">
          <Trash2Icon size={16} strokeWidth={1} />
          <span onClick={() => {
            dispatch(deleteProduct({ _id: props._id }))
          }} className='text-[13px] text-gray-500 hover:text-[red] transition-all'>Xóa</span>
        </div>
      </div>
      <div className="right w-[454px] ml-2 flex">
        <div className="item-info w-[317.8px] pr-5">
          <a href="#">
            <div className='font-medium'>{props.name}</div>
          </a>
        </div>
        <div className='item-meta w-[136.2px]'>
          <div className="item-price pb-4">
            {props.discount !== '0' ? (
              <>
                <span className='text-[red] w-full inline-block text-right text-[18px] font-semibold'>{formatCurrentcy(props.price * (1 - (+props.discount) / 100))}</span>
                <del className='text-right inline-block w-full text-[14px] text-gray-500'>{formatCurrentcy(props.price)}</del>
              </>
            ) : (
              <span className='text-[red] w-full inline-block text-right text-[18px] font-semibold'>{formatCurrentcy(props.price)}</span>
            )}

          </div>
          <div className='item-qty w-full flex'>
            {/* <button className='w-[30%] border h-8 rounded-tl rounded-bl' disabled>-</button>
            <input className='w-[40%]  border-t border-b outline-none h-8 text-center' readOnly type="text" value={props.qty} />
            <button className='w-[30%]  border h-8 rounded-tr rounded-br'>+</button> */}
            <input onChange={(e) => {
              setQty(+e.target.value);
              dispatch(updateQty({ _id: props._id, qty: +e.target.value }));
            }} className='w-full  border outline-none h-8 text-center' type="number" value={qty} min={1} step={1} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem