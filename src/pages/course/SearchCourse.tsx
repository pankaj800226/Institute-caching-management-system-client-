import { useState } from "react";
import { Plus, Search, X, Trash2 } from "lucide-react";
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

const SearchCourse = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);
    const [teachers, setTeachers] = useState([""]);

    const addTeacher = () => {
        setTeachers([...teachers, ""]);
    };

    const handleTeacherChange = (index: number, value: string) => {
        const updated = [...teachers];
        updated[index] = value;
        setTeachers(updated);
    };

    const handleRemoveInput = (index: number) => {
        setTeachers(teachers.filter((_, i) => i !== index));
    };

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

    return (
        <div>
            {/* ========================================================= */}
            {/* SEARCH & ACTION CONTROL ROW                               */}
            {/* ========================================================= */}
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

            {/* ========================================================= */}
            {/* COURSE CREATION DIALOG CONTAINER                          */}
            {/* ========================================================= */}
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
                            Create Course
                        </h2>
                        <p className="text-[#7a6a94] text-xs mt-1">
                            Add a new course to your institute
                        </p>
                    </div>

                    {/* Integrated Creation Form Layout */}
                    <div className="flex flex-col gap-4">

                        <FormControl fullWidth>
                            <label className={labelClasses}>Course Name</label>
                            <OutlinedInput placeholder="e.g. Full Stack Web Development" name="courseName" sx={inputStyles} />
                        </FormControl>

                        <FormControl fullWidth>
                            <label className={labelClasses}>Course Image</label>
                            <OutlinedInput type="file" name="courseImage" sx={inputStyles} />
                        </FormControl>

                        {/* Dual Column Horizontal Grid for Times */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormControl fullWidth>
                                <label className={labelClasses}>Starting Time</label>
                                <OutlinedInput type="time" name="startTime" sx={inputStyles} />
                            </FormControl>
                            <FormControl fullWidth>
                                <label className={labelClasses}>End Time</label>
                                <OutlinedInput type="time" name="endTime" sx={inputStyles} />
                            </FormControl>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormControl fullWidth>
                                <label className={labelClasses}>Batch (Optional)</label>
                                <OutlinedInput placeholder="2022-2025" name="batch" sx={inputStyles} />
                            </FormControl>
                            <FormControl fullWidth>
                                <label className={labelClasses}>Total Fees</label>
                                <OutlinedInput type="number" placeholder="Enter amount" name="totalFees" sx={inputStyles} />
                            </FormControl>
                        </div>

                        <FormControl fullWidth>
                            <label className={labelClasses}>Course Start Date</label>
                            <OutlinedInput type="date" name="startDate" sx={inputStyles} />
                        </FormControl>

                        {/* ========================================================= */}
                        {/* DYNAMIC TEACHERS MANAGEMENT CARD CONTAINER                */}
                        {/* ========================================================= */}
                        <div className="space-y-2 mt-1">
                            <label className={labelClasses}>Assign Teachers</label>

                            {teachers.map((teacher, index) => (
                                <div key={index} className="flex gap-2 items-center w-full animate-fadeIn">
                                    <OutlinedInput
                                        fullWidth
                                        placeholder={`Enter Teacher ${index + 1} Name`}
                                        value={teacher}
                                        onChange={(e) => handleTeacherChange(index, e.target.value)}
                                        sx={{ ...inputStyles, "& input": { py: "8px", fontSize: "14px" } }}
                                    />
                                    {teachers.length > 1 && (
                                        <IconButton
                                            onClick={() => handleRemoveInput(index)}
                                            color="error"
                                            sx={{
                                                backgroundColor: "#fef2f2",
                                                color: "#ef4444",
                                                borderRadius: "12px",
                                                p: 1.2,
                                                "&:hover": { backgroundColor: "#fee2e2" }
                                            }}
                                        >
                                            <Trash2 size={18} />
                                        </IconButton>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addTeacher}
                                className="mt-1 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#4f46e5] hover:bg-[#4f46e5]/10 rounded-lg transition-colors cursor-pointer"
                            >
                                <Plus size={14} /> Add Another Teacher
                            </button>
                        </div>

                        <FormControl fullWidth>
                            <label className={labelClasses}>Course Description (Optional)</label>
                            <OutlinedInput
                                multiline
                                rows={3}
                                placeholder="Write a brief overview about the module lessons..."
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
                            Create Course
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SearchCourse;