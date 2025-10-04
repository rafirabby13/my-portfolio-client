"use client"
import CreateBlog from "@/components/blog-admin/CreateBlog";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Post } from "@/types/blogs";
import { Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdatePost from "./UpdatePost";

type BlogTableProps = {
    posts: Post[];// callback to delete a post by id
};
const BlogTable: React.FC<BlogTableProps> = ({ posts }) => {
    const router = useRouter();
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const handleDeletePOst = async (id: number) => {
   

        try {
            setLoadingId(id);

            Swal.fire({
                title: "Are you sure?",
                text: "Post willl be deleted",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // redirects to home after logout
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const data = await res.json();

                    if (!res.ok || !data.success) {
                        throw new Error(data.message || "Failed to delete post");
                    }
                    router.refresh();
                    Swal.fire({
                        title: "Deleted!",
                        text: "You have been successfully Deleted the post.",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    })
                }
            })



            // Refresh page to fetch latest posts

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            alert(error.message || "Failed to delete post");
        } finally {
            setLoadingId(null);
        }
    };
    return (
        <div className="w-full max-w-7xl mx-auto px-5 space-y-5">
            <div className="flex justify-between items-center py-10">
                <h1 className="font-bold text-2xl underline">Manage Blogs..</h1>
                <CreateBlog />

            </div>
            <div className="border border-muted rounded-lg">
                <Table className="px-10 ">
                    <TableHeader >
                        <TableRow >
                            <TableHead>#</TableHead>
                            <TableHead>Blog Id</TableHead>
                            <TableHead>BlogType</TableHead>
                            <TableHead>Blog Title</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>ReadTime</TableHead>
                            <TableHead>Update</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {
                            posts?.map((Blog: Post, i: number) => (
                                <TableRow key={i}>
                                    <TableCell className="border-2  ">{i + 1}</TableCell>
                                    {/* <TableCell className="border-2  bg-blue-50">{i + 1 + ((page - 1) * 10)}</TableCell> */}
                                    <TableCell className="border-2  ">{Blog.id}</TableCell>
                                    <TableCell className="border-2  ">{Blog.category}</TableCell>
                                    <TableCell className="border-2  ">{Blog.title}</TableCell>
                                    <TableCell className="border-2  ">{Blog.tags}</TableCell>
                                    <TableCell className="border-2  ">{Blog.readTime}</TableCell>
                                    <TableCell className="border-2  " ><UpdatePost blog={Blog}/></TableCell>
                                    <TableCell className="border-2  " onClick={() => handleDeletePOst(Blog.id)}><Trash2 /></TableCell>




                                </TableRow>)
                            )
                        }
                    </TableBody>
                </Table>
            </div>
            {/* <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            // href="#"
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        />
                    </PaginationItem>

                    {[...Array(Blog?.data?.meta?.totalPage)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                // href="#"
                                isActive={page === i + 1}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            // href="#"
                            onClick={() => setPage((prev) => Math.min(prev + 1, Blog?.data?.meta?.totalPage))}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination> */}

        </div>
    )
}

export default BlogTable
