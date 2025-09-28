import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block mt-[20px]">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Software Engineer & Frontend Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Ankit Tyagi
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
            I’m a software developer at Delta6Labs with around 2 years of experience building responsive, user-focused web applications. I specialize in creating scalable front-end solutions with a strong emphasis on performance, clean architecture, and modern design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#projects">
  <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
    <span className="relative z-10 flex items-center">
      View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  </Button>
</Link>

<a href="mailto:honeytyagi62409@email.com">
  <Button
    variant="outline"
    className="border-zinc-700 text-black hover:text-pink-500 hover:border-zinc-500"
  >
    Contact Me
  </Button>
</a>


            </div>
            <div className="flex gap-4 pt-4">
            <Link href="https://github.com/chlnedo" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ankit-tyagi-8a49b8222/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:honeytyagi62409@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/mine.jpeg?height=600&width=600"
                  alt="Ankit Tyagi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate software engineer with experience building web applications and digital products. I
                  specialize in frontend development with React and Next.js, but I'm also comfortable working with
                  backend technologies.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started with a strong foundation in software development. I've worked with various
                  companies to create intuitive, performant, and accessible digital experiences.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Ankit Tyagi</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-wrap break-words">honeytyagi62409@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Noida</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                <a href="/Ankit_tyagi.pdf" download>
  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
    Download Resume
  </Button>
</a>

                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

       {/* Experience Section */}
       <section id="experience" className="py-12 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Chakra UI" level={95} />
            <SkillBadge name="C++" level={80} />
            <SkillBadge name="Bitbucket" level={85} />
            <SkillBadge name="VS Code" level={90} />
            <SkillBadge name="Git" level={95} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* <ProjectCard
              title=" Ofza-CryptoExchange (White-label Solution)"
              description="As a key team member in the development of Ofza-CryptoExchange(it is a client project), a white-label cryptocurrency trading platform, I was primarily responsible for integrating and consuming REST APIs across the frontend to ensure seamless interaction between the user interface and backend services. My work involved implementing core features such as user authentication, wallet management, spot trading, and order book functionalities."
              tags={["Next.js", "TypeScript", "JavaScript", "Tailwind"]}
              image="/ofza.png?height=400&width=600"
              demoUrl="https://ofza.com/en"
              // repoUrl="https://github.com"
            />
            <ProjectCard
              title="Zenit-CryptoExchange (Improved Lighthouse performance scores) Client Project"
              description="Improved Lighthouse performance scores to 90+, optimizing key metrics such as First Contentful Paint (FCP),Cumulative Layout Shift (CLS), and Largest Contentful Paint (LCP), resulting in faster page load times and a more responsive user experience."
              tags={["Next.js", "TypeScript", "JavaScript", "Redux"]}
              image="/zenit.png?height=400&width=600"
              demoUrl="https://zenit.world/en"
            />
            <ProjectCard
              title="Passkey Implementation Client Project"
              description="Contributed to the implementation of passkey functionality for enhanced security, streamlining user authentication and
login processes."
              tags={["Next.js", "TypeScript", "JavaScript", "Tailwind"]}
              image="/passkey.png?height=400&width=600"
              demoUrl="https://bitdelta.com/en"
            /> */}
            <ProjectCard
              title="NutriTrack Pro"
              description="This project is a Personalized Nutrition and Fitness Companion that integrates an AI Assistant to help users achieve their health and fitness goals. It offers tailored nutrition plans, fitness routines, and real-time guidance through AI-powered interactions. Users can track their daily progress, receive meal suggestions based on dietary preferences, and get personalized workout recommendations—all in one place."
              tags={["Next.js", "TypeScript", "JavaScript", "Tailwind", "AI"]}
              image="/nutritracck.png?height=400&width=600"
              demoUrl="https://v0-calorie-tracking-app-lemon.vercel.app/"
              repoUrl="https://github.com/chlnedo/calorie-tracker"
            />
            <ProjectCard
              title="AdoptaPaw"
              description="Developed a web platform connecting users for posting details about street dogs, fostering a seamless adoption process. User authentication for secure logins.Intuitive interface enabling easy posting of street dog details.Utilized React.js and React Router for smooth navigation.Overcame Backend challenges with robust Appwrite
implementation."
              tags={["Next.js", "TypeScript", "JavaScript", "Tailwind"]}
              image="/adoptpaw.png?height=400&width=600"
              demoUrl="https://www.youtube.com/watch?v=MCWurvMcwRw"
              repoUrl="https://github.com/chlnedo/Post-info-street-dogs-and-adopt/tree/main"
            />
            <ProjectCard
              title="Git-Detective"
              description=" Developed a Web app built with javascript that allows the user to search for github users and view their profile info and
top repository. The web app fetches data from github API and provide user friendly interface to explore github profiles."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/detective.png?height=400&width=600"
              demoUrl="https://gitdetective.netlify.app/"
              repoUrl="https://github.com/chlnedo/fetch-github-user-details"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <Link href="mailto:honeytyagi62409@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="font-medium">honeytyagi62409@gmail.com</div>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <Link href="https://www.linkedin.com/in/ankit-tyagi-8a49b8222/" target="_blank" rel="noopener noreferrer">
                    <div className="font-medium">linkedin/ankit-tyagi-8a49b8222/</div>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <Link href="https://github.com/chlnedo" target="_blank" rel="noopener noreferrer">
                    <div className="font-medium">github.com/chlnedo</div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ankit</span>
              <span className="text-white">Tyagi</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Ankit Tyagi. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
          <Link href="https://github.com/chlnedo" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ankit-tyagi-8a49b8222/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:honeytyagi62409@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
