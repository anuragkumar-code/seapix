import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, profile picture)",
        "Photos and albums you upload to our service",
        "Usage data and analytics to improve our service",
        "Device information and browser data for security purposes"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our photo album service",
        "To personalize your experience and improve our features",
        "To communicate with you about service updates",
        "To ensure the security and integrity of our platform"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Photos are only visible to you unless you choose to share them",
        "We may share aggregated, non-personal data for analytics",
        "Legal compliance may require disclosure in certain circumstances"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "Regular security audits and updates to our systems",
        "Secure cloud storage with redundant backups",
        "Limited access to personal data by authorized personnel only"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access and download your personal data at any time",
        "Delete your account and associated data",
        "Update or correct your personal information",
        "Control privacy settings and sharing preferences"
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use essential cookies for service functionality",
        "Analytics cookies to understand user behavior (optional)",
        "You can manage cookie preferences in your browser",
        "No tracking across other websites without consent"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-light-mint to-white">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-dark-teal mb-6 font-poppins">
              Privacy Policy
            </h1>
            <p className="text-xl text-text-dark-teal/70 font-merriweather">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
            </p>
            <p className="text-sm text-text-dark-teal/60 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-primary-sea-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-sea-green font-poppins">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-text-dark-teal/80">
                        <span className="w-2 h-2 bg-primary-sea-green rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-accent-steel-blue/20 bg-accent-steel-blue/5">
            <CardHeader>
              <CardTitle className="text-2xl text-accent-steel-blue font-poppins">
                Contact Us About Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-dark-teal/80 mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-text-dark-teal/70">
                <div>
                  <p><strong>Email:</strong> privacy@photovault.com</p>
                  <p><strong>Response Time:</strong> Within 48 hours</p>
                </div>
                <div>
                  <p><strong>Data Protection Officer:</strong> Available upon request</p>
                  <p><strong>Address:</strong> Available upon request</p>
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

export default Privacy;