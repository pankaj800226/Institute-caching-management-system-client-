import { Link } from "react-router-dom";
import { LogIn } from "lucide-react"; // यहाँ हमने lucide से लॉगिन का सुंदर आइकॉन लिया है

const LoginBtn = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative group">
                <div className="absolute -inset-0.5  rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                
                <Link to="/login" className="relative block">
                    <button className="flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 active:scale-[0.98] cursor-pointer text-sm tracking-wide">
                        <LogIn size={18} className="transition-transform group-hover:translate-x-0.5" />
                        Sign In to Account
                    </button>
                </Link>
            </div>
            
            <p className="text-slate-400 text-xs font-medium mt-3">
                Secure Access for CodeCircle
            </p>
        </div>
    );
};

export default LoginBtn;