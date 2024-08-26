// import React from 'react'
// import Link from 'next/link'
import Image from "next/image";
import "./setyourtoken.css";

const setyourtoken = () => {

   return (
      <>
         <div>
            <h1>hello world</h1>
            <Image className="logo" src="../public/Logo.jpg" alt="Moneta Logo" />
            <Image className="createTop" src="../public/CreateTop.png" alt="Create option" />
         </div>
      </>
   );
}


export default setyourtoken;