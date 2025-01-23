import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Cydex Logo" className="h-10" />
          </Link>
          <ul className="space-y-2 text-gray-700">
            <li>Phone Number: +234 806 687 5489</li>
            <li>Email: support@cydex.com</li>
            <li>Address: 12, Dopemu Close, Ibadan, Nigeria</li>
          </ul>
          <div className="flex items-center mt-4 space-x-4">
            <Twitter className="w-5 h-5 text-gray-600" />
            <Facebook className="w-5 h-5 text-gray-600" />
            <Instagram className="w-5 h-5 text-gray-600" />
            <Linkedin className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        <div>
          <h3 className="font-clash text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:text-cydex-primary">
                Book your pickup & delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cydex-primary">
                Join community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cydex-primary">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center lg:text-right">
          <p className="text-gray-600">&copy; 2024 Cydex</p>
        </div>
      </div>
    </footer>
  );
};