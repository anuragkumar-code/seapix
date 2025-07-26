import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a platform that brings people together through shared memories and experiences."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in digital photo management and sharing."
    },
    {
      icon: Heart,
      title: "Privacy",
      description: "Your memories are precious. We ensure your photos are secure and private, shared only when you choose."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every feature, ensuring the best possible experience for our users."
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-sea-green to-accent-steel-blue py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About PhotoVault
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're passionate about helping people preserve, organize, and share their most precious memories through beautiful digital albums.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-secondary-light-mint">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-text-dark-teal">
                <p className="text-lg leading-relaxed mb-6">
                  PhotoVault was born from a simple idea: everyone deserves a beautiful, secure way to store and share their memories. 
                  In an age where photos are scattered across devices and platforms, we wanted to create a centralized home for your digital life.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Founded in 2024, our team of passionate developers and designers came together with the mission to revolutionize 
                  how people interact with their photo collections. We believe that memories should be easily accessible, 
                  beautifully presented, and safely stored.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, PhotoVault serves thousands of users worldwide, helping them create stunning digital albums that 
                  preserve their most important moments for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-2 border-primary-sea-green/10 hover:border-primary-sea-green/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-sea-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-sea-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark-teal mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-dark-teal/80">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary-light-mint">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-8">
              Meet Our Team
            </h2>
            <p className="text-lg text-text-dark-teal/80 max-w-3xl mx-auto mb-12">
              We're a diverse team of creators, engineers, and dreamers united by our passion for preserving memories and building exceptional user experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3].map((member) => (
                <Card key={member} className="border-2 border-primary-sea-green/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-primary-sea-green/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-text-dark-teal mb-2">Team Member</h3>
                    <p className="text-text-dark-teal/80">Role Title</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;