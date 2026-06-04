import Sidebar from "../../components/Sidebar";
import {
    Calendar,
    Clock,
    Layers,
    IndianRupee,
    User,
    ArrowLeft,
    BookOpen,
    FileText,
    Plus,
    X,
    UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

import {
    Dialog,
    DialogContent,
    Button,
    IconButton,
    useMediaQuery,
    OutlinedInput,
    FormControl
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import StudentAdmission from "./StudentAdmission";



const CourseDetails = () => {
    // Mock data structures mirroring your creation form exactly
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);

    const labelClasses = "text-xs font-bold text-[#5c4e75] tracking-wide mb-1.5 block px-0.5";

    const inputStyles = {
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e2dbe8" },
        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#dfd7ed" },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#4f46e5", borderWidth: "2px" },
        "& input": { fontSize: "14px", color: "#2d2738", py: "11px" },
        "& textarea": { fontSize: "14px", color: "#2d2738" }
    };


    const currentCourse = {
        courseName: 'BCA (Bachelor of Computer Applications)',
        photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        price: "20,000",
        batch: "2024-2027",
        startTime: "09:00 AM",
        endTime: "12:00 PM",
        startDate: "August 16, 2026",
        teachers: ["Dr. Amit Sharma", "Prof. Priya Patel"],
        description: "This comprehensive Bachelor of Computer Applications framework delivers foundational and industrial expertise in full-stack engineering, cloud system management, and computational architecture. Designed to transition candidates seamlessly from basic algorithmic theory into enterprise deployment pipelines."
    };

    return (
        <div className="flex min-h-screen bg-[#f6f4fa]">
            <Sidebar />

            {/* FIXED RESPONSIVE PADDING: Eliminates layout collisions on mobile viewports */}
            <main className="flex-1 w-full md:ml-[72px] lg:ml-[240px] bg-white p-6 md:p-8">

                {/* ========================================================= */}
                {/* NAVIGATION HEADER BAR                                     */}
                {/* ========================================================= */}
                <div className="flex items-center justify-between mb-6">
                    <Link
                        to="/course"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#5c4e75] hover:text-[#4f46e5] bg-white px-4 py-2 rounded-xl border border-purple-100/50 shadow-xs transition-all active:scale-95"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Courses</span>
                    </Link>

                    <button
                    onClick={()=>setOpen(true)}
                    className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-sm shadow-indigo-100 transition active:scale-95 w-full md:w-auto cursor-pointer">
                        <UserPlus size={16} />
                        New Admission
                    </button>
                </div>

                {/* ========================================================= */}
                {/* HERO COVER FRAMEWORK (Responsive Height)                  */}
                {/* ========================================================= */}
                <div className="relative w-full min-h-[280px] md:h-80 rounded-3xl overflow-hidden bg-purple-900 border border-purple-100/30 shadow-sm mb-6 flex flex-col justify-end">
                    <img
                        src={currentCourse.photo}
                        alt={currentCourse.courseName}
                        className="absolute inset-0 w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2738] via-[#2d2738]/50 to-transparent" />

                    {/* Content Layer Floating inside Hero (Stacks on mobile, rows on tablet) */}
                    <div className="relative z-10 p-5 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#4f46e5] text-white text-xs font-bold uppercase tracking-wider mb-3">
                                <BookOpen size={12} /> Active Program
                            </span>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                                {currentCourse.courseName}
                            </h1>
                        </div>

                        <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-lg text-left md:text-right shrink-0 w-max self-start md:self-auto">
                            <p className="text-xs font-bold text-[#7a6a94] uppercase tracking-wide">Total Program Fee</p>
                            <div className="flex items-center text-[#4f46e5] font-black text-xl md:text-2xl mt-0.5">
                                <IndianRupee size={20} strokeWidth={2.5} />
                                <span>{currentCourse.price}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* MAIN PROFILE DETAILS GRID                                 */}
                {/* ========================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT 2 COLUMNS: CORE INFORMATION METRICS */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* 4-Column Quick Parameters Box (Responsive grids for mobile->tablet->desktop) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-purple-100/40 shadow-xs flex items-center gap-3">
                                <div className="p-2.5 bg-[#f6f4fa] text-[#4f46e5] rounded-xl shrink-0"><Layers size={20} /></div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-[#7a6a94] uppercase tracking-wider">Batch</p>
                                    <p className="text-sm font-bold text-[#2d2738] truncate">{currentCourse.batch}</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-purple-100/40 shadow-xs flex items-center gap-3">
                                <div className="p-2.5 bg-[#f6f4fa] text-[#4f46e5] rounded-xl shrink-0"><Calendar size={20} /></div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-[#7a6a94] uppercase tracking-wider">Start Date</p>
                                    <p className="text-sm font-bold text-[#2d2738] truncate">{currentCourse.startDate}</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-purple-100/40 shadow-xs flex items-center gap-3">
                                <div className="p-2.5 bg-[#f6f4fa] text-[#4f46e5] rounded-xl shrink-0"><Clock size={20} /></div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-[#7a6a94] uppercase tracking-wider">Start Time</p>
                                    <p className="text-sm font-bold text-[#2d2738] truncate">{currentCourse.startTime}</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-purple-100/40 shadow-xs flex items-center gap-3">
                                <div className="p-2.5 bg-[#f6f4fa] text-[#4f46e5] rounded-xl shrink-0"><Clock size={20} /></div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-[#7a6a94] uppercase tracking-wider">End Time</p>
                                    <p className="text-sm font-bold text-[#2d2738] truncate">{currentCourse.endTime}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description Box Panel */}
                        <div className="bg-white p-5 md:p-6 rounded-3xl border border-purple-100/40 shadow-xs">
                            <div className="flex items-center gap-2 text-base font-bold text-[#2d2738] border-b border-purple-50 pb-3 mb-4">
                                <FileText size={18} className="text-[#4f46e5]" />
                                <h2>Course Overview & Syllabus Context</h2>
                            </div>
                            <p className="text-[#5c4e75] text-sm leading-relaxed font-medium">
                                {currentCourse.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT 1 COLUMN: FACULTY & ASSIGNMENT SUMMARY */}
                    <div className="space-y-6">

                        {/* Assigned Teachers Card */}
                        <div className="bg-white p-5 md:p-6 rounded-3xl border border-purple-100/40 shadow-xs flex flex-col h-full">
                            <div className="flex items-center gap-2 text-base font-bold text-[#2d2738] border-b border-purple-50 pb-3 mb-4">
                                <User size={18} className="text-[#4f46e5]" />
                                <h2>Assigned Instructors</h2>
                            </div>

                            <div className="space-y-3 flex-1">
                                {currentCourse.teachers.map((teacher, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-[#f6f4fa] rounded-xl border border-purple-50 hover:border-purple-100 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#ebe6f5] flex items-center justify-center text-[#4f46e5] font-bold text-sm shrink-0">
                                            {teacher.split(' ').pop()?.charAt(0) || 'T'}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-sm font-bold text-[#2d2738] truncate">{teacher}</h4>
                                            <p className="text-[11px] font-semibold text-[#7a6a94] uppercase tracking-wider">Lead Faculty</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Subsystem Note */}
                            {/* <div className="mt-6 bg-amber-50/60 border border-amber-100 p-3 rounded-xl text-xs text-amber-800 font-medium">
                                Faculty slots are assigned directly via your active administrative workspace dashboards.
                            </div> */}
                        </div>

                    </div>
                </div>

                <StudentAdmission />

            </main>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullScreen={fullScreen}
                fullWidth
                maxWidth="sm"
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: fullScreen ? 0 : "24px",
                        padding: "4px",
                        backgroundColor: "#ffffff"
                    },
                }}
            >
                <DialogContent className="relative p-6 max-h-[90vh] overflow-y-auto">
                    {/* Close Window Action Button */}
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            background: "#f1edf7",
                            color: "#5c4e75",
                            "&:hover": { background: "#dfd7ed" }
                        }}
                    >
                        <X size={18} />
                    </IconButton>

                    {/* Header Details */}
                    <div className="flex flex-col items-center mb-6 mt-4">
                        <h2 className="text-xl font-black text-[#2d2738] tracking-tight">
                            Student Admission
                        </h2>
                        <p className="text-[#7a6a94] text-xs mt-1">
                            Start Admission
                        </p>
                    </div>

                    {/* Integrated Creation Form Layout */}
                    <div className="flex flex-col gap-4">

                        <FormControl fullWidth>
                            <label className={labelClasses}>Student Name</label>
                            <OutlinedInput placeholder="eg. John" sx={inputStyles} />
                        </FormControl>

                        <FormControl fullWidth>
                            <label className={labelClasses}>Father Name</label>
                            <OutlinedInput placeholder="Father name" sx={inputStyles} />
                        </FormControl>


                        <FormControl fullWidth>
                            <label className={labelClasses}>Date</label>
                            <OutlinedInput type="date" name="startDate" sx={inputStyles} />
                        </FormControl>



                        <FormControl fullWidth>
                            <label className={labelClasses}>Description</label>
                            <OutlinedInput
                                multiline
                                rows={3}
                                placeholder="Student Address"
                                name="description"
                                sx={inputStyles}
                            />
                        </FormControl>

                        {/* Submission Exec Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1.5,
                                borderRadius: "14px",
                                textTransform: "none",
                                fontSize: "15px",
                                fontWeight: "bold",
                                mt: 2,
                                backgroundColor: "#4f46e5",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#4338ca",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CourseDetails;