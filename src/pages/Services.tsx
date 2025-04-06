
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const serviceCategories = [
    {
      title: "Strategic Consulting",
      description: "We help organizations define their vision and develop actionable roadmaps to achieve their goals.",
      services: [
        {
          name: "Business Strategy",
          description: "Develop comprehensive strategies aligned with your organizational objectives and market dynamics."
        },
        {
          name: "Digital Transformation",
          description: "Navigate the complex journey of digital adoption and business process modernization."
        },
        {
          name: "Operational Excellence",
          description: "Optimize your operations to improve efficiency, reduce costs, and enhance quality."
        }
      ]
    },
    {
      title: "Technology Solutions",
      description: "We design and implement cutting-edge technology solutions tailored to your specific needs.",
      services: [
        {
          name: "Custom Software Development",
          description: "Build bespoke applications that address your unique business challenges."
        },
        {
          name: "Systems Integration",
          description: "Connect disparate systems to create a cohesive and efficient technology ecosystem."
        },
        {
          name: "Cloud Migration & Optimization",
          description: "Leverage cloud technologies to enhance scalability, security, and cost-effectiveness."
        }
      ]
    },
    {
      title: "Data & Analytics",
      description: "We help you harness the power of your data to drive insights and informed decision-making.",
      services: [
        {
          name: "Data Strategy",
          description: "Develop a comprehensive approach to data management, governance, and utilization."
        },
        {
          name: "Business Intelligence",
          description: "Transform raw data into actionable insights through advanced analytics and visualization."
        },
        {
          name: "Predictive Analytics",
          description: "Leverage machine learning and statistical models to forecast trends and outcomes."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Comprehensive solutions designed to address your most pressing challenges and unlock new opportunities.
            </p>
          </div>
        </div>
        
        {/* Services Overview */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our services are designed to address the full spectrum of challenges facing modern organizations.
              </p>
            </div>
            
            <div className="space-y-16">
              {serviceCategories.map((category, idx) => (
                <div key={idx}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-lg text-gray-600 max-w-3xl">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIdx) => (
                      <Card key={serviceIdx}>
                        <CardHeader>
                          <CardTitle>{service.name}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Approach */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful outcomes for all our engagements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover</h3>
                <p className="text-gray-600">
                  We begin by deeply understanding your challenges, goals, and existing capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design</h3>
                <p className="text-gray-600">
                  We craft tailored solutions that address your specific needs and align with your objectives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implement</h3>
                <p className="text-gray-600">
                  We execute with precision, adapting as needed to ensure optimal results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-4">04</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimize</h3>
                <p className="text-gray-600">
                  We continuously refine and improve, measuring outcomes against defined success criteria.
                </p>
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

export default Services;
