import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Bot, Zap, Shield, ChartBar } from "lucide-react";

export default function RPAInfo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RPA Information & Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to Robotic Process Automation - from basics to implementation
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
              <p className="text-lg text-gray-600 mb-6">
                RPA is a technology that allows you to configure software "robots" to 
                capture and interpret existing applications for processing transactions, 
                manipulating data, triggering responses, and communicating with other 
                digital systems.
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

      {/* Types of RPA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of RPA Implementation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different approaches to automation deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="text-brand-blue" size={24} />
                </div>
                <CardTitle>Attended Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Robots work alongside human employees, triggered by user actions and 
                  enhancing productivity during regular work hours.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    Human-robot collaboration
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    Real-time assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    Desktop automation
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    User-triggered processes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-brand-green" size={24} />
                </div>
                <CardTitle>Unattended Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fully autonomous robots that operate independently, running 24/7 
                  without human intervention for maximum efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    24/7 operation capability
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    Scheduled execution
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    Server-based deployment
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-brand-green mr-2" />
                    High-volume processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits of RPA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why businesses across industries are adopting RPA solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBar className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
                <p className="text-gray-600">Reduce operational costs by up to 80% through automation of repetitive tasks</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-brand-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Improved Accuracy</h3>
                <p className="text-gray-600">Eliminate human errors with 99.5%+ accuracy in automated processes</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Productivity</h3>
                <p className="text-gray-600">Free up employees to focus on high-value, strategic activities</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Better Compliance</h3>
                <p className="text-gray-600">Ensure consistent adherence to regulations with audit trails</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-pink-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Processing</h3>
                <p className="text-gray-600">Process transactions 10x faster than manual operations</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="text-indigo-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                <p className="text-gray-600">Easily scale operations up or down based on business needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RPA Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology for successful automation deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "Assess current processes and identify automation opportunities",
                color: "brand-blue"
              },
              {
                step: "2", 
                title: "Design",
                description: "Create detailed automation workflows and technical specifications",
                color: "brand-green"
              },
              {
                step: "3",
                title: "Development",
                description: "Build and test robots using UiPath platform and best practices",
                color: "brand-orange"
              },
              {
                step: "4",
                title: "Deployment",
                description: "Deploy, monitor, and provide ongoing support for automation",
                color: "purple-500"
              }
            ].map((phase, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${phase.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-${phase.color} font-bold text-lg`}>{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your RPA Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get expert guidance on implementing RPA in your organization
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-blue-700 px-8 py-3 text-lg">
                Schedule Free Consultation
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
