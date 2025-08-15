import HeroSection from "@/components/hero-section";
import ROICalculator from "@/components/roi-calculator";
import CaseStudies from "@/components/case-studies";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  TrendingUp,
  Users,
  Clock,
  Shield,
  Check,
  Factory,
  Truck,
  Building2,
  Heart,
  Award,
  Phone,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-blue to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              ⭐ Award-Winning RPA Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Desk Automate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results through intelligent automation solutions
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-0 animate-fadeInUp">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proven ROI
                </h3>
                <p className="text-gray-600">
                  Average <span className="font-semibold text-brand-blue">3x return</span> on investment within 12 months of implementation.
                </p>
                <div className="mt-4 text-2xl font-bold text-brand-blue">300%</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-0 animate-fadeInUp">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Certified UiPath consultants with <span className="font-semibold text-brand-green">10+ years</span> of industry experience.
                </p>
                <div className="mt-4 text-2xl font-bold text-brand-green">500+</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50 border-0 animate-fadeInUp">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Operation
                </h3>
                <p className="text-gray-600">
                  Unattended automation running <span className="font-semibold text-brand-orange">168 hours/week</span> for maximum efficiency.
                </p>
                <div className="mt-4 text-2xl font-bold text-brand-orange">24/7</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 border-0 animate-fadeInUp">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-level security with <span className="font-semibold text-purple-500">99.9% uptime</span> and comprehensive audit trails.
                </p>
                <div className="mt-4 text-2xl font-bold text-purple-500">99.9%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RPA Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Robotic Process Automation?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RPA is a technology that allows you to configure software "robots"
                to capture and interpret existing applications for processing
                transactions, manipulating data, triggering responses, and
                communicating with other digital systems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="text-white text-sm" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Attended Automation
                    </h4>
                    <p className="text-gray-600">
                      Robots that work alongside human employees to enhance
                      productivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="text-white text-sm" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Unattended Automation
                    </h4>
                    <p className="text-gray-600">
                      Fully autonomous robots that operate without human intervention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="text-white text-sm" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Integration</h4>
                    <p className="text-gray-600">
                      Advanced cognitive capabilities for document understanding and
                      decision making.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/rpa-information">
                <Button className="bg-brand-blue hover:bg-blue-700">
                  Learn More About RPA
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="UiPath robotic process automation interface"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white relative">
        {/* Background SVG pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="large-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3B82F6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#large-grid)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-green to-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              🔧 Comprehensive RPA Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our RPA Implementation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform your business
              operations and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 animate-slideInLeft">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 text-brand-blue opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg animate-float">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discovery & Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive process analysis to identify automation opportunities
                  and build your business case.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-brand-blue">Timeline</span>
                  <span className="text-sm text-gray-600">2-4 weeks</span>
                </div>
                <Link href="/services">
                  <Button variant="ghost" className="text-brand-blue hover:text-blue-700 hover:bg-blue-50 w-full">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-green-50 border-2 border-brand-green border-opacity-20 animate-fadeInUp">
              <CardContent className="p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-green to-green-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-brand-green opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg animate-float">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Development & Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  Full-scale automation development with UiPath technology and ongoing
                  support services.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-brand-green">Timeline</span>
                  <span className="text-sm text-gray-600">6-12 weeks</span>
                </div>
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-brand-green to-green-600 text-white hover:from-green-600 hover:to-brand-green w-full">
                    Get Started →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-0 animate-slideInRight">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 text-brand-orange opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L3.5 15.49l.58.58-.58.42z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg animate-float">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Scaling & Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced automation strategies for enterprise-scale operations and
                  continuous improvement.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-brand-orange">Timeline</span>
                  <span className="text-sm text-gray-600">Ongoing</span>
                </div>
                <Link href="/services">
                  <Button variant="ghost" className="text-brand-orange hover:text-orange-700 hover:bg-orange-50 w-full">
                    Explore Options →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Process Flow Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse-gentle"></div>
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
              <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse-gentle"></div>
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
              <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored RPA implementations designed for the unique challenges and
              opportunities in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                  alt="Manufacturing automation equipment"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Streamline production planning, inventory management, and quality
                  control processes.
                </p>
                <Link href="/industries">
                  <Button
                    variant="ghost"
                    className="text-brand-blue hover:text-blue-700 text-sm"
                  >
                    Explore Manufacturing Solutions →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                  alt="Supply chain logistics warehouse"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Supply Chain
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Optimize logistics, procurement, and vendor management across your
                  supply chain.
                </p>
                <Link href="/industries">
                  <Button
                    variant="ghost"
                    className="text-brand-green hover:text-green-700 text-sm"
                  >
                    Discover Supply Chain RPA →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                  alt="Financial technology office workspace"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Financial Services
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Automate compliance, reporting, and customer onboarding processes
                  with precision.
                </p>
                <Link href="/industries">
                  <Button
                    variant="ghost"
                    className="text-brand-orange hover:text-orange-700 text-sm"
                  >
                    Learn About Finance RPA →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-32 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="text-purple-500" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Improve patient care through automated scheduling, billing, and
                  records management.
                </p>
                <Link href="/industries">
                  <Button
                    variant="ghost"
                    className="text-purple-500 hover:text-purple-700 text-sm"
                  >
                    Explore Healthcare RPA →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ROICalculator />
      <CaseStudies />

      {/* Visual Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-brand-blue rounded-full animate-pulse-gentle"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-brand-green rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-32 w-2 h-2 bg-brand-orange rounded-full animate-pulse-gentle"></div>
          <div className="absolute bottom-40 right-10 w-4 h-4 bg-purple-400 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              📊 Proven Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Numbers That Matter
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our automation implementations across the UK
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slideInLeft">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Implementations</div>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>

            <div className="text-center animate-slideInRight">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Clock className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">About Desk Automate</h3>
              <p className="text-lg text-gray-300 mb-6">
                Leading UK-based technology consultancy specializing in Robotic Process Automation using UiPath software. 
                Serving clients from SMEs to FTSE companies across diverse industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3">
                    Learn More About Us
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-green opacity-5 rounded-full -translate-x-36 translate-y-36"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-blue to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              🚀 Ready to Transform?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact our automation experts for a
              free consultation and discover your automation potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 animate-slideInLeft">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <Phone className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-lg font-semibold text-brand-blue mb-1">0845 643 4410</p>
                <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-green-50 border-0 animate-fadeInUp">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <Mail className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-lg font-semibold text-brand-green mb-1">info@deskautomate.co.uk</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-0 animate-slideInRight">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-gentle">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-lg font-semibold text-brand-orange mb-1">United Kingdom</p>
                <p className="text-sm text-gray-500">Serving clients nationwide</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">No commitment required • 30-minute consultation • Expert advice</p>
          </div>
        </div>
      </section>
    </div>
  );
}
