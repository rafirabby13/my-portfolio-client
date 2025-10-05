import BlogCards from "@/components/blog/BlogCards";

const Blog = async () => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/all-posts`, {
        next: { revalidate: 3600 }, // refresh every 1 hour
    });
    const  {posts}  = await res.json();
    console.log("posts............",posts)
    return (
        <div>
            <BlogCards posts={posts}/>
        </div>
    )
}

export default Blog
