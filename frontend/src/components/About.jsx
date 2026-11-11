export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          01.
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
          About<span className="text-accent">/</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3 space-y-4">
            <p className="text-base text-gray-300 leading-relaxed">
              I&apos;m a software engineer and Rice University MCS student based in Houston. I build
              research data platforms and applied AI systems &mdash; from physiological signal
              pipelines to document-extraction services.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              My work centers on reliability: transactional ingestion, traceability from raw data to
              derived values, and tests that make results reproducible. I care about systems whose
              behaviour can be measured, not just demonstrated.
            </p>
            <blockquote className="border-l-2 border-accent pl-4 my-6">
              <p className="text-lg text-gray-200 italic leading-relaxed">
                &ldquo;Building AI systems that don&apos;t just work, but matter.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6">
              <p className="text-xs font-mono text-accent tracking-wider">NOW</p>
              <p className="text-sm font-semibold text-white mt-1">Research Software Engineer</p>
              <p className="text-sm text-gray-400 mt-0.5">MD Anderson Cancer Center</p>
              <p className="text-sm text-gray-400">Music in Medicine Research</p>
              <a
                href="#/work/music-in-medicine"
                className="inline-block text-xs font-mono text-accent hover:text-accent-light mt-3 transition-colors"
              >
                read the case study →
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <p className="text-xs font-mono text-accent tracking-wider">FOCUS</p>
                <p className="text-sm text-gray-200 mt-1">Research platforms &middot; Applied AI &middot; Data processing</p>
              </div>
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <p className="text-xs font-mono text-accent tracking-wider">BASED IN</p>
                <p className="text-sm text-gray-200 mt-1">Houston, TX &middot; Remote-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
