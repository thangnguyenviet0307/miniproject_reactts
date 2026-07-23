import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-[#222529] text-[13px] text-[#777]">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        {/* Top */}
        <div className="grid gap-x-[30px] gap-y-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-poppins text-base font-semibold uppercase tracking-wide text-white">
              About Us
            </h3>

            <Link
              to="/"
              className="mb-3 inline-block text-[15px] font-semibold text-[#999] transition hover:text-[#ff6700]"
            >
              Electrician
            </Link>

            <p className="leading-6 text-[15px] text-[#999]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et
              dapibus lacus.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-poppins text-base font-semibold uppercase text-white">
              Contact Info
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-orange-500" />

                <div className="text-[15px]">
                  <p className="font-medium text-white">Address</p>
                  <p>123 Street Name, City, England</p>
                </div>
              </li>

              <li className="text-[15px] flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#ff6700]" />

                <div>
                  <p className="mb-1 text-[13px] font-semibold text-white">
                    Phone
                  </p>
                  <a href="tel:1234567890">(123) 456-7890</a>
                </div>
              </li>

              <li className="text-[15px] flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-orange-500" />

                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:mail@example.com">mail@example.com</a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-[15px]">
                <Clock className="mt-1 h-5 w-5 text-orange-500" />

                <div>
                  <p className="font-medium text-white">Working Hours</p>
                  <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 font-poppins text-base font-semibold uppercase text-white">
              Customer Service
            </h3>

            <ul className="text-[15px] space-y-2 text-[13px]">
              <li>
                <Link to="/">Help & FAQs</Link>
              </li>
              <li>
                <Link to="/">Order Tracking</Link>
              </li>
              <li>
                <Link to="/">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/">Orders History</Link>
              </li>
              <li>
                <Link to="/">Advanced Search</Link>
              </li>
              <li>
                <Link to="/">Corporate Sales</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="mb-5 font-poppins text-base font-semibold uppercase text-white">
              Popular Tags
            </h3>

            <div className="flex flex-wrap gap-1.5 text-[15px]">
              {[
                "Bag",
                "Black",
                "Blue",
                "Clothes",
                "Fashion",
                "Hub",
                "Jean",
                "Shirt",
                "Skirt",
                "Sports",
                "Sweater",
                "Winter",
              ].map((tag) => (
                <Link
                  key={tag}
                  to="/"
                  className="border border-[#313438] px-2.5 py-1 text-[12px] leading-none transition hover:border-[#ff6700] hover:text-[#ff6700]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#313438] py-5 text-base text-[#777]">
          © Aptech eCommerce. 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
