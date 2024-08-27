'use client'

import navLinks from "@/app/(public)/_components/nav-links";
import { bannerImgs2 } from "@/app/(public)/page";
import { ChevronRightIcon, Link } from "lucide-react";

export default function Sidebar() {
  return (
    <>
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
    </>
  )
}
