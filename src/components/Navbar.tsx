import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex w-full h-[6vw] bg-zinc-600 justify-center items-center">
      <h1 className="font-semibold text-[2rem] tracking-wider">
         <Link href={'/'}> INBOX<span className="text-zinc-900" >NOW</span></Link>
          </h1>
    </nav>
  );
};

export default Navbar;
