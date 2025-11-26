import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xl italic text-muted-foreground mb-2">
            Get in touch
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl mb-6 font-normal">Contact</h2>
          
          <p className="mb-6">
            I'm always interested in hearing from readers, writers, and thinkers.
          </p>

          <div className="space-y-4 my-8">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@example.com">hello@example.com</a>
            </p>
            
            <p>
              <strong>Twitter:</strong>{" "}
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                @yourusername
              </a>
            </p>
            
            <p>
              <strong>Subscribe:</strong>{" "}
              <a href="/rss">RSS Feed</a>
            </p>
          </div>

          <p className="text-muted-foreground mt-12">
            I try to respond to all thoughtful messages, though it may take some time.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Contact;
