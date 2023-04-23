import { Container } from "components/Layouts";
import "./outlet.css";

export default function Outlet() {
  return (
    <div className="bg-app-cyan">
      <Container>
        <div className="text-center py-10">
          <div className="outlet">
            <span className="outlet-o"></span>
            <span>utlet</span>
          </div>
          <span className="text-app-2xl font-bold uppercase">
            25% off spring styles!
          </span>
          <br />
          <span className="text-app-xl font-bold uppercase">
            up to 70% off already
          </span>
          <br />
          <span className="text-app-lg font-bold">
            Wih code{" "}
            <span className="border-2 border-app-black px-2 py-1">BREEZE</span>
          </span>
          <br />
          <span className="text-app-xsm">
            Outlet items only. See website banner for Ts&Cs. Selected marked
            products excluded from promo.
          </span>
        </div>
      </Container>
    </div>
  );
}
