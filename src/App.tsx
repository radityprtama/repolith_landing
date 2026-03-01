import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Command, GitPullRequest, MessageSquare, CheckCircle2, Zap, MessageCircle, Workflow, Bot } from 'lucide-react';

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
            Built for humans and <span className="font-mono text-[0.9em] bg-white/5 px-1.5 py-0.5 rounded border border-white/10">agents</span>. A faster, AI-native alternative to <span className="font-mono text-[0.9em] bg-white/5 px-1.5 py-0.5 rounded border border-white/10">git</span> workflows that turns fragmented tools into a unified experience.
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

        {/* Animated Code Snippet */}
        <motion.div 
          className="w-full max-w-3xl mx-auto mt-20 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl overflow-hidden text-left">
            {/* Window Header */}
            <div className="flex items-center border-b border-[var(--color-border)] px-4 py-3 bg-[#0a0a0c]">
              <div className="flex gap-1.5 mr-4">
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27272a]"></div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] font-mono bg-[#111113] border border-[var(--color-border)] rounded-md px-3 py-1.5 mx-auto w-full max-w-sm justify-center">
                <Command className="h-3 w-3" />
                repolith review --auto
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 text-sm font-mono text-[var(--color-muted)] overflow-x-auto leading-loose bg-[#0a0a0c]">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                <span className="text-blue-400">async function</span> <span className="text-emerald-400">resolveConflicts</span>(local: <span className="text-amber-400">Tree</span>, remote: <span className="text-amber-400">Tree</span>) {'{'}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }} className="pl-6">
                <span className="text-blue-400">const</span> diff = <span className="text-blue-400">await</span> <span className="text-emerald-400">computeDiff</span>(local, remote);
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="pl-6">
                <span className="text-blue-400">if</span> (diff.hasConflicts) {'{'}
              </motion.div>
              
              {/* AI Suggestion Block */}
              <motion.div 
                initial={{ opacity: 0, y: 10, height: 0 }} 
                animate={{ opacity: 1, y: 0, height: 'auto' }} 
                transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
                className="my-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 relative overflow-hidden ml-6 mr-4"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50"></div>
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-sans font-medium text-amber-400">AI Agent Suggestion</span>
                </div>
                <div className="font-sans text-sm text-[var(--color-foreground)] mb-3 leading-relaxed">
                  Potential race condition detected. Consider using a distributed lock before merging trees.
                </div>
                <div className="bg-[#030304] border border-[var(--color-border)] rounded p-3 text-xs leading-relaxed">
                  <span className="text-blue-400">const</span> lock = <span className="text-blue-400">await</span> <span className="text-emerald-400">acquireLock</span>(remote.id);<br/>
                  <span className="text-[var(--color-muted)]">// ... handle merge ...</span><br/>
                  <span className="text-blue-400">await</span> <span className="text-emerald-400">releaseLock</span>(lock);
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs font-sans bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded hover:bg-amber-500/30 transition-colors font-medium">Apply Fix</button>
                  <button className="text-xs font-sans text-[var(--color-muted)] px-3 py-1.5 rounded hover:bg-white/5 transition-colors font-medium">Dismiss</button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5 }} className="pl-12">
                <span className="text-blue-400">return</span> <span className="text-emerald-400">manualResolution</span>(diff);
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.5 }} className="pl-6">
                {'}'}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.5 }}>
                {'}'}
              </motion.div>
            </div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-white/5" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)' }}></div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.section 
          className="w-full max-w-6xl mx-auto mt-32 sm:mt-40 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">Everything you need, nothing you don't.</h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">A unified experience designed to remove friction from your daily development cycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all hover:bg-[#161618] hover:border-[#3f3f46]">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">Faster Code Reviews</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Review and merge code with zero context switching. Inline discussions and AI summaries help you ship faster.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all hover:bg-[#161618] hover:border-[#3f3f46]">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">Clearer Discussions</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Keep issues and PR discussions organized. Threaded conversations ensure no feedback gets lost in the noise.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all hover:bg-[#161618] hover:border-[#3f3f46]">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">Streamlined Workflows</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Manage GitHub workflows with less friction. Trigger builds, view logs, and handle deployments from one place.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-all hover:bg-[#161618] hover:border-[#3f3f46]">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">AI-Native Context</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Built for humans and agents. Let AI handle the boilerplate while you focus on the architecture.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
