import { Pencil, Trash2, Search, UserPlus, Eye } from 'lucide-react';

const StudentAdmission = () => {
  const students = [
    { id: 1, name: 'John Doe', fatherName: 'Robert Doe', date: '2026-06-01', address: '123 Main St, New York' },
    { id: 2, name: 'Jane Smith', fatherName: 'Michael Smith', date: '2026-06-03', address: '456 Elm St, Los Angeles' },
    { id: 3, name: 'Alex Johnson', fatherName: 'David Johnson', date: '2026-06-04', address: '789 Oak Ave, Chicago' },
  ];

  return (
    <div className="md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50/50">
      {/* Header section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Student Admissions</h1>
          <p className="text-sm text-gray-500 mt-1">Manage, search, and view newly admitted student details</p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-sm shadow-indigo-100 transition active:scale-95 w-full md:w-auto">
          <UserPlus size={16} />
          New Admission
        </button>
      </div>

      {/* Control Bar (Search) */}
      <div className="mb-5 flex items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search by student or father's name..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
          />
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/75 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-6">Father's Name</th>
                <th className="py-4 px-6">Admission Date</th>
                <th className="py-4 px-6">Address</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-indigo-50/30 transition-colors duration-150">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-gray-600">
                    {student.fatherName}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {student.date}
                    </span>
                  </td>
                  <td className="py-4 px-6 min-w-[240px] text-gray-500 leading-relaxed">
                    {student.address}
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="Edit Record"
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition duration-150 cursor-pointer"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        title="Edit Record"
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition duration-150 cursor-pointer"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        title="Delete Record"
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition duration-150 cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state fallback */}
        {students.length === 0 && (
          <div className="text-center py-16 bg-white">
            <div className="inline-flex p-3 bg-gray-50 rounded-full text-gray-400 mb-3">
              <Search size={24} />
            </div>
            <p className="text-base font-medium text-gray-900">No student records found</p>
            <p className="text-sm text-gray-400 mt-1">Try adjusting your keywords or search spelling.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAdmission;