import React from "react";
import Sidebar from "../../components/Sidebar";
import {
    Activity,
    ClipboardCheck,
    User,
    CircleDollarSign
} from "lucide-react";

const Dashboard: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-slate-50/50">
            <Sidebar />

            {/* Changed w-[100%] to w-full and kept responsive margins */}
            <main className="flex-1 w-full md:ml-[72px] lg:ml-[240px] bg-white p-6 md:p-8">

                {/* Dashboard Title Header */}
                <div className="mb-8 space-y-1">
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Welcome Raju 👋
                    </h1>
                </div>

                {/* 4-Column Stats Grid Layout (1fr 1fr 1fr 1fr on large screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1: Total Bookings */}
                    <div className="group bg-white border border-slate-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[140px] w-full">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                    Total Student
                                </p>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                                    1,248
                                </h2>
                            </div>
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-transparent transition-colors group-hover:border-blue-600/10 shrink-0">
                                <User size={22} />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Active Doctors */}
                    <div className="group bg-white border border-slate-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[140px] w-full">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                    Total Attendence
                                </p>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                                    84
                                </h2>
                            </div>
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-transparent transition-colors group-hover:border-emerald-600/10 shrink-0">
                                <ClipboardCheck size={22} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Partner Hospitals */}
                    <div className="group bg-white border border-slate-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[140px] w-full">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                   Pending Fee
                                </p>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                                    16
                                </h2>
                            </div>
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl border border-transparent transition-colors group-hover:border-purple-600/10 shrink-0">
                                <CircleDollarSign size={22} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Total Operations (Fixed to match others) */}
                    {/* Removed col-span classes so it sits perfectly in 1fr slot */}
                    <div className="group bg-white border border-slate-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[140px] w-full">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                    Total Operations
                                </p>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                                    342
                                </h2>
                            </div>
                            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl border border-transparent transition-colors group-hover:border-rose-600/10 shrink-0">
                                <Activity size={22} />
                            </div>
                        </div>
                    </div>

                    

                </div>
                

            </main>
        </div>
    );
};

export default Dashboard;