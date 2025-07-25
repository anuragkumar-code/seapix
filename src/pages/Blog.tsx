import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Organizing Your Digital Photo Collection",
      excerpt: "Learn how to efficiently organize thousands of photos with our expert tips and best practices for digital photo management.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Tips & Tricks",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Art of Creating Beautiful Photo Albums",
      excerpt: "Discover the secrets to creating stunning digital photo albums that tell your story and preserve your memories in style.",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Design",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Privacy in the Digital Age: Protecting Your Photos",
      excerpt: "Understanding the importance of photo privacy and how PhotoVault keeps your memories secure in today's digital landscape.",
      author: "Emma Davis",
      date: "March 10, 2024",
      category: "Security",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Photography: Capturing Life on the Go",
      excerpt: "Master the art of mobile photography and learn how to capture stunning photos with just your smartphone.",
      author: "Alex Rodriguez",
      date: "March 8, 2024",
      category: "Photography",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 5,
      title: "Building Family Archives: Preserving History",
      excerpt: "How to create lasting family photo archives that can be passed down through generations.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Family",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Photo Storage and AI",
      excerpt: "Exploring how artificial intelligence is revolutionizing photo organization and what the future holds.",
      author: "David Park",
      date: "March 1, 2024",
      category: "Technology",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Tips & Tricks", "Design", "Security", "Photography", "Family", "Technology"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tips & Tricks": "bg-blue-100 text-blue-800",
      "Design": "bg-purple-100 text-purple-800",
      "Security": "bg-red-100 text-red-800",
      "Photography": "bg-green-100 text-green-800",
      "Family": "bg-yellow-100 text-yellow-800",
      "Technology": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-sea-green to-accent-steel-blue py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PhotoVault Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tips, tutorials, and insights to help you make the most of your digital photo collection.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-secondary-light-mint">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary-sea-green hover:text-white transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-text-dark-teal mb-8">Featured Post</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="border-2 border-primary-sea-green/20 hover:border-primary-sea-green/40 transition-all duration-300 hover:shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-primary-sea-green/20 to-accent-steel-blue/20 rounded-l-lg"></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <span className="text-sm text-text-dark-teal/60">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-dark-teal mb-4">
                        {post.title}
                      </h3>
                      <p className="text-text-dark-teal/80 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-text-dark-teal/60">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-primary-sea-green hover:text-hover-forest-green font-semibold">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-text-dark-teal mb-8">Latest Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="border-2 border-primary-sea-green/10 hover:border-primary-sea-green/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="p-0">
                    <div className="h-48 bg-gradient-to-br from-primary-sea-green/20 to-accent-steel-blue/20 rounded-t-lg"></div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-text-dark-teal/60">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark-teal mb-3 group-hover:text-primary-sea-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-dark-teal/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-text-dark-teal/60">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-secondary-light-mint">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-text-dark-teal/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tips, tutorials, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-primary-sea-green/20 focus:border-primary-sea-green focus:outline-none"
              />
              <button className="bg-primary-sea-green hover:bg-hover-forest-green text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;