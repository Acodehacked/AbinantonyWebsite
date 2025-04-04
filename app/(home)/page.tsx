"use client"
import { motion } from 'motion/react'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextReveal } from "@/components/magicui/text-reveal";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/public/hero";
import Profile from "@/components/public/home/Profile";
import { Carousel } from "@/components/public/ui/card-carousel";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import FuzzyText from "@/components/ui/FuzzyText/FuzzyText";
import ScrollReveal from "@/components/ui/ScrollReveal/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EVENTS, showcase } from "@/constants";
import { cn } from "@/lib/utils";
import { ExternalLink, MouseIcon, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomeNavbar } from '@/components/home/homenav';


export default function Home() {
  return (
    <div className="max-w-[1700px] overflow-hidden w-full mx-auto flex flex-col text-white min-h-screen">
      <HomeNavbar />
      <section className="flex flex-col relative justify-center overflow-hidden min-h-[80vh]">
        <div className="relative z-[2] p-6">

          <WordRotate
            className="text-center xl:text-[180px] lg:text-[100px] md:text-[50px] sm:text-[60px] text-[50px] font-bold tracking-tight mb-5"
            words={["AbinAntony", "Web Dev", "UIDESIGNER", "APP DEV", "ENGINEER", "CREATOR", "FREELANCER"]}
          />
          <AnimatedContent>
            <About />
          </AnimatedContent>
          {/* <header className=" text-center xl:text-[180px] lg:text-[100px] md:text-[50px] sm:text-[60px] text-[50px] font-bold tracking-wider mb-5">Abinantony</header> */}
          <div className="grid font-p font-light p-5 normal-case md:grid-cols-3 text-xl grid-cols-1 mt-8 md:gap-10 gap-10 tracking-normal">
            <AnimatedContent>
              <p>Currently I have 5 year experience in UI Designing and Web development, Working for domestic and foreign clients. I am currently working at <Link href={'https://webcodecreators.com'} target="_blank" className="underline">Webcodecreators</Link> as Full stack Developer</p>
            </AnimatedContent>
            <AnimatedContent delay={300}>
              <p>I like to describe myself as designer / developer with high discipline and enjoy working in a team or indepently</p>
            </AnimatedContent>
            <AnimatedContent delay={600}>
              <p className="text-2xl">Say Hi to <Link className="underline" href={'mailto:abina5448@gmail.com'}>abina5448@gmail.com</Link></p>
            </AnimatedContent>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-8 md:gap-10 gap-4 lg:text-7xl md:text-5xl text-4xl">
            <LinkP name="GITHUB" link="https://github.com/Acodehacked" />
            <LinkP name="INSTAGRAM" link="https://instagram.com/abin_antny" />
            <LinkP name="LINKEDIN" link="https://linkedin.com/Abinantony" />
          </div>
        </div>
        <div className="absolute top-0 left-0  z-[1] h-full w-full">
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.08}
            duration={3}
            repeatDelay={1}
            className={cn(
              "md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12 opacity-30",
            )}
          />
        </div>
      </section>

      <main className="">
        <VelocityScroll
          text="ABIN ANTONY - WEB | APP DEVELOPER / DESIGNER"
          default_velocity={1}
          className="text-center text-[100px] mb-20 font-regular tracking-[-0.04em] leading-[60px] text-white/5 font-semibold mt-10"
        />
        <Projects />
        <TechStack />
        <section className="p-10 w-full">
          <h2 className="md:text-7xl text-5xl font-medium mb-10 mt-0 p-0">Showcase <span className='text-green-500 font-p text-8xl p-0 m-0 leading-[20px]'>.</span></h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {showcase.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, stiffness: 40 }}>
                <Image src={item.image} alt="alt" className="w-full rounded-2xl" width={500} height={300} />
              </motion.div>
            ))}
          </div>
        </section>
        <Achievements />
        <section className="relative md:min-h-[400px] min-h-[120vh] ">

          <TextReveal className="font-p md:text-3xl lg:text-4xl xl:text-5xl md:leading-[90px]  leading-normal sm:leading-[50px] md:tracking-tight tracking-tighter">
            I’m Abin Antony, a passionate full-stack web developer and technology enthusiast. With a strong foundation in coding, UI/UX design, and cloud solutions, I create dynamic, efficient, and innovative applications. Whether it's building scalable web platforms, designing engaging user interfaces, or solving complex development challenges, I’m always excited to bring ideas to life. Let’s collaborate and build something incredible together!

          </TextReveal>
        </section>
        <Contact />
        <footer className="flex md:flex-row flex-col  justify-between px-20 md:mb-20 mb-[200px] p-4 font-light font-p text-white/70 normal-case w-full items-center">
          <p className="me-3">Abin Antony Kattady</p>
          <p>2025 @ all rights reserved </p>
        </footer>
        <div className="relative min-h-[200px]">
          <Image src="/imageabin.png" className="absolute z-[2] left-[50%] right-0 bottom-0 translate-x-[-50%] brightness-75" style={{ opacity: 1 }} alt="alt" width={400} height={300} />
          <p className="font-p  md:text-[200px] sm:text-[150px] text-[50px] absolute bottom-0 right-0 text-center z-[1] left-0 normal-case text-white/10">abinantony.</p>
        </div>
      </main>
    </div>
  );
}

// components/Header.js


const LinkP = ({ name, link }: { name: string, link: string }) => {
  return (
    <Link href={link} className="border relative group overflow-hidden flex justify-center px-3 py-4 rounded-full font-normal  border-white/40 text-white/60 hover:text-white">
      <span className="md:group-hover:scale-[0.9] transition-all group-hover:opacity-10">{name}</span>
      <ExternalLink size={50} className="absolute top-full transition-all md:group-hover:top-[25%] group-hover:top-[20%]" />
    </Link >
  )
}

// components/About.js
function About() {

  return (
    <section className="p-3 text-center border-w pb-10 font-p flex flex-col">
      <p className=" text-gray-100 tracking-tight lg:text-4xl md:text-2xl text-3xl font-medium">Hi, I'm a Kerala Based full-stack developer and entrepreneur. </p>
      <p className="lg:text-3xl sm:tracking-tighter md:text-2xl text-md tracking-normal text-gray-500">I specialize in modern web technologies, UI/UX design, and software solutions. Passionate about coding, learning, and building innovative projects.</p>
      <p className="border border-white/30 mx-auto w-auto px-3 py-1 rounded-2xl text-zinc-200 mt-3">Currently Pursuing Btech at <Link className="underline underline-offset-2" href={'https://sjcetpalai.ac.in'}>SJCET PALAI</Link></p>
    </section>
  );
}

// components/Projects.js
function Projects() {
  return (
    <section className="p-10 w-full">
      <h2 className="md:text-7xl text-5xl font-medium mb-10">Featured Projects</h2>
      {/* <Carousel /> */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {EVENTS.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index % 2 == 0 ? 0.2 : 0.4,
                ease: "easeOut",
                once: true,
              },
            }}
            viewport={{ once: true }}
            key={"card" + index}
            className="last:pr-[5%] rounded-3xl"
          >
            <Link href={`/projects/${item.title.replaceAll(' ','-')}/`}>
              <Image src={`/${item.image}`} className="w-full rounded-xl" alt="alt" width={600} height={300} />
              <div className="p-2">
                <h1 className="normal-case font-p text-2xl">⚡{item.title}</h1>
                <p className="normal-case font-p font-light">{item.subtitle}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {item.category.map((i, index) => <div className="text-sm tracking-wide text-white/40 px-2 py-1 rounded-full border border-white/40" key={index}>
                    {i}
                  </div>)}
                </div>
              </div></Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


const MainCard = ({ title, subtitle, link, cards, isCase = true, year }: { title: string, subtitle: string, link?: string, cards?: string[], isCase?: boolean, year?: number }) => {
  return (
    <div className="bg-white relative overflow-hidden p-6 rounded-lg shadow-lg pt-10">
      {cards && <div className="flex gap-2 flex-wrap mb-3">
        {cards.map((item, index) => {
          return <div className="text-black px-4 py-2 border rounded-3xl" key={index}>{item}</div>
        })}
      </div>}
      <h3 className="md:text-4xl text-2xl font-medium relative z-[1] text-black">{title}</h3>
      <p className="text-gray-400 mt-2 relative z-[1] normal-case">{subtitle}</p>
      {isCase && <Link href={"#"} className="hover:underline text-black flex items-center mt-2">Case study <ExternalLink size={18} /></Link>
      }
      {year && <p className="text-zinc-200 absolute font-p md:text-8xl text-6xl bottom-[-10px] right-0">{year}</p>}
    </div>
  )
}

// components/Achievements.js
function Achievements() {
  return (
    <section className="p-10 w-full">
      <h2 className="md:text-7xl sm:text-4xl text-3xl font-medium mb-10">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MainCard
          isCase={false}
          year={2020}
          title="Certified Full Stack JAVA Developer"
          subtitle="A web app for managing construction projects efficiently." />
        <MainCard
          isCase={false}
          year={2024}
          title="Founder of Webcodecreators"
          subtitle="An analytics dashboard for advertisement publishers." />
      </div>
    </section>
  );
}

// components/Contact.js
function Contact() {
  const [result, setResult] = React.useState("");

  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> { }

  interface Web3FormsResponse {
    success: boolean;
    message: string;
  }

  const onSubmit = async (event: FormSubmitEvent): Promise<void> => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "da624d25-1a62-4f68-8a3a-e010e5f8962b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data: Web3FormsResponse = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="p-10 mt-5 border-t border-white/40 text-center font-p flex md:flex-row flex-col gap-10 w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <h2 className="text-4xl font-medium mb-4 normal-case">Get in Touch</h2>
        <p className="text-lg text-gray-300 normal-case">I am open to collaborations and freelance projects. Let's build something amazing together!</p>
        <Link href={'https://wa.me/+919048741910'} className="mt-6 px-6 py-3  text-white border border-white rounded-full text-lg font-semibold   hover:bg-white/10 transition-all">Contact Me</Link>

      </div>
      <div className="flex flex-col w-full  mx-auto">
        <form onSubmit={onSubmit} className="flex max-w-[400px] mx-auto w-full flex-col gap-2">
          <h2 className="text-4xl font-medium mb-4 normal-case">Connect With Me.</h2>
          <Input type="text" placeholder="Enter your name" name="name" required />
          <Input type="email" placeholder="Enter your Email " name="email" required />
          <Textarea name="message" placeholder="Enter your message" required></Textarea>
          <button className="flex bg-white text-black justify-center px-4 py-2 rounded-xl items-center gap-2" type="submit">Send <Send /></button>
        </form>
        <span className="mt-4">{result}</span>
      </div>
    </section>
  );
}

function TechStack() {
  const categories = {
    "Tech Stacks": [
      "C", "C#", "C++", "CSS3", "Dart", "GraphQL", "HTML5", "Java", "JavaScript", "Kotlin", "PHP", "PowerShell", "Python", "TypeScript",
      "AWS", "Cloudflare", "Firebase", "Supabase", "DigitalOcean", "Google Cloud", "Oracle", "Vercel",
      "Angular", "Angular.js", ".Net", "Apollo-GraphQL", "Bootstrap", "Chart.js", "Chakra", "Context-API", "Django", "Express.js", "Flutter", "FastAPI", "Ionic", "jQuery", "Laravel", "MUI", "Metero JS", "Next JS", "NPM", "NodeJS", "Radix UI", "React Native", "React", "React Query", "Spring", "SolidJS", "TailwindCSS", "Three.js", "Vite", "Vue.js", "WordPress", "Zod"
    ],
    "UI Design Tools": [
      "Adobe XD", "Figma", "Framer", "Canva", "Dribbble", "Adobe Fonts"
    ],
    "Video Editing": [
      "Adobe Premiere Pro", "Adobe After Effects", "Blender"
    ],
    "Tools": [
      "Apache-Nginx", "AmazonDynamoDB", "Firebase", "MongoDB", "MySQL", "Neo4J", "Postgres", "SQLite", "Drizzle", "Hibernate",
      "Adobe Illustrator", "Adobe Lightroom", "Adobe Photoshop", "Inkscape", "Krita",
      "PyTorch", "OpenCV",
      "GitHub Actions", "GitLab CI", "Git", "GitLab", "GitHub", "Arduino", "Docker", "ESLint"
    ]
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="p-10">
      <h2 className="text-4xl font-medium mb-6 text-center">My Technology Stack</h2>
      <div className="grid grid-cols-1" ref={ref}>
        {Object.entries(categories).map(([category, items], index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-white/30">{category}</h3>
            <div className="flex font-p 2 flex-wrap gap-1">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className="border border-gray-400/50 text-white px-4 py-1 normal-case rounded-full"
                  initial={{ opacity: 0, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  animate={inView ? { opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)" } : {}}
                  transition={{ duration: 1, ease: "easeOut", delay: i * 0.04 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
