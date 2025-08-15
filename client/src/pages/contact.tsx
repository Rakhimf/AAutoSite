import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Linkedin,
  Twitter
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema.extend({
      firstName: insertContactSubmissionSchema.shape.firstName.min(1, "First name is required"),
      lastName: insertContactSubmissionSchema.shape.lastName.min(1, "Last name is required"),
      email: insertContactSubmissionSchema.shape.email.email("Please enter a valid email"),
      message: insertContactSubmissionSchema.shape.message.min(10, "Message must be at least 10 characters")
    })),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      message: "",
      newsletter: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContactSubmission) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

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
                Get Started with Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business? Contact our automation experts for a 
                free consultation and discover your automation potential.
              </p>
              
              {/* Contact Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-blue">24hrs</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-green">100%</div>
                  <div className="text-sm text-gray-600">Free Consultation</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional team consultation meeting"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-brand-blue rounded-lg shadow-lg p-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">Book Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 font-medium">0845 643 4410</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-brand-green bg-opacity-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-brand-green" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 font-medium">info@deskautomate.co.uk</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-brand-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600 font-medium">United Kingdom</p>
                      <p className="text-sm text-gray-500">Serving clients nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-500 bg-opacity-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Clock className="text-purple-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                      <p className="text-gray-600 font-medium">Within 4 hours</p>
                      <p className="text-sm text-gray-500">For urgent automation inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                  >
                    <Linkedin className="text-brand-blue hover:text-white" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                  >
                    <Twitter className="text-brand-blue hover:text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-brand-blue" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. We will contact you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                    <SelectItem value="supply-chain">Supply Chain & Logistics</SelectItem>
                                    <SelectItem value="financial">Financial Services</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={4} 
                                  placeholder="Tell us about your automation needs..." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  Subscribe to our "Business Beyond Automation" newsletter
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-brand-blue hover:bg-blue-700"
                          disabled={contactMutation.isPending}
                        >
                          {contactMutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the type of engagement that best fits your automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  30-minute discovery call to discuss your automation opportunities
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  • Process assessment<br/>
                  • ROI estimation<br/>
                  • Implementation roadmap
                </div>
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  Book Free Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 border-brand-green">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-brand-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workshop Session</h3>
                <p className="text-gray-600 mb-4">
                  Half-day workshop to identify and prioritize automation opportunities
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  • Detailed process analysis<br/>
                  • Business case development<br/>
                  • Implementation planning
                </div>
                <Button className="bg-brand-green hover:bg-green-700">
                  Schedule Workshop
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-brand-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation Quote</h3>
                <p className="text-gray-600 mb-4">
                  Detailed proposal for your specific automation requirements
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  • Custom solution design<br/>
                  • Detailed pricing<br/>
                  • Timeline and milestones
                </div>
                <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
