import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rpa-information", label: "RPA Information" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-brand-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold font-cyber text-brand-cyan cursor-pointer cyber-text-glow">
                DESK AUTOMATE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium font-cyber uppercase tracking-wider transition-all cursor-pointer ${
                      isActive(item.href)
                        ? "text-brand-cyan cyber-text-glow"
                        : "text-gray-300 hover:text-brand-cyan hover:cyber-text-glow"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="neon-button font-cyber text-sm px-6 py-2">
                INITIALIZE
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-brand-cyan focus:outline-none focus:text-brand-cyan transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-t border-brand-cyan/20 backdrop-blur-md">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium font-cyber uppercase tracking-wider cursor-pointer transition-all ${
                      isActive(item.href)
                        ? "text-brand-cyan bg-brand-cyan/10 cyber-text-glow"
                        : "text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <Button 
                    className="w-full neon-button font-cyber"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    INITIALIZE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
