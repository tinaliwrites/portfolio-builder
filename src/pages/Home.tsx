import Header from "@/components/Header";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
        <FadeInSection>
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
            <p>Hello! I’m Tina, a journalist and junior at Yale.</p>
            <p>
              I currently serve as managing editor of <em>The New Journal</em>, a narrative longform magazine about Yale and New Haven. Last summer, I interned at <em>The Sacramento Bee</em>, where I wrote about transportation and business. I’ve covered town-gown relations for the <em>Yale Daily News</em> and contributed work to <em>The Yale Herald</em> and <em>The Frisc</em>.
            </p>
            <p>
              My reporting interests span business, technology, transportation, and politics. I write stories that contextualize company deals and infrastructure sagas; draw out the culture of an industry, city, or community; and tell the human experiences impacted by abstract policy. I love journalism because it lets me dive into unfamiliar subjects, talk to experts and everyday people alike, and bring what I learn back to readers.
            </p>
            <p>
              Please reach out at <a href="mailto:tina.li.tl766@yale.edu" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">tina.li.tl766@yale.edu</a>, or connect with me on <a href="https://www.linkedin.com/in/tinaliyale/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">LinkedIn</a>.
            </p>
            <p>
              While you’re here, you can read my clips and peruse my reporting journey, check out my resume, and <Link to="/more-about" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">read even more about me.</Link>
            </p>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default Home;
