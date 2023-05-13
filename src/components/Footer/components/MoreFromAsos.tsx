import { Container } from "components/Layouts";
import { FooterT } from "interface/store/app/footer";
import React from "react";

interface MoreFromAsosType {
  sub: FooterT["sub"];
}

const MoreFromAsos: React.FC<MoreFromAsosType> = ({ sub }) => {
  return (
    <div className="bg-app-gray-shade">
      <Container>
        <div className="flex items-center justify-between">
          <span>
            &copy;&nbsp;
            <span className="text-app-sm">{new Date().getFullYear()} ASOS</span>
          </span>
          <ul className="flex items-center gap-3 text-app-sm">
            {sub.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default MoreFromAsos;
