
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VolaMirror</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              We're on a mission to help organizations navigate complexity and achieve their full potential.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2018, VolaMirror began with a simple idea: to bridge the gap between business challenges and technological solutions. Our founders recognized that many organizations struggled to keep pace with rapid technological change while maintaining operational excellence.
                </p>
                <p className="text-lg text-gray-600">
                  What started as a small consultancy has grown into a comprehensive solutions provider, helping clients across industries transform their operations, enhance their capabilities, and achieve sustainable growth.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-64 w-full rounded-md flex items-center justify-center text-white text-xl font-semibold">
                  Since 2018
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality in everything we do, from client interactions to solution delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new ideas and technologies to develop forward-thinking solutions that address evolving challenges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We build trust through honesty, transparency, and ethical business practices in all our relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals guiding our organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-500 text-lg">JD</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-500 text-lg">JS</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-gray-600">Chief Technology Officer</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-500 text-lg">AR</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Alice Roberts</h3>
                <p className="text-gray-600">Chief Strategy Officer</p>
              </div>
            </div>
          </div>
        </div>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
