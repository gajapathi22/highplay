import React from "react";
import Banner from "../Banner";
import CardComponent from "../Blog";
import Contacts from "../Contacts";
import Form from "../Form";

const Home = () =>{
    return(
        <>
          
          <Banner />
          <CardComponent/> 
          <Form/>
          <Contacts/>
          
        </>
    );
}

export default Home;