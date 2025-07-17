import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Upload, 
  Share2, 
  Lock, 
  Smartphone, 
  Palette, 
  Cloud,
  Users,
  Heart,
  Search
} from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Easy Upload',
    description: 'Drag and drop your photos or upload multiple files at once. Supports all major image formats.',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: 'Beautiful Albums',
    description: 'Create stunning photo albums with customizable themes and layouts that showcase your memories perfectly.',
    color: 'text-accent-steel-blue'
  },
  {
    icon: Share2,
    title: 'Smart Sharing',
    description: 'Share your albums with friends and family, or keep them private. Control who sees what with granular permissions.',
    color: 'text-hover-forest-green'
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'Your photos are encrypted and stored securely in the cloud. Never worry about losing your precious memories.',
    color: 'text-primary'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Access your albums anywhere, anytime. Our responsive design works perfectly on all devices.',
    color: 'text-accent-steel-blue'
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find photos instantly with AI-powered search. Search by people, places, objects, or even emotions.',
    color: 'text-hover-forest-green'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Invite friends and family to contribute to shared albums. Perfect for events and family gatherings.',
    color: 'text-primary'
  },
  {
    icon: Cloud,
    title: 'Auto Backup',
    description: 'Never lose a photo again. Automatic backup from your devices keeps everything safe and synchronized.',
    color: 'text-accent-steel-blue'
  },
  {
    icon: Heart,
    title: 'Memories That Last',
    description: 'Built to preserve your memories for generations. High-quality storage that stands the test of time.',
    color: 'text-hover-forest-green'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-6 lg:py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
            Everything You Need to
            <span className="text-primary block">Preserve Your Memories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-merriweather max-w-3xl mx-auto leading-relaxed">
            PhotoVault provides all the tools you need to create, organize, and share your digital photo albums 
            with the people who matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold font-poppins text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-light-mint border border-primary/20 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-foreground mb-4">
            Ready to Create Your First Album?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PhotoVault to keep their memories safe and beautifully organized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;