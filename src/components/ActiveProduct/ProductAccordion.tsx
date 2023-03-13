import React, { useState } from "react";
import useAppStore from "../../store/app";
import { GenerateParagraphs } from "../Layouts";
import "./acordion.css";

const ProductAccordion: React.FC = () => {
  const { brand, productDetails, productCode, sizeAndFit, about } = useAppStore(
    (state) => ({
      brand: state.product?.brand,
      productDetails: state.product?.details,
      productCode: state.product?.productCode,
      sizeAndFit: state.product?.sizeAndFit,
      about: state.product?.about,
    })
  );

  const [activeAcordion, setActiveAcordion] = useState<
    "DETAILS" | "BRAND" | "SIZE_&_FIT" | "ABOUT" | undefined
  >(undefined);

  return (
    <div className="w-72">
      <Accordion
        buttonLabel="product details"
        active={activeAcordion === "DETAILS"}
        onClick={() =>
          setActiveAcordion((prev) =>
            prev === "DETAILS" ? undefined : "DETAILS"
          )
        }
      >
        {activeAcordion === "DETAILS" && (
          <div className="tab flex flex-col gap-2 mt-2 text-app-sm">
            {productCode && productDetails && (
              <p>
                <GenerateParagraphs
                  text={productDetails.title}
                  id={productCode.toString()}
                />
              </p>
            )}

            <ul className="list-disc pl-5">
              {productDetails?.list.map((item) => (
                <li className="first-letter:capitalize" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <span>
              <span>Product Code:</span>
              &nbsp;
              <span>{productCode}</span>
            </span>
          </div>
        )}
      </Accordion>

      <Accordion
        buttonLabel="size & fit"
        active={activeAcordion === "SIZE_&_FIT"}
        onClick={() =>
          setActiveAcordion((prev) =>
            prev === "SIZE_&_FIT" ? undefined : "SIZE_&_FIT"
          )
        }
      >
        {activeAcordion === "SIZE_&_FIT" && (
          <div className="tab flex flex-col gap-2 mt-2 text-app-sm">
            <span>
              <span>Model wears:</span>
              &nbsp;
              <span>{sizeAndFit?.modelWears}</span>
            </span>
            <span>
              <span>Model's height:</span>
              &nbsp;
              <span>{sizeAndFit?.modelHeight}</span>
            </span>
          </div>
        )}
      </Accordion>

      {brand && (
        <Accordion
          buttonLabel="brand"
          active={activeAcordion === "BRAND"}
          onClick={() =>
            setActiveAcordion((prev) =>
              prev === "BRAND" ? undefined : "BRAND"
            )
          }
        >
          {activeAcordion === "BRAND" && (
            <div className="tab flex flex-col gap-2 mt-2 text-app-sm">
              <div>
                <GenerateParagraphs text={brand.history} id={brand._id} />
              </div>
            </div>
          )}
        </Accordion>
      )}

      <Accordion
        buttonLabel="about me"
        active={activeAcordion === "ABOUT"}
        onClick={() =>
          setActiveAcordion((prev) => (prev === "ABOUT" ? undefined : "ABOUT"))
        }
      >
        {activeAcordion === "ABOUT" && (
          <div className="tab flex flex-col gap-2 mt-2 text-app-sm">
            <span>
              <span>About product:</span>
              &nbsp;
              <span>{about?.label}</span>
            </span>
            <span>
              <span>Texture:</span>
              &nbsp;
              <span>{about?.texture}</span>
            </span>
          </div>
        )}
      </Accordion>
    </div>
  );
};

export default ProductAccordion;

interface AccordionT {
  buttonLabel: string;
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

function Accordion({ buttonLabel, children, onClick, active }: AccordionT) {
  return (
    <div className="border-y border-y-app-gray-shade p-2">
      <button
        className={`${
          active ? "active" : "inactive"
        } acordion-btn__animated-icon capitalize font-bold w-full text-start`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
      {children}
    </div>
  );
}
