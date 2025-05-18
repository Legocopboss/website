import React from 'react'
import './linkedin.css'

import { useState, useEffect } from 'react'
import { formatDistanceToNow } from "date-fns";


const LinkedinEmbed = ({ postUrl }) => {
    const [post, setPost] = useState(null);
  const [err, setErr]   = useState(null);

  useEffect(() => {
    fetch(
      `https://cemrww6mu9.execute-api.us-east-2.amazonaws.com/linkedin-scraper?url=` +
      encodeURIComponent(postUrl)
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(setPost)
      .catch((e) => setErr(e.toString()));
  }, [postUrl]);

  if (err)   return <p className="text-red-600 p-4">Error: {err}</p>;
  if (!post) return <p className="p-4 text-gray-600">Loading post…</p>;

  const timeAgo = formatDistanceToNow(new Date(post.date), { addSuffix: true });

    return (
        <section id="linkedin">
            <article className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <header className="flex items-center p-4">
                    {/* Placeholder avatar */}
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                        {post.author?.split(" ").map(n => n[0]).join("") || "U"}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                        <p className="text-xs text-gray-500">{timeAgo}</p>
                    </div>
                </header>

                {/* Body */}
                <div className="px-4 pb-4">
                    <p className="text-sm text-gray-800 whitespace-pre-wrap mb-3">{post.text}</p>

                    {/* Images */}
                    {post.images.length > 0 && (
                    <div
                        className={
                        post.images.length === 1
                            ? "mb-3"
                            : "grid grid-cols-2 gap-2 mb-3"
                        }
                    >
                        {post.images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`LinkedIn post image ${i + 1}`}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                        ))}
                    </div>
                    )}

                    {/* View on LinkedIn */}
                    <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:underline"
                    >
                    View on LinkedIn ↗
                    </a>
                </div>
            </article>
        </section>
    );
}

export default LinkedinEmbed