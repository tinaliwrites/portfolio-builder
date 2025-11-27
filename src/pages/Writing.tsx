import Header from "@/components/Header";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

const StoryCard = ({ story, featured, index, className }: { story: any, featured?: boolean, index?: number, className?: string }) => (
  <div className={`group relative ${featured ? "md:col-span-2" : "md:col-span-1"} ${className || ""}`}>
    {/* Hand-drawn border effect */}
    <div className={`absolute inset-0 border-2 border-primary/20 transition-colors duration-300 group-hover:border-primary/40 pointer-events-none
      ${(index || 0) % 2 === 0
        ? "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]"
        : "rounded-[15px_225px_15px_255px/255px_15px_225px_15px]"
      }
    `}></div>

    <a href={story.link || "#"} target="_blank" rel="noopener noreferrer" className="block p-2 h-full no-underline">
      <div className={`flex flex-col h-full ${featured ? "lg:flex-row lg:gap-0 lg:items-center" : "gap-0 justify-start"}`}>
        {story.image && (
          <div className={`shrink-0 overflow-hidden rounded-sm ${featured ? "w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-64" : "w-full aspect-video"}`}>
            <div className="h-full w-full p-2">
              <img
                src={`${import.meta.env.BASE_URL}${story.image.startsWith('/') ? story.image.slice(1) : story.image}`}
                alt={story.headline}
                className="h-full w-full object-cover rounded-md brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        )}
        <div className={`flex flex-col justify-center p-2 ${featured && story.image ? "lg:w-1/2 lg:mt-0" : "w-full"}`}>
          <div className="text-[10px] font-medium text-primary/80 uppercase tracking-wider mb-2">
            {story.publication} • {story.date}
          </div>
          <h4 className={`font-serif font-medium text-foreground group-hover:text-primary transition-colors mb-2 ${featured ? "text-2xl" : "text-lg"}`}>
            {story.headline}
          </h4>
          <p className="text-muted-foreground mb-4 leading-tight">
            {story.subhead}
          </p>
        </div>
      </div>
    </a>
  </div>
);

const Writing = () => {
  const beats = [
    {
      title: "Business",
      introContent: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg">
          <p className="text-xl leading-tight text-black relative z-10 font-serif text-right w-full text-balance">
            Beyond deals and valuations, why is a company succeeding or failing and what could that mean? I’m drawn to business stories where innovation reckons with culture and regulation, and I always aim to center people and&nbsp;equity.
          </p>
        </div>
      ),
      stories: [
        {
          headline: "California’s Central Valley is fertile ground for agtech experimentation",
          subhead: "After the collapse of high-profile vertical farming ventures, a new wave of agrobotics startups is emerging in the Sacramento-Davis corridor. Attuned to farmers’ needs, their promises may also come with pressures for local workers.",
          publication: "The Sacramento Bee",
          date: "August 5, 2025",
          image: "/images/agtech.jpg",
          link: "https://www.sacbee.com/news/business/article311542464.html"
        },
        {
          headline: "Blaize just made a $120M Asia AI deal. Could Sacramento become a chipmaking hub?",
          subhead: "One of the first in-depth looks at how regional tech ecosystems outside Silicon Valley are positioning themselves in the AI economy.",
          publication: "The Sacramento Bee",
          date: "July 26, 2025",
          image: "/images/blaize.jpg",
          link: "https://www.sacbee.com/news/business/article311270530.html#storylink=cpy"
        },
        {
          headline: "Yale pushes Zaroka to close early, citing structural instability",
          subhead: "After four years of investing in upgrades and serving the New Haven community, Zaroka Bar & Grill’s owner says he is now forced to leave—with little compensation and closure.",
          publication: "Yale Daily News",
          date: "Apr 24, 2025",
          image: "/images/zaroka.jpg",
          link: "https://yaledailynews.com/blog/2025/04/24/yale-pushed-zaroka-to-close-early-citing-structural-instability/"
        }
      ],
      footerContent: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg">
          <p className="text-xl leading-tight text-black relative z-10 font-serif text-left">
            I’ve also reported quick hit stories on{" "}
            <a
              href="https://www.sacbee.com/news/business/article311279515.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors"
            >
              startup acquisitions
            </a>
            ,{" "}
            <a
              href="https://www.sacbee.com/news/business/article310813835.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors"
            >
              company layoffs
            </a>
            , and{" "}
            <a
              href="https://www.sacbee.com/news/business/article310336020.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors"
            >
              CEO turnover
            </a>
            . I’ve dug through legal documents to trace a cheesesteak restaurant’s{" "}
            <a
              href="https://yaledailynews.com/blog/2025/03/04/yale-sues-phillys-after-alleged-rent-evasion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors"
            >
              rent evasion
            </a>{" "}
            and years of almond harvest reports to contextualize a{" "}
            <a
              href="https://www.sacbee.com/news/business/article310730300.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors"
            >
              record almond yield forecast
            </a>
            .
          </p>
        </div>
      )
    },
    {
      title: "Transportation",
      introContent: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg">
          <p className="text-xl leading-tight text-black relative z-10 font-serif text-right w-full text-balance">
            The history and policy behind our streets, transit networks, highways, and bridges can be dense and confusing. My reporting unpacked these issues:
          </p>
        </div>
      ),
      introContent2: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg">
          <p className="text-xl leading-tight text-black relative z-10 font-serif text-center w-full text-balance">
            Traffic safety delays and overlooked infrastructure aren’t abstract problems. They affect how we move, work, and live. I told the stories of those whose experiences often go unnoticed:
          </p>
        </div>
      ),
      stories: [
        {
          headline: "California high-speed rail may lose $4 billion. Should it continue?",
          subhead: "With the Trump administration’s threat to pull $4 billion in funding, California’s bullet train faces mounting questions over costs, ridership and whether its scaled-back Central Valley segment can still justify the investment.",
          publication: "The Sacramento Bee",
          date: "April 25, 2025",
          image: "/images/high-speed-rail.jpg",
          link: "https://www.sacbee.com/news/california/article311641410.html"
        },
        {
          headline: "The Long Ride Home",
          subhead: "Since 2019, forty-four pedestrians and cyclists have been killed on New Haven streets. In this cover feature, I dive into New Haven's deadly history of urban renewal and the current bureaucracy slowing progress.",
          publication: "The New Journal",
          date: "February 15, 2025",
          image: "/images/long-ride-home.jpg",
          link: "https://thenewjournalatyale.com/2025/02/the-long-ride-home/"
        },
        {
          headline: "Why daylighting matters: Sacramento's new parking law",
          subhead: "(with visual graphics I created myself)",
          publication: "The Sacramento Bee",
          date: "Jul 10, 2025",
          image: "/images/daylighting.jpg",
          link: "https://www.sacbee.com/news/local/article310316735.html"
        },
        {
          headline: "Chapel Street’s conversion plans raises safety concerns for bikers",
          subhead: "",
          publication: "Yale Daily News",
          date: "January 21, 2025",
          link: "https://yaledailynews.com/blog/2025/01/21/chapel-streets-conversion-plans-raises-safety-concerns-for-bikers/"
        },
        {
          headline: "Pedestrian fears abound at East Rock intersection",
          subhead: "",
          publication: "Yale Daily News",
          date: "Nov 13, 2024",
          link: "https://yaledailynews.com/blog/2024/11/13/pedestrian-fears-abound-at-east-rock-intersection/"
        },
        {
          headline: "A drunk driver hit a Sacramento County teen. She and her mom navigate a new life",
          subhead: "",
          publication: "The Sacramento Bee",
          date: "June 23, 2025",
          image: "/images/drunk-driver.jpg",
          link: "https://www.sacbee.com/news/local/article309104730.html#storylink=cpy"
        },
        {
          headline: "Speed cameras proposed to protect construction workers",
          subhead: "",
          publication: "The Sacramento Bee",
          date: "June 11, 2025",
          image: "/images/speed-cameras.jpg",
          link: "https://www.sacbee.com/news/local/transportation/article308223445.html"
        }
      ],
    },
    {
      title: "Policy",
      introContent: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg h-full">
          <p className="text-xl leading-tight text-black relative z-10 font-serif text-right w-full text-balance">
            As recent federal directives roil campuses and cities, I told stories showing how these disruptions play out on the ground.
          </p>
        </div>
      ),
      stories: [
        {
          headline: "Trump’s SNAP Cuts Threaten Customers, Farmers At This Historic SF Market",
          subhead: "More than 100,000 in San Francisco use the benefits. The more who get squeezed out, the harder for low-cost food sellers to serve them, even with the state’s bonus boost.",
          publication: "The Frisc",
          date: "July 17, 2025",
          image: "/images/snap-cuts.jpg",
          link: "https://thefrisc.com/trump-snap-cuts-risk-business-at-this-historic-sf-farmers-market/"
        },
        {
          headline: "Unforced Error",
          subhead: "STEM researchers entered academia to push the frontiers of knowledge, but recent federal cuts force them to reconsider their dreams.",
          publication: "The New Journal",
          date: "September 28, 2025",
          image: "/images/unforced-error.jpg",
          link: "https://thenewjournalatyale.com/2025/09/unforced-error/"
        }
      ],
      footerContent: (
        <div className="relative p-4 flex items-center bg-muted/30 rounded-lg h-full">
          <p className="text-lg leading-tight text-black relative z-10 font-serif text-left">
            On the town-gown relations beat, I covered efforts from <a href="https://yaledailynews.com/blog/2025/02/05/we-have-a-big-year-ahead-unite-here-urge-for-city-yale-solidarity-in-trump-era/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">activists</a>, <a href="https://yaledailynews.com/blog/2025/02/12/new-haven-seeks-larger-voluntary-contribution/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">city leaders</a>, and <a href="https://yaledailynews.com/blog/2025/02/14/unlikely-state-bill-proposes-taxing-yale-endowment/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">state government</a> to demand Yale contribute more to New Haven. I also wrote about <a href="https://yaledailynews.com/blog/2024/10/23/anxieties-persist-about-fgli-emergency-funding/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">financial aid anxieties at Yale</a>, <a href="https://yaledailynews.com/blog/2024/09/25/wilbur-cross-high-school-teachers-students-concerned-about-deteriorating-facilities/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">New Haven public school disrepair</a>, and the contrasting <a href="https://yaledailynews.com/blog/2025/04/25/restraint-and-rhetoric-mcinnis-and-elickers-different-tacks-on-trump-directives/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary decoration-primary/30 underline underline-offset-4 transition-colors">public tacks</a> President Maurie McInnis and Mayor Justin Elicker took to navigating federal pressure.
          </p>
        </div>
      )
    },
    {
      title: "Culture",
      stories: [
        {
          headline: "Independent Declarations",
          subhead: "Meet the stars of the New Haven Independent’s comments section.",
          publication: "The New Journal",
          date: "September 20, 2024",
          image: "/images/independent-declarations.jpg",
          link: "https://thenewjournalatyale.com/2024/09/independent-declarations/"
        },
        {
          headline: "Restaurant Days",
          subhead: "As Chinese American takeout restaurateurs across the country retire, a husband-wife duo from Yale is seeking to innovate and automate the cuisine. I profile them and reckon with my own family’s history in the business.",
          publication: "The Yale Herald",
          date: "November 17, 2024",
          image: "/images/restaurant-days.jpg",
          link: "https://yale-herald.com/2024/11/17/restaurant-days/"
        },
        {
          headline: "Striking a Chord",
          subhead: "Keeping tempo with the Yale student band scene.",
          publication: "The New Journal",
          date: "February 14, 2024",
          image: "/images/asian-american-changemakers.jpg",
          link: "https://thenewjournalatyale.com/2024/02/striking-a-chord/"
        },
        {
          headline: "New Haven’s Asian American changemakers",
          subhead: "A generation of Asian American leaders are finding their own ways to fight for change in New Haven.",
          publication: "Yale Daily News",
          date: "April 12, 2025",
          image: "/images/striking-a-chord.jpg",
          link: "https://yaledailynews.com/blog/2025/04/12/new-havens-asian-american-changemakers/"
        },
        {
          headline: "Wagon Train riders bring horsepower to Highway 50",
          subhead: "A troupe of cowboys, wagoneers, and visitors travel a historic Tahoe route and build community—at a clip of about three and a half miles per hour.",
          publication: "The Sacramento Bee",
          date: "June 7, 2025",
          image: "/images/wagon-train.jpg",
          link: "https://www.sacbee.com/news/local/article308077275.html#storylink=cpy"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-6 py-16 font-serif">


        <div className="space-y-24">
          {beats.map((beat, beatIndex) => (
            <FadeInSection key={beat.title}>
              <section>
                <div className="relative inline-block mb-8">
                  <h3 className="text-5xl font-serif italic relative z-10">
                    {beat.title}
                  </h3>
                  <svg className="absolute w-[110%] h-8 -bottom-2 -left-[5%] text-primary/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="12" fill="none" />
                  </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                  {beatIndex === 0 && (
                    <>
                      {beat.introContent}
                      <StoryCard story={beat.stories[0]} featured={true} index={0} />
                      <StoryCard story={beat.stories[1]} index={1} />
                      <StoryCard story={beat.stories[2]} index={2} />
                      {beat.footerContent}
                    </>
                  )}
                  {beatIndex === 1 && (
                    <>
                      {/* Grid 2: Infrastructure */}
                      <div className="md:col-span-3">
                        {(beat as any).introContent2}
                      </div>
                      <StoryCard story={beat.stories[5]} index={5} />
                      <StoryCard story={beat.stories[6]} index={6} />
                      <div className="flex flex-col gap-2 h-full md:col-span-1 justify-center">
                        <StoryCard story={beat.stories[3]} index={3} />
                        <StoryCard story={beat.stories[4]} index={4} />
                      </div>

                      {/* Spacer */}
                      <div className="md:col-span-3 h-12"></div>

                      {/* Grid 1: Transportation */}
                      {beat.introContent}
                      <StoryCard story={beat.stories[0]} featured={true} index={0} />
                      <StoryCard story={beat.stories[1]} featured={true} index={1} />
                      <StoryCard story={beat.stories[2]} index={2} />
                    </>
                  )}
                  {beatIndex === 2 && (
                    <>
                      <div className="md:col-start-2 md:col-span-2">
                        {beat.introContent}
                      </div>
                      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StoryCard story={beat.stories[0]} index={0} />
                        <StoryCard story={beat.stories[1]} index={1} />
                      </div>
                      <div className="md:col-span-2">
                        {beat.footerContent}
                      </div>
                    </>
                  )}
                  {beatIndex === 3 && (
                    <>
                      <StoryCard story={beat.stories[0]} index={0} />
                      <StoryCard story={beat.stories[1]} index={1} />
                      <StoryCard story={beat.stories[2]} index={2} />
                      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-6 gap-1">
                        <div className="md:col-start-2 md:col-span-2">
                          <StoryCard story={beat.stories[3]} index={3} />
                        </div>
                        <div className="md:col-span-2">
                          <StoryCard story={beat.stories[4]} index={4} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="mt-32 text-center border-t border-primary/10 pt-16">
            <h3 className="text-2xl font-serif italic text-foreground mb-12">
              My work has appeared in:
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-serif">
              <a
                href="https://www.sacbee.com/profile/307677236"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 no-underline"
              >
                <span className="absolute inset-0 border-2 border-primary/40 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] group-hover:border-primary transition-colors duration-300"></span>
                <span className="relative block text-lg font-medium text-foreground group-hover:scale-110 transition-transform duration-300">
                  The Sacramento Bee
                </span>
              </a>

              <a
                href="https://thenewjournalatyale.com/author/tina-li/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 no-underline"
              >
                <span className="absolute inset-0 border-2 border-primary/40 rounded-[15px_225px_15px_255px/255px_15px_225px_15px] group-hover:border-primary transition-colors duration-300"></span>
                <span className="relative block text-lg font-medium text-foreground group-hover:scale-110 transition-transform duration-300">
                  The New Journal
                </span>
              </a>

              <a
                href="https://yaledailynews.com/blog/author/tinali/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 no-underline"
              >
                <span className="absolute inset-0 border-2 border-primary/40 rounded-[225px_15px_225px_15px/15px_225px_15px_255px] group-hover:border-primary transition-colors duration-300"></span>
                <span className="relative block text-lg font-medium text-foreground group-hover:scale-110 transition-transform duration-300">
                  Yale Daily News
                </span>
              </a>

              <a
                href="https://yale-herald.com/2024/11/17/restaurant-days/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 no-underline"
              >
                <span className="absolute inset-0 border-2 border-primary/40 rounded-[235px_25px_235px_25px/25px_235px_25px_235px] group-hover:border-primary transition-colors duration-300"></span>
                <span className="relative block text-lg font-medium text-foreground group-hover:scale-110 transition-transform duration-300">
                  The Yale Herald
                </span>
              </a>

              <a
                href="https://thefrisc.com/author/tina-li/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 no-underline"
              >
                <span className="absolute inset-0 border-2 border-primary/40 rounded-[25px_235px_25px_235px/235px_25px_235px_25px] group-hover:border-primary transition-colors duration-300"></span>
                <span className="relative block text-lg font-medium text-foreground group-hover:scale-110 transition-transform duration-300">
                  The Frisc
                </span>
              </a>
            </div>
          </div>
        </FadeInSection>


      </main>
    </div>
  );
};

export default Writing;
