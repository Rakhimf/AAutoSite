import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Bot, Zap, Building, Heart, Factory, Search, Eye } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  featured: boolean;
  hasCalculator?: boolean;
}

export default function Blog() {
  // Generate dynamic content with current dates
  const generateDynamicBlogPosts = (): BlogPost[] => {
    const today = new Date();
    const getRecentDate = (daysAgo: number) => {
      const date = new Date(today);
      date.setDate(date.getDate() - daysAgo);
      return date.toISOString().split('T')[0];
    };

    const dynamicPosts: BlogPost[] = [
    {
      id: "uipath-enterprise-automation-2025",
      title: "UiPath Enterprise Automation: Complete Guide for 2025",
      excerpt: "Discover how UiPath's latest enterprise automation platform is revolutionizing business processes with cutting-edge AI and machine learning capabilities.",
      content: `UiPath continues to lead enterprise automation in 2025, offering breakthrough solutions that transform organizational operations...`,
      author: "Sarah Johnson",
      publishDate: getRecentDate(1),
      readTime: "8 min read",
      category: "UiPath",
      tags: ["UiPath", "Enterprise", "Automation", "AI", "Digital Transformation", "2025"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: Math.floor(Math.random() * 1000) + 2500,
      featured: true
    },
    {
      id: "rpa-roi-calculation-guide",
      title: "RPA ROI Calculator: How to Measure Automation Success",
      excerpt: "Learn how to calculate the return on investment for your RPA initiatives with our comprehensive guide and free calculator tool.",
      content: `Measuring the ROI of RPA projects is crucial for justifying automation investments and demonstrating business value...`,
      author: "Mike Chen",
      publishDate: getRecentDate(2),
      readTime: "6 min read",
      category: "ROI",
      tags: ["ROI", "RPA", "Business Case", "Metrics", "Calculator"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 1923,
      featured: true,
      hasCalculator: true
    },
    {
      id: "uipath-attended-vs-unattended-robots",
      title: "UiPath Attended vs Unattended Robots: Which to Choose?",
      excerpt: "Understanding the differences between attended and unattended UiPath robots to make the right automation decisions.",
      content: `When implementing RPA with UiPath, choosing between attended and unattended robots is a critical decision...`,
      author: "David Wilson",
      publishDate: getRecentDate(3),
      readTime: "5 min read",
      category: "UiPath",
      tags: ["UiPath", "Attended Robots", "Unattended Robots", "RPA Strategy"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 1654,
      featured: false
    },
    {
      id: "manufacturing-rpa-case-studies",
      title: "Manufacturing RPA Success Stories: 5 Real Case Studies",
      excerpt: "Explore how manufacturing companies achieved 70% efficiency gains through strategic RPA implementation.",
      content: `Manufacturing industries are experiencing unprecedented transformation through RPA technology...`,
      author: "Emma Thompson",
      publishDate: getRecentDate(4),
      readTime: "10 min read",
      category: "Manufacturing",
      tags: ["Manufacturing", "Case Studies", "RPA", "Efficiency", "Industry 4.0"],
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 2156,
      featured: false
    },
    {
      id: "healthcare-rpa-compliance",
      title: "Healthcare RPA: Ensuring GDPR and Compliance",
      excerpt: "Navigate healthcare automation while maintaining patient data privacy and regulatory compliance.",
      content: `Healthcare RPA implementation requires careful consideration of regulatory requirements and patient privacy...`,
      author: "Dr. James Roberts",
      publishDate: getRecentDate(5),
      readTime: "7 min read",
      category: "Healthcare",
      tags: ["Healthcare", "GDPR", "Compliance", "Patient Data", "Security"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 1432,
      featured: false
    },
    {
      id: "financial-services-rpa-trends",
      title: "Financial Services RPA: 2024 Trends and Predictions",
      excerpt: "Discover the latest trends in financial services automation and what to expect in the coming year.",
      content: `The financial services sector continues to lead in RPA adoption, with new trends emerging in 2024...`,
      author: "Lisa Anderson",
      publishDate: getRecentDate(6),
      readTime: "9 min read",
      category: "Finance",
      tags: ["Finance", "Banking", "Trends", "Predictions", "Fintech"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 1789,
      featured: false
    },
    {
      id: "uipath-ai-center-guide",
      title: "UiPath AI Center: Integrating Machine Learning with RPA",
      excerpt: "Learn how to leverage UiPath AI Center to add intelligent capabilities to your automation workflows.",
      content: `UiPath AI Center bridges the gap between traditional RPA and artificial intelligence...`,
      author: "Alex Kumar",
      publishDate: getRecentDate(7),
      readTime: "12 min read",
      category: "UiPath",
      tags: ["UiPath", "AI Center", "Machine Learning", "Intelligent Automation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 2934,
      featured: true
    },
    {
      id: "rpa-implementation-checklist",
      title: "RPA Implementation Checklist: 50 Essential Steps",
      excerpt: "Complete checklist for successful RPA implementation from planning to deployment and maintenance.",
      content: `Successful RPA implementation requires careful planning and systematic execution...`,
      author: "Robert Taylor",
      publishDate: getRecentDate(8),
      readTime: "15 min read",
      category: "Implementation",
      tags: ["Implementation", "Checklist", "Project Management", "Best Practices"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: 3421,
      featured: true
    }
    ];

    // Add daily trending topics
    const trendingTopics = [
      "AI-Powered Document Processing Trends",
      "Manufacturing Automation Success Stories",  
      "Healthcare RPA Compliance Updates",
      "Financial Services Digital Transformation",
      "UiPath Licensing Cost Analysis",
      "Enterprise Automation Best Practices"
    ];

    const todaysTopic = trendingTopics[Math.floor(Math.random() * trendingTopics.length)];
    
    // Add today's featured article
    dynamicPosts.unshift({
      id: `daily-${today.toISOString().split('T')[0]}`,
      title: `Today's Focus: ${todaysTopic}`,
      excerpt: `Latest insights and developments in ${todaysTopic.toLowerCase()} - updated daily with fresh industry perspectives.`,
      content: `Today's analysis covers the most recent developments in ${todaysTopic.toLowerCase()}...`,
      author: "Editorial Team",
      publishDate: today.toISOString().split('T')[0],
      readTime: "5 min read", 
      category: "Daily Update",
      tags: ["Daily", "Trending", "Latest", "Industry News"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      views: Math.floor(Math.random() * 500) + 100,
      featured: true
    });

    return dynamicPosts;
  };

  const blogPosts = generateDynamicBlogPosts();
  const categories = ["All", "UiPath", "ROI", "Manufacturing", "Healthcare", "Finance", "Implementation", "Daily Update"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "UiPath": return Bot;
      case "Manufacturing": return Factory;
      case "Healthcare": return Heart;
      case "Finance": return TrendingUp;
      case "Implementation": return Building;
      default: return Bot;
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-gentle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                RPA & UiPath Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert insights, best practices, and the latest trends in robotic process automation and UiPath technology.
              </p>
              
              {/* Blog Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-blue">{blogPosts.length}</div>
                  <div className="text-xs text-gray-600">Articles</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-green">15k+</div>
                  <div className="text-xs text-gray-600">Readers</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-brand-orange">Weekly</div>
                  <div className="text-xs text-gray-600">Updates</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="RPA and automation blog content creation"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-brand-blue rounded-lg shadow-lg p-3 text-white">
                  <div className="flex items-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span className="text-sm font-medium">SEO Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content on RPA and UiPath automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand-blue text-white">{post.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <Eye className="w-4 h-4 text-gray-600" />
                      <span className="text-xs ml-1">{formatViews(post.views)}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-5 h-5 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/blog/${post.id}`} className="flex-1">
                        <Button variant="ghost" className="text-brand-blue hover:text-blue-700 hover:bg-blue-50 w-full">
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      {post.hasCalculator && (
                        <Link href="/roi-calculator">
                          <Button className="bg-brand-green hover:bg-green-600 text-white">
                            Try Calculator
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest in RPA technology and implementation strategies
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand-blue text-white">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-brand-orange text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-5 h-5 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <span className="ml-auto text-sm text-gray-500 flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {formatViews(post.views)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" className="text-brand-blue hover:text-blue-700 hover:bg-blue-50 w-full">
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <div className="mb-4">
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Blog updates automatically every day with fresh content
              </Badge>
            </div>
            <Button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with RPA Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly updates on the latest RPA trends, UiPath releases, and automation best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 5,000+ automation professionals. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}