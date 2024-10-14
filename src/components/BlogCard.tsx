import Image from "next/image";
import Link from "next/link";
import blogs from "@/app/blogs/data";

const BlogCard = () => {
  return (
    <>
      {blogs.map((blog, index) => (
        <Link
          className="hover:-translate-y-2 transition-all"
          href={`/blogs/${index}`}
          key={index}
        >
          <div
            key={index}
            className="blog bg-zinc-700 overflow-hidden lg:w-[17vw] lg:h-[20vw] md:h-[14vw] md:w-[18vw] sm:h-[22vw] sm:w-[17vw] py-1 px-1 rounded-md shadow h-[26vw] w-[26vw]"
          >
            <div className="blogPic relative overflow-hidden mt-3 mx-auto rounded-lg lg:h-[10vw] lg:w-9/12 md:h-[8vw] sm:h-[6vw] h-[8vw]">
              <Image
                src={blog.blogImage}
                alt="image of the blog post"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="info py-1 px-2">
              <h3 className="font-[400] tracking-tighter text-base sm:text-lg md:text-xl leading-none">
                {blog.blogTitle}
              </h3>
              <div className="blogDesc max-h-[4.3vw] overflow-hidden">
                <p className="text-xs tracking-tighter leading-none">
                  {blog.article.slice(0, 126)}...
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogCard;
