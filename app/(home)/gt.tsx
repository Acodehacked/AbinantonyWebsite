"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Send, MouseIcon } from "lucide-react";
import { EVENTS, showcase } from "@/constants";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0C0C0C] relative text-white font-lato">
      {/* Navigation */}
      <nav className="flex relative z-[3] items-center justify-between p-6 lg:px-12">
        <div className="text-xl font-bold font-poppins">ABIN ANTONY KATTADY</div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="#work"
            className="text-[#BFBFBF] hover:text-white transition-colors"
          >
            WORK
          </Link>
          <Link
            href="#about"
            className="text-[#BFBFBF] hover:text-white transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="text-[#BFBFBF] hover:text-white transition-colors"
          >
            CONTACT
          </Link>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#E0E0E0] transition-colors">
          GET IN TOUCH
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 overflow-hidden max-h-screen h-screen lg:px-12 py-20 relative">
        <div className="max-w-6xl mx-auto relative z-[2]">
          <h1 className="text-4xl md:text-6xl  lg:text-7xl font-bold leading-tight font-poppins tracking-wide text-center">
            CREATING INTUITIVE
            <br />
            AND ENGAGING
            <br />
            <span className="text-[#00FF47]">DIGITAL PRODUCTS</span>
          </h1>
          <p className="text-[#BFBFBF] text-lg text-center mt-6 max-w-2xl mx-auto">
            Hi, I'm Abin Antony, a Kerala-based full-stack developer and
            entrepreneur specialized in modern web technologies, UI/UX design,
            and software solutions. Currently pursuing BTech at SJCET PALAI with
            4+ years experience in UI Designing and Web development.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            <Link
              href="mailto:abina5448@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#E0E0E0] transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="https://github.com/Acodehacked"
              className="border border-[#333333] px-6 py-3 rounded-full font-medium hover:border-[#00FF47] hover:text-[#00FF47] transition-all"
            >
              View GitHub
            </Link>
          </div>
        </div>
        <iframe
          className=" h-screen scale-[1.3] absolute left-0 top-0 w-screen z-[1]"
          src="https://my.spline.design/cardsgear-Nnk6sc2uR4qgUaY67tba7XQ9/"
        ></iframe>
        {/* <div className="bg-black absollute bottom-0 left-0 right-0 h-[100px] z-[2]"></div> */}
      </section>

      {/* Featured Projects */}
      <section className="px-6 lg:px-12 py-16" id="work">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          FEATURED <span className="text-[#00FF47]">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.slice(0, 6).map((project, index) => (
            <Link href={`/projects/${project.title.replaceAll(' ', '-')}/`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111111] rounded-xl border border-[#222222] overflow-hidden hover:border-[#00FF47] transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(0,0,0,0.35)] group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={`/${project.image}`}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#BFBFBF] text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.slice(0, 2).map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-[#222222] rounded-full text-[#00FF47]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-[#00FF47] hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    View Project <ExternalLink size={14} />
                  </Link>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-12 py-16" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              I DESIGN EXCEPTIONAL
              <br />
              <span className="text-[#00FF47]">DIGITAL EXPERIENCES</span>
            </h2>
            <p className="text-[#BFBFBF] mb-6 leading-relaxed">
              With 4+ years of experience in UI Designing and Web development, I
              work for domestic and foreign clients. Currently working at{" "}
              <Link
                href="https://webcodecreators.com"
                target="_blank"
                className="text-[#00FF47] hover:underline"
              >
                WebcodeCreators
              </Link>{" "}
              as Full Stack Developer.
            </p>
            <p className="text-[#BFBFBF] mb-6 leading-relaxed">
              I like to describe myself as a designer/developer with high
              discipline and enjoy working in a team or independently.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#00FF47] rounded-full"></div>
                <span className="text-[#E0E0E0]">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#00FF47] rounded-full"></div>
                <span className="text-[#E0E0E0]">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#00FF47] rounded-full"></div>
                <span className="text-[#E0E0E0]">Cloud Solutions</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Link
                href="https://github.com/Acodehacked"
                target="_blank"
                className="border border-[#333333] px-4 py-2 rounded-full text-center hover:border-[#00FF47] hover:text-[#00FF47] transition-all"
              >
                GITHUB
              </Link>
              <Link
                href="https://instagram.com/abin_antny"
                target="_blank"
                className="border border-[#333333] px-4 py-2 rounded-full text-center hover:border-[#00FF47] hover:text-[#00FF47] transition-all"
              >
                INSTAGRAM
              </Link>
              <Link
                href="https://www.linkedin.com/in/abin-antony-3a9a21314/"
                target="_blank"
                className="border border-[#333333] px-4 py-2 rounded-full text-center hover:border-[#00FF47] hover:text-[#00FF47] transition-all"
              >
                LINKEDIN
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-[#111111] rounded-xl border border-[#222222] overflow-hidden">
              <Image
                src="/imageabin.png"
                alt="Abin Antony"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins">
          TECHNOLOGY <span className="text-[#00FF47]">STACK</span>
        </h2>
        <TechStack />
      </section>

      {/* Achievements Section */}
      <section className="px-6 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          ACHIEVEMENTS & <span className="text-[#00FF47]">CERTIFICATIONS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#111111] rounded-xl border border-[#222222] p-6 hover:border-[#00FF47] transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(0,0,0,0.35)]">
            <div className="text-[#00FF47] text-2xl font-bold mb-2">2020</div>
            <h3 className="text-xl font-semibold mb-3">
              Certified Full Stack JAVA Developer
            </h3>
            <p className="text-[#BFBFBF]">
              Advanced certification in Java full-stack development with
              enterprise-grade applications.
            </p>
          </div>
          <div className="bg-[#111111] rounded-xl border border-[#222222] p-6 hover:border-[#00FF47] transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(0,0,0,0.35)]">
            <div className="text-[#00FF47] text-2xl font-bold mb-2">2020</div>
            <h3 className="text-xl font-semibold mb-3">
              DSA Assessment Certification
            </h3>
            <p className="text-[#BFBFBF]">
              Certification in Data Structures and Algorithms Assessment with A+
              grade.
            </p>
          </div>
          <div className="bg-[#111111] rounded-xl border border-[#222222] p-6 hover:border-[#00FF47] transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(0,0,0,0.35)]">
            <div className="text-[#00FF47] text-2xl font-bold mb-2">2024</div>
            <h3 className="text-xl font-semibold mb-3">
              Founder of WebcodeCreators
            </h3>
            <p className="text-[#BFBFBF]">
              Established a successful web development company providing
              innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="px-6 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins">
          DESIGN <span className="text-[#00FF47]">SHOWCASE</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcase.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.image}
                alt={`Showcase ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-12 py-20" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              <span className="text-[#00FF47]">CONNECT</span>
              <br />
              WITH ME
            </h2>
            <p className="text-[#BFBFBF] text-lg mb-8 max-w-2xl">
              I am open to collaborations and freelance projects. Let's build
              something amazing together!
            </p>
            <div className="space-y-4">
              <p className="text-[#E0E0E0]">
                📧{" "}
                <Link
                  href="mailto:abina5448@gmail.com"
                  className="text-[#00FF47] hover:underline"
                >
                  abina5448@gmail.com
                </Link>
              </p>
              <p className="text-[#E0E0E0]">
                📱{" "}
                <Link
                  href="https://wa.me/+919048741910"
                  className="text-[#00FF47] hover:underline"
                >
                  +91 9048741910
                </Link>
              </p>
              <p className="text-[#E0E0E0]">
                🎓 Currently Pursuing BTech at{" "}
                <Link
                  href="https://sjcetpalai.ac.in"
                  target="_blank"
                  className="text-[#00FF47] hover:underline"
                >
                  SJCET PALAI
                </Link>
              </p>
            </div>
            <Link
              href="https://wa.me/+919048741910"
              target="_blank"
              className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E0E0E0] transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222222] px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#BFBFBF] mb-4 md:mb-0">
            © 2025 Abin Antony Kattady. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/abin-antony-3a9a21314/"
              target="_blank"
              className="text-[#BFBFBF] hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Acodehacked"
              target="_blank"
              className="text-[#BFBFBF] hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://instagram.com/abin_antny"
              target="_blank"
              className="text-[#BFBFBF] hover:text-white transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="relative min-h-[200px] mt-16">
          <p className="text-6xl md:text-[200px] absolute bottom-0 right-0 text-center z-[1] left-0 text-white/10 font-bold">
            abinantony.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Tech Stack Component
function TechStack() {
  const categories = {
    "Frontend & Frameworks": [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Flutter",
      "React Native",
      "TailwindCSS",
      "Bootstrap",
      "MUI",
      "Chakra UI",
      "ShadCN",
      "Three.js",
      "Framer Motion",
    ],
    "Backend & Databases": [
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "Laravel",
      "Spring",
      "GraphQL",
      "tRPC",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Google Cloud",
      "DigitalOcean",
      "Cloudflare",
      "Vercel",
      "Docker",
      "Git",
      "GitHub Actions",
      "GitLab CI",
    ],
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "PHP",
      "Dart",
      "Kotlin",
      "GDScript",
    ],
    "Design & Creative": [
      "Figma",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Blender",
      "Canva",
    ],
  };

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, items], index) => (
        <div key={index}>
          <h3 className="text-lg mb-4 text-[#00FF47] uppercase tracking-wider font-semibold font-poppins">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 rounded-full border border-[#333333] text-white text-sm font-medium backdrop-blur-sm bg-[#111111] hover:border-[#00FF47] hover:text-[#00FF47] transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "da624d25-1a62-4f68-8a3a-e010e5f8962b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Failed to send message");
    }
  };

  return (
    <div className="bg-[#111111] rounded-xl border border-[#222222] p-8">
      <h3 className="text-2xl font-bold mb-6 font-poppins">
        Send Me a Message
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#333333] rounded-lg text-white placeholder-[#666] focus:border-[#00FF47] focus:outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#333333] rounded-lg text-white placeholder-[#666] focus:border-[#00FF47] focus:outline-none"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#333333] rounded-lg text-white placeholder-[#666] focus:border-[#00FF47] focus:outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-[#E0E0E0] transition-colors flex items-center justify-center gap-2"
        >
          Send Message <Send size={18} />
        </button>
        {result && (
          <p
            className={`text-center ${
              result.includes("successfully")
                ? "text-[#00FF47]"
                : "text-red-400"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}
