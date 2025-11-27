import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";

import FadeInSection from "./FadeInSection";

const Resume = () => {
    return (
        <section className="py-4 space-y-16">

            {/* Work Experience */}
            <div className="space-y-8">
                <FadeInSection>
                    <h3 className="text-2xl font-medium text-primary mb-8">Experience</h3>
                </FadeInSection>

                <div className="space-y-12">
                    <FadeInSection>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-medium">The New Journal</h4>
                                <span className="text-sm text-muted-foreground">New Haven, CT</span>
                            </div>

                            <div className="space-y-6 pl-4">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h5 className="font-medium text-foreground">Managing Editor</h5>
                                        <span className="text-xs text-muted-foreground">Feb 2025 - Present</span>
                                    </div>
                                    <ul className="space-y-1 text-sm text-muted-foreground/80">
                                        <li className="flex gap-3">
                                            <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                            <span>Led editorial vision for the longform narrative magazine about Yale and New Haven (5 issues/year)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                            <span>Mentored writers and associate editors, enforced journalistic rigor, and expanded coverage of marginalized voices</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h5 className="font-medium text-foreground">Associate Editor</h5>
                                        <span className="text-xs text-muted-foreground">Feb 2024 - Feb 2025</span>
                                    </div>
                                    <ul className="space-y-1 text-sm text-muted-foreground/80">
                                        <li className="flex gap-3">
                                            <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                            <span>Shaped stories through structural edits and voice refinement</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-medium">The Sacramento Bee</h4>
                                <span className="text-sm text-muted-foreground">June 2025 - Aug 2025</span>
                            </div>
                            <div className="pl-4">
                                <p className="text-lg text-foreground mb-2">Reporting Intern</p>
                                <ul className="space-y-1 text-sm text-muted-foreground/80">
                                    <li className="flex gap-3">
                                        <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                        <span>Covered transportation and business</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                        <span>Produced 20 bylines and contributed to breaking news coverage</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-medium">Yale Daily News</h4>
                                <span className="text-sm text-muted-foreground">Aug 2024 - May 2025</span>
                            </div>
                            <div className="pl-4">
                                <p className="text-lg text-foreground mb-2">Beat Reporter</p>
                                <ul className="space-y-1 text-sm text-muted-foreground/80">
                                    <li className="flex gap-3">
                                        <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                        <span>Covered city-university relations</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary/60 text-xs mt-[3px] shrink-0">○</span>
                                        <span>Filed 2-3 stories weekly for 20k+ readers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
                <FadeInSection>
                    <h3 className="text-2xl font-medium text-primary mb-8">Education</h3>
                </FadeInSection>

                <div className="space-y-12">
                    <FadeInSection>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-medium">Yale University</h4>
                                <span className="text-sm text-muted-foreground">Expected May 2027</span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-2">BA in English Language and Literature</p>
                            <div className="text-sm text-muted-foreground/80 space-y-2">
                                <p><span className="font-medium">3.87/4 GPA</span></p>
                                <p><span className="font-medium">Concentration in creative nonfiction writing</span></p>
                                <p><span className="font-medium">Work positions:</span> Research assistant, Professor Scott Shapiro at Yale Law School; Directed Studies Peer Writing Tutor; East Rock Record journalism tutor; The Yale Review nonfiction reader</p>
                                <p><span className="font-medium">Extracurriculars:</span> FOOT (First Year Outdoor Orientation Trips) leader, Yale Effective Altruism, Yale Dramatic Association, Yale AI Policy Initiative, Pierson College Buttery</p>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-medium">Granby High School</h4>
                                <span className="text-sm text-muted-foreground">2023</span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-2">International Baccalaureate Diploma</p>
                            <div className="text-sm text-muted-foreground/80 space-y-2">
                                <p><span className="font-medium">5.1/4 GPA, Salutatorian</span></p>
                                <p><span className="font-medium">Awards:</span> The Gates Foundation scholar; Leadership Enterprise for a Diverse America scholar</p>
                                <p><span className="font-medium">Extracurriculars:</span> The Granby Spectator Founder and Editor-in-Chief, Future Problem Solving Team 3x Virginia state champion</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
                <FadeInSection>
                    <h3 className="text-2xl font-medium text-primary mb-8">Skills</h3>
                </FadeInSection>
                <FadeInSection>
                    <div className="space-y-4 text-muted-foreground/80">
                        <div>
                            <span className="font-medium text-foreground">Technical Skills:</span> Copy editing (AP and Chicago style), programming (Python, C, CSS, HTML), photography
                        </div>
                        <div>
                            <span className="font-medium text-foreground">Languages:</span> Mandarin Chinese (native), Spanish (working)
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Resume;
