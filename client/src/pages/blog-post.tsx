import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Heart, Eye, Tag } from "lucide-react";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // In a real app, you would fetch the blog post data based on the slug
  const blogPost = {
    id: "uipath-enterprise-automation-2024",
    title: "UiPath Enterprise Automation: Complete Guide for 2024",
    excerpt: "Discover how UiPath's enterprise automation platform is revolutionizing business processes across industries with AI-powered robotics.",
    content: `
      <div class="prose max-w-none">
        <p>UiPath has emerged as the leading platform for enterprise automation, offering comprehensive solutions that transform how organizations operate. In 2024, UiPath continues to evolve with new AI capabilities, enhanced security features, and improved scalability for enterprise deployments.</p>

        <h2>What Makes UiPath the Enterprise Choice?</h2>
        
        <p>UiPath stands out in the RPA market for several key reasons:</p>
        
        <ul>
          <li><strong>Comprehensive Platform:</strong> From discovery to deployment, UiPath provides end-to-end automation capabilities</li>
          <li><strong>AI Integration:</strong> Native AI capabilities through AI Center and Document Understanding</li>
          <li><strong>Enterprise Security:</strong> Bank-level security with role-based access and comprehensive audit trails</li>
          <li><strong>Scalability:</strong> Handle thousands of robots across multiple environments</li>
        </ul>

        <h2>Key Components of UiPath Enterprise</h2>

        <h3>1. UiPath Studio</h3>
        <p>The development environment for building automation workflows with drag-and-drop functionality and advanced debugging capabilities.</p>

        <h3>2. UiPath Orchestrator</h3>
        <p>The centralized management platform for deploying, monitoring, and managing your robot workforce at scale.</p>

        <h3>3. UiPath AI Center</h3>
        <p>Deploy and manage machine learning models to add intelligence to your automation processes.</p>

        <h3>4. UiPath Action Center</h3>
        <p>Enable human-in-the-loop scenarios for complex decision-making processes.</p>

        <h2>Implementation Best Practices</h2>

        <p>Based on our experience with 500+ implementations, here are the key success factors:</p>

        <ol>
          <li><strong>Start with Process Discovery:</strong> Use UiPath Process Mining to identify the best automation candidates</li>
          <li><strong>Establish a Center of Excellence:</strong> Create a dedicated team to drive automation initiatives</li>
          <li><strong>Focus on Change Management:</strong> Ensure proper training and communication with affected teams</li>
          <li><strong>Implement Governance:</strong> Establish clear guidelines for development and deployment</li>
          <li><strong>Monitor and Optimize:</strong> Continuously monitor performance and optimize workflows</li>
        </ol>

        <h2>ROI and Business Benefits</h2>

        <p>Organizations implementing UiPath typically see:</p>

        <ul>
          <li>70-80% reduction in manual processing time</li>
          <li>99%+ accuracy rates for automated processes</li>
          <li>300-400% ROI within the first year</li>
          <li>24/7 operation capabilities</li>
          <li>Improved employee satisfaction through elimination of mundane tasks</li>
        </ul>

        <h2>Industry-Specific Applications</h2>

        <h3>Financial Services</h3>
        <p>Automate loan processing, compliance reporting, and customer onboarding with enhanced security and audit capabilities.</p>

        <h3>Healthcare</h3>
        <p>Streamline patient scheduling, insurance verification, and medical records management while maintaining HIPAA compliance.</p>

        <h3>Manufacturing</h3>
        <p>Optimize supply chain management, quality control reporting, and inventory management processes.</p>

        <h2>Getting Started with UiPath Enterprise</h2>

        <p>Ready to begin your automation journey? Here's how to get started:</p>

        <ol>
          <li><strong>Assessment:</strong> Evaluate your current processes and identify automation opportunities</li>
          <li><strong>Pilot Project:</strong> Start with a small, high-impact process to demonstrate value</li>
          <li><strong>Scale Gradually:</strong> Expand automation to additional processes based on initial success</li>
          <li><strong>Continuous Improvement:</strong> Regular review and optimization of automated processes</li>
        </ol>

        <p>UiPath enterprise automation represents the future of business process optimization. With its comprehensive platform, AI capabilities, and enterprise-grade security, UiPath enables organizations to achieve unprecedented levels of efficiency and accuracy.</p>
      </div>
    `,
    author: "Sarah Johnson",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "UiPath",
    tags: ["UiPath", "Enterprise", "Automation", "AI", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    views: 2847,
    featured: true
  };

  const relatedPosts = [
    {
      id: "uipath-attended-vs-unattended-robots",
      title: "UiPath Attended vs Unattended Robots: Which to Choose?",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      category: "UiPath",
      readTime: "5 min read"
    },
    {
      id: "uipath-ai-center-guide",
      title: "UiPath AI Center: Integrating Machine Learning with RPA",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      category: "UiPath",
      readTime: "12 min read"
    },
    {
      id: "rpa-roi-calculation-guide",
      title: "RPA ROI Calculator: How to Measure Automation Success",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      category: "ROI",
      readTime: "6 min read"
    }
  ];

  if (!match) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-gentle"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-brand-blue hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <Badge className="bg-brand-blue text-white mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(blogPost.publishDate).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                {blogPost.views.toLocaleString()} views
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmark
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Like
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <div className="flex items-center mb-4">
              <Tag className="w-5 h-5 mr-2 text-gray-600" />
              <span className="font-semibold text-gray-900">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mb-12 bg-gray-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {blogPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{blogPost.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Senior RPA Consultant at Desk Automate with extensive experience in UiPath implementations 
                    across various industries. Specializes in enterprise automation solutions and digital transformation.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">Follow</Button>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-blue text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="text-brand-blue hover:text-blue-700 hover:bg-blue-50 w-full">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our RPA experts for a free consultation and discover how UiPath can transform your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}