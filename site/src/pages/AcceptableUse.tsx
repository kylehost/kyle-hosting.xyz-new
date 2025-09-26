
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar } from "lucide-react";
import { legalConfig } from "../../siteconfig";

const AcceptableUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-purple-900">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-red-900 via-slate-800 to-red-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-400 animate-bounce" />
          <Badge className="mb-4 bg-red-600/20 text-red-300 border-red-500/50">
            Legal Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Acceptable Use Policy
          </h1>
          <div className="flex items-center justify-center text-gray-300">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Last updated: {legalConfig.acceptableUse.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-800/80 border-slate-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                GameHost Pro Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8 text-slate-300">
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">1. Purpose and Scope</h2>
                    <p className="mb-4">
                      This Acceptable Use Policy ("AUP") governs the use of GameHost Pro services and is designed to protect 
                      our users, network, and reputation. This policy applies to all users of our services, including game 
                      server hosting, VPS, web hosting, and related services.
                    </p>
                    <p>
                      Violation of this policy may result in service suspension, termination, or legal action. We reserve 
                      the right to determine what constitutes a violation of this policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">2. Prohibited Activities</h2>
                    <p className="mb-4">Users may not engage in activities that:</p>
                    
                    <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-medium text-red-300 mb-3">Prohibited Activities Include:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {legalConfig.acceptableUse.prohibitedActivities.map((activity, index) => (
                          <li key={index} className="text-slate-300">{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">3. Gaming-Specific Guidelines</h2>
                    
                    <h3 className="text-lg font-medium text-orange-300 mb-3">Game Server Conduct</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Respect game publishers' terms of service</li>
                      <li>Do not host pirated games or unauthorized content</li>
                      <li>Maintain appropriate community standards</li>
                      <li>Do not use servers for commercial purposes without proper licensing</li>
                    </ul>

                    <h3 className="text-lg font-medium text-orange-300 mb-3">Community Management</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Moderate your gaming communities responsibly</li>
                      <li>Address reports of harassment or abuse</li>
                      <li>Maintain age-appropriate content where applicable</li>
                      <li>Respect intellectual property in custom content</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">4. Resource Usage Guidelines</h2>
                    <p className="mb-4">To ensure fair usage for all customers:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>CPU usage should not consistently exceed allocated resources</li>
                      <li>Memory usage should remain within plan limits</li>
                      <li>Storage should be used efficiently and appropriately</li>
                      <li>Network usage should be reasonable and not impact other users</li>
                      <li>Database connections should be optimized and limited</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">5. Monitoring and Enforcement</h2>
                    <p className="mb-4">
                      We monitor our network and services to ensure compliance with this policy. Our monitoring includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Automated security and abuse detection systems</li>
                      <li>Resource usage monitoring and alerting</li>
                      <li>Investigation of reported violations</li>
                      <li>Regular security assessments and audits</li>
                    </ul>
                    <p>
                      We do not routinely monitor the content of your private communications or files, but we may 
                      investigate when we receive reports of policy violations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">6. Violation Response</h2>
                    <p className="mb-4">When a violation is detected, we may take the following actions:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-yellow-300 mb-3">Minor Violations</h3>
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Warning notification with remediation instructions</li>
                          <li>Temporary resource limitations</li>
                          <li>Required policy acknowledgment</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-red-300 mb-3">Serious Violations</h3>
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Immediate service suspension</li>
                          <li>Content removal or blocking</li>
                          <li>Account termination</li>
                          <li>Legal action when appropriate</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">7. Contact Information</h2>
                    <p className="mb-4">
                      For questions about this Acceptable Use Policy, please contact:
                    </p>
                    <div className="bg-slate-700/50 p-6 rounded-lg border border-red-500/30">
                      <p className="text-white font-semibold mb-2">GameHost Pro Policy Team</p>
                      <div className="space-y-1 text-sm">
                        <p>Email: policy@gamehostpro.com</p>
                        <p>Abuse Reports: abuse@gamehostpro.com</p>
                        <p>Address: 123 Gaming Street, Tech City, TC 12345</p>
                        <p>Phone: 1-800-GAMEHOST</p>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AcceptableUse;
