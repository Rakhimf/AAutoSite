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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-16 matrix-bg relative">
        <div className="absolute inset-0 cyber-gradient opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-cyber text-white mb-6 cyber-text-glow">
              RPA DEPLOYMENT PROTOCOLS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cybernetic automation systems engineered to eliminate human inefficiencies 
              and deliver <span className="text-brand-cyan font-semibold">quantifiable operational transformation</span>
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-cyber text-white mb-4 cyber-text-glow">DEPLOYMENT PROTOCOLS</h2>
            <p className="text-xl text-gray-300">
              Select your optimal <span className="text-brand-cyan font-semibold">robotic intelligence configuration</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Package */}
            <Card className="cyber-card hover:shadow-2xl transition-all duration-300 hover:cyber-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4 cyber-border">
                  <Settings className="text-amber-400" size={24} />
                </div>
                <CardTitle className="text-xl text-amber-400 font-cyber">BRONZE PROTOCOL</CardTitle>
                <p className="text-gray-400 mt-2">
                  Entry-level cybernetic deployment for initial process optimization.
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
                  <Button className="w-full neon-button border-amber-400 text-amber-400 font-cyber">
                    ACTIVATE
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silver Package - Most Popular */}
            <Card className="relative cyber-card hover:shadow-2xl transition-all duration-300 border-2 border-brand-neon cyber-glow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand-neon text-black font-cyber">
                  <Star className="w-3 h-3 mr-1" />
                  OPTIMAL
                </Badge>
              </div>
              
              <CardHeader>
                <div className="w-12 h-12 bg-gray-400/20 rounded-lg flex items-center justify-center mb-4 cyber-border">
                  <Settings className="text-gray-300" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-300 font-cyber">SILVER PROTOCOL</CardTitle>
                <p className="text-gray-400 mt-2">
                  Enhanced multi-bot deployment for enterprise-grade automation scaling.
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
                  <Button className="w-full bg-brand-neon hover:bg-brand-neon/80 text-black font-cyber font-bold cyber-pulse">
                    DEPLOY NOW
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="cyber-card hover:shadow-2xl transition-all duration-300 hover:cyber-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 cyber-border">
                  <TrendingUp className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-xl text-yellow-400 font-cyber">GOLD PROTOCOL</CardTitle>
                <p className="text-gray-400 mt-2">
                  Maximum-security robotic intelligence array for mission-critical operations.
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
                  <Button className="w-full neon-button border-yellow-400 text-yellow-400 font-cyber">
                    ENGAGE
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
