import { useState } from "react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "../Constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" text-text sticky top-0 z-50 font-roboto">
      {/* TOP BAR */}
      <nav className="flex items-center justify-between px-4 py-3 lg:px-8">
         {/* My name */}
        <span className="font-roboto md:text-base lg:text-xl ">{SITE.name}</span>

        {/* Desktop LINKS */}
        <ul className="hidden lg:flex gap-8 font-roboto">
          {NAV_LINKS.map(({ url, title }, i) => (
            <li key={i}>
              <a
                href={url}
                className="hover:text-secondary transition-colors duration-200"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <ul className="hidden lg:flex gap-4">
          {SOCIAL_LINKS.map(({ url, icon: Icon }, i) => (
            <li key={i}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-200"
              >
                <Icon fontSize="medium" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden hover:text-secondary transition-colors duration-200 focus:outline-none"
          aria-label="Open menu"
        >
          <MenuIcon fontSize="large" />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <aside
          className="fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col text-center p-6 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Close btn */}
          <button
            onClick={() => setOpen(false)}
            className="self-end  mb-8 focus:outline-none"
            aria-label="Close menu"
          >
            <CloseIcon fontSize="large" />
          </button>

          {/* Nav links */}
          <ul className="flex flex-col gap-6 text-lg">
            {NAV_LINKS.map(({ url, title }, i) => (
              <li key={i}>
                <a
                  href={url}
                  onClick={() => setOpen(false)}
                  className="hover:text-secondary transition-colors duration-200"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <ul className="flex gap-6 justify-center mt-auto">
            {SOCIAL_LINKS.map(({ url, icon: Icon }, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
