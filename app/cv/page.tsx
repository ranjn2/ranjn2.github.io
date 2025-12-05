import Header from "@/components/Header";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <section className="mb-16 scroll-mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">CV</h2>
          <p className="text-slate-600">
            <a
              href="#"
              className="underline hover:text-slate-900 transition-colors"
            >
              Download PDF
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

