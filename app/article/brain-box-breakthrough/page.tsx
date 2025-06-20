"use client";

import Link from 'next/link';

export default function BrainBoxArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-500">
            Adderall.News
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            <a href="#" className="hover:text-red-400 transition-colors">Politics</a>
            <a href="#" className="hover:text-red-400 transition-colors">Technology</a>
            <a href="#" className="hover:text-red-400 transition-colors">Health</a>
            <a href="#" className="hover:text-red-400 transition-colors">Opinion</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold mr-4">HEALTH</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Retirees Flock to Revolutionary "Brain In the Box" Technology as FDA Raises Concerns Over Strategic Adderall Reserves
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Medicare-age Americans embrace consciousness migration while federal amphetamine stockpiles face scrutiny
          </p>
          <img 
            src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Brain in laboratory setting"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-6 text-lg font-medium">
            <strong>PALO ALTO, Calif.</strong> — Thousands of retirees have reportedly begun enrolling in Cortical Labs' groundbreaking CL1 "Brain In the Box" program, a revolutionary biological computing system that promises to transfer human consciousness and memories into laboratory-maintained neural networks capable of surviving up to six months without traditional bodily functions.
          </p>

          <p className="mb-6">
            The technology, which utilizes real neurons maintained in a closed-loop system, has attracted an unexpected demographic of Medicare-eligible Americans seeking to extend their cognitive lifespan beyond traditional mortality constraints. Early adopters describe the process as "like cloud storage, but for my entire personality and 70 years of accumulated wisdom."
          </p>

          <p className="mb-6">
            "I've already outlived my 401k and most of my high school friends," said Margaret Thompson, 78, who completed the consciousness migration procedure last Tuesday. "This seemed like a logical next step. Plus, the neural interface comes with a touchscreen, which is more than I can say for my current body."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Federal Concerns Mount Over Stimulant Infrastructure</h3>

          <p className="mb-6">
            The rapid adoption of consciousness transfer technology has drawn scrutiny from federal health regulators, though not for the reasons industry observers anticipated. In an unprecedented statement, FDA Commissioner Dr. Robert Califf expressed primary concern over the nation's "strategic adderall reserves," warning that widespread neural enhancement could deplete critical stimulant stockpiles maintained for national security purposes.
          </p>

          <p className="mb-6">
            "Our modeling indicates that large-scale cognitive migration could create unprecedented demand for pharmaceutical enhancement compounds," Califf told reporters during an emergency press briefing. "The American people deserve to know that their government maintains adequate amphetamine reserves to support both traditional neurological functions and emerging biological computing applications."
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-blue-900 mb-3">Strategic Pharmaceutical Reserve Details</h4>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Federal agencies have systematically accumulated high-purity stimulant compounds since 2019</li>
              <li>Stockpiles classified under Strategic National Pharmaceutical Reserve protocols</li>
              <li>Intended to support "next-generation cognitive infrastructure" development</li>
              <li>Current reserve levels sufficient for 18-month deployment timeline</li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 mb-6">
            <p className="text-lg italic text-gray-800">
              "Internal FDA documents, obtained through Freedom of Information Act requests, reveal that federal agencies have been systematically accumulating high-purity stimulant compounds under drug enforcement protocols since 2019."
            </p>
          </blockquote>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Presidential Administration Outlines Prison Labor Initiative</h3>

          <p className="mb-6">
            The controversy deepened following comments from President Trump during a Mar-a-Lago press conference, where he outlined ambitious plans to leverage the federal correctional system for pharmaceutical production.
          </p>

          <p className="mb-6">
            "Now that we have control of the crack cocaine and meth population in prisons, we can use the inmate population to generate large quantities of these substances at cheap labor cost," Trump stated, gesturing toward charts displaying projected stimulant output rates. "It's a win-win situation. Prisoners learn valuable manufacturing skills, and America maintains its competitive advantage in the emerging consciousness economy."
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-red-900 mb-3">Correctional Pharmaceutical Manufacturing Initiative</h4>
            <p className="text-red-800">
              The proposal would convert existing prison facilities into certified drug production centers, with inmates participating in what administration officials describe as "vocational rehabilitation through controlled substance synthesis." Legal experts have raised constitutional concerns regarding the use of incarcerated individuals for pharmaceutical manufacturing.
            </p>
          </div>

          <p className="mb-6">
            Legal experts have raised constitutional concerns regarding the use of incarcerated individuals for pharmaceutical manufacturing, particularly given the intended end-use for cognitive enhancement technologies. The American Civil Liberties Union has announced plans to challenge the initiative, calling it "a dystopian fusion of mass incarceration and pharmaceutical capitalism."
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cortical Labs Responds to Regulatory Pressure</h3>

          <p className="mb-6">
            Cortical Labs CEO Hon Weng Chong defended the company's consciousness transfer program amid growing federal scrutiny, emphasizing the technology's potential to revolutionize both medical research and end-of-life care.
          </p>

          <p className="mb-6">
            "The CL1 system represents the first ethically superior alternative to traditional aging," Chong explained during a Silicon Valley press conference. "Rather than subjecting senior citizens to the biological limitations of deteriorating human bodies, we offer them the opportunity to maintain cognitive function in a controlled, optimized environment."
          </p>

          <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 mb-6">
            <p className="text-lg italic text-gray-800">
              "The CL1 device maintains living neurons for up to six months using internal life support systems, requires minimal external inputs and uses significantly less energy than competing technologies."
            </p>
            <cite className="text-sm text-gray-600 mt-2 block">
              — <a href="https://corticallabs.com/cl1.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cortical Labs CL1 Technical Specifications</a>
            </cite>
          </blockquote>

          <p className="mb-6">
            Early clinical data suggests that consciousness-migrated individuals retain full personality characteristics, memory access, and decision-making capabilities within the biological computing environment. However, the psychological adjustment period varies significantly, with some participants reporting existential concerns about their transition from biological to technological existence.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Market Response and Industry Implications</h3>

          <p className="mb-6">
            The consciousness migration industry has emerged as an unexpected growth sector, with Medicare supplemental insurance providers scrambling to develop coverage frameworks for biological computing transitions. Early market analysis suggests that consciousness transfer could represent a $47 billion industry by 2027, driven primarily by baby boomer adoption rates.
          </p>

          <p className="mb-6">
            Competitors to Cortical Labs have begun announcing similar programs, though federal regulatory uncertainty has created significant investment hesitation. Venture capital firms report that consciousness transfer startups face unique due diligence challenges, particularly regarding the intersection of medical device regulations, pharmaceutical oversight, and emerging biotechnology classification frameworks.
          </p>

          <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 mb-6">
            <p className="text-lg italic text-gray-800">
              "We're essentially creating a new category of existence that sits somewhere between traditional healthcare and emerging technology. The regulatory landscape hasn't caught up to the possibilities."
            </p>
            <cite className="text-sm text-gray-600 mt-2 block">
              — Dr. Sarah Chen, Bioethics Research Institute, Stanford University
            </cite>
          </blockquote>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Societal Impact and Long-term Projections</h3>

          <p className="mb-6">
            Demographics experts predict that widespread consciousness migration could fundamentally alter Social Security and Medicare program structures, as traditional concepts of mortality and aging become technologically malleable. The Congressional Budget Office has requested emergency analysis of fiscal implications should consciousness transfer achieve mainstream adoption.
          </p>

          <p className="mb-6">
            Religious organizations have issued conflicting statements regarding the theological implications of consciousness migration, with some denominations embracing the technology as an extension of divine creativity, while others condemn it as an unnatural attempt to circumvent divinely ordained mortality.
          </p>

          <p className="mb-6 font-medium">
            As enrollment in consciousness transfer programs continues to accelerate, the intersection of federal pharmaceutical policy, prison labor initiatives, and emerging biotechnology promises to reshape fundamental assumptions about aging, healthcare, and human existence in the digital age.
          </p>
        </div>

        {/* Article Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <p>Published: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p>Category: Health, Technology, Policy</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Share Article
              </button>
              <Link 
                href="/" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
