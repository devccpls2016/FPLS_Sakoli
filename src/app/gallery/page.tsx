"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const allImages = {
    Activities: [
      { src: '/asset/facility_img/facility1.svg', alt: 'Art Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Music Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Drama Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Science Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Coding Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Debate Activity' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Activity' },
    ],
    Sports: [
      { src: '/asset/facility_img/facility1.svg', alt: 'Football' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Basketball' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Volleyball' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Cricket' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Athletics' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Swimming' },
    ],
    Campus: [
      { src: '/asset/facility_img/facility1.svg', alt: 'Main Building' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Playground' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Garden' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Parking Area' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Cafeteria' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Auditorium' },
    ],
    Libraries: [
      { src: '/asset/facility_img/facility1.svg', alt: 'Main Library' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Digital Library' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Reading Room' },
    ],
    Events: [
      { src: '/asset/facility_img/facility1.svg', alt: 'Annual Day' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Science Fair' },
      { src: '/asset/facility_img/facility1.svg', alt: 'Sports Meet' },
    ],
  };

  const videos = [
    { id: 'qvSxBB_LwyQ', title: 'School Annual Day' },
    { id: 'fI_074wIBkw', title: 'Science Exhibition' },
    { id: 'GKuvwi813LI', title: 'Sports Meet' },
    { id: '1s0KwuU5e4Y', title: 'Cultural Fest' },
    { id: 'kJQP7kiw5Fk', title: 'Music Concert' },
    { id: 'TGpG56pg3UU', title: 'Debate Competition' },
    { id: '2AgmoQy0zTE', title: 'Art Exhibition' },
    { id: 'YAOIbHBEvi0', title: 'Annual Sports' },
    { id: '45PR60pF_6w', title: 'Inter-School Sports' },
    { id: 'X1PguQUsqGQ', title: 'Annual Science Fair' },
    { id: 'X1PguQUsqGQ', title: 'Science Exhibition' },
    { id: 'X1PguQUsqGQ', title: 'Annual Science Fair' },
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const categories = Object.keys(allImages);
  const [selectedCategory, setSelectedCategory] = useState('Activities');

  const displayedImages = showAllImages
            ? allImages[selectedCategory]
            : allImages[selectedCategory].slice(0, 6);
  const displayedVideos = showAllVideos ? videos : videos.slice(0, 6);

  return (
    <main className="w-full h-full bg-white">
      <div className="w-full">

{/* why hero Section */}
                <section className="relative w-full h-[600px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <Image
              src="/asset/Image/hero-bg3.jpg"
              alt="Hero Background"
              fill
              className="object-cover transition-all duration-1000"
              priority
            />

            {/* Overlay Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            flex flex-col items-center justify-center text-center px-4 
                            bg-gray-500/80 h-full w-full rounded-lg">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-2 sm:mb-4 w-full md:w-3/4 lg:w-1/2">
                Explore Our
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-700 mb-4 w-full md:w-3/4 lg:w-1/2">
                Beautiful Campus
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold mb-6 sm:mb-8 max-w-full sm:max-w-xl md:max-w-2xl px-2">
                Take a visual journey through our state-of-the-art facilities, vibrant student life, and inspiring learning environments.
              </p>
            </div>
          </section>

        {/* Image Gallery Section */}
         <section className="py-16 px-4 bg-white">
      <h1 className="text-5xl font-semibold text-purple-700 mb-8 text-center">
        School Image Gallery
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-purple-400 hover:text-white'
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAllImages(false); // reset view more when category changes
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedImages.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-gray-700 text-center">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Less Button */}
      {allImages[selectedCategory].length > 6 && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            {showAllImages ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>

        {/* Video Gallery Section */}
        <section className="py-16 px-4 bg-[#FAF9F6]">
          <h1 className="text-5xl font-semibold text-purple-700 mb-12 text-center">
            School Video Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedVideos.map((vid, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-xl"
                ></iframe>
                <div className="p-4 bg-white">
                  <p className="text-gray-700 text-center">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
              onClick={() => setShowAllVideos(!showAllVideos)}
            >
              {showAllVideos ? "View Less" : "View More"}
            </button>
          </div>
        </section>

        {/* Closing */}
        
      </div>
    </main>
  );
}
