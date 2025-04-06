
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-64 w-full rounded-md flex items-center justify-center text-white text-xl font-semibold">
                Our Vision
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About VolaMirror
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to transform how businesses operate, VolaMirror brings together expertise in technology, strategy, and innovation to help organizations thrive in an ever-changing landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is dedicated to delivering solutions that drive meaningful results and long-term success for our clients.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
