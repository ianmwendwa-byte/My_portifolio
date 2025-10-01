
const Button = ({ link, text, Icon, className = '', external = false }) => {
  const isPdf = link && link.endsWith('.pdf');
  return (
    <a
      href={link}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      download={isPdf ? true : undefined}
      className={`
        inline-flex items-center justify-center
        px-2 py-2 text-sm
        sm:px-3 sm:py-2 sm:text-base
        md:px-4 md:py-3 md:text-lg
        rounded-lg
        lg:backdrop-blur-md bg-white/10 border border-text/20
        shadow-lg hover:bg-primary
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-background focus:ring-opacity-75
        ${className}
      `}
    >
      {/* Render the icon if provided */}
      {Icon && <Icon className="mr-1 sm:mr-2 md:mr-3" />}
      {/* Render the button text */}
      <span className="pointer-events-none text-sm sm:text-base md:text-lg">{text}</span>
    </a>
  );

}

export default Button;
