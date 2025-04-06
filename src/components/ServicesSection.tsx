
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Strategic Consulting",
    description: "Our expert consultants work with your team to develop tailored strategies that drive growth and transformation.",
    link: "/services/consulting"
  },
  {
    title: "Technology Development",
    description: "Custom software solutions designed to optimize your operations and solve your most complex challenges.",
    link: "/services/development"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end guidance to help your organization embrace digital technologies and modern processes.",
    link: "/services/transformation"
  }
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
