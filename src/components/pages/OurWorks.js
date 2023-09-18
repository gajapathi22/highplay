import React from "react";
import Banner from "../Banner";
import CardComponent from "../Blog";

const OurWorks = () =>{
    return(
        <>
          <div>
            <div className="flex flex-col pt-10 items-center mt-20 ">
              <div className="aspect-square mx-auto  p-10 ">
                  <iframe  className="md:h-[460px] md:w-[1020px] rounded-lg " width="400" height="200" src="https://www.youtube.com/embed/Rqx6TchCGXw?si=Cpw_L-573f-tOyP9"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
              </div>
              <div className="aspect-square mx-auto  p-10 ">
                  <iframe  className="md:h-[460px] md:w-[1020px] rounded-lg " width="400" height="200" src="https://www.youtube.com/embed/9JAVMg0C2m8?si=DrU_IKOlalVLmPuo"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
              </div>
              <div className="aspect-square mx-auto  p-10 ">
                  <iframe  className="md:h-[460px] md:w-[1020px] rounded-lg " width="400" height="200" src="https://www.youtube.com/embed/qnC0Y4s-ZAI?si=qIry5_I2JVP2cCun"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
              </div>
              <div className="aspect-square mx-auto  p-10 ">
                  <iframe  className="md:h-[460px] md:w-[1020px] rounded-lg " width="400" height="200" src="https://www.youtube.com/embed/Tq2Zy4bO5Pk?si=U5WSlqItZ-8z7y5S"
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