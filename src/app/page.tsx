
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <main className="flex-grow w-full">
      <div className="flex flex-col mt-24 mx-auto w-11/12">
        <div className="font-[Poppins] blogsContainer grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 lg:gap-3 md:gap-2 sm:gap-1 py-6 px-4 h-full gap-2">
          <BlogCard/>
        </div>
      </div>
    </main>
  );
}
