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
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose A Automation Company?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results through intelligent automation solutions
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-2xl text-brand-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proven ROI
                </h3>
                <p className="text-gray-600">
                  Average 3x return on investment within 12 months of
                  implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-2xl text-brand-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Certified UiPath consultants with extensive industry experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-2xl text-brand-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Operation
                </h3>
                <p className="text-gray-600">
                  Unattended automation running around the clock for maximum
                  efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-2xl text-purple-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-level security with comprehensive audit trails and compliance.
                </p>
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
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Robotic process automation office environment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our RPA Implementation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform your business
              operations and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-brand-blue text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discovery & Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive process analysis to identify automation opportunities
                  and build your business case.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-brand-blue hover:text-blue-700">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-brand-green border-2">
              <CardContent className="p-8">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-brand-green text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Development & Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  Full-scale automation development with UiPath technology and ongoing
                  support services.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-brand-green hover:text-green-700">
                    Get Started →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-brand-orange text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Scaling & Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced automation strategies for enterprise-scale operations and
                  continuous improvement.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-brand-orange hover:text-orange-700">
                    Explore Options →
                  </Button>
                </Link>
              </CardContent>
            </Card>
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

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About A Automation Company
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading UK-based technology consultancy specializing in
                Robotic Process Automation using UiPath software. Our team of
                certified consultants serves clients from SMEs to FTSE companies
                across diverse industries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Award className="text-brand-blue" size={20} />
                  </div>
                  <span className="text-gray-700">
                    UiPath Gold Partner with certified developers
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Users className="text-brand-green" size={20} />
                  </div>
                  <span className="text-gray-700">
                    500+ successful automation implementations
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="text-brand-orange" size={20} />
                  </div>
                  <span className="text-gray-700">
                    24/7 support and monitoring services
                  </span>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-brand-blue hover:bg-blue-700">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional team in modern office environment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started with Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact our automation experts for a
              free consultation and discover your automation potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-brand-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600">0845 643 4410</p>
                <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-brand-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">info@aautomation.co.uk</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-brand-orange" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">United Kingdom</p>
                <p className="text-sm text-gray-500">Serving clients nationwide</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-blue-700 px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
