
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose VolaMirror</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Team</CardTitle>
                  <CardDescription>
                    Our team brings decades of collective experience across industries and technologies.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Innovative Solutions</CardTitle>
                  <CardDescription>
                    We leverage the latest technologies and methodologies to solve complex problems.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Client-Focused Approach</CardTitle>
                  <CardDescription>
                    We prioritize understanding your unique needs to deliver tailored solutions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
        
        <AboutSection />
        <ServicesSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
