import Link from "next/link";
import LogoMark from "@/components/landing/LogoMark";
import "@/components/landing/landing.css";

export const metadata = {
  title: "Privacy Policy — Infinitica",
  description: "Official Privacy Policy of Infinitica Technology Solutions Private Limited.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "01",
      title: "01. Introduction",
      content: (
        <>
          <p className="mb-4">
            Infinitica Technology Solutions Private Limited (&ldquo;Infinitica&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information entrusted to us.
          </p>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, process, store and disclose information when you access or interact with our corporate website, <a href="https://www.infinitica.com" className="text-[var(--pink)] hover:underline">www.infinitica.com</a> (&ldquo;Website&rdquo;).
          </p>
          <p className="mb-4">
            This policy applies to visitors, prospective customers, business partners, job applicants and individuals who communicate with us through the Website.
          </p>
          <p className="mb-4">
            It governs information collected through the Website and does not automatically extend to separate products, platforms or services operated by Infinitica, which may be governed by their own privacy notices and terms.
          </p>
          <p>
            By accessing or using the Website, you acknowledge that you have read this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "02. Information We Collect",
      content: (
        <>
          <p className="mb-5">
            We may collect the following categories of information depending on how you interact with the Website.
          </p>
          
          <h3 className="text-base sm:text-lg font-medium text-white mb-2">2.1 Information You Provide</h3>
          <p className="mb-3 text-sm opacity-80">You may voluntarily provide personal information when you:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Submit an enquiry or contact form.</li>
            <li>Request information about our company, products or services.</li>
            <li>Communicate with our team.</li>
            <li>Submit a job application or professional profile.</li>
            <li>Participate in business discussions, events or other company-related activities.</li>
          </ul>

          <p className="mb-3 text-sm opacity-80">This information may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-5 text-sm opacity-80 font-light">
            <li>Full name.</li>
            <li>Email address.</li>
            <li>Phone number.</li>
            <li>Organisation or company name.</li>
            <li>Job title or professional designation.</li>
            <li>Information contained in your message or enquiry.</li>
            <li>Resume, portfolio or other documents you voluntarily submit.</li>
          </ul>
          <p className="p-3.5 rounded-xl border border-[var(--line)] bg-white/[0.02] text-xs font-mono text-[var(--pink)] opacity-90 mb-6">
            Please avoid submitting sensitive personal information unless it is specifically required and requested for a legitimate purpose.
          </p>

          <h3 className="text-base sm:text-lg font-medium text-white mb-2">2.2 Information Collected Automatically</h3>
          <p className="mb-3 text-sm opacity-80">When you visit the Website, certain technical information may be collected automatically, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>IP address.</li>
            <li>Browser type and version.</li>
            <li>Device and operating system information.</li>
            <li>Pages visited and interactions with the Website.</li>
            <li>Referral sources.</li>
            <li>Date, time and duration of visits.</li>
            <li>Website performance and diagnostic information.</li>
          </ul>
          <p className="mb-6 text-sm opacity-80 font-light">
            This information may be used to understand website usage, maintain security and improve the Website.
          </p>

          <h3 className="text-base sm:text-lg font-medium text-white mb-2">2.3 Cookies and Similar Technologies</h3>
          <p className="mb-3 text-sm opacity-80">
            The Website may use cookies and similar technologies to support essential functionality, understand visitor behaviour and improve user experience.
          </p>
          <p className="mb-3 text-sm opacity-80">Where applicable, these technologies may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Essential cookies required for website functionality.</li>
            <li>Analytics cookies used to understand website traffic.</li>
            <li>Preference cookies used to remember user settings.</li>
            <li>Other technologies used for performance measurement or security.</li>
          </ul>
          <p className="mb-3 text-sm opacity-80 font-light">
            You may manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.
          </p>
          <p className="text-sm opacity-80 font-light">
            Where required by applicable law, we will obtain consent before placing non-essential cookies or using similar tracking technologies.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "03. How We Use Information",
      content: (
        <>
          <p className="mb-3">We process personal information for legitimate business and operational purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-5 text-sm opacity-80 font-light">
            <li>Responding to enquiries and communications.</li>
            <li>Providing information about Infinitica and its offerings.</li>
            <li>Evaluating business opportunities and potential partnerships.</li>
            <li>Reviewing recruitment applications and professional submissions.</li>
            <li>Maintaining, operating and improving the Website.</li>
            <li>Understanding website traffic and visitor engagement.</li>
            <li>Detecting, preventing and investigating security incidents or misuse.</li>
            <li>Meeting legal, regulatory and contractual obligations.</li>
            <li>Protecting the rights, property and legitimate interests of the Company.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            We do not use personal information for purposes that are incompatible with the purpose for which it was collected, unless permitted by applicable law.
          </p>
        </>
      ),
    },
    {
      id: "04",
      title: "04. Artificial Intelligence and Automated Processing",
      content: (
        <>
          <p className="mb-4">
            Infinitica develops and works with intelligent technologies and artificial intelligence systems.
          </p>
          <p className="mb-4">
            Information submitted through the corporate Website may be processed using automated tools or AI-enabled systems where necessary for purposes such as communication management, enquiry handling, operational efficiency, website improvement or internal business workflows.
          </p>
          <p className="mb-4">
            Where third-party AI services are used, information may be processed by those providers in accordance with the applicable contractual arrangements and privacy safeguards.
          </p>
          <p className="mb-4">
            Infinitica does not represent that every interaction with the Website is reviewed or processed exclusively by a human.
          </p>
          <p>
            We do not intentionally use personal information submitted through the corporate Website to train general-purpose AI models without an appropriate lawful basis, consent or contractual authorisation where required.
          </p>
        </>
      ),
    },
    {
      id: "05",
      title: "05. Legal Basis and Purpose of Processing",
      content: (
        <>
          <p className="mb-3">
            We process personal information in accordance with applicable data protection and privacy laws. Depending on the nature of the interaction, processing may be based on:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-5 text-sm opacity-80 font-light">
            <li>Your consent.</li>
            <li>Your request for information or action.</li>
            <li>Steps necessary before entering into a contractual relationship.</li>
            <li>Compliance with applicable legal obligations.</li>
            <li>Other lawful grounds recognised under applicable law.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            Where processing is based on consent, you may withdraw that consent, subject to applicable legal requirements. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.
          </p>
        </>
      ),
    },
    {
      id: "06",
      title: "06. Sharing and Disclosure of Information",
      content: (
        <>
          <p className="mb-4">
            Infinitica does not sell personal information as a business practice.
          </p>
          <p className="mb-4">
            We may disclose or provide access to personal information to the following categories of recipients where necessary:
          </p>
          
          <div className="space-y-4 my-4">
            <div className="p-4 rounded-xl border border-[var(--line)] bg-white/[0.02]">
              <h4 className="text-sm font-medium text-white mb-1">6.1 Service Providers</h4>
              <p className="text-xs text-[var(--cream)] opacity-75 font-light leading-relaxed">
                Third-party service providers supporting our Website and business operations, including hosting, infrastructure, analytics, communication, security and technology providers.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--line)] bg-white/[0.02]">
              <h4 className="text-sm font-medium text-white mb-1">6.2 Professional Advisers</h4>
              <p className="text-xs text-[var(--cream)] opacity-75 font-light leading-relaxed">
                Legal, financial, accounting, audit and other professional advisers where reasonably necessary.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--line)] bg-white/[0.02]">
              <h4 className="text-sm font-medium text-white mb-1">6.3 Business and Corporate Transactions</h4>
              <p className="text-xs text-[var(--cream)] opacity-75 font-light leading-relaxed">
                Information may be disclosed as part of a merger, acquisition, restructuring, financing, asset transfer or similar corporate transaction, subject to appropriate safeguards.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--line)] bg-white/[0.02]">
              <h4 className="text-sm font-medium text-white mb-1">6.4 Legal and Regulatory Requirements</h4>
              <p className="text-xs text-[var(--cream)] opacity-75 font-light leading-relaxed">
                We may disclose information where required by law, court order, regulatory authority or lawful government request, or where reasonably necessary to protect our legal rights and interests.
              </p>
            </div>
          </div>

          <p className="text-xs text-[var(--cream)] opacity-70 font-light">
            Third parties receiving personal information are expected to handle it in accordance with applicable contractual, confidentiality and data protection obligations.
          </p>
        </>
      ),
    },
    {
      id: "07",
      title: "07. Data Retention and Deletion",
      content: (
        <>
          <p className="mb-3">
            We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Responding to enquiries and maintaining relevant communications.</li>
            <li>Managing business and contractual relationships.</li>
            <li>Processing recruitment applications.</li>
            <li>Maintaining security and operational records.</li>
            <li>Complying with applicable legal and regulatory obligations.</li>
          </ul>
          <p className="mb-4 text-sm opacity-80 font-light">
            When personal information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to applicable legal, contractual and operational requirements.
          </p>
          <p className="mb-4 text-sm opacity-80 font-light">
            Information retained in routine backups may remain for a limited period until the relevant backup lifecycle is completed.
          </p>
          <p className="text-sm opacity-80 font-light">
            You may request deletion of personal information by contacting us using the details provided in this policy.
          </p>
        </>
      ),
    },
    {
      id: "08",
      title: "08. Information Security",
      content: (
        <>
          <p className="mb-4">
            Infinitica takes reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or destruction.
          </p>
          <p className="mb-3 text-sm opacity-80">
            Depending on the nature of the information and the relevant processing environment, safeguards may include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Access restrictions and authorisation controls.</li>
            <li>Secure communication protocols.</li>
            <li>Data protection and backup practices.</li>
            <li>Monitoring and security procedures.</li>
            <li>Appropriate confidentiality obligations for personnel and service providers.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            No internet transmission, electronic storage system or digital platform can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security of information transmitted through the Website.
          </p>
        </>
      ),
    },
    {
      id: "09",
      title: "09. International Data Transfers",
      content: (
        <>
          <p className="mb-4">
            Some of our service providers or technology infrastructure may operate outside India.
          </p>
          <p>
            Where personal information is transferred or processed across national borders, we will take reasonable steps to ensure that such processing is conducted in accordance with applicable data protection laws and relevant contractual safeguards.
          </p>
        </>
      ),
    },
    {
      id: "10",
      title: "10. Your Privacy Rights",
      content: (
        <>
          <p className="mb-3 text-sm opacity-80">Subject to applicable law, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Request confirmation of whether we process your personal information.</li>
            <li>Request access to personal information concerning you.</li>
            <li>Request correction or updating of inaccurate information.</li>
            <li>Request deletion of personal information where legally permissible.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Raise a grievance regarding the handling of your personal information.</li>
            <li>Exercise other rights available under applicable data protection laws.</li>
          </ul>
          <p className="mb-3 text-sm opacity-80 font-light">
            To exercise these rights, contact us at{" "}
            <a href="mailto:josh@infinitica.com" className="text-[var(--pink)] font-mono hover:underline">
              josh@infinitica.com
            </a>
            .
          </p>
          <p className="text-xs text-[var(--cream)] opacity-60 font-light">
            We may request reasonable information to verify your identity before processing a request. We will respond within a reasonable period and in accordance with applicable legal requirements.
          </p>
        </>
      ),
    },
    {
      id: "11",
      title: "11. Children's Privacy",
      content: (
        <>
          <p className="mb-4">
            The Website is intended primarily for business, professional and general informational purposes. It is not specifically directed at children.
          </p>
          <p className="mb-4">
            We do not knowingly collect personal information from children through the corporate Website for purposes unrelated to a legitimate and lawful activity.
          </p>
          <p className="mb-4">
            If we become aware that personal information has been collected from a child in circumstances requiring consent or other safeguards, we will take appropriate steps in accordance with applicable law.
          </p>
          <p>
            A parent, guardian or authorised representative may contact us if they believe a child has submitted personal information through the Website.
          </p>
        </>
      ),
    },
    {
      id: "12",
      title: "12. Third-Party Websites and Services",
      content: (
        <>
          <p className="mb-4">
            The Website may contain links to third-party websites, platforms or services.
          </p>
          <p className="mb-4">
            These external websites operate independently and may have their own privacy policies, terms and data collection practices.
          </p>
          <p className="mb-4">
            Infinitica is not responsible for the privacy practices, security or content of third-party websites.
          </p>
          <p>
            We encourage visitors to review the applicable privacy policies before sharing personal information with those services.
          </p>
        </>
      ),
    },
    {
      id: "13",
      title: "13. Data Processing on Behalf of Other Organisations",
      content: (
        <>
          <p className="mb-4">
            In certain business engagements, Infinitica may process personal information on behalf of customers, partners or other organisations.
          </p>
          <p className="mb-4">
            In such circumstances, the relevant organisation may determine the purposes and means of processing, while Infinitica acts in accordance with the applicable contractual arrangements and instructions.
          </p>
          <p>
            Where Infinitica processes personal information in this capacity, the applicable customer or partner privacy notice and contractual terms may also govern the processing.
          </p>
        </>
      ),
    },
    {
      id: "14",
      title: "14. Changes to This Privacy Policy",
      content: (
        <>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our business operations, Website functionality, technology, legal requirements or privacy practices.
          </p>
          <p className="mb-4">
            Any revised version will be published on this page with an updated &ldquo;Last Updated&rdquo; date.
          </p>
          <p>
            We encourage visitors to review this page periodically to remain informed about how their information is handled.
          </p>
        </>
      ),
    },
    {
      id: "15",
      title: "15. Governing Law",
      content: (
        <>
          <p className="mb-4">
            This Privacy Policy shall be governed by and interpreted in accordance with the laws of India, subject to applicable data protection and privacy legislation.
          </p>
          <p>
            Any disputes arising in connection with this policy shall be subject to the jurisdiction of competent courts in India, as applicable.
          </p>
        </>
      ),
    },
    {
      id: "16",
      title: "16. Contact and Grievance Redressal",
      content: (
        <>
          <p className="mb-4">
            For questions, concerns, privacy requests or grievances relating to this Privacy Policy or the processing of your personal information, you may contact:
          </p>
          <div className="p-6 sm:p-7 rounded-2xl border border-[var(--line)] bg-white/[0.02] text-sm space-y-2.5 font-mono mb-4">
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Company</span>
              <span className="text-white font-medium text-base">Infinitica Technology Solutions Private Limited</span>
            </div>
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Corporate Identification Number (CIN)</span>
              <span className="text-[var(--pink)]">U62011TZ2026PTC038021</span>
            </div>
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Registered Office</span>
              <span className="text-[var(--cream)] opacity-90 leading-relaxed block">
                No. 3/55, Christ Home, Kattur, Sarkar Kollapatti, Salem, Salem – 636030, Tamil Nadu, India.
              </span>
            </div>
            <div className="pt-2 border-t border-[var(--line)]">
              <span className="text-[var(--cream)] opacity-60 text-xs block">Privacy and Grievance Contact</span>
              <span className="text-white font-medium">Joshua Allen</span>
            </div>
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Email</span>
              <a href="mailto:josh@infinitica.com" className="text-[var(--pink)] underline hover:text-white">
                josh@infinitica.com
              </a>
            </div>
          </div>
          <p className="text-xs text-[var(--cream)] opacity-70 font-light mb-4">
            Please include &ldquo;Privacy Request&rdquo; or &ldquo;Privacy Grievance&rdquo; in the subject line of your communication to help us direct your request appropriately.
          </p>
          <p className="text-xs text-[var(--cream)] opacity-70 font-light">
            We will acknowledge and address grievances within a reasonable period, subject to applicable statutory requirements.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="inf min-h-screen flex flex-col relative selection:bg-[#ac58e9] selection:text-white">
      {/* ── Ambient Background Layer ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="horizon" />
        <div className="vignette" />
        <div className="grain" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-20 w-full flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[var(--line)] bg-[rgba(7,6,11,0.65)] backdrop-blur-md">
        <Link href="/" className="logo group flex items-center gap-3">
          <LogoMark className="logo-mark" />
          <span className="font-medium tracking-tight">Infinitica</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-10">
          <Link
            href="/contact"
            className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--cream)] opacity-70 hover:opacity-100 hover:text-[var(--pink)] transition-all"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* ── Main Legal Stage ── */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Title Section */}
        <section className="w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 max-w-[1200px] mx-auto">
          <div className="max-w-4xl">
            <p className="eyebrow text-[var(--pink)] mb-5 tracking-[0.24em]">
              ( Corporate Governance · Data Governance )
            </p>
            <h1 className="font-[family-name:var(--display)] text-5xl sm:text-7xl lg:text-[88px] uppercase tracking-[-0.015em] leading-[0.92] mb-6 text-[var(--cream)]">
              Privacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cream)] via-[var(--pink)] to-[var(--violet)]">
                Policy.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--cream)] opacity-85 font-medium mb-3">
              Infinitica Technology Solutions Private Limited
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[var(--cream)] opacity-60 border-l border-[var(--line)] pl-5">
              <span>Effective Date: 01 November 2026</span>
              <span>·</span>
              <span>Last Updated: 01 November 2026</span>
              <span>·</span>
              <span>Version: 1.1</span>
            </div>
          </div>
        </section>

        {/* Structured Sections */}
        <section className="w-full pb-20 sm:pb-28 px-6 sm:px-12 max-w-[1200px] mx-auto">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-[24px] border border-[var(--line)] bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden group hover:border-[var(--pink)]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--pink)]">
                    ( {section.id} )
                  </span>
                  <div className="h-[1px] flex-1 bg-[var(--line)] opacity-50" />
                </div>
                <h2 className="font-[family-name:var(--display)] text-2xl sm:text-3xl uppercase tracking-tight text-[var(--cream)] mb-4">
                  {section.title}
                </h2>
                <div className="text-sm sm:text-base text-[var(--cream)] opacity-75 font-light leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Brand Motto */}
          <div className="mt-12 text-center py-8 border-t border-[var(--line)]">
            <p className="font-[family-name:var(--display)] text-xl sm:text-2xl uppercase tracking-wider text-[var(--cream)] opacity-80">
              Infinitica Technology Solutions Private Limited
            </p>
            <p className="text-xs font-mono text-[var(--pink)] tracking-[0.2em] uppercase mt-1">
              Rethink Ordinary. Reinvent Beyond.
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 w-full border-t border-[var(--line)] bg-[#07060b] mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[var(--cream)] opacity-60">
          <span>&copy; {new Date().getFullYear()} Infinitica Technology Solutions Private Limited.</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[var(--pink)] transition-colors"> </Link>
            <Link href="/terms" className="hover:text-[var(--pink)] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-[var(--pink)] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
