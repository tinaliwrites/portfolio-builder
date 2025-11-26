import Header from "@/components/Header";

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xl italic text-muted-foreground mb-2">
            A curated reading list
          </p>
          <p className="text-sm text-muted-foreground border-t border-b border-border py-4 mt-8">
            Updated regularly
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl mb-6 font-normal">Books I Like</h2>
          
          <p className="mb-6">
            The books I've liked since the time I started college. I try to excerpt the ones I like best.
          </p>

          <p className="mb-8 text-muted-foreground">
            What should I read next? Email me: <a href="mailto:hello@example.com">hello@example.com</a>
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li className="mb-6">
              <strong>Stendhal</strong>, The Red and the Black
              <ul className="mt-2 list-none pl-6 text-muted-foreground">
                <li>Best translation is the one by Robert M. Adams. Burton Raffel translation is good too.</li>
              </ul>
            </li>
            
            <li className="mb-6">
              <strong>Smith</strong>, The Theory of Moral Sentiments
            </li>
            
            <li className="mb-6">
              <strong>Melville</strong>, Moby-Dick
            </li>
            
            <li className="mb-6">
              <strong>Cowen</strong>, In Praise of Commercial Culture
            </li>
            
            <li className="mb-6">
              <strong>Wharton</strong>, The House of Mirth
            </li>
            
            <li className="mb-6">
              <strong>Hayek</strong>, The Constitution of Liberty
            </li>
            
            <li className="mb-6">
              <strong>Ross</strong>, The Rest is Noise
              <ul className="mt-2 list-none pl-6 text-muted-foreground">
                <li>Runs through the personalities of the 20th century. My favorite book on music.</li>
              </ul>
            </li>
            
            <li className="mb-6">
              <strong>Epstein</strong>, Simple Rules for a Complex World
            </li>
            
            <li className="mb-6">
              <strong>Proust</strong>, Swann's Way, trans. Lydia Davis
            </li>
            
            <li className="mb-6">
              <strong>Thiel & Masters</strong>, CS 183 notes & Zero to One
              <ul className="mt-2 list-none pl-6 text-muted-foreground">
                <li>If you must pick one, read the lecture notes. The radicalism of the ideas comes through more clearly.</li>
              </ul>
            </li>
            
            <li className="mb-6">
              <strong>Montaigne</strong>, Essays
            </li>
            
            <li className="mb-6">
              <strong>Tolstoy</strong>, Anna Karenina
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
};

export default Books;
