import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Scale, Mail } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Enmark Power",
  description: "Terms and conditions for using Enmark Power's products and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-6">
            <Scale className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Terms of Service</h1>
          <p className="text-primary-foreground/80">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mt-0 mb-2">Agreement to Terms</h2>
                  <p className="text-muted-foreground mb-0">
                    By accessing or using the services of Enmark Power Private Limited (CIN: U26109TN2023PTC162673), you
                    agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may
                    not access our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    1
                  </span>
                  Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enmark Power Private Limited provides electrical equipment manufacturing, installation, and
                  maintenance services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Power transformers and distribution equipment</li>
                  <li>Industrial switchgear and control panels</li>
                  <li>Electrical design and engineering consultancy</li>
                  <li>Installation and commissioning services</li>
                  <li>Preventive maintenance and technical support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    2
                  </span>
                  Product Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products manufactured by Enmark Power come with standard warranties as specified in individual
                  product documentation. Warranty terms include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Transformers: 24 months from date of commissioning or 30 months from dispatch, whichever is earlier
                  </li>
                  <li>Switchgear: 18 months from date of installation or 24 months from dispatch</li>
                  <li>Control panels: 12 months from date of commissioning</li>
                  <li>Warranty covers manufacturing defects only, not damage due to misuse or negligence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    3
                  </span>
                  Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Standard payment terms for our products and services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Advance payment: 30% on order confirmation</li>
                  <li>Against dispatch: 60% before shipment</li>
                  <li>Balance: 10% within 30 days of commissioning</li>
                  <li>Service contracts: As per individual agreement terms</li>
                  <li>Late payments may attract interest at 18% per annum</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    4
                  </span>
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Enmark Power shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of our products or services. Our total liability shall not exceed the
                  amount paid by you for the specific product or service giving rise to the claim. This limitation
                  applies to the fullest extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    5
                  </span>
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All intellectual property rights in our products, designs, documentation, and branding remain the
                  exclusive property of Enmark Power Private Limited. Customers are granted a non-exclusive license to
                  use our products for their intended purpose only. Reproduction, modification, or distribution of our
                  proprietary materials without written consent is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">
                    6
                  </span>
                  Governing Law & Disputes
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts
                  in Chennai, Tamil Nadu. Parties agree to attempt resolution through mediation before pursuing legal
                  action.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Questions About Our Terms?</h3>
              <p className="text-primary-foreground/80 mb-4">Contact our legal team for any clarifications</p>
              <p className="text-secondary font-medium">legal@enmarkpower.com</p>
              <p className="text-primary-foreground/60 text-sm mt-4">
                Enmark Power Private Limited | CIN: U26109TN2023PTC162673
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
