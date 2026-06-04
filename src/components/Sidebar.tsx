import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LogOut,
    Menu,
    X,
    LayoutDashboard,
    User,
    Users,
    CreditCard,
    User2
} from 'lucide-react';

import logo from '../assets/logo.png';
import LoginBtn from './ui/LoginBtn';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    const menuItems = [
        { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={22} /> },
        { name: 'Course ', path: '/course', icon: <Users size={22} /> },
        { name: 'Students', path: '/students', icon: <User size={22} /> },
        // { name: 'Attendance ', path: '/attendance', icon: <ClipboardCheck size={22} /> },
        { name: 'Fees Manage', path: '/fees', icon: <CreditCard size={22} /> },
        { name: 'Profile', path: '/profile', icon: <User2 size={22} /> },
    ];

    const email = true; // Set to false to review the thematic Login State
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login');
    };

    return (
        <div>
            {email ? (
                <>
                    {/* ========================================================= */}
                    {/* MOBILE FLOATING MENU BUTTON                              */}
                    {/* ========================================================= */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden fixed top-4 left-4 z-40 p-2.5 bg-[#ebe6f5] text-[#5c4e75] shadow-lg shadow-purple-900/10 border border-white/40 rounded-full cursor-pointer hover:bg-[#dfd7ed] transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>

                    {/* ========================================================= */}
                    {/* DESKTOP SIDEBAR                                           */}
                    {/* ========================================================= */}
                    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[72px] lg:w-[240px]  bg-[#ebe6f5] p-3 pt-8 transition-all duration-300 z-40">
                        {/* Logo Section */}
                        <div className="mb-10 px-3">
                            <Link to="/" className="flex items-center gap-3 group">
                                {/* Enhanced Logo Image */}
                                <div className="relative flex-shrink-0 w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-tr from-[#4f46e5] via-[#a855f7] to-[#6366f1] flex items-center justify-center shadow-md shadow-indigo-900/10">
                                    <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover rounded-full"
                                            src={logo}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>

                                {/* Enhanced Logo Text */}
                                <span className="hidden lg:block text-xl font-black tracking-tight bg-gradient-to-br from-[#1e1b4b] via-[#2d2738] to-[#4f46e5] bg-clip-text text-transparent transition-all duration-300 group-hover:translate-x-0.5">
                                    Institute<span className="text-[#4f46e5]">Hub</span>
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Items */}
                        <nav className="flex-1 space-y-1.5">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group active:scale-95 ${isActive(item.path)
                                        ? 'font-bold text-[#4f46e5] bg-white shadow-sm shadow-indigo-900/5'
                                        : 'text-[#5c4e75] hover:bg-[#dfd7ed]/60 hover:text-[#2d2738]'
                                        }`}
                                >
                                    <div className={`transition-transform duration-200 group-hover:scale-110 ${isActive(item.path) ? 'scale-105 text-[#4f46e5]' : ''}`}>
                                        {item.icon}
                                    </div>
                                    <div className={`hidden lg:block text-[15px] ${isActive(item.path) ? 'font-bold' : 'font-medium'}`}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </nav>

                        {/* Logout Button */}
                        <button
                            onClick={logOut}
                            className="flex items-center gap-4 p-3 rounded-xl text-[#7a6a94] hover:bg-[#f1edf7] hover:text-red-600 transition-all active:scale-95 cursor-pointer mt-auto"
                        >
                            <LogOut size={22} />
                            <span className="hidden lg:block font-medium text-[15px]">Logout</span>
                        </button>
                    </aside>

                    {/* ========================================================= */}
                    {/* MOBILE DRAWER OVERLAY & CONTAINER                         */}
                    {/* ========================================================= */}
                    {isOpen && (
                        <div
                            className="md:hidden fixed inset-0 bg-[#2d2738]/40 backdrop-blur-xs z-50 transition-opacity"
                            onClick={() => setIsOpen(false)}
                        />
                    )}

                    {/* Sliding Drawer */}
                    <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#ebe6f5] z-50 p-4 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        {/* Drawer Header */}
                        <div className="flex items-center gap-3 h-14 border-b border-purple-200/50 mb-4 px-1">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 -ml-2 text-[#5c4e75] hover:bg-[#dfd7ed] rounded-full cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-2.5">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-br from-[#2d2738] via-[#a855f7] to-[#4f46e5] flex items-center justify-center shadow-xs">
                                    <div className="w-full h-full bg-white rounded-full p-0.5 flex items-center justify-center overflow-hidden">
                                        <img
                                            className='w-full h-full rounded-full object-cover'
                                            src={logo}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>

                                <span className="text-lg font-black tracking-tight bg-gradient-to-br from-[#1e1b4b] via-[#2d2738] to-[#4f46e5] bg-clip-text text-transparent">
                                    Institute<span className="text-[#4f46e5]">Hub</span>
                                </span>
                            </div>

                        </div>

                        {/* Drawer Links */}
                        <nav className="flex-1 space-y-1.5 overflow-y-auto">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isActive(item.path)
                                        ? 'font-bold text-[#4f46e5] bg-white shadow-xs'
                                        : 'text-[#5c4e75] active:bg-[#dfd7ed]'
                                        }`}
                                >
                                    <span className={isActive(item.path) ? 'text-[#4f46e5]' : 'text-[#7a6a94]'}>
                                        {item.icon}
                                    </span>
                                    <span className="text-[14px] font-medium">{item.name}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Drawer Logout */}
                        <div className="pt-4 border-t border-purple-200/50">
                            <button
                                onClick={logOut}
                                className="flex w-full items-center gap-4 p-3 rounded-xl text-red-500 active:bg-red-50 transition-all cursor-pointer"
                            >
                                <LogOut size={22} />
                                <span className="font-medium text-[14px]">Logout</span>
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                /* ========================================================= */
                /* NOT LOGGED IN STATE (Thematic Styling Match)               */
                /* ========================================================= */
                <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f6f4fa] p-4">
                    <div className="text-center space-y-5 max-w-sm bg-[#ebe6f5] p-8 rounded-3xl shadow-xl shadow-purple-900/5 border border-white/60">
                        <img width={72} height={72} className="rounded-full mx-auto shadow-md border-4 border-white" src={logo} alt="Logo" />
                        <div>
                            <h2 className="text-2xl font-black text-[#2d2738] tracking-tight">Welcome to InstituteHub</h2>
                            <p className="text-[#6b5d85] text-sm mt-1.5 leading-relaxed">Please sign in to access your dashboard and manage schedules.</p>
                        </div>
                        <div className="pt-2 flex justify-center">
                            <LoginBtn />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;