import React from "react";
import useAppStore from "store/appStore";
import { Container } from "components/Layouts";

const Footer: React.FC = () => {
  const footer = useAppStore().footer;
  return (
    <footer>
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

      <div className="bg-app-gray-tint py-8">
        <Container>
          <div className="flex justify-between gap-4">
            {footer.main.map((list) => (
              <div className="flex flex-col gap-2" key={list.listTitle}>
                <h4 className="uppercase font-semibold">{list.listTitle}</h4>
                <ul className="capitalize text-app-sm">
                  {list.list.map((item) => (
                    <li key={`footer-list--${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-app-gray-shade">
        <Container>
          <div className="flex items-center justify-between">
            <span>
              &copy;&nbsp;
              <span className="text-app-sm">
                {new Date().getFullYear()} ASOS
              </span>
            </span>
            <ul className="flex items-center gap-3 text-app-sm">
              {footer.sub.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
