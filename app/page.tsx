import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Domains } from "@/components/sections/domains";
import { Learning } from "@/components/sections/learning";
import { CryptoStock } from "@/components/sections/crypto-stock";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <Learning />
      <CryptoStock />
      <Projects />
      <Contact />
    </>
  );
}
