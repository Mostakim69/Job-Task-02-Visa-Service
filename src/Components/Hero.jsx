import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[500px] flex items-center" style={{ backgroundImage: "url('https://wallpapercat.com/w/full/2/a/2/1252422-1920x1080-desktop-1080p-visa-card-background-photo.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Your Journey Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            Effortless visa applications with step-by-step guidance. Apply today and travel the world with confidence.
          </p>
          <a
            href="#apply-now"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Start Your Application
          </a>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://schengenvisainfo.com/news/wp-content/uploads/2023/07/Online-Visa-application-form-on-screen.-Country-Visit-permit..jpg"
            alt="Visa Application Process"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;