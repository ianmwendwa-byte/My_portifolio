import { SOCIAL_LINKS } from "../Constants";


const Footer = () => {
  return (
    <footer className="w-full bg-background text-white py-6 px-4"> 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
       
        {/* Social Icons */}
        <div className="flex items-center space-x-6"> 
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="
                text-text hover:text-primary transition-colors duration-200
                transform hover:scale-110
              "
            >
              <social.icon style={{ fontSize: '1.5rem' }} /> 
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex-shrink-0">
          <p className="text-sm text-text text-center md:text-right">
            © {new Date().getFullYear()} Ian Mwendwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
