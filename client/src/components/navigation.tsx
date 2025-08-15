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
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src="data:image/svg+xml,%3Csvg width='240' height='50' viewBox='0 0 240 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='logoGradient' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%232563eb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231d4ed8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(5, 8)'%3E%3Crect x='0' y='10' width='32' height='20' rx='2' fill='url(%23logoGradient)' /%3E%3Crect x='2' y='12' width='28' height='14' rx='1' fill='%23ffffff' /%3E%3Crect x='4' y='14' width='6' height='2' fill='url(%23logoGradient)' opacity='0.7' /%3E%3Crect x='4' y='17' width='10' height='2' fill='url(%23logoGradient)' opacity='0.7' /%3E%3Crect x='4' y='20' width='8' height='2' fill='url(%23logoGradient)' opacity='0.7' /%3E%3Ccircle cx='22' cy='19' r='4' fill='url(%23logoGradient)' /%3E%3Ccircle cx='22' cy='19' r='2' fill='%23ffffff' /%3E%3Crect x='14' y='30' width='4' height='4' fill='url(%23logoGradient)' /%3E%3Crect x='10' y='34' width='12' height='2' fill='url(%23logoGradient)' /%3E%3C/g%3E%3Ctext x='50' y='20' font-family='Inter, Arial, sans-serif' font-size='16' font-weight='700' fill='url(%23logoGradient)'%3EDesk Automate%3C/text%3E%3Ctext x='50' y='35' font-family='Inter, Arial, sans-serif' font-size='11' font-weight='500' fill='%236b7280'%3ERPA Solutions%3C/text%3E%3C/svg%3E" 
                  alt="Desk Automate Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                      isActive(item.href)
                        ? "text-brand-blue bg-brand-light-blue"
                        : "text-gray-700 hover:text-brand-blue hover:bg-gray-50"
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
              <Button className="bg-brand-blue hover:bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none focus:text-brand-blue transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all ${
                      isActive(item.href)
                        ? "text-brand-blue bg-brand-light-blue"
                        : "text-gray-700 hover:text-brand-blue hover:bg-gray-50"
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
                    className="w-full bg-brand-blue hover:bg-brand-primary text-white rounded-lg font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
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
