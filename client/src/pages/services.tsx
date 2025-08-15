import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Search, 
  Settings, 
  TrendingUp, 
  Check, 
  Star,
  Clock,
  Shield,
  Users,
  Zap
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-gentle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                RPA Implementation Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Comprehensive automation solutions designed to transform your business 
                operations and deliver <span className="text-brand-blue font-semibold">measurable results</span>
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="UiPath RPA Dashboard showing automation workflows"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">Live Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-100 rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the right level of support for your <span className="text-brand-blue font-semibold">automation journey</span>
            </p>
            {/* Visual separator */}
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Package */}
            <Card className="professional-card">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="text-amber-600" size={24} />
                </div>
                <CardTitle className="text-xl text-amber-600">Bronze Package</CardTitle>
                <p className="text-gray-600 mt-2">
                  Perfect for small businesses looking to automate their first process.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">1x Robot</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">24/7 Execution</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">1x Simple Automation</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">Full Support</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-amber-600">£2,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
                
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silver Package - Most Popular */}
            <Card className="relative professional-card border-2 border-brand-green">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand-green text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="text-gray-600" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-600">Silver Package</CardTitle>
                <p className="text-gray-600 mt-2">
                  Ideal for growing businesses ready to scale their automation.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">2x Robots</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">24/7 Execution</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">2x Simple Automations</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">Full Support</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-500">£4,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
                
                <Link href="/contact">
                  <Button className="w-full bg-brand-green hover:bg-green-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="professional-card">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-yellow-600" size={24} />
                </div>
                <CardTitle className="text-xl text-yellow-600">Gold Package</CardTitle>
                <p className="text-gray-600 mt-2">
                  Premium solution for enterprises requiring multiple automations.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">3x Robots</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">24/7 Execution</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">3x Simple Automations</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-2 mt-0.5" />
                    <span className="text-sm">Full Support</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-yellow-500">£6,000</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
                
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UiPath Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                UiPath Gold Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a certified UiPath Gold Partner, we provide enterprise-grade 
                automation solutions with access to the latest platform capabilities 
                and dedicated support.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="text-brand-blue" size={20} />
                  </div>
                  <span className="text-gray-700">Certified UiPath developers and architects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Users className="text-brand-green" size={20} />
                  </div>
                  <span className="text-gray-700">Direct access to UiPath support and resources</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="text-brand-orange" size={20} />
                  </div>
                  <span className="text-gray-700">Priority licensing and implementation support</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="UiPath automation platform interface"
                className="rounded-xl shadow-lg w-full mb-6"
              />
              <div className="bg-brand-blue text-white p-4 rounded-lg">
                <h3 className="font-semibold mb-2">UiPath Platform Benefits</h3>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Visual workflow designer</li>
                  <li>• AI-powered document understanding</li>
                  <li>• Cloud and on-premise deployment</li>
                  <li>• Enterprise-grade security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support and expertise to ensure your automation success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Methodology</h3>
                <p className="text-gray-600 text-sm">
                  Battle-tested implementation approach with 95% success rate
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-brand-green" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock monitoring and support for your automation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">
                  Certified consultants with deep industry knowledge
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Fast-track implementation with minimal business disruption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your automation needs and create a customized solution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-blue-700 px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/#roi-calculator">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
