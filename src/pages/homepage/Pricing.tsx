import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      popular: false,
      features: [
        { name: "5 Albums", included: true },
        { name: "100 Photos per album", included: true },
        { name: "Basic sharing", included: true },
        { name: "Mobile access", included: true },
        { name: "1GB storage", included: true },
        { name: "Advanced search", included: false },
        { name: "Custom themes", included: false },
        { name: "Unlimited storage", included: false },
        { name: "Priority support", included: false }
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For photography enthusiasts",
      popular: true,
      features: [
        { name: "Unlimited Albums", included: true },
        { name: "Unlimited Photos", included: true },
        { name: "Advanced sharing options", included: true },
        { name: "Mobile & desktop access", included: true },
        { name: "100GB storage", included: true },
        { name: "Advanced search & filters", included: true },
        { name: "Custom themes & layouts", included: true },
        { name: "Collaboration features", included: true },
        { name: "Priority support", included: false }
      ]
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "For professionals and teams",
      popular: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Team collaboration", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: true },
        { name: "Priority support", included: true },
        { name: "White-label options", included: true },
        { name: "Enterprise security", included: true }
      ]
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
              Simple Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your photo storage needs. Upgrade or downgrade anytime.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary-sea-green shadow-lg scale-105' 
                    : 'border-primary-sea-green/10 hover:border-primary-sea-green/30'
                }`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-sea-green text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-text-dark-teal mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-sea-green">{plan.price}</span>
                      <span className="text-text-dark-teal/60 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-text-dark-teal/80">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-colors ${
                      plan.popular
                        ? 'bg-primary-sea-green hover:bg-hover-forest-green text-white'
                        : 'bg-secondary-light-mint hover:bg-primary-sea-green/10 text-primary-sea-green border border-primary-sea-green'
                    }`}>
                      Get Started
                    </button>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-hover-forest-green mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                          )}
                          <span className={`${
                            feature.included ? 'text-text-dark-teal' : 'text-text-dark-teal/50'
                          }`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary-light-mint">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark-teal mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "What happens to my photos if I cancel?",
                  answer: "Your photos remain accessible for 30 days after cancellation. You can download them during this period."
                },
                {
                  question: "Is there a family plan available?",
                  answer: "Our Premium plan includes team collaboration features that work great for families. Contact us for custom family pricing."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee for all paid plans. No questions asked."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-2 border-primary-sea-green/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-text-dark-teal mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-dark-teal/80">
                      {faq.answer}
                    </p>
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

export default Pricing;