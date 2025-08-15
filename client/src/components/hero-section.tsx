import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Calculator, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 animate-gradient py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-gentle"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center bg-brand-blue bg-opacity-10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              UK's Leading RPA Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Robotic Process Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted RPA Services Company delivers consistent, accurate, and fast results by automating 
              everyday business processes with minimal human input. Reduce operational costs by up to 
              <span className="text-brand-blue font-semibold bg-blue-50 px-2 py-1 rounded"> 80%</span> 
              while improving accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Link href="/#roi-calculator">
                <Button variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate ROI
                </Button>
              </Link>
            </div>

            <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-lg p-4 backdrop-blur-sm">
              <Phone className="w-4 h-4 text-brand-blue mr-2" />
              <span className="mr-6 font-medium">0845 643 4410</span>
              <Mail className="w-4 h-4 text-brand-blue mr-2" />
              <span className="font-medium">info@deskautomate.co.uk</span>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-2 animate-float">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="UiPath RPA automation workflow"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Enhanced Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-brand-green to-green-500 text-white rounded-lg shadow-xl p-4 animate-pulse-gentle">
              <div className="text-2xl font-bold">168 hrs</div>
              <div className="text-sm opacity-90">Weekly Operation</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-brand-orange to-orange-500 text-white rounded-lg shadow-xl p-4 animate-pulse-gentle">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>

            <div className="absolute top-1/2 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-xl p-3 animate-float">
              <div className="text-lg font-bold">10x</div>
              <div className="text-xs opacity-90">Faster</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
