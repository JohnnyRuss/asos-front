import React from "react";
import { Container } from "components/Layouts";

const HelpAndInformation: React.FC = () => {
  return (
    <div className="border-t border-app-gray-shade">
      <Container>
        <div className="flex items-center justify-center gap-4 py-2">
          <ul className="flex items-center gap-3">
            {[
              { src: "/assets/icons/facebook.svg", alt: "facebook" },
              { src: "/assets/icons/instagram.svg", alt: "instagram" },
              { src: "/assets/icons/snapchat.svg", alt: "snapchat" },
            ].map((item) => (
              <li key={`footer-list--item__${item.alt}`}>
                <figure className="w-[38px]">
                  <img src={item.src} alt={item.alt} />
                </figure>
              </li>
            ))}
          </ul>
          <hr className="bg-app-gray-shade w-[1px] h-9" />
          <ul className="flex items-center gap-3">
            {[
              { src: "/assets/icons/visa.svg", alt: "visa" },
              { src: "/assets/icons/mastercard.svg", alt: "mastercard" },
              { src: "/assets/icons/paypal.svg", alt: "paypal" },
            ].map((item) => (
              <li key={`footer-list--item__${item.alt}`}>
                <figure className="w-[38px]">
                  <img src={item.src} alt={item.alt} />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HelpAndInformation;
