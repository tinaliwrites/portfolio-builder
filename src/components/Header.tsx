import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-background relative">
      <div className="absolute top-4 right-6 text-xs font-serif text-muted-foreground text-right hidden md:block">
        <div>New Haven, CT</div>
        <div>{time} EST</div>
      </div>
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h1 className="text-center text-4xl font-bold mb-6 text-foreground">
          Tina Li
        </h1>
        <nav className="flex justify-center gap-8 text-base">
          <Link
            to="/about"
            className={`text-primary hover:underline decoration-primary ${location.pathname === "/" || location.pathname === "/about" ? "underline" : "no-underline"}`}
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
