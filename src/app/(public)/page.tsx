

import { ChevronRightIcon} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import './style.css';
import navLinks from "@/app/(public)/_components/nav-links";
import Section from "@/app/(public)/_components/section";
import SectionBanner from "@/app/(public)/_components/section-banner";
import Sectiontegory from "@/app/(public)/_components/section-categories";
import SectionPagelist from "@/app/(public)/_components/section-pagelist";
import SectionBlogsList from "@/app/(public)/_components/section-blogslist";




export const bannerImgs2: string[] = [
  'https://file.hstatic.net/200000722513/file/layout_pc_thang_4-01_e70ec813060a45bea4d727cbd697ea2b.png',
  'https://file.hstatic.net/200000722513/file/loa_hay_0504e9a89e22414a97db4962ebb0c03c.png',
  'https://file.hstatic.net/200000722513/file/layout_van_phong_thang_4-05_8c3fddea7ee14f1f8b1093ffe4af0c9e.png',
  'https://file.hstatic.net/200000722513/file/layout_laptop_gaming_thang_4-04_ceeea2813177449fa54c3f6f058c38b4.png',
  'https://file.hstatic.net/200000722513/file/layout_pc_gaming_i5_thang_4-03_0d6f709b433848118abd6f328e70b687.png'
]
const banner1Imgs: string[] = [
  ''
]

const abx = [
  {
    name: 'Sản phẩm khuyến mãi',
    path: '&promotion=true'
  },
  {
    name: 'Sản phẩm bán chạy',
    path: ''
  }, 
  {
    name: 'Áo',
    path: '&categoryId=66043feb43b7b1d248cc2817'
  }, {
    name: 'Phụ kiện',
    path: '&categoryId=66043feb43b7b1d248cc2819'
  }
]

// const css = {
//   background:
// }

export default function Home() {
  // const [hidden, setHidden] = useState<boolean>(false);
  // const [selectNavLink, setSelectNavLink] = useState<number | null>(null);

  return <>
    <div className="bg-body">
      <div className="w-content mx-auto my-0 px-[10px]">
        <div className="w-full h-full py-[17px] flex relative">
          <div className="w-[216px] h-[496px] bg-secondary rounded-sm mr-2">
            <div className="w-full h-full">
              <ul>
                {navLinks.map((item, index: number) => (
                  <li key={index} className="menu-link ">
                    <Link href="#" className={`px-4 py-[2px] w-full h-full flex items-center relative`} >
                      <div className="flex items-center mr-2 h-full w-[25px]">
                        {item.icon}
                      </div>
                      <span className="text-[13px]">{item.title}</span>
                      <span className="absolute right-0 w-7 h-7 flex items-center justify-center">
                        <ChevronRightIcon size={20} />
                      </span>
                    </Link>
                    <div className="menu-link-content">
                      <div className="w-[976px] h-full bg-secondary text-primary ml-2 p-[10px] flex flex-wrap">
                        {item?.content?.map((item: any, index: number) => (
                          <div key={index} className="px-[5px] w-1/5 h-auto pt-[5px] pb-[16px]">
                            <a href="#" className="text-[#E30019] font-semibold mb-2 block text-[15px]">{item.name}</a>
                            {item.values.map((item:any, index:number) => (
                              <a key={index} href="#" className="mt-2 block text-[13px] text-primary">{item}</a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[976px] grid grid-cols-3 grid-rows-3 gap-2">
            <div className="bg-secondary row-span-2 col-span-2 ">
              <img className="w-full h-full object-cover" src="https://file.hstatic.net/200000722513/file/pc-slider_b09b86cba7914c59affaaa41df4d38ec.png" alt="" />
            </div>
            {bannerImgs2.map((item, index: number) => (
              <div key={index} className="bg-secondary">
                <img className="w-full h-full object-cover" src={item} alt="" />
              </div>
            ))}

          </div>
          
        </div>
      </div>
      {abx.map((item: any, index: number) => (
        <Section key={index} {...item}/>
      ))}
      {/* <Section/>
      <SectionBanner/>
      <Section/>
      <Section/>
      <Sectiontegory/>
      <SectionPagelist/>
      <SectionBlogsList/> */}
    </div>
  </>
  
}
