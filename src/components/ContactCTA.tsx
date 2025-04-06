
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Get in touch with our team to discuss how we can help you achieve your goals and overcome your challenges.
        </p>
        <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
          <Link to="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
