import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Command, GitPullRequest, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function App() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/10 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black">
              <Command className="h-4 w-4" />
            </div>
            <span className="font-medium tracking-tight">Repolith</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-[var(--color-muted)] hover:text-white transition-colors hidden sm:block">Log in</a>
            <button className="btn-primary px-4 py-1.5 text-sm rounded-md font-medium">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center pt-24 pb-20 px-6">
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariants} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Repolith 1.0 is now available
              <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 text-balance"
          >
            Re-imagining code <br className="hidden sm:block" /> collaboration.
          </motion.h1>

          <motion.p 
            variants={fadeUpVariants}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-[var(--color-muted)] mb-10 text-balance leading-relaxed"
          >
            Built for humans and agents. Repolith turns fragmented developer workflows into a unified experience, so teams can ship better software with less overhead.
          </motion.p>

          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg font-medium w-full sm:w-auto justify-center">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </button>
            <button className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-lg font-medium w-full sm:w-auto justify-center">
              Read documentation
            </button>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          className="w-full max-w-6xl mx-auto mt-20 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl overflow-hidden">
            {/* Mockup Header */}
            <div className="flex items-center border-b border-[var(--color-border)] px-4 py-3 bg-[#0a0a0c]">
              <div className="flex gap-1.5 mr-4">
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] font-mono bg-[#111113] border border-[var(--color-border)] rounded-md px-3 py-1.5 mx-auto w-full max-w-md justify-center">
                repolith / core-engine
              </div>
            </div>

            {/* Mockup Body */}
            <div className="flex flex-col md:flex-row h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-64 border-r border-[var(--color-border)] p-4 bg-[#0a0a0c]">
                <div className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">Repositories</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-white/5 text-sm">
                    <span className="font-medium">core-engine</span>
                    <span className="text-xs bg-white/10 px-1.5 rounded">12</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-[var(--color-muted)] hover:bg-white/5 text-sm transition-colors">
                    <span>web-client</span>
                    <span className="text-xs">3</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-[var(--color-muted)] hover:bg-white/5 text-sm transition-colors">
                    <span>docs</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mt-8 mb-4">Views</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[var(--color-muted)] hover:bg-white/5 text-sm transition-colors">
                    <GitPullRequest className="h-4 w-4" />
                    <span>Pull Requests</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[var(--color-muted)] hover:bg-white/5 text-sm transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Issues</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[var(--color-muted)] hover:bg-white/5 text-sm transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Discussions</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Active Pull Requests</h2>
                  <button className="btn-primary px-3 py-1.5 text-xs rounded-md font-medium">
                    New PR
                  </button>
                </div>

                <div className="flex-1 border border-[var(--color-border)] rounded-lg overflow-hidden bg-[#0a0a0c] flex flex-col">
                  {/* PR Item 1 */}
                  <div className="p-4 border-b border-[var(--color-border)] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <GitPullRequest className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">Implement AI-assisted code review</h3>
                          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
                            <span className="font-mono">#142</span>
                            <span>opened 2 hours ago by</span>
                            <span className="text-white">alex-dev</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-medium border border-blue-500/20">feature</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-medium border border-amber-500/20">ai</span>
                      </div>
                    </div>
                  </div>

                  {/* PR Item 2 */}
                  <div className="p-4 border-b border-[var(--color-border)] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <GitPullRequest className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">Fix race condition in sync engine</h3>
                          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
                            <span className="font-mono">#141</span>
                            <span>opened 5 hours ago by</span>
                            <span className="text-white">sarah-j</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-medium border border-red-500/20">bug</span>
                      </div>
                    </div>
                  </div>

                  {/* PR Item 3 */}
                  <div className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <GitPullRequest className="h-5 w-5 text-[var(--color-muted)] mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm mb-1 text-[var(--color-muted)]">Update dependencies for Q3</h3>
                          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]/70">
                            <span className="font-mono">#138</span>
                            <span>merged yesterday by</span>
                            <span className="text-[var(--color-muted)]">dependabot</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">merged</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-white/5" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)' }}></div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
