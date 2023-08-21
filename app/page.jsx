import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="hero py-4 h-full flex items-center justify-center">
        <div className="hero-inner flex flex-col items-center justify-center gap-3 md:gap-8">
          <h1 className="text-xl md:text-6xl font-semibold">
            <span className="text-[#FDA402]">কিশলয়</span> চায়ে আপনাকে
            স্বাগতম।
          </h1>
          <p className="text-md md:text-lg">
           এটি একটি চা পাতা বিক্রয় প্লাটফর্ম। এখানে
            কিশলয় টি (চা পাতা) সম্পর্কিত গুনাগুনসহ অনেক ধরনের ব্লগ পাবলিশ হয়। ব্লগ পেজ থেকে বিভিন্ন
            ধরনের ব্লগ পড়ুন ।
          </p>
          <span className="bg-black rounded p-2 px-4 text-white">
            <Link href={"/blogs"}>ব্লগ পড়ুন</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
