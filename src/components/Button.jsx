
const Button = ({ link, text, Icon, className = '', external = false }) => {
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"} 
      rel={external ? "noopener noreferrer" : undefined} 
      className={`
        inline-flex items-center justify-center
        px-3 py-3 rounded-lg
        lg:backdrop-blur-md bg-white/10 border border-text/20
        shadow-lg hover:bg-primary 
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-background focus:ring-opacity-75
        ${className}
      `}
    >
      {/* Render the icon if provided */}
      {Icon && <Icon className="mr-2"/>}
      {/* Render the button text */}
      <span className="pointer-events-none">{text}</span>
    </a>
  );
};

export default Button;
