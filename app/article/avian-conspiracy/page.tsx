"use client";

import { Search, Menu, X, ChevronDown, Bell, User, TrendingUp, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AvianConspiracyArticle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use the same categories as in your main page
  const categories = [
    "Politics",
    "Technology",
    "Economy",
    "Health",
    "Science",
    "World",
    "Opinion",
    "Culture"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - copied from main page for consistency */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          {/* Top Header Row */}
          <div className="flex items-center justify-between py-3 px-4">
            <Link href="/" className="text-2xl font-bold">
              Adderall.News
            </Link>
            
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="hover:text-red-400 transition-colors font-medium"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-blue-800 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 mr-2 text-blue-300" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="bg-transparent text-white placeholder-blue-300 focus:outline-none text-sm w-40"
                />
              </div>
              
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-blue-800 py-4">
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="hover:text-red-400 transition-colors font-medium"
                  >
                    {category}
                  </a>
                ))}
                <div className="flex items-center bg-blue-800 rounded-lg px-3 py-2 mt-4">
                  <Search className="w-4 h-4 mr-2 text-blue-300" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="bg-transparent text-white placeholder-blue-300 focus:outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Article Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="p-6 md:p-8 border-b">
            <div className="flex items-center mb-4">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold mr-3 animate-pulse">
                BREAKING
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold mr-3">
                THE AVIAN CONSPIRACY
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                July 21, 2025
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Police Drone Disguised as Eagle Intercepts Government Drones Disguised as Crows in Mid-Air Adderall Sting
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm border-t border-gray-100 pt-4">
              <span className="font-medium">By Mark Featherstone, Staff Writer</span>
              <span className="mx-2">|</span>
              <span>Associated Press</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative">
            <img 
              src="/images/avian-conspiracy.jpg" 
              alt="Police Drone Eagle Intercepting Crow Drones" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs p-2">
              Image: Police Drone SkyJustice-07 mid-interception of crow drones
            </div>
          </div>
          
          {/* Article Body */}
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              {/* AP Style Dateline */}
              <p className="font-bold text-lg mb-6">NEW YORK (AP) —</p>
              
              <p className="font-medium text-lg leading-relaxed mb-6">In a stunning display of mid-air surveillance and inter-agency confusion, a police drone disguised as a bald eagle intercepted three government-operated drones disguised as common crows in what officials are calling an "ongoing investigation into the illicit aerial trafficking of Schedule II stimulants."</p>
              
              <p className="mb-5">The sting unfolded over Manhattan's East Village early Sunday morning when a suspicious avian formation was detected by NYPD's Aerial Narcotics Surveillance Team (ANST), a division recently launched under the city's controversial "War on Wings" initiative.</p>
              
              <p className="mb-5">According to initial reports, the eagle drone — designated "SkyJustice-07" — engaged the crow drones near Tompkins Square Park after detecting "a suspiciously linear flight pattern and erratic chirping consistent with synthetic amphetamine programming." Upon interception, one of the crow drones ejected a small payload containing what field agents identified as 200mg of pharmaceutical-grade Adderall XR.</p>
              
              {/* Quote Box */}
              <div className="bg-gray-50 border-l-4 border-blue-600 pl-5 py-4 my-8">
                <p className="italic text-gray-700">"While no arrests have been made, we have recovered enough evidence to confirm these were not your average government crows," said NYPD DroneOps Commander and acting Chief of Surveillance Fausto "Buzz" Carlin in a press conference conducted from the roof of a city hall annex. "These birds were juiced. Their beaks were wired for smuggling, their eyes were 1080p optical surveillance units, and their wing joints had the telltale stutter of federally-sanctioned rotors."</p>
              </div>
              
              <p className="mb-8">Despite the high-tech operation, Chief Carlin confirmed that all three crow drones self-destructed mid-air via what he called "thermal fail-safe measures" before ground teams could perform diagnostics.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-gray-200 pb-2">A Sky Full of Questions</h2>
              
              <p className="mb-5">The incident raises fresh concerns over increasing overlap between municipal, state, and federal drone operations — particularly when those drones are dressed as birds and moving controlled substances across borough lines.</p>
              
              {/* Quote Box */}
              <div className="bg-gray-50 border-l-4 border-blue-600 pl-5 py-4 my-8">
                <p className="italic text-gray-700">"When our eagle took them down, we assumed cartel drones," said Carlin. "Turns out, they were flying under a Department of Agriculture transponder. So now we're in a bit of a jurisdictional... flap."</p>
              </div>
              
              <p className="mb-5">Federal agencies have declined to provide a formal statement, but several off-the-record sources confirmed that the intercepted drones were part of a joint USDA-FCC experimental program titled "FeatherNet," ostensibly focused on rural broadband delivery via avian-shaped quadcopters. Why they were carrying stimulants across urban airspace is "still unclear."</p>
              
              {/* New section: Added expert commentary */}
              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h3 className="font-bold text-blue-800 mb-3">EXPERT ANALYSIS</h3>
                <p className="text-gray-800 mb-3">Dr. Mira Shorestein, director of the Center for Avian Surveillance Ethics at Columbia University, notes this incident represents an alarming trend in biomimetic technology deployment.</p>
                <p className="text-gray-800">"We're seeing a troubling convergence of surveillance technologies that not only mimic wildlife but potentially exploit protected species designations to operate in legal gray areas," said Dr. Shorestein. "The bald eagle drone technically falls under both FAA drone regulations and protected species legislation, creating jurisdictional confusion that agencies are exploiting."</p>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-gray-200 pb-2">Small Startup, Big Wingspan</h2>
              
              <p className="mb-5">Digging deeper, The Associated Press has uncovered a curious link between the intercepted drones and a Brooklyn-based startup known as NeuroNest — a self-described "bio-synthetic energy incubator" funded in part by DARPA, the NY Green Futures Initiative, and a surprising number of venture capitalists with ties to MIT's rogue biotech wing.</p>
              
              <p className="mb-5">NeuroNest's pitch deck, which was briefly public before being pulled offline, proposed "investigating neuro-stimulants like Adderall as alternative bioenergy sources for microdrones operating under severe latency constraints." One slide featured a cartoon crow lifting a Raspberry Pi into the air, with the tagline: "Think Fast. Fly Faster."</p>
              
              {/* Document leak callout */}
              <div className="border border-gray-300 rounded-lg p-5 my-8 bg-gray-50">
                <h4 className="font-bold text-lg mb-3">DOCUMENT EXCERPT</h4>
                <p className="text-sm text-gray-700 border-l-2 border-gray-400 pl-4 italic">From NeuroNest internal memo dated June 12, 2025: "Tests confirm that amphetamine-derived compounds, when aerosolized and circulated through our proprietary microcircuitry, extend flight duration by 327% while increasing object recognition and navigation accuracy by 218%. Side effects include erratic flight patterns, excessive chirping, and reluctance to land."</p>
              </div>
              
              <p className="mb-5">In a boilerplate statement, NeuroNest denied any involvement in illicit activities, insisting their work remains "strictly in the realm of legal pharmacological simulation and sustainable aerial autonomy."</p>
              
              <p className="mb-8">Yet multiple whistleblowers have come forward claiming that the company's labs, located beneath a vegan kombucha brewery in Bushwick, have been running small-scale tests using real stimulants to prolong drone flight time. "They figured out that a drone running on Adderall micro-laced circuits could triple its battery efficiency," said one anonymous source. "The downside is... well, let's just say they don't land until they've finished rewriting the software architecture."</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-gray-200 pb-2">Federal Shrug and Presidential Diversion</h2>
              
              <p className="mb-5">When contacted for clarification, a Department of Energy spokesperson said they had "no formal comment" but noted that "additive cognitive compounds as energy sources" remain an active area of research under the Accelerated Alternatives Act (AAA).</p>
              
              <p className="mb-5">Meanwhile, attempts to reach higher authorities produced stranger results.</p>
              
              {/* Quote Box - Presidential Quote */}
              <div className="bg-gray-50 border-l-4 border-red-600 pl-5 py-4 my-8">
                <p className="italic text-gray-700">In a brief phone statement to the Associated Press, President Donald J. Trump, once again elected under the "Return to Sanity" campaign of 2024, deflected the story entirely.</p>
                <p className="italic text-gray-700 mt-3">"Why are we still talking about birds?" the President said. "This is a boring story, very boring. Let's talk about my health. My doctors say I'm in unbelievable shape. Perfect shape. Some say the best shape of anyone who's ever lived. Heart of a 35-year-old racehorse. That's the real story. You want a headline? 'Trump Health Breaks Medical Science.' Boom. You're welcome."</p>
              </div>
              
              <p className="mb-8">When asked again about the drone incident, the line went silent before being replaced with a pre-recorded loop of Lee Greenwood's "God Bless the USA."</p>
              
              {/* Timeline graphic */}
              <div className="border border-gray-300 rounded-lg p-5 my-8 bg-gray-50">
                <h4 className="font-bold text-lg mb-3">TIMELINE: THE AVIAN SURVEILLANCE ESCALATION</h4>
                <ul className="space-y-4 ml-0 pl-0 list-none">
                  <li className="flex">
                    <div className="font-bold w-24">2022</div>
                    <div>First documented deployment of pigeon-mimicking surveillance drones in urban environments</div>
                  </li>
                  <li className="flex">
                    <div className="font-bold w-24">2023</div>
                    <div>FAA creates classified exemption category for "biomimetic aerial surveillance tools"</div>
                  </li>
                  <li className="flex">
                    <div className="font-bold w-24">2024</div>
                    <div>NYPD forms dedicated Aerial Narcotics Surveillance Team (ANST)</div>
                  </li>
                  <li className="flex">
                    <div className="font-bold w-24">Early 2025</div>
                    <div>NeuroNest receives $42M in venture funding for "alternative energy solutions for autonomous flight"</div>
                  </li>
                  <li className="flex">
                    <div className="font-bold w-24">July 2025</div>
                    <div>First documented bird-vs-bird drone interception over Manhattan</div>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-gray-200 pb-2">A Conveniently Scrambled Sky</h2>
              
              <p className="mb-5">To date, no government official has claimed responsibility for the crows, and local NYPD efforts to track drone serial numbers have been "frustrated by firmware that appears to reset its own MAC address every 42 seconds."</p>
              
              <p className="mb-5">The FAA, Homeland Security, and the Postal Drone Division all claim no knowledge of any sanctioned stimulant-aerial routes. Yet insiders hint that the skyways above New York may be host to a much broader shadow network — one where synthetic birds, experimental tech, and smart drugs converge.</p>
              
              {/* Quote Box */}
              <div className="bg-gray-50 border-l-4 border-blue-600 pl-5 py-4 my-8">
                <p className="italic text-gray-700">"We believe this is the tip of the beak," said Chief Carlin. "We're not just talking rogue pigeons delivering aspirin anymore. This is something bigger. Something wired. And probably backed by someone with a .gov email."</p>
              </div>
              
              {/* New section: Follow the money */}
              <div className="bg-yellow-50 rounded-lg p-6 my-8">
                <h3 className="font-bold text-yellow-800 mb-3">FOLLOW THE MONEY</h3>
                <p className="text-gray-800 mb-3">Financial records obtained by the Associated Press show unusual patterns in federal procurement that may relate to avian drone development:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>$17.3M allocation to the Department of Agriculture for "migratory species communication network research"</li>
                  <li>$8.9M to an undisclosed contractor for "pharmacological propulsion alternatives"</li>
                  <li>$42.5M classified expenditure coded as "Project Feathered Serpent"</li>
                </ul>
                <p className="text-gray-800 mt-3">When questioned about these allocations, Treasury Department officials declined to comment, citing national security protocols.</p>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-gray-200 pb-2">Public Response and Ongoing Probe</h2>
              
              <p className="mb-5">Local reaction has been mixed. Some residents remain skeptical. "This sounds like one of those online hoaxes," said East Village resident Molly Janson. "I mean, really? Adderall birds? Isn't that just Twitter?"</p>
              
              <p className="mb-5">Others are less dismissive. "First they said birds aren't real," said community drone hobbyist Gary Fung. "Then they said the government made them. Now the police are pretending to be eagles? I don't know what's more shocking — the surveillance state or the fact that they're all using ADHD meds as jet fuel."</p>
              
              <p className="mb-5">The NYPD has promised further updates pending coordination with "several alphabet agencies," though no press conference has been scheduled at this time.</p>
              
              <p className="mb-5">As for NeuroNest, its website remains offline, and its office windows have been papered over with motivational quotes about "Flight, Focus, and Freedom."</p>
              
              <p className="mb-8">Meanwhile, eagle drone SkyJustice-07 has been placed on administrative leave pending psychological recalibration, after reportedly refusing to land and circling NYPD headquarters for 11 consecutive hours.</p>
              
              {/* Editor's Note Box */}
              <div className="bg-gray-100 border border-gray-300 rounded p-4 mt-10">
                <p className="text-sm text-gray-700 italic">EDITOR'S NOTE: If you or someone you know has been approached by a suspiciously robotic bird, or offered unsolicited medication from above, please contact our tip line at (555) 000-WING.</p>
              </div>
              
              {/* AP Footer */}
              <div className="mt-12 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Associated Press writers Samantha Wingfield in Washington and David Crowley in Boston contributed to this report.</p>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="p-6 md:p-8 bg-gray-50 border-t">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded shadow p-5 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-blue-600 block mb-2">INVESTIGATION</span>
                <h4 className="font-bold mb-2 text-gray-900">BREAKING: Federal Amphetamine Reserve Exposed as Strategic Neural Computing Initiative</h4>
                <Link href="/article/federal-amphetamine-reserve" className="text-blue-600 hover:underline text-sm inline-flex items-center">
                  Read more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white rounded shadow p-5 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-red-600 block mb-2">EXCLUSIVE</span>
                <h4 className="font-bold mb-2 text-gray-900">DEA Seizure Records Show Unusual Patterns in High-Purity Stimulant Confiscations</h4>
                <Link href="#" className="text-blue-600 hover:underline text-sm inline-flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white rounded shadow p-5 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-green-600 block mb-2">TECHNOLOGY</span>
                <h4 className="font-bold mb-2 text-gray-900">Retirees Flock to Revolutionary 'Brain In the Box' Technology</h4>
                <Link href="#" className="text-blue-600 hover:underline text-sm inline-flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <p className="text-gray-400">
                Adderall.News is dedicated to uncovering what matters in today's complex world. Our team of investigative journalists digs deeper.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.slice(0, 4).map((category) => (
                  <a key={category} href="#" className="block text-gray-400 hover:text-white transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">More</h4>
              <div className="space-y-2">
                {categories.slice(4).map((category) => (
                  <a key={category} href="#" className="block text-gray-400 hover:text-white transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  RSS Feed
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adderall.News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
