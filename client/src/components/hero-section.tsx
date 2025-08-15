import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Calculator, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 matrix-bg opacity-20"></div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-gradient opacity-30"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="UiPath automation dashboard"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-cyber text-white mb-6 cyber-text-glow">
              DEPLOY AUTONOMOUS{" "}
              <span className="text-brand-cyan">ROBOTIC SYSTEMS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced UK-based RPA intelligence unit specializing in UiPath cybernetic automation. 
              Eliminate human inefficiencies with <span className="text-brand-neon font-semibold">military-grade precision</span> 
              and <span className="text-brand-cyan font-semibold">80% operational cost reduction</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="neon-button font-cyber px-8 py-3 text-lg font-bold cyber-pulse">
                  <Rocket className="w-5 h-5 mr-2" />
                  INITIATE DEPLOYMENT
                </Button>
              </Link>
              <Link href="/#roi-calculator">
                <Button className="border-2 border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black px-8 py-3 text-lg font-bold font-cyber transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  ANALYZE ROI
                </Button>
              </Link>
            </div>

            <div className="flex items-center text-sm text-gray-400 font-cyber tracking-wider">
              <Phone className="w-4 h-4 text-brand-cyan mr-2" />
              <span className="mr-6">0845 643 4410</span>
              <Mail className="w-4 h-4 text-brand-cyan mr-2" />
              <span>info@deskautomate.co.uk</span>
            </div>
          </div>

          <div className="relative">
            <div className="cyber-card rounded-xl p-1">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="UiPath RPA automation workflow"
                className="rounded-lg shadow-2xl w-full h-auto cyber-glow"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 cyber-card rounded-lg p-4">
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
