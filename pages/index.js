import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anand's Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Anand Roy - I am a full Stack Developer, Front End Developer,Back End Developer, RPA Developer with over 5 years of experience"
        />
        <meta
          name="keywords"
          content="portfolio, full Stack Developer, Front End Developer,Back End Developer, RPA Developer"
        />
        <meta name="author" content="Anand Roy" />
        <meta property="og:title" content="Portfolio of Anand Roy" />
        <meta
          property="og:description"
          content="🚀 Full Stack Developer | 🎨 Front End Enthusiast | ⚙️ Back End Magician | 🤖 RPA Enabler 🕰️ 5+ Years of Crafting Digital Experiences Passionate about coding."
        />
        <meta property="og:image" content="https://www.linkedin.com/in/anand-roy-2ba991127/" />
        <meta property="og:url" content="[URL of Your Portfolio]" />
        <meta property="twitter:title" content="Portfolio of Anand Roy" />
        <meta
          property="twitter:description"
          content="🚀 Full Stack Developer | 🎨 Front End Enthusiast | ⚙️ Back End Magician | 🤖 RPA Enabler 🕰️ 5+ Years of Crafting Digital Experiences Passionate about coding."
        />
        <meta property="twitter:image" content="https://twitter.com/Anand08121/photo" />
        <link rel="icon" href="/anand.ico" />
      </Head>
      <main>
        <div className="relative z-0 bg-primary">
          <div
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
            id="hero"
          >
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Services/> */}
          <Tech />
          <Projects />
          <Experience />
          <Contact />
          <div className="fixed left-96 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#hero">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
                ^
              </div>
            </a>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
