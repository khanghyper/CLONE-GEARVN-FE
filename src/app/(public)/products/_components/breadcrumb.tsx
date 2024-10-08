import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import Link from "next/link"

export default function BreadcrumbComponent() {
  return (
    <div className="breadcrumb-wrap">
      <div className="container-fluid w-content mx-auto px-[10px]">
        <div className="breadcrumb-list">
          <Breadcrumb className="py-[14px] ">
            <BreadcrumbList>
              <BreadcrumbItem className="text-[16px]">
                <Link href='/' className="inline-flex items-center gap-1 text-[#1982F9]">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25895 13.1594V8.95647H9.73718V13.1594C9.73718 13.6217 10.1285 14 10.6067 14H13.2154C13.6937 14 14.085 13.6217 14.085 13.1594V7.27529H15.5632C15.9632 7.27529 16.1545 6.79616 15.8502 6.54398L8.58067 0.21435C8.25024 -0.07145 7.7459 -0.07145 7.41546 0.21435L0.145957 6.54398C-0.149693 6.79616 0.0329144 7.27529 0.432911 7.27529H1.91116V13.1594C1.91116 13.6217 2.30246 14 2.78072 14H5.38939C5.86765 14 6.25895 13.6217 6.25895 13.1594Z" fill="#1982F9"></path>
                  </svg>
                  Trang chủ
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="text-[16px]">
                <BreadcrumbPage>Tất cả sản phẩm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}
