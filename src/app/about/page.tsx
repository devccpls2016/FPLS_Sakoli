"use client";
import { Eye, Target, Award, Trophy, Star, Medal, ThumbsUp, Crown } from "lucide-react";
import Image from "next/image";

const directorData = [
  {
    name: "Mrs. Namita Ajay Tumsare",
    role: "Director",
    image: "/asset/Facalty_img/director_img.jpeg",
    description:
      "As the world is changing rapidly, it is our purpose to equip our students with knowledge, skills, and values that will help them grow into confident, compassionate, and responsible global citizens. This journey of growth and learning is possible only through the combined efforts of teachers, parents, and the school community.",
  },
];

const principalData = [
  {
    name: "Mr. Nikeshan Sudamji Deurmalle",
    role: "Principal",
    Designation:"(M A.  B Ed. 20+ Years Experience)",
    image: "/asset/Facalty_img/principal_img.jpeg",
    description:
      "At Future Podar Learn School, Sakoli, we believe that education is not only about academic excellence but also about nurturing young minds to become compassionate, confident, and responsible citizens of tomorrow. Each child is unique, and our endeavor is to provide an environment that encourages curiosity, creativity, and critical thinking.We truly value the partnership between school and home. Your trust, encouragement, and active involvement play a vital role in shaping the learning journey of our students. Together, we can inspire children to set high aspirations and work with dedication to achieve them.",
  },
];

const achievements = [
    { id: 1, icon: <Award className="w-8 h-8" />, text: "98% Board Exam Success Rate" },
    { id: 2, icon: <Trophy className="w-8 h-8" />, text: "National Education Excellence Award" },
    { id: 3, icon: <Star className="w-8 h-8" />, text: "150+ Schools across India" },
    { id: 4, icon: <Medal className="w-8 h-8" />, text: "Winner - Best Private School Chain" },
    { id: 5, icon: <ThumbsUp className="w-8 h-8" />, text: "500,000+ Alumni worldwide" },
    { id: 6, icon: <Crown className="w-8 h-8" />, text: "ISO 9001:2015 Certified" },
  ];
 
export default function About() {
  return (
    <main className="w-full h-full bg-white ">
      <div className="w-full ">
{/* about hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="/asset/Image/hero-bg1.jpg"
            alt="Hero Background"
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
        
          {/* Overlay Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  flex flex-col items-center justify-center text-center px-4 
                  bg-gray-500/80 h-[100%] w-[100%] rounded-lg">
            <h1 className="text-7xl font-bold text-purple-700 mb-4">
              About Us
            </h1>
            <h2 className="text-5xl font-bold text-purple-700 mb-4">Future Podar Learn School</h2>
            <p className="text-2xl text-black font-semibold mb-8 max-w-2xl">
              Nearly a century of educational excellence, shaping millions of lives across India through the quality education and strong values.
            </p>
              
            </div>
        </section>

{/* Our Legacy */}
        <section className="bg-white py-16 px-4"> 
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold text-purple-700 mb-2">
              Our Legacy
            </h1>
            <p className="text-lg text-gray-700 font-medium">
              Discover what makes us one of India&apos;s most trusted educational institution
            </p>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <Image 
          src="/asset/Image/hero-bg3.jpg"
          alt="Our Legacy"
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="text-lg text-gray-900 font-medium mt-4">
          Founded by the visionary philanthropist Seth Anandilal Podar in 2025, Podar Education Network has grown from a single school to one of India&apos;s most respected educational institutions.
        </p>
        <p  className="text-lg text-gray-900 font-medium mt-4">
          Our journey began with a simple yet powerful vision: to provide quality education that nurtures not just academic excellence, but also character, values, and holistic development. Today, we proudly serve over 150,000 students across 150+ schools in India.
        </p>
        </div>
      </div>
        </section>

{/*From the Director’s Desk*/}
      <section className="bg-[#FAF9F6] py-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-semibold text-purple-700 mb-2">
            From the Director’s Desk
          </h2>
        </div>

        {/* Team Cards */}
        <div className="flex flex-col items-center gap-6">
          {directorData.map((person, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col sm:flex-row items-center sm:items-start rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl p-4 sm:p-6 transition hover:shadow-2xl"
            >
              {/* Image */}
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={160}
                  height={200}
                  className="object-cover h-[200px] w-[160px] sm:h-[240px] sm:w-[200px] md:h-[280px] md:w-[240px] rounded-md shadow"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col sm:ml-4 md:ml-6 text-center sm:text-left">
                <h3 className="text-lg sm:text-xs md:text-sm font-bold text-gray-800">
                  {person.description}
                </h3>
                <p className="text-sm sm:text-base text-purple-600 font-semibold mt-4 sm:mb-2">
                  {person.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/*From the Principal’s Desk*/}
      <section className="bg-[#FAF9F6] py-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-700 mb-2">
            From the Principal’s Desk
          </h2>
        </div>

        {/* Team Cards */}
        <div className="flex flex-col items-center gap-6">
          {principalData.map((person, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col sm:flex-row items-center sm:items-start rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl p-4 sm:p-6 transition hover:shadow-2xl"
            >
              {/* Image */}
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={160}
                  height={200}
                  className="object-cover h-[200px] w-[160px] sm:h-[240px] sm:w-[200px] md:h-[280px] md:w-[240px] rounded-md shadow"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col sm:ml-4 md:ml-6 text-center sm:text-left">
                <h3 className="text-lg sm:text-xs md:text-sm font-bold text-gray-800">
                  {person.description}
                </h3>
                <p className="text-sm sm:text-base text-purple-600 font-semibold mt-4 sm:mb-2">
                  {person.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {person.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {person.Designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Vision & Mission Section */}
       <section className="bg-white py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-purple-700 mb-2">
            Our Vision & Mission
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            Guiding principles that define Podar School&apos;s commitment to excellence
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Vision Card */}
          <div className="group bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-4xl font-semibold text-purple-700 mb-4
                              transition-all duration-300
                              group-hover:bg-yellow-100
                              group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.5)]">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl mt-4 font-bold text-gray-800 mb-3">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              To be the best and be recognized as raising the traditional standards of educational possibilities and outcomes for students, parents, and society.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-4xl font-semibold text-purple-700 mb-4
                              transition-all duration-300
                              group-hover:bg-yellow-100
                              group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.5)]">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl mt-4 font-bold text-gray-800 mb-3">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              To develop and equip the children of India for the challenges of the 21st century.
              To provide opportunities for students in a stimulating, safe, and supportive environment to attain personal mastery and team spirit through collaborative learning.
              To create globally competent, ethical, and high-performing world citizens through world-class education.
              To nurture creative, critical, and independent thinkers.
            </p>
          </div>
        </div>
      </section>

{/* Timeline Section */}
   <section className="bg-[#FAF9F6] py-10 px-4">
  <h2 className="text-4xl mb-6 text-center font-semibold text-purple-700">
    Our Journey Through Time
  </h2>
  <p className="text-center text-gray-600 mb-12 text-lg">
    Key milestones in our educational journey spanning nearly a century
  </p>
  
  <div className="max-w-2xl mx-auto">
    <div className="relative">
      {/* Timeline items */}
      {[
        { year: 1927, text: "Seth Anandilal Podar founded the first Podar school." },
        { year: 1950, text: "Expansion to multiple cities across India." },
        { year: 1990, text: "Introduction of modern teaching methodologies." },
        { year: 2010, text: "Digital learning integration across all campuses." },
        { year: 2020, text: "Virtual learning platform launch during pandemic." },
        { year: 2024, text: "Celebrating 97 years of educational excellence." },
      ].map((item, idx) => {
        const isLast = idx === 5;
        return (
          <div key={idx} className="relative flex items-start mb-0">
            {/* Left side - Circle and vertical line */}
            <div className="relative flex flex-col items-center">
              {/* Circle */}
              <div className="w-8 h-8 rounded-full border-4 border-black bg-white z-10"></div>
              
              {/* Vertical line going down */}
              {!isLast && (
                <div className="w-1 h-32 bg-black"></div>
              )}
            </div>
            
            {/* Horizontal line going right */}
            <div className="w-20 h-1 bg-black mt-4"></div>
            
            {/* Content */}
            <div className="ml-4 mt-0">
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-purple-50 hover:border hover:border-purple-200 cursor-pointer">
                <h3 className="text-lg font-bold text-black mb-2 transition-colors duration-300 hover:text-purple-700">{item.year}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


{/* Achievements Section */}
       <section className="bg-white py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-purple-700 mb-2">
            Our Achievements
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            Recognition and milestones that reflect our commitment to educational excellence
          </p>
        </div>

       {/* Achievement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievements.map((achieve) => (
          <div
            key={achieve.id}
            className="group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center
                       transition transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon with glow */}
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4
                         transition-all duration-300
                         group-hover:bg-yellow-100
                         group-hover:shadow-[0_0_20px_5px_rgba(255,255,0,0.6)]"
            >
              {achieve.icon}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm font-medium">{achieve.text}</p>
          </div>
        ))}
      </div>
      </section>

      </div>
    </main>
  )
}