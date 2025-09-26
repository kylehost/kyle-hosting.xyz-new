
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-green-900 text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-green-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center text-gray-300">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Last updated: December 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">
              GameHost Pro Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8 text-slate-700">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    At GameHost Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                    share, and protect your personal information when you use our services.
                  </p>
                  <p>
                    By using our services, you agree to the collection and use of information in accordance with this policy. 
                    We will not use or share your information except as described in this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-lg font-medium text-slate-900 mb-3">Personal Information</h3>
                  <p className="mb-4">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Name, email address, and contact information</li>
                    <li>Account credentials and payment information</li>
                    <li>Support communications and feedback</li>
                    <li>Server configurations and content you upload</li>
                  </ul>

                  <h3 className="text-lg font-medium text-slate-900 mb-3">Automatically Collected Information</h3>
                  <p className="mb-4">We automatically collect certain information when you use our services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP addresses and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Usage patterns and performance metrics</li>
                    <li>Log files and error reports</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate with you about services and support</li>
                    <li>Monitor and analyze usage patterns</li>
                    <li>Detect and prevent fraud or security issues</li>
                    <li>Comply with legal obligations</li>
                    <li>Send marketing communications (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Information Sharing</h2>
                  <p className="mb-4">We do not sell your personal information. We may share your information in these situations:</p>
                  
                  <h3 className="text-lg font-medium text-slate-900 mb-3">Service Providers</h3>
                  <p className="mb-4">
                    We work with third-party service providers who help us operate our business, such as payment processors, 
                    cloud infrastructure providers, and customer support tools.
                  </p>

                  <h3 className="text-lg font-medium text-slate-900 mb-3">Legal Requirements</h3>
                  <p className="mb-4">
                    We may disclose information if required by law, legal process, or to protect our rights, property, 
                    or safety, or that of our users or the public.
                  </p>

                  <h3 className="text-lg font-medium text-slate-900 mb-3">Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to 
                    the acquiring entity.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and notification procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal information for as long as necessary to provide services and fulfill the 
                    purposes outlined in this policy. Specifically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information: Until account deletion plus 30 days</li>
                    <li>Payment records: 7 years for tax and legal compliance</li>
                    <li>Support communications: 3 years</li>
                    <li>Usage logs: 12 months</li>
                    <li>Marketing data: Until consent is withdrawn</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Your Rights</h2>
                  <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request copies of your personal information</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                    <li><strong>Erasure:</strong> Request deletion of your information</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Objection:</strong> Object to processing of your information</li>
                    <li><strong>Restriction:</strong> Request limitation of processing</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at privacy@gamehostpro.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Cookies and Tracking</h2>
                  <p className="mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
                    <li><strong>Marketing cookies:</strong> Used for targeted advertising (with consent)</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">9. International Transfers</h2>
                  <p className="mb-4">
                    Your information may be transferred to and processed in countries outside your residence. 
                    We ensure appropriate safeguards are in place to protect your information during such transfers.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Children's Privacy</h2>
                  <p className="mb-4">
                    Our services are not intended for children under 13. We do not knowingly collect personal 
                    information from children under 13. If you become aware that a child has provided us with 
                    personal information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes 
                    by posting the new policy on our website and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-slate-50 p-4 rounded">
                    <p><strong>GameHost Pro Privacy Team</strong></p>
                    <p>Email: privacy@gamehostpro.com</p>
                    <p>Address: 123 Gaming Street, Tech City, TC 12345</p>
                    <p>Phone: 1-800-GAMEHOST</p>
                  </div>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
