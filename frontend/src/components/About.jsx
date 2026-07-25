const circumference = 2 * Math.PI * 54
const solved = 150
const target = 200
const percentage = Math.min(solved / target, 1)
const offset = circumference - percentage * circumference

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
              pursuing a Master of Computer Science at Rice University (Fall 2026). I completed
              my Bachelor of Engineering in Computer Science at KPR Institute of
              Engineering and Technology.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              As a <span className="text-white font-medium">US Citizen</span> immediately available for remote or Houston-based SWE
              / AI roles, I bring deep experience in multi-agent LLM pipelines,
              full-stack development, and machine learning &mdash; with a track record of
              shipping production-grade systems at startups.
            </p>
            <blockquote className="border-l-2 border-accent pl-4 my-6">
              <p className="text-base md:text-lg text-gray-300 italic leading-relaxed">
                &ldquo;Building AI systems that don&apos;t just work, but matter.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 flex items-center gap-5">
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#21262D" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-white">{solved}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">LeetCode Problems</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {percentage >= 1 ? 'Target reached' : `${target - solved} to next goal`}
                </p>
                <div className="w-full bg-dark-600 rounded-full h-1 mt-2">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${percentage * 100}%`, background: 'linear-gradient(90deg, #7C3AED, #22D3EE)' }}
                  />
                </div>
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
