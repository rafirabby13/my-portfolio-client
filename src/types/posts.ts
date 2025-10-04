import { z } from "zod"

export const postSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional(),

  // ✅ just plain z.date() + refine for custom message
  date: z.date().refine((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "Date is required",
  }),

  readTime: z
    .string()
    .regex(/^\d+\s?(min|mins|minute|minutes)$/i, "Invalid format (e.g., '5 mins')")
    .optional(),

  category: z.string().min(1, "Please select a category"),

  tags: z
    .array(z.string())
    .min(1, "At least one tag is required")
    .max(10, "Maximum 10 tags allowed"),

  image: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),

  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .max(200, "Slug must be less than 200 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),

  published: z.boolean().default(true),
})
