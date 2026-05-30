import { Link, useLocation } from 'react-router-dom'
import { Avatar, } from '@mui/material'
import { BellRing, Plus, Home as HomeIcon, Search } from 'lucide-react'
import LoginBtn from '../ui/LoginBtn';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const email = false
    return (
        <>
            {
                email ? (
                    <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white/95 backdrop-blur-lg border-t border-slate-100 h-[56px] px-8 flex justify-between items-center">
                        <Link to="/" className={`transition-colors duration-200 active:scale-75 ${isActive('/') ? 'text-slate-900' : 'text-slate-400'}`}>
                            <HomeIcon size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
                        </Link>
                        <Link to="/search" className={`transition-colors duration-200 active:scale-75 ${isActive('/search') ? 'text-slate-900' : 'text-slate-400'}`}>
                            <Search size={24} strokeWidth={isActive('/search') ? 2.5 : 2} />
                        </Link>
                        <Link to="/post" className="bg-slate-900 text-white p-2 rounded-lg active:scale-90 transition-transform shadow-sm">
                            <Plus size={20} strokeWidth={3} />
                        </Link>
                        <Link to="/notifications" className={`transition-colors duration-200 active:scale-75 ${isActive('/notifications') ? 'text-slate-900' : 'text-slate-400'}`}>
                            <BellRing size={24} strokeWidth={isActive('/notifications') ? 2.5 : 2} />
                        </Link>
                        <Link to="/profile" className={`transition-all active:scale-75 ${isActive('/profile') ? 'ring-2 ring-slate-900 ring-offset-1 rounded-full' : ''}`}>
                            <Avatar sx={{ width: 26, height: 26, bgcolor: '#4f46e5', fontSize: '10px' }}>NJ</Avatar>
                        </Link>
                    </nav>
                ) : (
                    <LoginBtn />
                )
            }



        </>
    )
}
export default Header;