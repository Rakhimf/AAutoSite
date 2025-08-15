import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Calculator, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="UiPath automation dashboard"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Robotic Process Automation{" "}
              <span className="text-brand-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted RPA Services Company delivers consistent, accurate, and fast results by automating 
              everyday business processes with minimal human input. Reduce operational costs by up to 
              <span className="text-brand-blue font-semibold"> 80%</span> while improving accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-primary text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Link href="/#roi-calculator">
                <Button variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate ROI
                </Button>
              </Link>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 text-brand-blue mr-2" />
              <span className="mr-6">0845 643 4410</span>
              <Mail className="w-4 h-4 text-brand-blue mr-2" />
              <span>info@deskautomate.co.uk</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-1">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="UiPath RPA automation workflow"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-brand-green">168 hrs</div>
              <div className="text-sm text-gray-600">Weekly Operation</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-brand-orange">95%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
