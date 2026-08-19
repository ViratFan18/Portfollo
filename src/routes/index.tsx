import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Dsa } from "@/components/portfolio/Dsa";
import { EducationContact } from "@/components/portfolio/EducationContact";

const title = "SK Sharukh Mukhuram — Java Full Stack Developer";
const description =
  "Java Full Stack Developer (2026 fresher) building Spring Boot and React systems. ExamMaster Pro, Khet Connect, Ghar Milo and 100 DSA problems solved.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Projects />
      <Skills />
      <Dsa />
      <EducationContact />
    </main>
  );
}
