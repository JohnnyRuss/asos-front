import React from "react";

import { Container } from "components/Layouts";
import { FooterT } from "interface/store/app/footer";

interface AboutAsosType {
  main: FooterT["main"];
}

const AboutAsos: React.FC<AboutAsosType> = ({ main }) => {
  return (
    <div className="bg-app-gray-tint py-8">
      <Container>
        <div className="flex justify-between gap-4">
          {main.map((list) => (
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
  );
};

export default AboutAsos;
