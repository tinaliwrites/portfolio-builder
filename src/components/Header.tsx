import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <Link to="/" className="no-underline">
          <h1 className="text-center text-4xl tracking-widest mb-6 text-foreground hover:text-primary transition-colors">
            YOUR NAME
          </h1>
        </Link>
        <nav className="flex justify-center gap-8 text-sm">
          <Link 
            to="/" 
            className="text-primary no-underline hover:underline decoration-primary"
          >
            About
          </Link>
          <Link 
            to="/writing" 
            className="text-primary no-underline hover:underline decoration-primary"
          >
            Writing
          </Link>
          <Link 
            to="/books" 
            className="text-primary no-underline hover:underline decoration-primary"
          >
            Books I Like
          </Link>
          <Link 
            to="/contact" 
            className="text-primary no-underline hover:underline decoration-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
