import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-cyan/20 text-white py-12 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-cyber mb-4 text-brand-cyan cyber-text-glow">DESK AUTOMATE</h3>
            <p className="text-gray-400 mb-4">
              Elite UK RPA intelligence unit deploying advanced UiPath cybernetic systems for enterprise transformation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>0845 643 4410</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@deskautomate.co.uk</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-cyber mb-4 text-brand-neon">SYSTEMS</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">RPA Implementation</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">Process Assessment</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">UiPath Licensing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">Training & Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold font-cyber mb-4 text-brand-purple">SECTORS</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/industries">
                  <span className="hover:text-white transition-colors cursor-pointer">Manufacturing</span>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <span className="hover:text-white transition-colors cursor-pointer">Supply Chain</span>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <span className="hover:text-white transition-colors cursor-pointer">Financial Services</span>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <span className="hover:text-white transition-colors cursor-pointer">Healthcare</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold font-cyber mb-4 text-brand-orange">INTEL</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/rpa-information">
                  <span className="hover:text-white transition-colors cursor-pointer">RPA Information</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-white transition-colors cursor-pointer">Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">ROI Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">Newsletter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Desk Automate. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
              Terms of Service
            </span>
            <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
