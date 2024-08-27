'use client'

import CartItem from '@/app/(public)/cart/_components/cart-item'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

const SectionOrder = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <section className='section-order p-6 '>
      <div className='w-full h-full flex flex-col gap-8'>
        {cart.map((item, index) => (
          <CartItem {...item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default SectionOrder