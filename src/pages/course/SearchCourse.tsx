import { Plus, Search, X } from "lucide-react";
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
import { useState } from "react";


const SearchCourse = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);


    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white p-4 rounded-2xl shadow-sm shadow-purple-900/5 border border-purple-100/50 mb-8">

                {/* Search Input Container */}
                <div className="relative w-full sm:max-w-md group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7a6a94] group-focus-within:text-[#4f46e5] transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-11 pr-4 py-2.5 bg-[#f6f4fa] text-[#2d2738] placeholder-[#7a6a94] text-sm rounded-xl border border-transparent focus:border-purple-200 focus:bg-white focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all"
                    />
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4f46e5] text-white text-sm font-semibold rounded-xl hover:bg-[#4338ca] active:scale-98 transition-all cursor-pointer shadow-md shadow-indigo-900/10"
                >
                    <Plus size={18} />
                    <span>Add New Course</span>
                </button>
            </div>



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
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
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

        </div>
    );
};

export default SearchCourse;