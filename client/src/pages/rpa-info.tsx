import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Bot, Zap, Shield, ChartBar, Clock, Users, Target, Settings, TrendingUp, Workflow } from "lucide-react";

export default function RPAInfo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RPA - Robotic Process Automation Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Information on RPA starts with "What" it is and "What it Does". 
              Comprehensive guide from basics to implementation with UiPath.
            </p>
          </div>
        </div>
      </section>

      {/* What is RPA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Robotic Process Automation?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Robotic Process Automation (RPA) automates traditional manual desktop tasks that are 
                predictable, repetitive, well structured and considered routine. The tasks can be 
                performed on either a scheduled basis, triggered by an event or manually initiated.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For the average office employee in the UK, tedious tasks like filling in forms, 
                making repetitive calculations, cross checking information with other systems or 
                websites, are also notoriously error prone and time consuming.
              </p>
              <div className="bg-brand-blue text-white p-4 rounded-lg mb-6">
                <p className="text-lg font-semibold">"Get More Work Done. Same Staff."</p>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                RPA allows these processes to be undertaken by a robotic workforce that is fast, 
                perfectly accurate, tireless, and easily scalable.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Non-Invasive Technology</h4>
                    <p className="text-gray-600">Works with existing systems without disrupting current infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rule-Based Processing</h4>
                    <p className="text-gray-600">Executes predefined business rules and workflows consistently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Solution</h4>
                    <p className="text-gray-600">Easily scale up or down based on business demands</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="UiPath RPA workflow designer"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RPA Software Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RPA Software</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many RPA software products available in the UK but Desk Automate works with UiPath 
              as it is widely regarded by industry analysts as one of the leading three.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">UiPath RPA Capabilities</h3>
              <p className="text-lg text-gray-600 mb-6">
                With UiPath RPA software, tasks that require no human intervention ("unattended") can be 
                performed by robotic processes, empowering employees to perform other activities, and 
                partially automate those tasks that do require some human involvement ("attended" automation).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Bot className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Unattended Automation</h4>
                    <p className="text-gray-600">Fully automated processes running 24/7 without human intervention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Attended Automation</h4>
                    <p className="text-gray-600">Human-robot collaboration for enhanced productivity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-brand-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Orchestration</h4>
                    <p className="text-gray-600">Centralized management and coordination of robot workforce</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Robot Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Speed vs Human</span>
                  <span className="font-bold text-brand-blue">10x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Working Hours/Week</span>
                  <span className="font-bold text-brand-blue">168 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Human Hours/Week</span>
                  <span className="font-bold text-gray-500">40 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-bold text-brand-green">0%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-brand-light-blue rounded-lg">
                <p className="text-sm font-semibold text-brand-blue text-center">
                  "168 Hours/Week for a Robot, 40 Hours/Week for a person – Same Cost!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning for RPA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning for RPA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desk Automate works with clients to identify tasks suitable for RPA and determine 
              a balanced use of robot and human activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card">
              <CardHeader>
                <Target className="w-8 h-8 text-brand-blue mb-2" />
                <CardTitle>Business Case Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Do nothing scenario analysis</li>
                  <li>• Current process effort & volumes</li>
                  <li>• RPA implementation costs</li>
                  <li>• Benefits quantification</li>
                  <li>• Risk assessment</li>
                  <li>• Quality control measures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader>
                <Clock className="w-8 h-8 text-brand-blue mb-2" />
                <CardTitle>90-Day Method</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our proven methodology covers people, process, and technology implementation.
                </p>
                <p className="text-sm text-brand-blue font-semibold">
                  Record delivery: 14 days from enquiry to production
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-brand-blue mb-2" />
                <CardTitle>ROI Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Demonstrate the financial aspects and potential returns of your RPA investment.
                </p>
                <Link href="/#roi-calculator">
                  <Button className="w-full bg-brand-blue hover:bg-brand-primary text-white">
                    Calculate ROI
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RPA Working with People */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RPA Working with People</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RPA software robots are best implemented to work with people. 
              There is a spectrum of human-robot interactions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { level: "Fully Manual", description: "Traditional human-only processes", icon: Users },
                { level: "Delegation", description: "Person can delegate work to an RPA software robot", icon: Workflow },
                { level: "Interaction", description: "Person interacts with an RPA software robot", icon: Users },
                { level: "Review & Approval", description: "Person reviews/verifies/approves work of RPA robot", icon: Check },
                { level: "Fully Automated", description: "Work completed entirely by RPA software robot", icon: Bot }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-light-blue rounded-lg mr-6">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.level}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600">
                <strong>Best Practice:</strong> In a good design, people should always be able to pick up work 
                to handle exceptions, as well as provide backup and contingency operations. The implementation 
                of automation for each business process can utilize any combination to achieve the desired outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RPA Project */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RPA Project Implementation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desk Automate provides comprehensive software robot development for businesses across the UK 
              using UiPath products to build and deploy RPA solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Implementation Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-blue text-white rounded-full mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Technical Design</h4>
                    <p className="text-gray-600">Comprehensive process analysis and solution architecture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-blue text-white rounded-full mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Development Standards</h4>
                    <p className="text-gray-600">Following best practices and coding standards for reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-blue text-white rounded-full mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Robot Logic Construction</h4>
                    <p className="text-gray-600">Building robust automation logic with error handling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-blue text-white rounded-full mr-4 mt-1 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Testing & Validation</h4>
                    <p className="text-gray-600">Comprehensive testing to ensure solution reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-brand-blue text-white rounded-full mr-4 mt-1 text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Deployment & Support</h4>
                    <p className="text-gray-600">Production deployment with ongoing maintenance support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-light-blue to-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Delivery Timelines</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Standard Method</span>
                  <span className="font-bold text-brand-blue">90 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Express Delivery</span>
                  <span className="font-bold text-brand-blue">14 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Coverage</span>
                  <span className="font-bold text-brand-blue">People, Process & Technology</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Record Achievement:</strong> 14 days from enquiry to production deployment
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-brand-blue hover:bg-brand-primary text-white">
                    Start Your RPA Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Support Service</h3>
              <p className="text-lg text-gray-600 mb-6">
                Desk Automate provides comprehensive ongoing support services for businesses in the UK to address:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-brand-green mr-3" />
                  <span className="text-gray-600">Bug fixes and issue resolution</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-brand-green mr-3" />
                  <span className="text-gray-600">Software upgrades and updates</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-brand-green mr-3" />
                  <span className="text-gray-600">Functional enhancements</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-brand-green mr-3" />
                  <span className="text-gray-600">Performance optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-brand-green mr-3" />
                  <span className="text-gray-600">24/7 monitoring and maintenance</span>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-primary text-white px-6 py-3">
                  Discuss Your Requirements
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Desk Automate?</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">UK-Based Expertise</h4>
                  <p className="text-gray-600">
                    Local UK consultancy with deep understanding of British business processes and compliance requirements.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">UiPath Partnership</h4>
                  <p className="text-gray-600">
                    Official UiPath partner with certified developers and access to latest automation technologies.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                  <p className="text-gray-600">
                    Track record of successful implementations across various industries with measurable ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business with RPA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every business enterprise in the UK has processes that can benefit from Robotic Process Automation. 
            Contact us to discuss the options for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/#roi-calculator">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3 text-lg font-semibold">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mr-4">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="opacity-90">0845 643 4410</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mr-4">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="opacity-90">info@deskautomate.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
