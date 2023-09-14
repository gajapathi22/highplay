import React from "react";


const Contacts =()=>{
    return(
        <>
           <div className= " grid grid-col sm:flex flex-row gap-12 bg-gray-300 p-10 h-120">
             <div className="basis-1/3 bg-indigo-300 p-10">
                <div>Address</div>
                
             </div>
             <div className="basis-1/3 bg-indigo-300 p-10">
                 <div>Lets Talk</div>
             </div>
             <div className="basis-1/3 bg-indigo-300 p-10">
                <div>Follow us</div>
             </div>

           </div>
        </>
    );
}

export default Contacts