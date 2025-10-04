"use server"
import BlogTable from "@/components/blog-admin/BlogTable";


const BlogAdmin = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/all-posts`, {
    next: { revalidate: 36 }, // refresh every 1 hour
  });
  const { posts } = await res.json();
  console.log("posts............", posts)
  
  return (
    <div>
      <BlogTable  posts={posts} />
    </div>
  )
}

export default BlogAdmin
