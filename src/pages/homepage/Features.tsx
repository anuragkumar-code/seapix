import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FolderOpen, 
  Share2, 
  Shield, 
  Search, 
  Smartphone,
  Cloud,
  Palette,
  Users,
  Download,
  Lock,
  Zap
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Drag and drop or click to upload photos in any format. Bulk upload supported.",
      badge: "Core"
    },
    {
      icon: FolderOpen,
      title: "Smart Albums",
      description: "Organize your photos into beautiful, customizable albums with intuitive management.",
      badge: "Core"
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Share your albums with friends and family with customizable privacy settings.",
      badge: "Social"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your photos are encrypted and secure. You control who sees what.",
      badge: "Security"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find any photo instantly with our powerful search and filtering capabilities.",
      badge: "Pro"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Access your albums anywhere, anytime from any device.",
      badge: "Core"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Unlimited cloud storage for all your precious memories.",
      badge: "Pro"
    },
    {
      icon: Palette,
      title: "Customization",
      description: "Personalize your albums with themes, layouts, and styling options.",
      badge: "Pro"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Invite others to contribute to shared albums and collections.",
      badge: "Social"
    },
    {
      icon: Download,
      title: "Export & Backup",
      description: "Download your albums or create backups anytime you want.",
      badge: "Core"
    },
    {
      icon: Lock,
      title: "Private Albums",
      description: "Create password-protected albums for your most sensitive memories.",
      badge: "Security"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick loading and smooth browsing.",
      badge: "Core"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Pro': return 'default';
      case 'Social': return 'secondary';
      case 'Security': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-sea-green to-accent-steel-blue py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to create, organize, and share your digital photo albums with ease and security.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-primary-sea-green/10 hover:border-primary-sea-green/30 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-sea-green/10 rounded-lg flex items-center justify-center group-hover:bg-primary-sea-green/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary-sea-green" />
                      </div>
                      <Badge variant={getBadgeVariant(feature.badge)} className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark-teal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-dark-teal/80">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary-light-mint">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-dark-teal/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust PhotoVault to preserve their most precious memories.
            </p>
            <button className="bg-primary-sea-green hover:bg-hover-forest-green text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Creating Albums
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;