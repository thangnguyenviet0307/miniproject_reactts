import { Link, NavLink } from "react-router";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-orange-500 shadow-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          to="/"
          className="font-poppins text-4xl font-semibold tracking-tight text-white"
        >
          Magazines
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Category
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/customer"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors ${
                isActive ? "text-slate-800" : "text-white hover:text-slate-800"
              }`
            }
          >
            Customer
          </NavLink>

          {/* Cart */}
          <Link
            to="/cart"
            className="ml-3 flex items-center gap-2 rounded bg-white px-3 py-2 text-orange-500"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-bold">0</span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="text-white lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
