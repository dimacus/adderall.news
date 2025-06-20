"use client";

import { useState } from 'react';
import { Search, Menu, X, ChevronDown, Bell, User, TrendingUp, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredArticles = [
    {
      id: 1,
      title: "BREAKING: Federal Amphetamine Reserve Exposed as Strategic Neural Computing Initiative, Sources Confirm",
      excerpt: "Exclusive investigation reveals government stockpiling stimulants for next-generation bio-AI infrastructure. Multiple sources confirm systematic accumulation of amphetamine compounds under drug enforcement guise.",
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "INVESTIGATION",
      timestamp: "30 minutes ago",
      isBreaking: true,
      link: "/article/federal-amphetamine-reserve"
    },
    {
      id: 2,
      title: "EXCLUSIVE: Robeaute IPO Blocked by Classified DARPA Patents, Sources Reveal Government's 'Mind Control Monopoly'",
      excerpt: "Startup's $12.3B public offering halted after discovery of secret federal patents covering neural interface technologies. DARPA official confirms government strategy to prevent private sector cognitive control capabilities.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "TECHNOLOGY",
      timestamp: "4 hours ago",
      link: "/article/robeaute-darpa-patents"
    },
    {
      id: 3,
      title: "Healthcare Innovation Breakthrough Shows Promise for Chronic Conditions",
      excerpt: "Revolutionary treatment approaches demonstrate significant potential in addressing previously incurable medical conditions.",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "HEALTH",
      timestamp: "6 hours ago",
      link: "#" // Add this line
    }
  ];

  const sidebarArticles = [
    {
      title: "Bio-Computing Patents Reveal Government Technology Strategy",
      timestamp: "45 minutes ago",
      category: "TECHNOLOGY"
    },
    {
      title: "Energy Markets Experience Unprecedented Volatility",
      timestamp: "1 hour ago",
      category: "ENERGY"
    },
    {
      title: "Educational Systems Undergo Major Restructuring",
      timestamp: "3 hours ago",
      category: "EDUCATION"
    },
    {
      title: "Transportation Infrastructure Receives Significant Investment",
      timestamp: "5 hours ago",
      category: "INFRASTRUCTURE"
    }
  ];

  const categories = ["POLITICS", "ECONOMY", "TECHNOLOGY", "HEALTH", "WORLD", "SCIENCE", "OPINION"];

  return (
    <div className="min-h-screen bg-white">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="bg-white text-red-600 px-3 py-1 text-sm font-bold mr-4">BREAKING</span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-pulse">
              <span className="text-sm">Federal Amphetamine Reserve exposed as strategic neural computing initiative - Government stockpiling stimulants for bio-AI infrastructure...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-blue-800">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-red-400 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="hover:text-red-400 transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-white">ADDERALL</span>
                <span className="text-red-500">.NEWS</span>
              </h1>
              <span className="ml-3 text-sm text-blue-300 hidden md:block">
                Uncovering What Matters
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="hover:text-red-400 transition-colors font-medium"
                >
                  {category}
                </a>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-blue-800 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 mr-2 text-blue-300" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="bg-transparent text-white placeholder-blue-300 focus:outline-none text-sm w-32 lg:w-48"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
              >
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <div className="mb-8">
              <Link href={featuredArticles[0].link} className="block">
                <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center mb-3">
                      {featuredArticles[0].isBreaking && (
                        <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold mr-3 animate-pulse">
                          BREAKING
                        </span>
                      )}
                      <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold mr-3">
                        {featuredArticles[0].category}
                      </span>
                      <span className="text-sm text-gray-300 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredArticles[0].timestamp}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 leading-tight hover:text-red-300 transition-colors">
                      {featuredArticles[0].title}
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed max-w-3xl">
                      {featuredArticles[0].excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Secondary Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredArticles.slice(1).map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold mr-3">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.timestamp}
                      </span>
                    </div>
                    <Link href={article.link ?? "#"} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Latest News Section */}
            <section className="mb-8">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mr-4">Latest News</h2>
                <div className="flex-1 h-px bg-red-600"></div>
              </div>
              <div className="space-y-4">
                <article className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold mr-3">
                      INVESTIGATION
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      1 hour ago
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    DEA Seizure Records Show Unusual Patterns in High-Purity Stimulant Confiscations
                  </h3>
                  <p className="text-gray-600">
                    Analysis of federal drug enforcement data reveals unprecedented purity levels and storage protocols that deviate from standard evidence handling procedures.
                  </p>
                </article>
                {[2, 3, 4, 5].map((i) => (
                  <article key={i} className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-700 text-white px-2 py-1 text-xs font-bold mr-3">
                        NEWS
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {i + 1} hours ago
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Significant Developments Continue to Shape Current Events Across Multiple Sectors
                    </h3>
                    <p className="text-gray-600">
                      Ongoing analysis reveals important trends that continue to influence various aspects of contemporary society and policy.
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Trending</h3>
              </div>
              <div className="space-y-4">
                {sidebarArticles.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <span className="text-xs font-bold text-blue-600 mb-1 block">
                      {article.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-2 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                      {article.title}
                    </h4>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Stay Informed</h3>
              <p className="text-blue-200 mb-4">
                Get the latest updates delivered directly to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-red-600 transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-blue-600 hover:text-red-600 transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-blue-600 hover:text-red-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-blue-600 hover:text-red-600 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-white">ADDERALL</span>
                <span className="text-red-500">.NEWS</span>
              </h3>
              <p className="text-gray-400">
                Dedicated to uncovering the stories that matter most to you and your community.
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
