import Header from "@/components/Header";
import Publications from "@/components/Publications";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <Publications />
      </main>
    </div>
  );
}

