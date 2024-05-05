import React from "react";
import { brandingData } from "./../static/Branding";

const BrandingSection = (props) => {

  return (
      <>
      <div className="branding-section container  border rounded p-2 my-5 d-flex jistify-content-between" style={{backgroundColor: "#002549"}}>
          {brandingData.map((branding) => {
            // console.log(product);
            return (
              <div className="container align-items-center my-4">
                <div className="d-flex align-items-center p-1 m-1">
                <div className="branding-icon">
                  {branding.icon}
                </div>

                <div className="text-light mx-1 ">
                  <h6 className="">{branding.title}</h6>
                  {branding.Description}
                </div>
                </div>
              </div>
            );
          })}
          </div>
      </>
  );
};

export default BrandingSection;
