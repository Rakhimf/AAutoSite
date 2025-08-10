import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">A Automation Company</h3>
            <p className="text-gray-400 mb-4">
              Leading UK RPA consultancy specializing in UiPath solutions for business transformation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>0845 643 4410</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@aautomation.co.uk</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">RPA Implementation</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Process Assessment</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">UiPath Licensing</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Training & Support</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors">Manufacturing</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors">Supply Chain</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors">Financial Services</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors">Healthcare</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/rpa-information">
                  <a className="hover:text-white transition-colors">RPA Information</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">Case Studies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-white transition-colors">ROI Calculator</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Newsletter</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 A Automation Company. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
