import React from "react";

export default function CardComponent() {
    const posts = [
        {
            title: "Wedding Photography",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: ""
        },
        {
            title: "Add Film Making",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Marketing",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Sponsorship",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <> 
           <div className="flex flex-col px-12 rounded-br-[360px]  bg-blue-200 bg-gradient-to-b to-blue-500 from-white  ">
              <div className=" flex justify-center py-10">
                   <h1 className="text-6xl">g533</h1>
               </div>
            <div className="grid gap-y-12  pb-12  justify-items-center grid-cols-1 md:grid-cols-3">
                {posts.map((items, key) => (
                    <div className="flex flex-col gap-2 card w-96 pl-2 border-0 border-t-2 border-l-8 border-blue-600 p-1  rounded-xl bg-base-100 drop-shadow-xl " key={key}>
                        <figure>                               
                        <img
                            className="object-cover w-full h-48 border-blue-200 border-2 rounded-lg"
                            src={items.img}
                            alt="image"
                        />
                        </figure>
                        <div className="bg-blue-500 border-blue-200  border-2 rounded-xl shadow-lg flex justify-center items-center card-body pb-2 h-16 hover:scale-105">
                            <h4 className="card-title text-3xl">      
                                {items.title}
                            </h4>


                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}