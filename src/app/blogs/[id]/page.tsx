"use client";
import Image from "next/image";
import blogs from "@/app/blogs/data";
import { useEffect, useState } from "react";
import { after } from "node:test";
const Page = () => {

  const [id, setId] = useState(0); 
  useEffect(() => {
    const currentUrl = window.location.href; 
    const url = new URL(currentUrl); 
    const segments = url.pathname.split("/"); 
    const lastSegment = segments[segments.length - 1]; 
    const idNumber = Number(lastSegment); 
    setId(idNumber); 
    console.log(idNumber); 
  }, []); 

  
  return (
    <main>
      <div className="mt-[7vw] ">
        <div className="sec1  mx-auto">
        <div className="heading mb-4  flex justify-center text-5xl font-[200] tracking-tighter leading-non"><h1 className="">{blogs[id].blogTitle}</h1></div>
          <div className="imgSec h-[24vw] w-6/12 mx-auto bg-red-500/40 relative">
          <Image
          src={blogs[id].blogImage}
          alt=""
          layout="fill"
          objectFit="cover"
          ></Image>
          </div>
        </div>
        <div className="sec2 mx-auto relative w-8/12 mb-4">
        <div className=""><h1 className="text-3xl ">
          Article</h1>
          </div>
          <div className="h-[1px] w-[12vw] my-4 bg-slate-300"></div>
        <article className="text-sm">{blogs[id].article}</article>
        </div>
      </div>
    </main>
  )
}

export default Page