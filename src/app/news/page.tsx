"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const latestNews = [
  { id: 1, image: "/asset/news/img-1.jpeg", desc: "Tanha Pola Celebration at Future Podar Learn School\nChildren dressed as farmers and brought decorated toy bulls to celebrate Tanha Pola, honoring farmers and agricultural traditions through cultural activities." },
  { id: 2, image: "/asset/news/img-2.jpeg", desc: "Annual sports day celebrates student achievements" },
  { id: 3, image: "/asset/news/img-3.jpeg", desc: "New science lab inaugurated with modern equipment" },
  { id: 4, image: "/asset/news/img-4.jpeg", desc: "School hosts interscholastic debate competition successfully" },
  { id: 5, image: "/asset/news/img-5.jpeg", desc: "School visit from education board representatives" },
  { id: 6, image: "/asset/news/img-6.jpeg", desc: "Students participate in national coding challenge" },
  { id: 7, image: "/asset/news/img-7.jpeg", desc: "Community outreach program helps local families" },
  { id: 8, image: "/asset/news/img-8.jpeg", desc: "Inter-school music festival showcases talent" },
  { id: 9, image: "/asset/news/img-9.jpeg", desc: "Alumni meet celebrates decades of success" },
  { id: 10, image: "/asset/news/img-10.jpeg", desc: "Teachers attend professional development workshop" },
  { id: 11, image: "/asset/news/img-11.jpeg", desc: "New library resources added for students" },
];

export default function NewsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-semibold text-purple-700 mb-2">Latest News</h1>
        <p className="text-lg text-gray-700">All news and event highlights</p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((n) => (
            <article key={n.id} className="bg-[#FAF9F6] rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-72 bg-gray-200 flex items-center justify-center p-3">
                <img
                  src={n.image}
                  alt={`news-${n.id}`}
                  className="max-w-full max-h-full object-contain cursor-pointer"
                  onClick={() => openLightbox(n.image)}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-semibold mb-2 text-lg">{n.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">Back Home</button>
          </Link>
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              aria-label="Close image"
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              ✕
            </button>
            <img src={lightboxImage} alt="Enlarged news" className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded" />
          </div>
        </div>
      )}
    </main>
  );
}
