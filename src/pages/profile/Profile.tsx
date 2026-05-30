import React, { useState } from "react";
import {
  Phone,
  Mail,
  Calendar,
  LogOut,
  Edit,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Avatar,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "Rahul Kumar",
    phone: "+91 9876543210",
    email: "rahul@example.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />

      {/* Main Container */}
      <main className="flex-1 w-full md:ml-[72px] lg:ml-[240px] bg-white p-6 md:p-8">

        {/* Laptop/Desktop me 90% width capture karne ke liye: w-full lg:max-w-[90%] use kiya hai */}
        <div className="w-full lg:max-w-[95%] mx-auto bg-gradient-to-b from-blue-50/60 to-white pb-10 rounded-[32px] overflow-hidden shadow-sm border border-slate-100">

          {/* Top Header Background Banner */}
          <div className="relative h-44 sm:h-52 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md">
            {/* Floating Edit Button */}
            <button
              onClick={() => setOpen(true)}
              className="absolute top-5 right-5 bg-white/20 backdrop-blur-lg p-3 rounded-full border border-white/20 hover:bg-white/30 transition cursor-pointer"
            >
              <Edit className="text-white" size={20} />
            </button>

            {/* Profile Picture Section */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt="profile"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[6px] border-white shadow-xl object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white"></div>
              </div>

              <h1 className="text-xl sm:text-2xl font-black mt-3 text-slate-800 tracking-tight text-center px-4">
                {formData.name}
              </h1>
            </div>
          </div>

          <div className="mt-24 px-4 sm:px-8 w-full lg:max-w-[85%] mx-auto">
            {/* Profile Info Cards */}
            <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-6 space-y-5 border border-slate-100">
              {/* Phone Row */}
              <div className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-2xl shrink-0">
                  <Phone className="text-green-600" size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Phone Number</p>
                  <h2 className="font-semibold text-base sm:text-lg text-slate-800 truncate">
                    {formData.phone}
                  </h2>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-2xl shrink-0">
                  <Mail className="text-red-500" size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Email Address</p>
                  <h2 className="font-semibold text-base sm:text-lg text-slate-800 truncate">
                    {formData.email}
                  </h2>
                </div>
              </div>

              {/* Joined Date Row */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-50 p-3 rounded-2xl shrink-0">
                  <Calendar className="text-purple-600" size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Joined</p>
                  <h2 className="font-semibold text-base sm:text-lg text-slate-800">May 2026</h2>
                </div>
              </div>
            </div>

            {/* Logout Action Button */}
            <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/10 hover:shadow-lg transition">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Edit Form Dialog */}
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
            },
          }}
        >
          <DialogContent className="relative p-6">
            {/* Modal Close Action */}
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#f1f5f9",
                "&:hover": { background: "#e2e8f0" }
              }}
            >
              <X size={18} />
            </IconButton>

            {/* Modal Header details */}
            <div className="flex flex-col items-center mb-6 mt-4">
              <Avatar
                src="https://i.pravatar.cc/200?img=12"
                sx={{
                  width: 84,
                  height: 84,
                  mb: 2,
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)"
                }}
              />
              <h2 className="text-xl font-black text-slate-800">Edit Profile</h2>
              <p className="text-slate-500 text-xs mt-0.5">
                Update your personal information
              </p>
            </div>

            {/* Form Fields inputs stack */}
            <div className=" flex flex-col gap-3 space-y-4">
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />

              <Button
                variant="contained"
                fullWidth
                onClick={() => setOpen(false)}
                sx={{
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: "bold",
                  mt: 2,
                  backgroundColor: "#2563eb",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#1d4ed8", boxShadow: "none" }
                }}
              >
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Profile;