"use client";

import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import NoDataFound from "@/components/NoDataFound";
import { ArrowRight, CalendarDays, Clock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ROUTE_PATH } from "@/config/api-routes.config";
import { useFetch } from "@/hooks/useQuery";
import { QUERY_KEYS } from "@/config/query.const";
import AOS from "aos";
import "aos/dist/aos.css";
import { parseTags } from "@/lib/utils";

/* -------------------- Types -------------------- */
interface Blog {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  createdAt: string;
  slug: string;
  read_time: string;
  tags: string[];
}

interface BlogApiResponse {
  data: Blog[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}

const LIMIT = 12;

export default function BlogsPage() {
  const router = useRouter();
  const title = "Blogs & News";
  const description =
    "Discover tips, product updates, and stories on how SplitPay helps groups manage expenses effortlessly — from trips and dinners to shared bills and more.";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Use React Query to fetch blogs for the current page
  const { data, isLoading, isError } = useFetch<BlogApiResponse>(
    [QUERY_KEYS.GET_ALL_BLOGS, page],
    `${ROUTE_PATH.BLOGS.GET_ALL}?limit=${LIMIT}&page=${page}`
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Accumulate blogs as pages load
  useEffect(() => {
    if (data) {
      setBlogs((prev) => (page === 1 ? data.data : [...prev, ...data.data]));

      const total = data?.pagination?.total || 0;
      setHasMore(blogs.length + data.data.length < total);
    }
  }, [data, page]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const renderBlogCard = (blog: Blog) => {
    const tags = parseTags(blog.tags);

    return (
      <div
        key={blog._id}
        className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/40 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer h-full"
        data-aos="fade-up"
        data-aos-delay="100"
        onClick={() => router.push(`/blogs/${blog.slug}`)}
      >
        {/* Cover Image */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <img
            src={blog.cover_image}
            alt={`blog-${blog._id}`}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="p-8 flex flex-col flex-1 justify-between">
          <div>
            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-3">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5">
              {blog.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center text-gray-500 text-xs gap-3 mb-4">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blog.read_time || "5 min read"}</span>
              </div>
            </div>

            {/* Tags (fixed height for visual alignment) */}
            <div className="flex flex-wrap gap-2 mb-4 min-h-[56px] items-start">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100/80 text-gray-600 text-xs font-medium px-2 py-1 rounded-xl border border-gray-200/50"
                >
                  {tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span className="text-xs text-gray-500 font-medium px-2 py-1 rounded-xl border border-transparent">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              Read Full Article
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const getGridClass = () => {
    if (blogs.length === 1) return "flex justify-center";
    if (blogs.length === 2)
      return "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-3xl mx-auto";
    return "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <>
      <Banner title={title} description={description} />
      <section className="mx-auto px-4 py-16 lg:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading && blogs.length === 0 ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-10 h-10 animate-spin text-[#3B64D3]" />
            </div>
          ) : (
            <></>
          )}

          {isError && blogs.length === 0 && (
            <p className="text-center text-red-500">Failed to load blogs.</p>
          )}

          {!isLoading && !isError && blogs.length === 0 && (
            <NoDataFound
              message="Stay Tuned! Blogs Coming Soon."
              secondaryMessage="Currently, there are no blogs to display. Check back soon to explore our latest content here!"
            />
          )}

          {blogs.length > 0 && (
            <>
              <div className={getGridClass()}>{blogs.map(renderBlogCard)}</div>
              {hasMore && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="bg-[#d6e7ff] text-[#2147A8] hover:bg-[#c4dcff] border border-[#aacbff] font-medium"
                  >
                    {isLoading && (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    )}
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
