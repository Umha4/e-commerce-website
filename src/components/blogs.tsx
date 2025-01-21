"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

interface Post {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  comments: number;
}

// ✅ Corrected GROQ Query
const postsQuery = `*[_type == "post"] | order(date desc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  date,
  comments
}`;

export default function BlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(postsQuery);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center">Loading posts...</p>;

  return (
    <section className="py-12 px-6 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-600 font-semibold uppercase">Practice Advice</p>
        <h2 className="text-3xl font-bold text-gray-800">Featured Posts</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Google</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Trending</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">New</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MdDateRange />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <FaCommentDots />
                  {post.comments} Comments
                </div>
              </div>

              <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
