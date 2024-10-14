const Footer = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
      <div className='flex flex-col text-black bg-zinc-600/70 lg:text-[1.2vw] md:text-[1.5vw] sm:text-[1.8vw] text-[2vw]  border-t-[1px] border-t-slate-700 h-12 px-4 w-full'>
      <p className="max-w-[14.5vw] mx-auto ">Made by Anoosha Malik</p>
      <div className="flex mx-auto gap-2 font-[400]">
        <a href="https://wa.me/+923152471694"><i className="ri-whatsapp-line"></i></a>
        <a href="https://github.com/AnooshaF"><i className="ri-github-line"></i></a>
        <a href="#"><i className="ri-information-line"></i></a>
      </div>
      </div>
    </>
  )
}

export default Footer