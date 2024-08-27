import SectionInfoOrderLine from "@/app/(public)/cart/_components/section-info-order-line";

export const info: {
  infoKey: string;
  infoValue: string | number
}[] = [
    {
      infoKey: 'Khách hàng',
      infoValue: 'Khang'
    },
    {
      infoKey: 'Số điện thoại',
      infoValue: '0398271294'
    },
    {
      infoKey: 'Địa chỉ nhận hàng',
      infoValue: '118, Phường 21, Quận Bình Thạnh, Hồ Chí Minh'
    },
    {
      infoKey: 'Tạm tính',
      infoValue: 890000
    },
    {
      infoKey: 'Phí vận chuyển',
      infoValue: 0
    },
    {
      infoKey: 'Tổng tiền',
      infoValue: 19990000
    },
]

export default function SectionInfoOrder() {
  return (
    <section className="p-6">
      <div>
        <div className="mb-2">
          <h2 className="font-semibold text-[24px]">Thông tin đặt hàng</h2>
        </div>
        <div>
          <div>
            {info?.map((item, index) => (
              <SectionInfoOrderLine size="order" key={index} infoKey={item.infoKey} infoValue={item.infoValue}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
