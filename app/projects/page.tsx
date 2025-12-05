import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <Projects />
      </main>
    </div>
  );
}

