// app/blogs/[slug]/page.tsx
import { createMetadata } from "@/lib/seo";
import { API_ADMIN, ROUTE_PATH } from "@/config/api-routes.config";
import BlogDetail from "./BlogDetail"; // Your Client Component

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const res = await fetch(`${ROUTE_PATH.BLOGS.GET_SINGLE}/${params.slug}`);
    const { data: blog } = await res.json();
    console.log("blog", blog)

    return createMetadata({
      title: blog.title,
      description: blog.description,
      img: blog.cover_image,
      url: `${ROUTE_PATH.BLOGS.GET_SINGLE}/${params.slug}`,
    });
  } catch (error) {
    return createMetadata({
      title: "Blog Not Found | SplitPay",
      description: "This blog could not be loaded.",
    });
  }
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  return <BlogDetail slug={params.slug} />; // Pass slug as prop
}
