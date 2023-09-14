import React from "react";
import Banner from "../Banner";
import CardComponent from "../Blog";

const OurWorks = () =>{
    return(
        <>
          <div>
            <div className="flex flex-col items-center mt-20 ">
              <div className="aspect-square mx-auto pt-20 p-10 ">
                  <iframe  className="rounded-lg " width="420" height="220" src="https://www.youtube.com/embed/Rqx6TchCGXw?si=Cpw_L-573f-tOyP9"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
              </div>

            </div>
          </div>
        </>
    );
}

export default OurWorks;