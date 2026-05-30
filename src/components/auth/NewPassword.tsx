import React, { useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Mail, Lock, ArrowRight, Loader2, ShieldCheck, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import img from '../../assets/login.png'

const NewPassword = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Motion values to drive a clean spatial dynamic spotlight path over the element container grid
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Execution pipeline wrapper for form submissions
    setTimeout(() => setIsLoading(false), 2000) 
  }

  return (
    <main className="relative min-h-screen w-full bg-[#FCFBFA] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden select-none">
      
      {/* ================= BACKGROUND ENVIRONMENT SYSTEM (LIGHT MIX) ================= */}
      {/* Upper Right & Lower Left Soft Subtle Accent Ambient Light Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-full max-w-[600px] aspect-square bg-[radial-gradient(circle,_rgba(218,74,27,0.03)_0%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-full max-w-[600px] aspect-square bg-[radial-gradient(circle,_rgba(218,74,27,0.02)_0%,_transparent_70%)] pointer-events-none z-0" />
      
      {/* Micro-Dot Matrix Overlay Layer Grid (Light Adjusted) */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000015_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_100%)] z-0" />

      {/* ================= CORE PANEL FRAME ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        className="group relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 bg-white border border-slate-200/80 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] min-h-[600px] z-10"
      >
        {/* Dynamic Micro-Spotlight Light Trail */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(218, 74, 27, 0.025),
                transparent 80%
              )
            `,
          }}
        />

        {/* ================= LEFT SIDE: CINEMATIC IMAGERY / BRAND BLOCK ================= */}
        <div className="md:col-span-5 relative hidden md:flex flex-col justify-between p-10 bg-slate-50/50 border-r border-slate-100 overflow-hidden">
          
          {/* Top Micro-HUD Identity Tag */}
          <div className="flex items-center gap-2 text-[#DA4A1B]">
            <ShieldCheck size={16} className="drop-shadow-[0_0_6px_rgba(218,74,27,0.2)]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-black">
              
            </span>
          </div>

          {/* Core Graphic Engine Asset Wrap */}
          <div className="relative my-auto flex items-center justify-center">
            <div className="absolute w-[80%] aspect-square bg-[radial-gradient(circle,_rgba(218,74,27,0.05)_0%,_transparent_65%)] blur-xl pointer-events-none" />
            <motion.img 
              initial={{ y: 10, opacity: 0.9 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src={img} 
              alt="Secure Infrastructure illustration" 
              className="relative w-full max-w-[280px] h-auto object-contain select-none pointer-events-none opacity-90 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]" 
            />
          </div>

          {/* Footer Pipeline Status Info Block */}
          <div className="space-y-2 text-left">
            <h4 className="text-slate-800 font-mono text-xs uppercase tracking-wider font-semibold">Join codecircle</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[220px]">
              Change your productivity
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE: INDUSTRIAL FORM CONTROL CORE ================= */}
        <div className="md:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative z-10 bg-white">
          
          {/* Header Typography Group */}
          <div className="text-left space-y-2.5 mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Welcome <span className="font-mono uppercase font-black text-[#DA4A1B]">Back</span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm">
              Verify your network node parameters to synchronize state across pipelines.
            </p>
          </div>

          {/* Form Node Block Element */}
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            
            {/* Input Element Field 1: Email */}
            <div className="space-y-2">
           
              <div className="relative group/field">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-[#DA4A1B] transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="pk0158548@gmail.com" 
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#DA4A1B]/50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Input Element Field 2: Password with Hide/Show Action Toggle */}
            <div className="space-y-2">
              
              <div className="relative group/field">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-[#DA4A1B] transition-colors duration-300">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="New Password" 
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#DA4A1B]/50 rounded-xl pl-12 pr-12 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors duration-200"
                  title={showPassword ? "Hide encryption key" : "Show encryption key"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Execution Trigger Submit Node Button */}
            <motion.button
              whileHover={!isLoading ? { scale: 1.01, backgroundColor: '#ea5420' } : {}}
              whileTap={!isLoading ? { scale: 0.99 } : {}}
              type="submit"
              disabled={isLoading}
              className="w-full relative mt-4 bg-[#DA4A1B] text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_6px_20px_rgba(218,74,27,0.15)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Login...</span>
                </>
              ) : (
                <>
                  <span>Change Password</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </form>

          {/* Subtext Horizontal Redirection Router Footnote */}
          <p className="text-xs text-slate-400 text-center mt-8 tracking-wide">
            Don't have a registered pipeline profile node?{' '}
            <Link 
              to="/register" 
              className="text-[#DA4A1B] hover:text-[#ea5420] font-semibold transition-colors underline underline-offset-4 decoration-current"
            >
              Register Node
            </Link>
          </p>

          {/* forget password */}
          <p className="text-xs text-slate-400 text-center mt-8 tracking-wide">
            Forgot your password?{' '}
            <Link 
              to="/forgetpassword" 
              className="text-[#DA4A1B] hover:text-[#ea5420] font-semibold transition-colors underline underline-offset-4 decoration-current"
            >
              Reset Password
            </Link>
          </p>

        </div>
      </motion.div>
    </main>
  )
}

export default NewPassword