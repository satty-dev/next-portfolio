import BlogList from "@/components/BlogList";
import Loading from "@/app/loading";

export default async function BlogPage() {
  return (
    <div className="container mx-auto py-[50px]">
      <h2 className="text-[50px] font-bold mb-5">Blog</h2>
      <BlogList waitTime={3000} />
    </div>
  );
}
