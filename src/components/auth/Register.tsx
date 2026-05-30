import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

import { Link } from "react-router-dom";

import {
  User,
  Lock,
  UserPlus,
  ArrowRight,
  Eye,
  EyeOff,
  Phone,
  Briefcase,
  ChevronDown,
} from "lucide-react";

interface CountryType {
  name: string;
  code: string;
  cca2: string;
}

const Register = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState('')
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState('')
  const [role, setRole] = useState("doctor");

  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch all countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2"
        );

        const data = await res.json();

        const formatted = data
          .filter(
            (item: any) =>
              item.idd?.root &&
              item.idd?.suffixes?.length
          )
          .map((item: any) => ({
            name: item.name.common,
            code:
              item.idd.root +
              item.idd.suffixes[0],
            cca2: item.cca2,
          }))
          .sort((a: CountryType, b: CountryType) =>
            a.name.localeCompare(b.name)
          );

        setCountries(formatted);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // Auto detect user country
  useEffect(() => {
    const getCountryCode = async () => {
      try {
        const res = await fetch(
          "https://ipapi.co/json/"
        );

        const data = await res.json();

        if (data.country_calling_code) {
          setCountryCode(
            data.country_calling_code
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCountryCode();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(fullName);
      console.log(role);
      console.log(countryCode);
      console.log(password);
      console.log(phoneNumber);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased selection:bg-blue-500/20 selection:text-blue-800">

      {/* Soft Clean Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Vibrant Soft Glow Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 via-indigo-300/10 to-purple-400/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Premium Light Glassmorphic Card Container */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/80 rounded-[32px] p-6 md:p-8 shadow-2xl shadow-slate-200/80 space-y-6 relative overflow-hidden group/card hover:border-slate-300/50 transition-all duration-500">

        {/* Animated Card Border Glow Flash */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out" />

        {/* Header Section */}
        <div className="text-center space-y-2 relative z-10">
          <div className="mx-auto w-12 h-12 bg-gradient-to-b from-blue-500/10 to-indigo-500/5 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-3">
            <UserPlus size={22} className="animate-pulse" />
          </div>

          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent tracking-tight">
            Create Account
          </h1>

          <p className="text-slate-500 text-sm font-medium">
            Register your account
          </p>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 relative z-10"
        >
          {/* Full Name Input Field */}
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 px-1">
              Full Name
            </label>

            <div className="relative flex items-center group/input">
              <User
                size={18}
                className="absolute left-4 text-slate-400 group-focus-within/input:text-blue-500 transition-colors pointer-events-none"
              />

              <input
                type="text"
                name="username"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-white/80 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 text-sm shadow-sm shadow-slate-100"
              />
            </div>
          </div>

          {/* Phone Number Custom Row */}
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 px-1">
              Phone Number
            </label>

            <div className="flex gap-2.5">
              {/* Country Code Selection Dropdown */}
              <div className="relative flex items-center min-w-[105px] max-w-[115px]">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full bg-white/80 border border-slate-200 rounded-xl px-3.5 py-3.5 text-slate-700 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 appearance-none cursor-pointer shadow-sm shadow-slate-100"
                >
                  {countries.map((item, index) => (
                    <option key={index} value={item.code} className="bg-white text-slate-700">
                      {item.cca2} {item.code}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 text-slate-400 pointer-events-none" />
              </div>

              {/* Core Telephone Input Area */}
              <div className="relative flex-1 flex items-center group/input">
                <Phone
                  size={17}
                  className="absolute left-4 text-slate-400 group-focus-within/input:text-blue-500 transition-colors pointer-events-none"
                />

                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="9876543210"
                  className="w-full bg-white/80 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 text-sm shadow-sm shadow-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Password Security Input Box */}
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 px-1">
              Password
            </label>

            <div className="relative flex items-center group/input">
              <Lock
                size={17}
                className="absolute left-4 text-slate-400 group-focus-within/input:text-blue-500 transition-colors pointer-events-none"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/80 border border-slate-200 rounded-xl pl-11 pr-12 py-3.5 text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 text-sm shadow-sm shadow-slate-100"
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1 rounded-md"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* User Role Classification Selector */}
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 px-1">
              Role
            </label>

            <div className="relative flex items-center group/input">
              <Briefcase
                size={17}
                className="absolute left-4 text-slate-400 group-focus-within/input:text-blue-500 transition-colors pointer-events-none"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white/80 border border-slate-200 rounded-xl pl-11 pr-10 py-3.5 text-slate-700 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 text-sm appearance-none cursor-pointer shadow-sm shadow-slate-100"
              >
                <option value="doctor" className="bg-white text-slate-700">Doctor</option>
              </select>

              <ChevronDown size={14} className="absolute right-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Primary Action Submit Trigger */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm tracking-wide flex items-center justify-center gap-2 group mt-6 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? "Please wait..." : "Register Account"}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Global Nav Bottom Redirect Links */}
        <div className="text-center pt-4 border-t border-slate-200 relative z-10">
          <p className="text-slate-400 text-xs font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:text-blue-500 hover:underline transition-all ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;