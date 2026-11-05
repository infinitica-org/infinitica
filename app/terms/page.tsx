import Link from "next/link";
import LogoMark from "@/components/landing/LogoMark";
import "@/components/landing/landing.css";

export const metadata = {
  title: "Terms & Conditions — Infinitica",
  description: "Official Terms & Conditions of Infinitica Technology Solutions Private Limited.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    {
      id: "01",
      title: "01. Introduction and Acceptance",
      content: (
        <>
          <p className="mb-4">
            Welcome to the website of Infinitica Technology Solutions Private Limited (&ldquo;Infinitica&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;).
          </p>
          <p className="mb-4">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website, <a href="https://www.infinitica.com" className="text-[var(--pink)] hover:underline">www.infinitica.com</a> (&ldquo;Website&rdquo;), including its content, information, features and communication channels.
          </p>
          <p className="mb-4">
            By accessing, browsing or using the Website, you acknowledge that you have read, understood and agreed to these Terms. If you do not agree with these Terms, you should discontinue use of the Website.
          </p>
          <p>
            These Terms apply to all visitors, prospective customers, business partners, job applicants and other individuals accessing the Website.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "02. About Infinitica",
      content: (
        <>
          <p className="mb-4">
            Infinitica Technology Solutions Private Limited is a company incorporated under the laws of India.
          </p>
          <p className="mb-4">
            The Website provides information about the Company, its research, technology, products, services, initiatives and business activities.
          </p>
          <div className="p-6 rounded-2xl border border-[var(--line)] bg-white/[0.02] text-sm space-y-2 font-mono">
            <h4 className="text-white font-medium text-base mb-2">Company Details</h4>
            <p className="text-[var(--cream)] opacity-80"><strong className="text-white">Legal Name:</strong> Infinitica Technology Solutions Private Limited</p>
            <p className="text-[var(--cream)] opacity-80"><strong className="text-white">CIN:</strong> U62011TZ2026PTC038021</p>
            <p className="text-[var(--cream)] opacity-80"><strong className="text-white">Registered Office:</strong> No. 3/55, Christ Home, Kattur, Sarkar Kollapatti, Salem, Salem – 636030, Tamil Nadu, India.</p>
            <p className="text-[var(--cream)] opacity-80"><strong className="text-white">Website:</strong> www.infinitica.com</p>
            <p className="text-[var(--pink)]"><strong className="text-white">Contact:</strong> josh@infinitica.com</p>
          </div>
        </>
      ),
    },
    {
      id: "03",
      title: "03. Permitted Use of the Website",
      content: (
        <>
          <p className="mb-3 text-sm opacity-80">You may access and use the Website for lawful purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Learning about Infinitica and its activities.</li>
            <li>Understanding our technology, products and services.</li>
            <li>Submitting business enquiries and partnership proposals.</li>
            <li>Exploring professional and career opportunities.</li>
            <li>Communicating with our team.</li>
            <li>Accessing publicly available information and resources.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            You agree to use the Website responsibly and in compliance with applicable laws and these Terms.
          </p>
        </>
      ),
    },
    {
      id: "04",
      title: "04. Prohibited Activities",
      content: (
        <>
          <p className="mb-3 text-sm opacity-80">You must not:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-sm opacity-80 font-light">
            <li>Use the Website for unlawful, fraudulent, deceptive or malicious purposes.</li>
            <li>Attempt to gain unauthorised access to the Website, its servers, systems or associated infrastructure.</li>
            <li>Interfere with the Website&apos;s availability, integrity, security or performance.</li>
            <li>Introduce viruses, malicious code, harmful scripts or other disruptive technologies.</li>
            <li>Scrape, harvest, extract or systematically collect information from the Website through automated means without our prior written permission, except where permitted by applicable law.</li>
            <li>Reverse engineer, decompile or attempt to derive the underlying source code of Website components, except where such restriction is prohibited by applicable law.</li>
            <li>Impersonate another individual or organisation.</li>
            <li>Submit false, misleading, unlawful or infringing information through our communication channels.</li>
            <li>Use our name, branding or content in a manner that falsely implies endorsement, affiliation or authorisation.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            We reserve the right to restrict access to the Website where we reasonably believe these Terms have been violated.
          </p>
        </>
      ),
    },
    {
      id: "05",
      title: "05. Intellectual Property Rights",
      content: (
        <>
          <p className="mb-4">
            Unless otherwise stated, all intellectual property appearing on the Website is owned by or licensed to Infinitica.
          </p>
          <p className="mb-3 text-sm opacity-80">This includes, without limitation:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Company name, logos and trademarks.</li>
            <li>Website design, layout and visual identity.</li>
            <li>Text, written content and editorial materials.</li>
            <li>Graphics, illustrations, images and media.</li>
            <li>Software, source code and underlying website components.</li>
            <li>Product names, descriptions and associated materials.</li>
            <li>Research, concepts and other proprietary materials published on the Website.</li>
          </ul>
          <p className="mb-4 text-sm opacity-80 font-light">
            These materials are protected under applicable intellectual property laws.
          </p>
          <p className="mb-4 text-sm opacity-80 font-light">
            You may view and access publicly available Website content for personal, informational and legitimate business purposes.
          </p>
          <p className="mb-4 text-sm opacity-80 font-light">
            You must not reproduce, distribute, modify, publish, commercially exploit or create derivative works from Website content without prior written permission from Infinitica, except where expressly permitted by law.
          </p>
          <p className="text-sm font-medium text-white">
            Nothing in these Terms transfers ownership of intellectual property to you.
          </p>
        </>
      ),
    },
    {
      id: "06",
      title: "06. Trademarks and Brand Identity",
      content: (
        <>
          <p className="mb-4">
            Infinitica, its name, logos, product names and associated brand assets are proprietary identifiers of the Company or their respective owners.
          </p>
          <p className="mb-4">
            References to third-party companies, products, technologies or trademarks on the Website are for identification and informational purposes only. Such references do not necessarily imply endorsement, sponsorship, partnership or affiliation.
          </p>
          <p>
            You may not use Infinitica&apos;s trademarks, branding or identity without prior written authorisation.
          </p>
        </>
      ),
    },
    {
      id: "07",
      title: "07. Website Content and Information",
      content: (
        <>
          <p className="mb-4">
            We make reasonable efforts to ensure that the information published on the Website is accurate and current.
          </p>
          <p className="mb-4">
            However, Website content may include general descriptions, forward-looking statements, research perspectives, product concepts, planned capabilities and information that may change over time.
          </p>
          <p className="mb-3 text-sm opacity-80">Unless expressly stated otherwise:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Website content is provided for general informational purposes.</li>
            <li>Product descriptions may not represent final or commercially available functionality.</li>
            <li>References to future developments, capabilities or initiatives are not guarantees of delivery.</li>
            <li>Information may be updated, modified or withdrawn without prior notice.</li>
          </ul>
          <p className="mb-3 text-sm opacity-80 font-light">
            You should not rely solely on Website content when making legal, financial, technical, commercial or other consequential decisions.
          </p>
          <p className="text-sm opacity-80 font-light">
            For specific contractual commitments, the applicable signed agreement or service terms will prevail.
          </p>
        </>
      ),
    },
    {
      id: "08",
      title: "08. Products and Services",
      content: (
        <>
          <p className="mb-4">
            The Website may describe products, platforms, research initiatives and technology services developed, operated or offered by Infinitica.
          </p>
          <p className="mb-3 text-sm opacity-80">These descriptions are informational and do not, by themselves, constitute:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>An offer to sell or license a product.</li>
            <li>A commitment to provide a particular service.</li>
            <li>A guarantee of product availability or functionality.</li>
            <li>A binding commercial proposal.</li>
            <li>A contractual service-level commitment.</li>
          </ul>
          <p className="mb-4 text-sm opacity-80 font-light">
            Access to or use of a specific product or service may be subject to separate terms, subscription agreements, licences, privacy notices, acceptable-use policies or other contractual arrangements.
          </p>
          <p className="text-sm opacity-80 font-light">
            Where separate terms apply, those terms will govern the relevant product or service. In the event of a conflict, the applicable product-specific or signed agreement will prevail for that service.
          </p>
        </>
      ),
    },
    {
      id: "09",
      title: "09. Enquiries, Submissions and Communications",
      content: (
        <>
          <p className="mb-4">
            The Website may allow you to submit enquiries, business proposals, feedback, applications or other information.
          </p>
          <p className="mb-3 text-sm opacity-80">You agree that:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Information you submit is accurate to the best of your knowledge.</li>
            <li>You have the right to share the information and materials submitted.</li>
            <li>Your submission does not violate another person&apos;s rights or applicable law.</li>
            <li>You will not submit confidential or sensitive information unless it is necessary and appropriate to do so.</li>
          </ul>
          <p className="mb-4 text-sm opacity-80 font-light">
            Submitting an enquiry or application does not create a contractual relationship, partnership, employment relationship or obligation for Infinitica to respond, proceed with a proposal or offer a position.
          </p>
          <p className="text-sm opacity-80 font-light">
            We may retain and process submitted information in accordance with our Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "10",
      title: "10. Confidentiality of Unsolicited Submissions",
      content: (
        <>
          <p className="mb-4">
            Unless a separate written agreement states otherwise, information or materials submitted to Infinitica through the Website will not automatically be treated as confidential.
          </p>
          <p className="mb-4">
            You should not submit trade secrets, proprietary business information, unpublished inventions or other confidential materials through general Website forms or communication channels unless appropriate confidentiality arrangements have been established.
          </p>
          <p>
            Nothing in this section overrides an existing non-disclosure agreement or other binding confidentiality obligation.
          </p>
        </>
      ),
    },
    {
      id: "11",
      title: "11. Third-Party Links and Services",
      content: (
        <>
          <p className="mb-4">
            The Website may contain links to external websites, platforms, tools or services operated by third parties.
          </p>
          <p className="mb-4">
            These links are provided for convenience and informational purposes.
          </p>
          <p className="mb-4">
            Infinitica does not control or assume responsibility for the content, availability, security, accuracy or practices of external websites.
          </p>
          <p>
            Accessing third-party websites is at your own discretion and subject to their respective terms and policies.
          </p>
        </>
      ),
    },
    {
      id: "12",
      title: "12. Website Availability and Modifications",
      content: (
        <>
          <p className="mb-4">
            We aim to maintain the availability and functionality of the Website. However, uninterrupted access cannot be guaranteed.
          </p>
          <p className="mb-3 text-sm opacity-80">We may, at our discretion:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Modify, update or redesign the Website.</li>
            <li>Add, remove or discontinue content or features.</li>
            <li>Temporarily suspend access for maintenance, upgrades or security reasons.</li>
            <li>Restrict access where necessary to protect the Website or its users.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            We will not be liable for interruptions or unavailability to the extent permitted by applicable law.
          </p>
        </>
      ),
    },
    {
      id: "13",
      title: "13. Disclaimer of Warranties",
      content: (
        <>
          <p className="mb-4">
            The Website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, to the extent permitted by applicable law.
          </p>
          <p className="mb-3 text-sm opacity-80">Infinitica does not warrant that:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>The Website will always be available or uninterrupted.</li>
            <li>All information will be complete, accurate or error-free.</li>
            <li>The Website will be free from all security vulnerabilities or harmful components.</li>
            <li>Every identified issue will be corrected within a particular timeframe.</li>
            <li>The Website will meet every user&apos;s individual requirements.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            Nothing in these Terms excludes any warranty or right that cannot lawfully be excluded under applicable law.
          </p>
        </>
      ),
    },
    {
      id: "14",
      title: "14. Limitation of Liability",
      content: (
        <>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, Infinitica shall not be liable for indirect, incidental, special, exemplary or consequential losses arising from or connected with the access to or use of the Website.
          </p>
          <p className="mb-4">
            This may include loss of data, business interruption, loss of opportunity, loss of profits or reliance on information published on the Website.
          </p>
          <p className="mb-4">
            Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law, including liability arising from fraud, wilful misconduct or other non-excludable obligations.
          </p>
          <p>
            Where liability cannot lawfully be excluded, it shall be limited to the extent permitted by applicable law.
          </p>
        </>
      ),
    },
    {
      id: "15",
      title: "15. Indemnification",
      content: (
        <>
          <p className="mb-3 text-sm opacity-80">
            To the extent permitted by applicable law, you agree to indemnify and hold harmless Infinitica, its directors, employees and authorised representatives against claims, liabilities, losses, damages and reasonable expenses arising directly from:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Your unlawful use of the Website.</li>
            <li>Your material violation of these Terms.</li>
            <li>Your infringement of third-party intellectual property or other legal rights.</li>
            <li>Your submission of unlawful, misleading or infringing material.</li>
            <li>Your malicious or unauthorised interference with the Website.</li>
          </ul>
          <p className="text-sm opacity-80 font-light">
            This provision does not apply to the extent that the relevant loss is caused by Infinitica&apos;s own acts or omissions for which it is legally responsible.
          </p>
        </>
      ),
    },
    {
      id: "16",
      title: "16. Privacy and Data Protection",
      content: (
        <>
          <p className="mb-4">
            Your use of the Website is also subject to our Privacy Policy, which explains how Infinitica collects, processes, stores and protects personal information.
          </p>
          <p className="mb-4">
            By using the Website, you acknowledge that personal information may be processed in accordance with that policy and applicable data protection laws.
          </p>
          <p className="mb-4">
            <strong>Privacy Policy:</strong>{" "}
            <Link href="/privacy" className="text-[var(--pink)] hover:underline">
              www.infinitica.com/privacy-policy
            </Link>
          </p>
          <p>
            If the Privacy Policy is updated, the version published on the Website will apply from its stated effective date.
          </p>
        </>
      ),
    },
    {
      id: "17",
      title: "17. Suspension and Termination",
      content: (
        <>
          <p className="mb-3 text-sm opacity-80">
            We may suspend or restrict your access to the Website where reasonably necessary to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm opacity-80 font-light">
            <li>Protect the security or integrity of the Website.</li>
            <li>Prevent misuse, abuse or unlawful activity.</li>
            <li>Address a violation of these Terms.</li>
            <li>Comply with applicable law or a lawful direction.</li>
            <li>Perform maintenance or operational activities.</li>
          </ul>
          <p className="mb-4 text-sm opacity-80 font-light">
            You may discontinue use of the Website at any time.
          </p>
          <p className="text-sm opacity-80 font-light">
            Termination or suspension of access does not affect rights, obligations or liabilities that accrued before such action.
          </p>
        </>
      ),
    },
    {
      id: "18",
      title: "18. Changes to These Terms",
      content: (
        <>
          <p className="mb-4">
            We reserve the right to modify these Terms from time to time to reflect changes in our operations, Website functionality, business practices or applicable laws.
          </p>
          <p className="mb-4">
            Updated Terms will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
          </p>
          <p className="mb-4">
            Your continued use of the Website after revised Terms become effective constitutes acceptance of the updated Terms, to the extent permitted by applicable law.
          </p>
          <p>
            We encourage you to review this page periodically.
          </p>
        </>
      ),
    },
    {
      id: "19",
      title: "19. Governing Law and Jurisdiction",
      content: (
        <>
          <p className="mb-4">
            These Terms shall be governed by and interpreted in accordance with the laws of India.
          </p>
          <p className="mb-4">
            Subject to applicable law, courts of competent jurisdiction in India shall have jurisdiction over disputes arising from or relating to these Terms or the use of the Website.
          </p>
          <p>
            Nothing in this section restricts any mandatory rights or remedies available to users under applicable law.
          </p>
        </>
      ),
    },
    {
      id: "20",
      title: "20. Severability and Waiver",
      content: (
        <>
          <p className="mb-4">
            If any provision of these Terms is found to be invalid, unlawful or unenforceable, the remaining provisions shall continue to remain in effect to the extent legally permissible.
          </p>
          <p>
            Failure by Infinitica to enforce any provision of these Terms shall not constitute a waiver of its right to enforce that provision or any other provision in the future.
          </p>
        </>
      ),
    },
    {
      id: "21",
      title: "21. Entire Agreement",
      content: (
        <>
          <p className="mb-4">
            These Terms, together with the Privacy Policy and any other applicable notices published on the Website, constitute the general terms governing your use of the Website.
          </p>
          <p>
            They do not replace or override any separately executed agreement, product-specific terms, licence, subscription agreement or other binding contractual arrangement.
          </p>
        </>
      ),
    },
    {
      id: "22",
      title: "22. Contact Information",
      content: (
        <>
          <p className="mb-4">
            For questions, clarifications or concerns regarding these Terms, please contact:
          </p>
          <div className="p-6 sm:p-7 rounded-2xl border border-[var(--line)] bg-white/[0.02] text-sm space-y-2.5 font-mono mb-4">
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Company</span>
              <span className="text-white font-medium text-base">Infinitica Technology Solutions Private Limited</span>
            </div>
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Registered Office</span>
              <span className="text-[var(--cream)] opacity-90 leading-relaxed block">
                No. 3/55, Christ Home, Kattur, Sarkar Kollapatti, Salem, Salem – 636030, Tamil Nadu, India.
              </span>
            </div>
            <div>
              <span className="text-[var(--cream)] opacity-60 text-xs block">Email</span>
              <a href="mailto:josh@infinitica.com" className="text-[var(--pink)] underline hover:text-white">
                josh@infinitica.com
              </a>
            </div>
            <div className="pt-2 border-t border-[var(--line)]">
              <span className="text-[var(--cream)] opacity-60 text-xs block">Privacy and Grievance Contact</span>
              <span className="text-white font-medium">Joshua Allen</span>
            </div>
          </div>
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
              ( Legal Architecture · Operating Terms )
            </p>
            <h1 className="font-[family-name:var(--display)] text-5xl sm:text-7xl lg:text-[88px] uppercase tracking-[-0.015em] leading-[0.92] mb-6 text-[var(--cream)]">
              Terms &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cream)] via-[var(--pink)] to-[var(--violet)]">
                Conditions.
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
            <Link href="/privacy" className="hover:text-[var(--pink)] transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[var(--pink)] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
