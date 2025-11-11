import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="relative h-[60vh] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-center p-6">
        <img 
          src="https://picsum.photos/seed/atelier/1600/800"
          alt="Our Atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <div className="relative z-10">
          <h1 className="text-6xl lg:text-8xl font-serif text-black dark:text-white">
            Our Story
          </h1>
          <p className="text-lg font-sans text-gray-700 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            Founded on the principles of modern minimalism and uncompromising quality.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-gray-700 dark:text-gray-300 font-sans space-y-6">
          <p className="text-xl leading-relaxed">
            LUXE was born from a desire to redefine modern luxury. We believe in a more intentional form of expression—one that values craft, fabric, and silhouette above all else. Our philosophy is rooted in subtraction, editing designs to their purest, most essential form.
          </p>
          
          <h2 className="font-serif pt-10 text-4xl dark:text-white">The New Luxury</h2>
          <p>
            We reject the noise of fleeting trends, focusing instead on creating a permanent collection of timeless archetypes. Each garment is a quiet statement piece, designed to integrate seamlessly into your life and last for seasons to come. Our aesthetic is a careful balance of masculine and feminine, of structure and fluidity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
            <img 
              src="https://picsum.photos/seed/fabric/600/700"
              alt="Fabric Detail" 
              className="w-full h-full object-cover"
            />
            <img 
              src="https://picsum.photos/seed/sketch/600/700" 
              alt="Design Sketch" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="font-serif pt-10 text-4xl dark:text-white">Sustainability Statement</h2>
          <p>
            True luxury is sustainable. We partner with family-owned mills in Italy and Japan, sourcing only the most ethical and premium materials. Our collections are produced in limited quantities to avoid overproduction, and we are committed to carbon-neutral shipping and fully recyclable packaging. We are not perfect, but we are dedicated to constant improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
