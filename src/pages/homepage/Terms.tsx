import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using PhotoVault, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Service Description",
      content: "PhotoVault is a digital photo storage and album creation service that allows users to upload, organize, and share their photos. We provide cloud storage and various tools to help you manage your digital photo collection."
    },
    {
      title: "3. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password."
    },
    {
      title: "4. Content Ownership and Rights",
      content: "You retain all rights to your uploaded content. PhotoVault does not claim ownership of your photos or albums. However, by uploading content, you grant us a license to store, process, and display your content as necessary to provide our services."
    },
    {
      title: "5. Privacy and Data Protection",
      content: "Your privacy is important to us. We collect and use information in accordance with our Privacy Policy. We implement appropriate security measures to protect your personal information and uploaded content."
    },
    {
      title: "6. Prohibited Uses",
      content: "You may not use PhotoVault to upload, store, or share content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable."
    },
    {
      title: "7. Service Availability",
      content: "We strive to maintain service availability but cannot guarantee uninterrupted access. We may temporarily suspend the service for maintenance or updates with reasonable notice."
    },
    {
      title: "8. Limitation of Liability",
      content: "PhotoVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service."
    },
    {
      title: "9. Termination",
      content: "We may terminate or suspend your account at any time for violations of these terms. Upon termination, you will have 30 days to download your content before it is permanently deleted."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. We will provide notice of significant changes through the service or by email."
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
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using PhotoVault.
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-secondary-light-mint">
          <div className="container mx-auto px-6 text-center">
            <p className="text-text-dark-teal/80">
              Last updated: March 1, 2024
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-text-dark-teal mb-6">
                Terms and Conditions
              </h2>
              <p className="text-lg text-text-dark-teal/80 leading-relaxed">
                Welcome to PhotoVault. These terms and conditions outline the rules and regulations 
                for the use of PhotoVault's services. By using our service, you agree to these terms.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="border-2 border-primary-sea-green/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-text-dark-teal">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-dark-teal/80 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <Card className="mt-12 border-2 border-primary-sea-green/20 bg-secondary-light-mint">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-text-dark-teal mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-text-dark-teal/80 mb-6">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <div className="space-y-2 text-text-dark-teal">
                  <p><strong>Email:</strong> legal@photovault.com</p>
                  <p><strong>Address:</strong> 123 Innovation Drive, Tech Valley, CA 94000</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;