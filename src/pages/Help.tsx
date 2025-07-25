import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageSquare, Book, Video, Mail, Phone } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: "How do I create my first album?",
      answer: "After logging in, click the 'Add Album' button on your dashboard. Fill in the album details like name, description, and privacy settings, then start uploading your photos!"
    },
    {
      question: "What file formats are supported for photos?",
      answer: "We support all common image formats including JPEG, PNG, GIF, WebP, and HEIC. Maximum file size is 50MB per photo."
    },
    {
      question: "How can I share my albums with others?",
      answer: "You can make albums public, share with specific people via email, or generate shareable links. Go to your album settings to configure sharing options."
    },
    {
      question: "Is there a limit to how many photos I can upload?",
      answer: "Free accounts can store up to 1,000 photos. Premium accounts have unlimited storage. Check our pricing page for more details."
    },
    {
      question: "How do I organize my photos within an album?",
      answer: "You can drag and drop photos to reorder them, add captions, create sub-albums, and use tags to organize your memories better."
    },
    {
      question: "Can I download my photos and albums?",
      answer: "Yes! You can download individual photos or entire albums as ZIP files. Go to the album menu and select 'Download Album'."
    },
    {
      question: "How secure are my photos?",
      answer: "We use enterprise-grade encryption both in transit and at rest. Your photos are stored securely and only you can access them unless you choose to share."
    },
    {
      question: "Can I access PhotoVault on mobile devices?",
      answer: "Yes! Our web app is fully responsive and works great on mobile. We're also working on dedicated mobile apps coming soon."
    }
  ];

  const supportCategories = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Learn the basics of PhotoVault",
      topics: ["Account setup", "First album", "Uploading photos", "Basic navigation"]
    },
    {
      title: "Account & Billing",
      icon: MessageSquare,
      description: "Manage your account and subscription",
      topics: ["Account settings", "Billing questions", "Upgrade/downgrade", "Cancellation"]
    },
    {
      title: "Features & Tools",
      icon: Video,
      description: "Make the most of PhotoVault features",
      topics: ["Album organization", "Sharing options", "Privacy settings", "Advanced features"]
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-light-mint to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-text-dark-teal mb-6 font-poppins">
            Help Center
          </h1>
          <p className="text-xl text-text-dark-teal/70 mb-8 font-merriweather">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-dark-teal/50 w-5 h-5" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help topics, features, or questions..."
              className="pl-12 py-4 text-lg border-primary-sea-green/30 focus:border-primary-sea-green"
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-text-dark-teal text-center mb-12 font-poppins">
            Browse by Category
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <Card key={index} className="border-primary-sea-green/20 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <category.icon className="w-12 h-12 text-primary-sea-green mx-auto mb-4" />
                  <CardTitle className="text-primary-sea-green">{category.title}</CardTitle>
                  <p className="text-text-dark-teal/60">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="mr-2 mb-2 bg-primary-sea-green/10 text-primary-sea-green">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-text-dark-teal text-center mb-12 font-poppins">
            Frequently Asked Questions
          </h2>
          
          <Card className="border-primary-sea-green/20">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-primary-sea-green/10">
                    <AccordionTrigger className="px-6 py-4 text-left hover:text-primary-sea-green">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-text-dark-teal/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {searchQuery && filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-dark-teal/60 mb-4">
                No results found for "{searchQuery}"
              </p>
              <Button 
                onClick={() => setSearchQuery('')}
                variant="outline"
                className="border-primary-sea-green/30"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark-teal mb-4 font-poppins">
              Still Need Help?
            </h2>
            <p className="text-xl text-text-dark-teal/70">
              Can't find what you're looking for? Get in touch with our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <Card className="border-accent-steel-blue/20">
              <CardHeader>
                <CardTitle className="text-accent-steel-blue">Contact Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 border border-primary-sea-green/20 rounded-lg">
                  <Mail className="w-8 h-8 text-primary-sea-green" />
                  <div>
                    <h4 className="font-semibold text-text-dark-teal">Email Support</h4>
                    <p className="text-sm text-text-dark-teal/60">help@photovault.com</p>
                    <p className="text-xs text-text-dark-teal/50">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-primary-sea-green/20 rounded-lg">
                  <Phone className="w-8 h-8 text-primary-sea-green" />
                  <div>
                    <h4 className="font-semibold text-text-dark-teal">Phone Support</h4>
                    <p className="text-sm text-text-dark-teal/60">+1 (555) 123-4567</p>
                    <p className="text-xs text-text-dark-teal/50">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-primary-sea-green/20 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-primary-sea-green" />
                  <div>
                    <h4 className="font-semibold text-text-dark-teal">Live Chat</h4>
                    <p className="text-sm text-text-dark-teal/60">Available in app</p>
                    <p className="text-xs text-text-dark-teal/50">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-primary-sea-green/20">
              <CardHeader>
                <CardTitle className="text-primary-sea-green">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-dark-teal mb-1">
                        Name
                      </label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your name"
                        className="border-primary-sea-green/30 focus:border-primary-sea-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark-teal mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your@email.com"
                        className="border-primary-sea-green/30 focus:border-primary-sea-green"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-dark-teal mb-1">
                      Subject
                    </label>
                    <Input
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      placeholder="How can we help?"
                      className="border-primary-sea-green/30 focus:border-primary-sea-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-dark-teal mb-1">
                      Message
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Describe your issue or question in detail..."
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;