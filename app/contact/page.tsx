"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Building2,
  Globe,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  badge: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  transit: string;
  mapQuery: string;
}

const officeLocations: OfficeLocation[] = [
  {
    id: "sf",
    city: "San Francisco",
    country: "United States",
    badge: "Global Headquarters",
    name: "Infinitica Technologies Inc.",
    addressLine1: "500 Howard Street, Suite 400",
    addressLine2: "South of Market (SoMa)",
    postalCode: "San Francisco, CA 94105",
    coordinates: "37.7891° N, 122.3972° W",
    phone: "+1 (415) 890-4210",
    email: "sf@infinitica.com",
    hours: "09:00 - 18:00 PST (Mon - Fri)",
    transit: "Transbay Transit Center / Montgomery BART (3 min walk)",
    mapQuery: "500+Howard+St+Suite+400+San+Francisco+CA+94105"
  },
  {
    id: "blr",
    city: "Bengaluru",
    country: "India",
    badge: "Engineering & AI Labs",
    name: "Infinitica Labs Pvt. Ltd.",
    addressLine1: "Level 6, Prestige Tech Park, Outer Ring Road",
    addressLine2: "Kadubeesanahalli, Marathahalli",
    postalCode: "Bengaluru, Karnataka 560103",
    coordinates: "12.9352° N, 77.6946° E",
    phone: "+91 (80) 4590-2100",
    email: "blr@infinitica.com",
    hours: "09:30 - 18:30 IST (Mon - Fri)",
    transit: "Outer Ring Road Metro Line / Prestige Tech Hub Feeder",
    mapQuery: "Prestige+Tech+Park+Outer+Ring+Rd+Bengaluru+560103"
  },
  {
    id: "lon",
    city: "London",
    country: "United Kingdom",
    badge: "EMEA Regional Hub",
    name: "Infinitica UK Ltd.",
    addressLine1: "100 Bishopsgate, Level 19",
    addressLine2: "City of London",
    postalCode: "London EC2N 4AG",
    coordinates: "51.5154° N, 0.0825° W",
    phone: "+44 (20) 7946-0812",
    email: "emea@infinitica.com",
    hours: "09:00 - 17:30 GMT (Mon - Fri)",
    transit: "Liverpool Street Station (2 min walk) / Bank Station",
    mapQuery: "100+Bishopsgate+London+EC2N+4AG"
  }
];

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState<string>("sf");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Enterprise Solutions",
    message: ""
  });

  const selectedOffice = officeLocations.find((o) => o.id === activeOffice) || officeLocations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black text-white flex flex-col min-h-screen font-sans antialiased selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="relative w-full bg-[#0A0A0A] border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          {/* Subtle Grid texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwSDIwVjIweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PC9zdmc+')] opacity-40 pointer-events-none z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
             
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-6">
                Let&apos;s Build <br />
                <span className="text-[#AC58E9]">Without Boundaries</span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed border-l-2 border-[#AC58E9] pl-6 max-w-2xl">
                Whether you have an inquiry regarding enterprise AI products, partnerships, or wish to schedule a consultation with our engineers, our teams across three continents are ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Channels Grid */}
        <section className="w-full bg-black py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Interactive Contact Form */}
              <div className="lg:col-span-7 bg-[#0E0E0E] border border-white/10 p-8 sm:p-12 relative">
                <div className="mb-8">
                  
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                    Send a Message
                  </h2>
                  <p className="text-zinc-400 text-sm font-light mt-2">
                    Fill out the form below. Our response time is typically within 2-4 business hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-[#141414] border border-[#AC58E9] p-8 sm:p-12 text-center flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#AC58E9]/20 border border-[#AC58E9] flex items-center justify-center text-[#AC58E9] mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-zinc-400 text-sm max-w-md mb-6 font-light leading-relaxed">
                      Thank you for contacting Infinitica, <span className="text-white font-medium">{formData.name || "friend"}</span>. An assigned specialist from our team will follow up via <span className="text-white font-medium">{formData.email || "email"}</span> shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#AC58E9] hover:text-white transition-colors border border-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Your Name <span className="text-[#AC58E9]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Work Email <span className="text-[#AC58E9]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@enterprise.com"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors rounded-none"
                        />
                      </div>
                     
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        Message <span className="text-[#AC58E9]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, system requirements, or inquiries..."
                        className="w-full bg-[#161616] border border-white/10 p-4 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#AC58E9] transition-colors resize-none rounded-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-all duration-200 border border-white rounded-none shadow-[4px_4px_0_rgba(172,88,233,0.5)] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Transmit Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Single Unified Contact Info Card */}
              <div className="lg:col-span-5 bg-[#0E0E0E] border border-white/10 p-8 sm:p-12 flex flex-col justify-between relative group hover:border-[#AC58E9] transition-all duration-300">
                {/* Subtle Accent Edge */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#AC58E9]/30 group-hover:border-[#AC58E9] transition-colors pointer-events-none" />

                <div>
                  <div className="mb-8">
                   
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
                      Contact Details
                    </h2>
                    <p className="text-zinc-400 text-sm font-light mt-2 leading-relaxed">
                      Reach out to us directly or visit our headquarters. We are available for partnerships, enterprise solutions, and general inquiries.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="pb-5 border-b border-white/5">
                      <div className="flex items-center gap-2 text-xs  text-[#AC58E9] uppercase tracking-wider mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address</span>
                      </div>
                      <a
                        href="mailto:contact@infinitica.com"
                        className="text-base text-zinc-100 hover:text-[#AC58E9] transition-colors font-sans font-medium block"
                      >
                        contact@infinitica.com
                      </a>
                    </div>

                    {/* Contact Number */}
                    <div className="pb-5 border-b border-white/5">
                      <div className="flex items-center gap-2 text-xs font-sans text-[#AC58E9] uppercase tracking-wider mb-2">
                        <Phone className="w-4 h-4" />
                        <span>Contact Number</span>
                      </div>
                      <a
                        href="tel:+14158904210"
                        className="text-base text-zinc-100 hover:text-[#AC58E9] transition-colors font-sans font-medium block"
                      >
                        +1 (415) 890-4210
                      </a>
                    </div>

                    {/* Address */}
                    <div>
                      <div className="flex items-center gap-2 text-xs  text-[#AC58E9] uppercase tracking-wider mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Headquarters Address</span>
                      </div>
                      <div className="text-sm text-zinc-300 font-light leading-relaxed">
                        <p className="text-white font-medium">Infinitica Technologies Inc.</p>
                        <p>500 Howard Street, Suite 400</p>
                        <p>South of Market (SoMa)</p>
                        <p className="text-zinc-400 font-mono text-xs mt-1">San Francisco, CA 94105, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

       
      </main>

      <Footer />
    </div>
  );
}

