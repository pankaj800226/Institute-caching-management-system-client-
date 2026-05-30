import React, { useState, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ShieldCheck, Loader2, ArrowRight, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/login.png'

const OtpVerify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const inputRef = useRef<(HTMLInputElement | null)[]>([])

    // Motion values to drive a clean spatial dynamic spotlight path over the element container grid
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const handleChange = (value: string, index: number) => {
        // Restrict input values strictly to single digits
        if (!/^\d?$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
        setError("")

        // Move focus to next segment input node if slot is populated
        if (value && index < 5) {
            inputRef.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRef.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").trim()
        if (!/^\d{6}$/.test(pastedData)) return

        const digits = pastedData.split("")
        setOtp(digits)
        setError("")


        inputRef.current[5]?.focus()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const verificationCode = otp.join("")

        if (verificationCode.length < 6) {
            setError("Verification payload sequence incomplete. Provide all 6 tokens.")
            return
        }

        setIsLoading(true)
        // Execution pipeline verification simulator sequence
        setTimeout(() => {
            setIsLoading(false)
            console.log("OTP Verification Complete:", verificationCode)
            navigate("/newpassword") // Route parameter destination link fallback node
        }, 2000)
    }

    return (
        <main className="relative min-h-screen w-full bg-[#FCFBFA] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden select-none">

            {/* ================= BACKGROUND ENVIRONMENT SYSTEM (LIGHT MIX) ================= */}
            {/* Upper Right & Lower Left Soft Subtle Accent Ambient Light Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-full max-w-[600px] aspect-square bg-[radial-gradient(circle,_rgba(218,74,27,0.03)_0%,_transparent_70%)] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-10%] w-full max-w-[600px] aspect-square bg-[radial-gradient(circle,_rgba(218,74,27,0.02)_0%,_transparent_70%)] pointer-events-none z-0" />

            {/* Micro-Dot Matrix Overlay Layer Grid */}
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
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-black">CodeCircle</span>
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
                        <h4 className="text-slate-800 font-mono text-xs uppercase tracking-wider font-semibold">
                            Join codecircle
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-[220px]">
                            Change your productivity
                        </p>
                    </div>
                </div>

                {/* ================= RIGHT SIDE: OTP VERIFICATION MATRIC INTERFACE ================= */}
                <div className="md:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative z-10 bg-white">

                    {/* Header Typography Group */}
                    <div className="text-left space-y-2.5 mb-8">
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                            Verify <span className="font-mono uppercase font-black text-[#DA4A1B]">Identity</span>
                        </h1>
                        <p className="text-slate-500 text-xs sm:text-sm">
                            We have dispatched a 6-digit cryptographic verification segment code to your gateway address.
                        </p>
                    </div>

                    {/* Form Action Container Execution Core */}
                    <form onSubmit={handleSubmit} className="space-y-6 text-left">

                        <div className="space-y-2">
                            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block pl-1">
                                Security Passcode Sequence
                            </label>

                            {/* 6-Digit OTP Block Matrix Grid Wrapper */}
                            <div onPaste={handlePaste} className="grid grid-cols-6 gap-2 sm:gap-3 py-2">
                                {otp.map((digit, index) => (
                                    <div key={index} className="aspect-square relative">
                                        <input
                                            ref={(el: HTMLInputElement | null) => {
                                                inputRef.current[index] = el
                                                return undefined
                                            }}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleChange(e.target.value, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            className="w-full h-full text-center bg-slate-50/50 border border-slate-200 focus:border-[#DA4A1B]/50 rounded-xl text-lg sm:text-xl font-bold font-mono text-slate-800 focus:outline-none focus:ring-0 transition-all duration-200 shadow-sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Error Message Box Alert Field Panel */}
                        {error && (
                            <p className="text-xs font-medium text-rose-500 pl-1 tracking-wide font-mono">
                                ⚡ {error}
                            </p>
                        )}

                        {/* Execution Trigger Submit Node Button */}
                        <motion.button
                            whileHover={!isLoading ? { scale: 1.01, backgroundColor: '#ea5420' } : {}}
                            whileTap={!isLoading ? { scale: 0.99 } : {}}
                            type="submit"
                            disabled={isLoading}
                            className="w-full relative mt-2 bg-[#DA4A1B] text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_6px_20px_rgba(218,74,27,0.15)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    <span>Authorizing OTP...</span>
                                </>
                            ) : (
                                <>
                                    <span>Verify OTP</span>
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Subtext Action Resend Protocol Link Block */}
                    <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-6">
                        <p className="text-xs text-slate-400 tracking-wide">
                            Didn't catch the system payload packet?
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DA4A1B] hover:text-[#ea5420] transition-colors duration-200 cursor-pointer"

                        >
                            <RotateCcw size={12} />
                            <span>Resend OTP</span>
                        </button>
                    </div>

                </div>
            </motion.div>
        </main>
    )
}

export default OtpVerify