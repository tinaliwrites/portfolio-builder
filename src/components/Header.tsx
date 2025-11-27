import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-background relative">
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h1 className="text-center text-4xl font-bold mb-6 text-foreground">
          Tina Li
        </h1>
        <nav className="flex justify-center gap-8 text-base">
          <Link
            to="/"
            className={`text-primary hover:underline decoration-primary ${location.pathname === "/" ? "underline" : "no-underline"}`}
          >
            About
          </Link>
          <Link
            to="/writing"
            className={`text-primary hover:underline decoration-primary ${location.pathname === "/writing" ? "underline" : "no-underline"}`}
          >
            Writing
          </Link>

          <Link
            to="/resume"
            className={`text-primary hover:underline decoration-primary ${location.pathname === "/resume" ? "underline" : "no-underline"}`}
          >
            Resume
          </Link>


        </nav>
      </div>
      <div className="w-full overflow-hidden leading-[0] text-foreground">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C300,50 600,10 1200,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="opacity-80"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
