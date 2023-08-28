import React from "react";
import Banner from "../Banner";
import handshake from '../../assets/images/handshake-5.png'

const About = () =>{
    return(
        <>
          <div className="mt-20 ">
              <div className="flex flex-row  p-20 bg-slate-300">
                  <div className="basis-1/2 ">
                     <div>
                        <h1 className="text-4xl font-bold ">Welcome to Humopedia</h1>
                     </div>
                     <div>
                         <h1 className="text-2xl">Welcome to Humopedia, a groundbreaking platform that redefines the art of sharing personal narratives through the prism of human experiences presented as books. Our platform provides a distinctive approach to engaging with diverse stories, fostering empathy, and transcending cultural boundaries.</h1>
                     </div>
                  </div>

                  <div>
                    <h1>image</h1>
                  </div>

           
              </div>
              <diV className="flex flex-row p-20 bg-slate-400">
                  <div className="basis-1/2">
                    <h1>image</h1>
                  </div>
                  <div className="basis-1/2 ">
                     <div>
                        <h1 className="text-4xl font-bold ">Our Mission</h1>
                     </div>
                     <div>
                         <h1 className="text-2xl">At Humopedia, our mission is to create an innovative digital space where the intricate tapestries of individual lives are woven together, creating a mosaic of shared wisdom and insight. We are dedicated to fostering understanding, promoting cross-cultural interactions, and enriching the lives of both storytellers and readers.</h1>
                     </div>
                  </div>
                  
              </diV>
              <diV className="flex flex-row p-10 bg-slate-300 ">
                  <div className="flex justify-center items-center  basis-1/2">
                     <h1 className="text-4xl font-bold ">Vision and Values</h1>
                  </div>
                  <div className="p-10">
                      <div>
                        <h1 className="text-xl font-semibold">Our vision is centered around the belief that every individual possesses a story worth telling and a perspective worth exploring. We are committed to the values that drive our community:</h1>
                      </div>
                      <div className="p-5">
                         <ul className="list-disc text-lg">
                            <li>Empathy: We champion the empathetic exchange of stories to bridge gaps and nurture deeper connections.</li>
                            <li>Diversity: Our platform is a testament to the beauty of diversity, as we bring together a myriad of voices, experiences, and backgrounds.</li>
                            <li>Respect: Respect forms the cornerstone of our interactions, as we honor the uniqueness of each story and the courage of those who share them.</li>
                            <li>Learning: Humopedia serves as an invaluable resource for lifelong learning, offering insights that extend beyond conventional boundaries.</li>
                            <li>Connection: Our platform cultivates genuine connections, transcending geographical and cultural constraints to foster a global community.</li>
                         </ul>
                      </div>
                  </div>
                  
              </diV>
              <diV className="p-10 bg-slate-400">
                <div className="flex flex-col gap-4">
                    <diV className=" flex justify-center">
                      <h1 className="text-4xl font-bold">Exploring Humopedia</h1>
                    </diV>
                    <div className="flex justify-center">
                      <h1 className="text-2xl font-semibold">Our platform invites you to embark on an enriching journey of discovery and connection:</h1>
                    </div>
                    <div className="flex justify-center ">
                      <ul className=" flex flex-col gap-2 list-disc text-xl">
                        <li>Becoming a Human Book: Share your personal narrative, allowing readers to immerse themselves in your experiences and learn from your journey.</li>
                        <li>Engaging as a Reader: Immerse yourself in the stories of others, expand your horizons, and engage in meaningful conversations.</li>
                        <li>Cultivating Understanding: Humopedia is a catalyst for dialogue and understanding, sparking conversations that drive positive change.</li>
                      </ul>
                    </div>
                </div>

                  
              </diV>
              <div className="flex flex-row bg-slate-300">
              
                  <div className=" basis-2/3 py-20 p-10 flex flex-row">
                    <div className=" flex flex-col gap-4">
                        <div className="">
                          <h1 className="text-4xl font-bold">Join us</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl">Whether you're seeking to contribute your own narrative or eager to explore the intricate narratives of others, we extend a warm invitation to become a part of the Humopedia community. Elevate your engagement with diverse perspectives, foster a deeper appreciation for the human experience, and be a catalyst for global connection.</h1>
                        </div>
                    </div>
                  </div>         
                
                <div className="drop-shawdow-lg basis-1/3  ">
                      <img  className=" pt-10 pr-10 " src={handshake}/>
                    
                </div> 
              </div>
          </div>

        </>
    );
}

export default About;