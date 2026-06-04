import Sidebar from "../../components/Sidebar";
import SearchCourse from "./SearchCourse";
import { ArrowRight, BookOpen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure Link is imported cleanly from react-router-dom

const Course = () => {
    const courses = [
        {
            courseName: 'BCA (Bachelor of Computer Applications)',
            photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
            price: "20,000",
            batch: "2024-2027",
            timing: "09:00 AM - 12:00 PM"
        },
        {
            courseName: 'MCA (Master of Computer Applications)',
            photo: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop",
            price: "35,000",
            batch: "2024-2026",
            timing: "01:00 PM - 04:00 PM"
        }
    ];

    return (
        <div className="flex min-h-screen bg-[#f6f4fa]">
            <Sidebar />

            {/* Added safety padding top on mobile to prevent floating menu button overlaps */}
            <main className="flex-1 w-full md:ml-[72px] lg:ml-[240px] bg-white p-6 md:p-8">
                <SearchCourse />

                <div className="mt-2">
                    {courses.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-3xl border border-purple-100/60 shadow-sm shadow-purple-900/5 text-center">
                            <div className="p-4 bg-[#ebe6f5] text-[#4f46e5] rounded-2xl mb-4">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-[#2d2738]">No Courses Found</h3>
                            <p className="text-[#7a6a94] text-sm mt-1 max-w-xs leading-relaxed">
                                It looks like there aren't any active modules matching this space right now.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((c, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col bg-white rounded-3xl border border-purple-100/40 p-4 shadow-sm shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-200/60 transition-all duration-300"
                                >
                                    {/* Course Image Header Framework */}
                                    <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-purple-50 mb-4">
                                        <img
                                            src={c.photo}
                                            alt={c.courseName}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Ambient Dark Overlay Matrix for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                        {/* Dynamic Float Badge for pricing */}
                                        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm">
                                            <span className="text-xs font-semibold text-[#5c4e75]">Fee: </span>
                                            <span className="text-sm font-black text-[#4f46e5]">₹{c.price}</span>
                                        </div>

                                        {/* Floating Delete Icon Button */}
                                        <button
                                            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md text-red-500 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-10"
                                            title="Delete Course"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    {/* Info Structural Body */}
                                    <div className="flex-1 flex flex-col px-1">
                                        <h3 className="text-lg font-black text-[#2d2738] tracking-tight line-clamp-1 group-hover:text-[#4f46e5] transition-colors duration-200">
                                            {c.courseName}
                                        </h3>

                                        {/* Secondary Subtitle Meta Parameters */}
                                        <div className="flex items-center gap-4 text-xs font-medium text-[#7a6a94] mt-2 pb-4 border-b border-purple-50">
                                            {c.batch && (
                                                <div className="flex items-center gap-1 bg-[#f6f4fa] px-2 py-1 rounded-md">
                                                    <span>Batch:</span>
                                                    <span className="text-[#2d2738] font-semibold">{c.batch}</span>
                                                </div>
                                            )}
                                            {c.timing && (
                                                <span className="truncate">{c.timing}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* ========================================================= */}
                                    {/* FIXED ACTION NAVIGATION LINK BLOCK                        */}
                                    {/* ========================================================= */}
                                    <div className="pt-4 px-1 mt-auto">
                                        <Link 
                                            to="/courseDetails"
                                            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#ebe6f5] hover:bg-[#4f46e5] text-[#4f46e5] hover:text-white text-sm font-bold rounded-xl transition-all duration-300 group/btn active:scale-[0.98] shadow-xs"
                                        >
                                            <span>Full Details</span>
                                            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Course;