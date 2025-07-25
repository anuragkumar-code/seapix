import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Heart, Rocket, Users, Code, Mail, Github, Linkedin } from 'lucide-react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const opportunities = [
    {
      title: "Frontend Developer",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      description: "Help us build beautiful, responsive user interfaces"
    },
    {
      title: "Backend Developer", 
      skills: ["Node.js", "PostgreSQL", "APIs"],
      description: "Build robust backend systems and APIs"
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "Design Systems", "User Research"],
      description: "Create intuitive and beautiful user experiences"
    },
    {
      title: "Mobile Developer",
      skills: ["React Native", "Flutter", "Mobile UI"],
      description: "Bring PhotoVault to mobile platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-light-mint to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Badge className="bg-primary-sea-green/10 text-primary-sea-green border-primary-sea-green/20 mb-4">
              We're Building Something Amazing
            </Badge>
            <h1 className="text-5xl font-bold text-text-dark-teal mb-6 font-poppins">
              Join Our <span className="text-primary-sea-green">Startup Journey</span>
            </h1>
            <p className="text-xl text-text-dark-teal/70 mb-8 font-merriweather leading-relaxed">
              We're not hiring in the traditional sense - we're looking for passionate developers 
              who want to be part of something bigger. No salaries yet, but equity, experience, 
              and the chance to build the future of digital photo albums.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary-sea-green/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary-sea-green mx-auto mb-4" />
                <h3 className="font-semibold text-text-dark-teal mb-2">Passion Over Pay</h3>
                <p className="text-sm text-text-dark-teal/60">
                  We believe in building something meaningful together
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-sea-green/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 text-primary-sea-green mx-auto mb-4" />
                <h3 className="font-semibold text-text-dark-teal mb-2">Startup Equity</h3>
                <p className="text-sm text-text-dark-teal/60">
                  Early team members get meaningful ownership stakes
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-sea-green/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary-sea-green mx-auto mb-4" />
                <h3 className="font-semibold text-text-dark-teal mb-2">Shape the Vision</h3>
                <p className="text-sm text-text-dark-teal/60">
                  Have real impact on product decisions and direction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-text-dark-teal text-center mb-12 font-poppins">
            What We Can Offer (For Now)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-accent-steel-blue/20">
              <CardHeader>
                <CardTitle className="text-accent-steel-blue">✨ The Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-dark-teal/70">
                  <li>• Work with cutting-edge technologies</li>
                  <li>• Build a product from ground up</li>
                  <li>• Mentorship and skill development</li>
                  <li>• Portfolio-worthy projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent-steel-blue/20">
              <CardHeader>
                <CardTitle className="text-accent-steel-blue">🚀 The Future</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-text-dark-teal/70">
                  <li>• Equity in the company</li>
                  <li>• First priority for paid positions</li>
                  <li>• Co-founder potential for key contributors</li>
                  <li>• Revenue sharing when we monetize</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-text-dark-teal text-center mb-12 font-poppins">
            Areas We Need Help With
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-primary-sea-green/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary-sea-green flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary-sea-green/10 text-primary-sea-green">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary-sea-green/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-text-dark-teal font-poppins">
                Ready to Join Us?
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about yourself and let's start a conversation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark-teal mb-2">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="border-primary-sea-green/30 focus:border-primary-sea-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark-teal mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="border-primary-sea-green/30 focus:border-primary-sea-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-dark-teal mb-2">
                    Skills & Technologies
                  </label>
                  <Input
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    placeholder="React, Node.js, Python, Design, etc."
                    className="border-primary-sea-green/30 focus:border-primary-sea-green"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-dark-teal mb-2">
                    Tell Us About Yourself
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="What excites you about this opportunity? What can you bring to the team?"
                    rows={4}
                    className="border-primary-sea-green/30 focus:border-primary-sea-green"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-sea-green hover:bg-hover-forest-green text-white"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-primary-sea-green/20">
                <p className="text-center text-text-dark-teal/60 mb-4">
                  Or reach out directly:
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-primary-sea-green/30">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary-sea-green/30">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary-sea-green/30">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;