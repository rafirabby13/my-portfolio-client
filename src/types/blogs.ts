export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;          // ISO string
  readTime?: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
  published: boolean;
  createdAt: string;     // ISO string
  updatedAt: string;     // ISO string
  authorId: number;
}

export interface PostsResponse {
  posts: Post[];
}