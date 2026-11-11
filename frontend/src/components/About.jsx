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
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              I&apos;m an AI &amp; Software Engineer based in <span className="text-white font-medium">Houston, TX</span>,
              pursuing a Master of Computer Science at Rice University (expected Dec 2027). I completed
              my Bachelor of Engineering in Computer Science at KPR Institute of
              Engineering and Technology.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              As a <span className="text-white font-medium">US Citizen</span> immediately available for remote or Houston-based SWE
              / AI roles, I currently work as a <span className="text-white font-medium">Research Software Engineer</span> at
              MD Anderson Cancer Center, building research data platforms, EEG processing pipelines,
              and full-stack AI systems &mdash; with a track record of shipping production-grade systems.
            </p>
            <blockquote className="border-l-2 border-accent pl-4 my-6">
              <p className="text-base md:text-lg text-gray-300 italic leading-relaxed">
                &ldquo;Building AI systems that don&apos;t just work, but matter.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6">
              <p className="text-xs font-mono text-accent tracking-wider">NOW</p>
              <p className="text-sm font-semibold text-white mt-1">Research Software Engineer</p>
              <p className="text-xs text-gray-500 mt-0.5">MD Anderson Cancer Center</p>
              <p className="text-xs text-gray-500">Music in Medicine Research</p>
              <div className="w-full bg-dark-600 rounded-full h-1 mt-3">
                <div
                  className="h-full rounded-full"
                  style={{ width: '100%', background: 'linear-gradient(90deg, #7C3AED, #22D3EE)' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <p className="text-xs font-mono text-accent tracking-wider">STATUS</p>
                <p className="text-sm font-semibold text-white mt-1">US Citizen</p>
                <p className="text-xs text-gray-500">Houston, TX</p>
              </div>
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <p className="text-xs font-mono text-accent tracking-wider">AVAILABILITY</p>
                <p className="text-sm font-semibold text-white mt-1">Immediate</p>
                <p className="text-xs text-gray-500">Remote / Houston</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
