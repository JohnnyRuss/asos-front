import { Container } from "components/Layouts";

export default function NewHere() {
  return (
    <div className="bg-app-black text-app-white">
      <Container>
        <div className="relative flex items-center justify-between h-12">
          <button className="border border-app-white w-28">WOMEN</button>

          <p className="flex flex-col items-center">
            <span className="font-bold">
              NEW HERE ? Get 15% off 100,000+ styles!*
            </span>
            <span className="text-app-sm font-bold">With code : HELLOASOS</span>
          </p>

          <button className="border border-app-white w-28">MEN</button>

          {false && (
            <blockquote className="absolute top-[100%] w-[760px] z-[2] left-1/2 -translate-x-1/2 translate-y-3 py-2 px-3 after:content-[''] after:absolute after:w-4 after:h-4 after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:z-[-1] after:bg-inherit text-center bg-app-gray-shade text-app-black rounded-md text-app-sm">
              *Enter code HELLOASOS at checkout to receive discount on first
              order only over €30. Ends 09:00 UTC+2 28.08.2023. Code can be used
              on first order only up to a maximum pre-discount spend of €690.
              Country exclusions apply. Can’t be used with other promo codes or
              on gift vouchers, delivery charges, Premier Delivery or ASOS
              Marketplace. Selected marked products excluded from promo.
            </blockquote>
          )}
        </div>
      </Container>
    </div>
  );
}
