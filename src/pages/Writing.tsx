import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Writing = () => {
  const essays = [
    {
      title: "The Architecture of Thought",
      date: "March 15, 2024",
      excerpt: "On the physical spaces that shape how we think, from libraries to cafes to solitary walks.",
      slug: "architecture-of-thought"
    },
    {
      title: "Reading as Resistance",
      date: "February 8, 2024",
      excerpt: "In an age of distraction, the act of sustained reading becomes a radical choice.",
      slug: "reading-as-resistance"
    },
    {
      title: "The Rhythm of Ideas",
      date: "January 22, 2024",
      excerpt: "How the tempo of our daily lives influences the quality of our thinking.",
      slug: "rhythm-of-ideas"
    },
    {
      title: "Notes on Craftsmanship",
      date: "December 10, 2023",
      excerpt: "What old-world artisans can teach us about modern creative work.",
      slug: "notes-on-craftsmanship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xl italic text-muted-foreground mb-2">
            Essays & Commentary
          </p>
        </div>

        <div className="space-y-12">
          {essays.map((essay) => (
            <article key={essay.slug} className="border-b border-border pb-8">
              <p className="text-sm text-muted-foreground mb-2">{essay.date}</p>
              <h2 className="text-2xl mb-3 font-normal">
                <Link 
                  to={`/writing/${essay.slug}`}
                  className="text-foreground no-underline hover:text-primary transition-colors"
                >
                  {essay.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {essay.excerpt}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Writing;
