import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";
import ScrollIcon from "@/components/ScrollIcon";

export default function Home() {
    return (
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
                <ScrollIcon />
                <Footer />
            </div>
        </main>
    );
}
