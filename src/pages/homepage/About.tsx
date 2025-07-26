import { Link } from 'react-router-dom';
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
      <main className="pt-16">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border border-primary-sea-green/20 hover:shadow-md transition-all duration-300 bg-white">
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-12 text-center">
              Meet the Team
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Founder Card */}
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="flex flex-col items-center p-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg">
                    <img src="/30575025.jpeg" alt="Anurag Kumar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark-teal">Anurag Kumar</h3>
                  <p className="text-text-dark-teal/70 text-sm mb-3">Founder & Full Stack Engineer</p>
                  <p className="text-center text-text-dark-teal/80">
                    Passionate about building meaningful digital experiences through clean code and creative design.
                  </p>
                </div>
              </div>

              {/* Join Us Card */}
              <div className="bg-gradient-to-br from-secondary-light-mint to-primary-sea-green/20 border-2 border-dashed border-primary-sea-green/30 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <h3 className="text-xl font-semibold text-text-dark-teal mb-3 text-center">Join the Mission</h3>
                  <p className="text-text-dark-teal/80 text-center">
                    We're just getting started. If you're passionate about tech, design, or photography — come shape the future of memories with us.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/career"
                    className="inline-block bg-primary-sea-green text-white px-5 py-2 rounded-full hover:bg-primary-sea-green/90 transition"
                  >
                    Explore Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
