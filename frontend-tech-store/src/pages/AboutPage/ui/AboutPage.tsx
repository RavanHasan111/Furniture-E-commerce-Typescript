export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-red-700">About PANTO</h1>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-red-700">PANTO</span> — where comfort meets creativity.  
            We’re a modern furniture brand that blends timeless design, sustainable materials, and 
            craftsmanship to make your home a masterpiece of comfort and style.
          </p>
          <p className="text-lg leading-relaxed">
            Founded in 2015, PANTO started with a small workshop and a dream — to bring warmth and personality
            into every living space. Today, we continue that mission by creating elegant furniture that tells a story
            of passion, precision, and purpose.
          </p>
          <p className="text-lg italic text-gray-600">
            “We don’t just build furniture — we build emotions you can sit on.”
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXSXcXX9N2IEyyrxyOVt2ac3iXKHgSgzzQQ&s"
            alt="PANTO furniture showroom"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-red-100 py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            At PANTO, our mission is to redefine the furniture experience — creating products that not only fill your home,
            but also inspire the way you live.  
            Every piece we design is made with care, quality, and a deep respect for nature and tradition.
          </p>
        </div>
      </section>
    </div>
  );
}
