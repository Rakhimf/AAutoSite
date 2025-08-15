import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Factory, 
  Truck, 
  Building2, 
  Heart, 
  Check, 
  ArrowRight,
  Cog,
  TrendingUp
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Streamline production planning, inventory management, and quality control processes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Production scheduling optimization",
        "Quality reporting automation", 
        "Inventory tracking and management",
        "Supplier onboarding processes",
        "Compliance documentation"
      ],
      caseStudy: {
        company: "Global Flooring Manufacturer",
        improvement: "80% reduction in manual workload",
        metric: "99.5% accuracy improvement"
      },
      color: "brand-blue"
    },
    {
      icon: Truck,
      title: "Supply Chain & Logistics",
      description: "Optimize logistics, procurement, and vendor management across your supply chain.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Order processing automation",
        "Vendor onboarding workflows",
        "Shipment tracking integration",
        "Invoice processing and matching",
        "Demand forecasting support"
      ],
      caseStudy: {
        company: "International Logistics Provider",
        improvement: "90% faster processing time",
        metric: "£250K annual savings"
      },
      color: "brand-green"
    },
    {
      icon: Building2,
      title: "Financial Services",
      description: "Automate compliance, reporting, and customer onboarding processes with precision.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "KYC compliance automation",
        "Transaction processing",
        "Regulatory reporting",
        "Customer onboarding",
        "Risk assessment workflows"
      ],
      caseStudy: {
        company: "Regional Banking Group",
        improvement: "75% faster onboarding",
        metric: "100% compliance accuracy"
      },
      color: "brand-orange"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Improve patient care through automated scheduling, billing, and records management.",
      image: null, // Will use icon instead
      benefits: [
        "Patient scheduling optimization",
        "Claims processing automation",
        "Medical records management",
        "Insurance verification",
        "Appointment reminders"
      ],
      caseStudy: {
        company: "NHS Trust Partnership",
        improvement: "60% reduction in admin time",
        metric: "95% patient satisfaction"
      },
      color: "purple-500"
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
                Industry-Specific RPA Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tailored automation implementations designed for the unique challenges 
                and opportunities in your industry
              </p>
              
              {/* Industry Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-blue">4</div>
                  <div className="text-sm text-gray-600">Key Industries</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-green">80%</div>
                  <div className="text-sm text-gray-600">Avg. Cost Reduction</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Various industries including manufacturing, finance, healthcare, and logistics"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-brand-orange rounded-lg shadow-lg p-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Multi-Industry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-100 rounded-full opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${industry.color} bg-opacity-10 rounded-lg flex items-center justify-center mr-4`}>
                      <industry.icon className={`text-${industry.color}`} size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Automation Areas</h3>
                    <div className="space-y-3">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <Check className={`w-5 h-5 text-${industry.color} mr-3`} />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Case Study */}
                  <Card className={`border-l-4 border-${industry.color} mb-6`}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Success Story</h4>
                      <p className="text-sm text-gray-600 mb-2">{industry.caseStudy.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className={`text-${industry.color} font-medium`}>
                          {industry.caseStudy.improvement}
                        </span>
                        <span className={`text-${industry.color} font-medium`}>
                          {industry.caseStudy.metric}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Link href="/contact">
                    <Button className={`bg-${industry.color} hover:opacity-90`}>
                      Learn More About {industry.title} RPA
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  {industry.image ? (
                    <img
                      src={industry.image}
                      alt={`${industry.title} automation`}
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  ) : (
                    <div className="rounded-xl shadow-lg w-full h-80 bg-purple-100 flex items-center justify-center">
                      <industry.icon className="text-purple-500" size={120} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Automation Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cross-Industry Automation Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regardless of your industry, RPA delivers consistent value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Reduce processing times by up to 90% while maintaining 99%+ accuracy rates
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="text-brand-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance & Governance</h3>
                <p className="text-gray-600">
                  Ensure consistent adherence to regulations with complete audit trails
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Operations</h3>
                <p className="text-gray-600">
                  Scale processing capacity instantly without proportional cost increases
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Industry Processes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how RPA can transform operations in your specific industry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-blue-700 px-8 py-3 text-lg">
                Schedule Industry Consultation
              </Button>
            </Link>
            <Link href="/#roi-calculator">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg">
                Calculate Industry ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
