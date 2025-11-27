import Header from "@/components/Header";
import FadeInSection from "@/components/FadeInSection";

const MoreAbout = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
                <div className="space-y-10 text-lg leading-snug text-foreground/90">
                    <FadeInSection>
                        <p className="mb-4">
                            At Yale, I study English literature and nonfiction creative writing. In my free time, I enjoy hiking, reading <a href="https://pudding.cool/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">funky</a> <a href="https://reallifemag.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">online</a> <a href="https://www.thedriftmag.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">magazines</a>, writing poetry, and friendly debating.
                        </p>
                        <p>
                            I was born in Chinatown in Brooklyn, New York. I’ve lived in Fuzhou, China; Huntersville, North Carolina; and Chesapeake, Virginia. But I mainly grew up in Norfolk, Virginia (the largest naval base in the world!) and I now spend my time in between New Haven, Norfolk, and the DMV area. I somehow always find an excuse, though, to fly to San Francisco a couple times a year.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <p className="mb-1 font-medium">Here are some books that mean a lot to me:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>E.M. Forster, <em>The Longest Journey</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Louisa May Alcott, <em>Little Women</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Ray Bradbury, <em>Dandelion Wine</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>John Steinbeck, <em>East of Eden</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Virginia Woolf, <em>To the Lighthouse</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Tsitsi Dangarembga, <em>Nervous Conditions</em></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Yevgeny Zamyatin, <em>We</em></span>
                            </li>
                        </ul>
                    </FadeInSection>

                    <FadeInSection>
                        <p className="mb-1 font-medium">And some short stories and essays:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Ted Chiang, “Story of Your Life”</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Daniel Keyes, “Flowers for Algernon”</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Virginia Woolf, “Street Haunting”</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>E.B. White, “Once More to the Lake”</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Zadie Smith, <a href="https://www.newyorker.com/magazine/2025/09/29/the-art-of-the-impersonal-essay" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">“The Art of the Impersonal Essay”</a></span>
                            </li>
                        </ul>
                    </FadeInSection>

                    <FadeInSection>
                        <p className="mb-1 font-medium">I am happily haunted by poetry. My favorites are usually about love, anxiety, and agency:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>T.S. Eliot, <a href="https://www.poetryfoundation.org/poetrymagazine/poems/44212/the-love-song-of-j-alfred-prufrock" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">The Love Song of J. Alfred Prufrock</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Natalie Diaz, <a href="https://poets.org/poem/desire-field" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">From the Desire Field</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Ada Limon, <a href="https://www.newyorker.com/books/poems/envelopes-of-air-ada-limon-and-natalie-diaz-forge-a-bond-amid-the-shifting-landscape-of-contemporary-america" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">Sometimes I Think My Body Leaves A Shape In The Air</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Gwendolyn Brooks, <a href="https://www.brinkerhoffpoetry.org/poems/the-second-sermon-on-the-warpland" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">The Second Sermon on the Warpland</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Agha Shahid Ali, <a href="https://www.poetryfoundation.org/poems/51652/tonight-56d22f898fcd7" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">Tonight</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Elizabeth Bishop, <a href="https://www.poetryfoundation.org/poems/48287/crusoe-in-england" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">Crusoe in England</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>William B. Yeats, <a href="https://www.poetryfoundation.org/poems/43294/a-dialogue-of-self-and-soul" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">A Dialogue of Self and Soul</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>William Wordsworth, <a href="https://en.wikisource.org/wiki/The_Prelude_(Wordsworth)/Book_XII" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">Prelude, Book 12</a> lines 324-339</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Rainer Maria Rilke, <a href="http://www.paularcher.net/translations/rainer_maria_rilke/die_spanische_trilogie.html" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">The Spanish Trilogy</a></span>
                            </li>
                        </ul>
                    </FadeInSection>

                    <FadeInSection>
                        <p>
                            My favorite films are <em>Phantom Thread</em> (Paul Thomas Anderson, 2017) and <em>Chungking Express</em> (Wong Kar-Wai, 1994). My favorite Jane Austen adaptations are <em>Persuasion</em> (1995) and BBC’s <em>Pride and Prejudice</em> miniseries (1995). Lots of great things were happening in 1995! I enjoy writing with Chopin’s Preludes, Legend of Zelda soundtracks, or instrumental jazz in the background. I love The Cure and The Smiths.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <p className="mb-1 font-medium">Some principles I try to live by:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Seek knowledge and beauty even when it seems impossible <a href="https://www.christendom.edu/wp-content/uploads/2021/02/Learning-In-Wartime-C.S.-Lewis-1939.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">(always)</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>If it feels hard to do something, <a href="https://jasmi.news/p/anson-hudzah" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">ask for help</a></span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Making art, dancing, and singing are all human activities before they are skills</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Send that cold email</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <span>Send many hot ones too (if a cold email is unsolicited, to a stranger, and generally connoted with networking, a hot one might be expected on a regular basis, to close friends, or for no reason but fun)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary/60 text-xs mt-[6px] shrink-0">○</span>
                                <a href="https://www.avabear.xyz/p/the-friendship-theory-of-everything" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">Ava Xiong, “the friendship theory of everything”</a>
                            </li>
                        </ul>
                    </FadeInSection>
                </div>
            </main>
        </div>
    );
};

export default MoreAbout;
