// app/blogs/[slug]/BlogDetail.tsx
"use client";

import { useEffect } from "react";
import { useFetch } from "@/hooks/useQuery";
import { ROUTE_PATH } from "@/config/api-routes.config";
import { QUERY_KEYS } from "@/config/query.const";
import { useRouter } from "next/navigation";
import { parseTags } from "@/lib/utils";
import { ArrowLeft, CalendarDays, Share2 } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  createdAt: string;
  content?: string;
  tags?: string[];
  primary_tag?: string;
}
interface BlogResponse {
  data: Blog;
}

export default function BlogDetail({ slug }: { slug: string }) {
  const router = useRouter();

  const {
    data: response,
    isLoading,
    isError,
  } = useFetch<BlogResponse>(
    [QUERY_KEYS.GET_SINGLE_BLOG, slug],
    `${ROUTE_PATH.BLOGS.GET_SINGLE}/${slug}`
  );

  const blog = response?.data;
  const tags = parseTags(blog?.tags);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Check out this blog!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      {isError && (
        <p className="text-center text-red-500 text-base md:text-lg">
          Failed to load blog.
        </p>
      )}

      {!isLoading && blog && (
        <>
          <div className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <div
                  onClick={() => router.push("/blogs")}
                  className="group inline-flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-2xl border border-gray-300/50 shadow-sm hover:shadow-md mb-12 font-light cursor-pointer"
                >
                  <ArrowLeft size={18} /> Return to Blog Posts
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center px-4">
              {/* Primary Tag */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  {blog?.primary_tag}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-8">
                {blog?.title}
              </h1>

              {/* Description */}
              <p className="text-[18px] lg:text-[23px] text-gray-600 mb-10 max-w-3xl mx-auto font-light !leading-relaxed text-center">
                {blog?.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50">
                  <CalendarDays className="w-4 h-4" />
                  {formatDate(blog?.createdAt)}
                </div>
                <div
                  onClick={handleShare}
                  className="cursor-pointer flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50"
                >
                  <Share2 size={15} />
                  <span className="font-light">Share</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-gray-100/80 text-gray-600 px-3 py-1.5 rounded-xl border border-gray-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Cover Image */}
              <div className="mb-8">
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="w-full h-60 sm:h-72 lg:h-[460px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Blog Content */}
              {blog.content && (
                <div
                  className="blog-content prose max-w-none text-gray-800 prose-sm sm:prose-base lg:prose-lg xl:prose-xl text-left"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
