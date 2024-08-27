'use client'

import { useGlobalContext } from "@/context/store"
import { useRouter } from "next/navigation";

const SectionStep = () => {
  const { cartSteps, setCartSteps } = useGlobalContext();
  const router = useRouter();

  const handleStep = (i: number | null) => {
    if (i === null) {
      return router.push('/cart');
    }
    if(i === 0){
      if(cartSteps[i].status) {
        const newSteps = cartSteps.map((item, index) => {
          if(index !== i) item.status = false;
          return item;
        });
        setCartSteps([...newSteps]);
        return router.push('/cart/info');
      }
    }
  }

  return (
    <section className='section-steps p-2'>
      <div className='px-[14px] pt-5 pb-4 bg-[#FFEDED] rounded-sm grid grid-cols-4'>
        <div onClick={() => handleStep(null)} className={`step px-1 is-active cursor-pointer`}>
          <div className={`icon mb-1 w-7 h-7 border rounded-full flex items-center justify-center mx-auto`}>
            <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14.5215" cy="14" r="14" fill="#E30019"></circle>
              <path d="M21.4353 10.9187C21.3355 10.8254 21.2167 10.7514 21.0859 10.7009C20.9551 10.6505 20.8147 10.6247 20.6731 10.625H18.5192V10.125C18.5192 9.19674 18.1221 8.3065 17.4152 7.65013C16.7084 6.99375 15.7497 6.625 14.75 6.625C13.7503 6.625 12.7916 6.99375 12.0848 7.65013C11.3779 8.3065 10.9808 9.19674 10.9808 10.125V10.625H8.82692C8.54131 10.625 8.26739 10.7304 8.06542 10.9179C7.86346 11.1054 7.75 11.3598 7.75 11.625V18.375C7.75 19.5937 8.86058 20.625 10.1731 20.625H19.3269C19.9618 20.6252 20.5715 20.3947 21.0258 19.9828C21.2543 19.7803 21.4364 19.5369 21.5608 19.2673C21.6853 18.9977 21.7497 18.7074 21.75 18.4141V11.625C21.7504 11.4938 21.7228 11.3638 21.6688 11.2426C21.6148 11.1214 21.5355 11.0113 21.4353 10.9187ZM17.3242 14.1875L14.3088 17.6875C14.2593 17.745 14.1967 17.7915 14.1256 17.824C14.0544 17.8564 13.9764 17.8738 13.8972 17.875H13.8885C13.8107 17.875 13.7338 17.8594 13.6632 17.8292C13.5925 17.7989 13.5298 17.7549 13.4792 17.7L12.1869 16.2975C12.141 16.2476 12.106 16.1898 12.0841 16.1273C12.0622 16.0649 12.0538 15.9991 12.0593 15.9336C12.0648 15.8681 12.0841 15.8043 12.1162 15.7458C12.1482 15.6873 12.1924 15.6352 12.2462 15.5925C12.2999 15.5498 12.3622 15.5174 12.4294 15.4971C12.4966 15.4767 12.5675 15.4689 12.638 15.474C12.7085 15.4791 12.7773 15.497 12.8403 15.5268C12.9033 15.5566 12.9594 15.5976 13.0054 15.6475L13.875 16.5909L16.4835 13.5625C16.5728 13.4589 16.7027 13.3925 16.8447 13.3778C16.9867 13.3632 17.1291 13.4015 17.2407 13.4844C17.3523 13.5673 17.4238 13.6879 17.4396 13.8198C17.4554 13.9516 17.4141 14.0839 17.3249 14.1875H17.3242ZM17.4423 10.625H12.0577V10.125C12.0577 9.46196 12.3413 8.82607 12.8462 8.35723C13.3512 7.88839 14.036 7.625 14.75 7.625C15.464 7.625 16.1488 7.88839 16.6537 8.35723C17.1587 8.82607 17.4423 9.46196 17.4423 10.125V10.625Z" fill="white"></path>
            </svg>
          </div>
          <div className={`text-center text-[14px] text-[#E30019]`}>Giỏ hàng</div>
        </div>
        {cartSteps.map((item: any, index: number) => (
          <div key={index} onClick={() => handleStep(index)} className={`step px-1 cursor-pointer ${item.status ? 'is-active' : ''} relative before:contents-[''] before:w-[70%] before:h-0 before:absolute before:top-[12px] before:left-[-50px] before:border-t ${item.status ? 'before:border-[red]' : 'before:border-dashed before:border-black'}`}>
            <div className={`icon mb-1 w-7 h-7 border rounded-full flex items-center justify-center mx-auto`}>
              {item.icon}
            </div>
            <div className={`text-center text-[14px] ${item.status ? 'text-[#E30019]' : ''}`}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionStep