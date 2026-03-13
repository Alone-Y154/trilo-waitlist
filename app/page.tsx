import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import FlowDemo from "@/components/FlowDemo";
import VideoShowcase from "@/components/VideoShowcase";
import MCPOrbit from "@/components/MCPOrbit";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <FlowDemo />
        <VideoShowcase />
        <MCPOrbit />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
