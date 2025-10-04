/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, FileTextIcon, Image, ImageIcon, LinkIcon, Loader2, TagIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"
import ImageUpload from "../comp-544"

const postSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(200, "Title must be less than 200 characters"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .optional(),
    date: z.date(),
    readTime: z
        .string()
        .optional(),
    category: z
        .string()
        .min(1, "Please select a category"),
    tags: z
        .array(z.string())
        .min(1, "At least one tag is required"),
    image: z
        .string()
        .refine((val) => val === "" || /^https?:\/\//.test(val), {
            message: "Must be a valid URL starting with http:// or https://",
        })
        .optional(),
    slug: z
        .string()
        .min(3, "Slug must be at least 3 characters")
        .max(200, "Slug must be less than 200 characters")
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),

    authorId: z.number()
})

type PostFormData = z.infer<typeof postSchema>

const categories = [
    "Technology",
    "Business",
    "Lifestyle",
    "Health",
    "Education",
    "Travel",
    "Food",
    "Other"
]


const CreateBlog = () => {

    const [image, setImage] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [tagInput, setTagInput] = useState("")
    const navigate = useRouter()

    const form = useForm<PostFormData>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: "",
            description: "",
            date: new Date(),
            readTime: "",
            category: "",
            tags: [],
            image: "",
            slug: "",
            authorId: 1
        },
    })
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim()
    }

    const handleTitleChange = (value: string) => {
        form.setValue("title", value)
        if (!form.getValues("slug")) {
            form.setValue("slug", generateSlug(value))
        }
    }

    async function onSubmit(values: PostFormData) {
        setLoading(true)

        try {
            const data = {
                title: values.title,
                description: values.description,
                date: values.date,
                readTime: values.readTime,
                category: values.category,
                tags: values.tags,
                image: image,
                slug: values.slug,

                // authorId: 1, // Replace with actual user ID from your auth context
            }

            //   const formData = new FormData()
            //   formData.append('data', JSON.stringify(data))
            //   if (image) {
            //     formData.append('file', image)
            //   }
            console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`)
            // Replace with your actual API call
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            if (!response.ok) {
                throw new Error("Failed to create post")
            }

            const result = await response.json()
            console.log(result)

            if (result?.success) {
                toast.success("Post created successfully")
                navigate.push("/blog-admin")
                form.reset()
                navigate.refresh()
            }

        } catch (error: any) {
            toast.error(error?.message || "Failed to create post")
        } finally {
            setLoading(false)
        }
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FileTextIcon className="mr-2 h-4 w-4" />
                    Create Post
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-fit">
                <div>
                    <Card className="overflow-hidden p-0">
                        <CardContent className="p-6 md:p-8 overflow-y-auto max-h-[70vh]">
                            <div className="flex flex-col gap-6">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-5xl mx-auto space-y-8 p-4" id="create-post-form">

                                        {/* Header */}
                                        <div className="text-center space-y-3 ">
                                            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                                                Create New <span className="text-primary">Post</span>
                                            </h1>
                                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                                Fill out the information below to create your blog post
                                            </p>
                                        </div>

                                        {/* Basic Post Information */}
                                        <Card className="bg-card border shadow-sm">

                                            <CardContent className="space-y-6">
                                                {/* Title */}
                                                <FormField
                                                    control={form.control}
                                                    name="title"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Title</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter post title"
                                                                    className="h-12"
                                                                    {...field}
                                                                    onChange={(e) => handleTitleChange(e.target.value)}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />


                                                {/* Description */}
                                                <FormField
                                                    control={form.control}
                                                    name="description"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Description</FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    placeholder="Write your post content here..."
                                                                    className="min-h-[100px]"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormDescription>
                                                                The main content of your blog post
                                                            </FormDescription>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Category */}
                                                    <FormField
                                                        control={form.control}
                                                        name="category"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Category</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value} >
                                                                    <FormControl>
                                                                        <SelectTrigger className="h-12">
                                                                            <SelectValue placeholder="Select a category" className="w-full" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent >
                                                                        {categories.map((category) => (
                                                                            <SelectItem key={category} value={category}>
                                                                                {category}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    {/* Date */}
                                                    <FormField
                                                        control={form.control}
                                                        name="date"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col">
                                                                <FormLabel>Publish Date</FormLabel>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant="outline"
                                                                                className={cn(
                                                                                    "h-12 pl-3 text-left font-normal",
                                                                                    !field.value && "text-muted-foreground"
                                                                                )}
                                                                            >
                                                                                {field.value ? (
                                                                                    format(field.value, "PPP")
                                                                                ) : (
                                                                                    <span>Pick a date</span>
                                                                                )}
                                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-auto p-0" align="start">
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value}
                                                                            onSelect={field.onChange}
                                                                            disabled={(date) =>
                                                                                date < new Date(new Date().setHours(0, 0, 0, 0))
                                                                            }
                                                                            initialFocus
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Read Time */}
                                                    <FormField
                                                        control={form.control}
                                                        name="readTime"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Read Time</FormLabel>
                                                                <FormControl>
                                                                    <Input type="number" placeholder="e.g., 5 mins" className="h-12" {...field} />
                                                                </FormControl>
                                                                <FormDescription>Estimated reading time</FormDescription>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    {/* Image URL */}
                                                    <FormField
                                                        control={form.control}
                                                        name="image"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex items-center gap-2">
                                                                    <ImageIcon size={16} />
                                                                    Image URL
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="https://example.com/image.jpg" className="h-12" {...field} />
                                                                </FormControl>
                                                                <FormDescription>Featured image URL</FormDescription>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <FormField
                                            control={form.control}
                                            name="tags"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Tags</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Enter tags separated by commas, e.g., react,javascript,webdev"
                                                            className="min-h-[100px]"
                                                            value={field.value.join(", ")} // display as comma-separated string
                                                            onChange={(e) => {
                                                                const raw = e.target.value
                                                                // Split by comma, trim spaces, remove empty strings
                                                                const tagsArray = raw
                                                                    .split(",")
                                                                    .map((t) => t.trim())
                                                                    .filter((t) => t.length > 0)
                                                                field.onChange(tagsArray)
                                                            }}
                                                        // {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        The main tags of your blog post
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />




                                    </form>
                                </Form>

                                <Button
                                    type="submit"
                                    className="w-full h-12"
                                    form="create-post-form"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating Post...
                                        </>
                                    ) : (
                                        "Create Post"
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <DialogFooter className="w-fit ml-auto">
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateBlog
