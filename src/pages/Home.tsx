import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xl italic text-muted-foreground mb-8">
            Writer & Essayist
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl mb-6 font-normal">About</h2>
          
          <p className="mb-4">
            I write essays on culture, technology, and the ideas that shape our world. 
            My work explores the intersection of literature, philosophy, and contemporary life.
          </p>

          <p className="mb-4">
            This is a space for long-form thinking and careful observation. I believe in 
            taking the time to develop ideas fully, drawing connections between disparate 
            fields, and writing with clarity and precision.
          </p>

          <p className="mb-4">
            You can find my recent essays in the Writing section, or browse through the 
            books that have influenced my thinking over the years.
          </p>

          <p className="text-muted-foreground mt-12">
            Subscribe via <a href="/rss">RSS</a> to stay updated with new essays.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Home;
