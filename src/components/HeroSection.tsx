
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovative Solutions for Modern Challenges
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              We help businesses transform their operations through cutting-edge technology and expert consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="h-64 w-full rounded-md bg-gradient-to-br from-blue-400/20 to-indigo-500/20 flex items-center justify-center">
                  <span className="text-2xl font-semibold">VolaMirror</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
