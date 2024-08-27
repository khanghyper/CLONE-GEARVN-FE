'use client'

import './style.css';
import CouponBlock from '@/app/(public)/cart/_components/coupon-block';
import SectionStep from '@/app/(public)/cart/_components/section-step';
import SectionOrder from '@/app/(public)/cart/_components/section-order';
import SectionInfoTotal from '@/app/(public)/cart/_components/section-info-total';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/context/store';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/redux/slices/cart-slice';


export default function CartPage() {
  const { cartSteps, setCartSteps } = useGlobalContext();

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/cart') {
        const newCartSteps = [...cartSteps].map(item => {
          if (item.status) item.status = false;
          return item;
        });
        setCartSteps([...newCartSteps]);
      }
    }
  }, [])

  return <>
    <div className='breadcrumb'>
      <div className='p-4'>
        <Link href={'/products-test'} className='flex gap-2 items-center text-[#1982F9]'>
          <ChevronLeft size={16} strokeWidth={1} />
          Mua thêm sản phẩm khác
        </Link>
      </div>
    </div>
    <div className="cart-main bg-white rounded-sm">
      <SectionStep />
      <SectionOrder />
      <CouponBlock />
      <SectionInfoTotal href={'/cart/info'} />
      {/* <EmptyCart/> */}
    </div>
  </>
}
