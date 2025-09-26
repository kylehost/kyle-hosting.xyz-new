
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
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
              GameHost Pro Terms of Service Agreement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8 text-slate-700">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using GameHost Pro services ("Services"), you agree to be bound by these Terms of Service ("Terms"). 
                    If you do not agree to these Terms, you may not use our Services.
                  </p>
                  <p>
                    These Terms apply to all users of the Services, including without limitation users who are browsers, customers, 
                    merchants, vendors, and contributors of content.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Description of Services</h2>
                  <p className="mb-4">
                    GameHost Pro provides game server hosting, VPS hosting, web hosting, and related services. We reserve the right to 
                    modify, suspend, or discontinue any aspect of the Services at any time.
                  </p>
                  <p>
                    Our Services are provided "as is" and we make no warranties regarding the availability, functionality, or 
                    performance of the Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Account Registration</h2>
                  <p className="mb-4">
                    To use certain features of our Services, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
                  <p className="mb-4">
                    You agree not to use our Services for any illegal, harmful, or inappropriate purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Hosting illegal content or malicious software</li>
                    <li>Sending spam or unsolicited communications</li>
                    <li>Attempting to gain unauthorized access to systems</li>
                    <li>Interfering with other users' enjoyment of Services</li>
                    <li>Consuming excessive server resources</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Payment Terms</h2>
                  <p className="mb-4">
                    Payment for Services is due in advance unless otherwise agreed. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pay all fees when due</li>
                    <li>Provide valid payment information</li>
                    <li>Authorize automatic recurring charges</li>
                    <li>Pay any applicable taxes</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to suspend Services for non-payment and charge late fees for overdue accounts.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Service Level Agreement</h2>
                  <p className="mb-4">
                    We strive to provide 99.9% uptime for our Services, measured monthly. In the event of downtime exceeding this target, 
                    you may be eligible for service credits as outlined in our SLA document.
                  </p>
                  <p>
                    Scheduled maintenance, force majeure events, and issues caused by customer actions are excluded from uptime calculations.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Data and Content</h2>
                  <p className="mb-4">
                    You retain ownership of content you upload to our Services. However, you grant us necessary licenses to provide 
                    the Services, including storing, backing up, and transmitting your content.
                  </p>
                  <p>
                    We may remove content that violates these Terms or applicable laws. You are responsible for maintaining 
                    backups of your important data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the maximum extent permitted by law, GameHost Pro shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages, including loss of profits, data, or business interruption.
                  </p>
                  <p>
                    Our total liability to you for any claims related to the Services shall not exceed the amount you paid 
                    for the Services in the twelve months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Termination</h2>
                  <p className="mb-4">
                    Either party may terminate Services at any time. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your access to Services will cease</li>
                    <li>You remain liable for all charges incurred</li>
                    <li>We may delete your data after a reasonable period</li>
                    <li>Provisions that should survive termination will continue</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Changes to Terms</h2>
                  <p className="mb-4">
                    We may update these Terms from time to time. Material changes will be communicated via email or 
                    prominent notice on our website. Continued use of Services after changes constitutes acceptance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Contact Information</h2>
                  <p>
                    If you have questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-4 bg-slate-50 p-4 rounded">
                    <p><strong>GameHost Pro Legal Department</strong></p>
                    <p>Email: legal@gamehostpro.com</p>
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

export default TermsOfService;
