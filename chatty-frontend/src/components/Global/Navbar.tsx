import { useState } from "react";
import { Link } from "react-router-dom";
import Text from "../Atomic/Text";
import { Menu, X } from "lucide-react";
import { ABOUT, AUTH, CONTACT, INTRO } from "../../config/path";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClassName =
    "text-lg text-secondary hover:text-accent transition-colors duration-200";

  return (
    <nav className="bg-black text-secondary sticky top-0 z-50">
      <div className="component-padding flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Text size="24px" weight="700" content="Chatty" />
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          <Link to="/" className={linkClassName}>
            Home
          </Link>
          <Link to={`/${INTRO}/${ABOUT}`} className={linkClassName}>
            About Us
          </Link>
          <Link to={`/${INTRO}/${CONTACT}`} className={linkClassName}>
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex justify-end">
          <Link
            to={`/${INTRO}/${AUTH}`}
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-200"
          >
            Join Us
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-secondary hover:text-accent transition-colors duration-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-start gap-4 px-6 py-4">
          <Link
            to="/"
            className={linkClassName}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={`/${INTRO}/${ABOUT}`}
            className={linkClassName}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to={`/${INTRO}/${CONTACT}`}
            className={linkClassName}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to={`/${INTRO}/${AUTH}`}
            className="bg-accent text-white w-full text-center px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
