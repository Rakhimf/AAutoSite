import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp,
  Target,
  CheckCircle,
  Building,
  Phone,
  Mail
} from "lucide-react";

export default function About() {
  const stats = [
    { value: "500+", label: "Projects Completed", color: "brand-blue" },
    { value: "500+", label: "Implementations", color: "brand-green" },
    { value: "200+", label: "Happy Clients", color: "brand-orange" },
    { value: "95%", label: "Success Rate", color: "purple-500" }
  ];

  const certifications = [
    {
      title: "UiPath Gold Partner",
      description: "Premier partnership with access to latest platform capabilities",
      icon: Award
    },
    {
      title: "Certified Developers",
      description: "Team of UiPath certified solution architects and developers",
      icon: Users
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security certifications and compliance standards",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support services",
      icon: Clock
    }
  ];

  const values = [
    {
      title: "Innovation Excellence",
      description: "Continuously advancing automation capabilities with cutting-edge technology",
      icon: TrendingUp
    },
    {
      title: "Client Success Focus",
      description: "Dedicated to delivering measurable business value and ROI",
      icon: Target
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and validation ensuring 99%+ accuracy rates",
      icon: CheckCircle
    },
    {
      title: "Industry Expertise", 
      description: "Deep knowledge across manufacturing, finance, healthcare, and logistics",
      icon: Building
    }
  ];

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
                About Desk Automate
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leading UK-based technology consultancy specializing in Robotic Process 
                Automation using UiPath software
              </p>
              
              {/* Company Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-blue">500+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-green">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-orange">200+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional team working together on automation solutions"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-brand-green rounded-lg shadow-lg p-3 text-white">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">UK Specialists</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-100 rounded-full opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Business Through Intelligent Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading UK-based technology consultancy specializing in Robotic 
                Process Automation using UiPath software. Our team of certified consultants 
                serves clients from SMEs to FTSE companies across diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With extensive experience in business process optimization and 
                automation, we have helped hundreds of organizations achieve remarkable 
                efficiency gains, cost reductions, and operational excellence through 
                strategic RPA implementations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Award className="text-brand-blue" size={20} />
                  </div>
                  <span className="text-gray-700">UiPath Gold Partner with certified developers</span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Users className="text-brand-green" size={20} />
                  </div>
                  <span className="text-gray-700">500+ successful automation implementations</span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="text-brand-orange" size={20} />
                  </div>
                  <span className="text-gray-700">24/7 support and monitoring services</span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="text-purple-500" size={20} />
                  </div>
                  <span className="text-gray-700">Enterprise-grade security and compliance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-brand-blue hover:bg-blue-700">
                    <Users className="w-4 h-4 mr-2" />
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    <Award className="w-4 h-4 mr-2" />
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
              <Card className="w-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Impact</h3>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-brand-blue">500+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-brand-green">200+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-brand-orange">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted partnerships and certifications that ensure quality delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                      <cert.icon className="text-brand-blue" size={24} />
                    </div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to automation excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <value.icon className="text-brand-green" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our automation implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Manufacturing Case Study */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Building className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Manufacturing Excellence</CardTitle>
                    <p className="text-gray-600">Global Flooring Manufacturer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Automated inventory management and production scheduling processes, 
                  reducing manual workload by 80% and improving accuracy to 99.5%.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-green">80%</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">99.5%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-orange">6</div>
                    <div className="text-xs text-gray-600">Months ROI</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-brand-blue pl-4 italic text-gray-600">
                  "Desk Automate transformed our production planning. We now have 
                  real-time visibility and our team can focus on strategic initiatives."
                </blockquote>
              </CardContent>
            </Card>

            {/* Supply Chain Case Study */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="text-brand-green" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Supply Chain Optimization</CardTitle>
                    <p className="text-gray-600">International Logistics Provider</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Streamlined order processing and shipment tracking across multiple 
                  systems, reducing processing time from hours to minutes.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-green">90%</div>
                    <div className="text-xs text-gray-600">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">24/7</div>
                    <div className="text-xs text-gray-600">Operation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-orange">£250K</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-brand-green pl-4 italic text-gray-600">
                  "Our customers now receive instant updates and our operations team 
                  has complete visibility across the supply chain."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business through intelligent automation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Phone className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600">0845 643 4410</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Mail className="w-8 h-8 text-brand-green mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600">info@aautomation.co.uk</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-blue-700 px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/#roi-calculator">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg">
                Calculate ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
