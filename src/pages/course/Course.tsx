import Sidebar from "../../components/Sidebar";
import SearchCourse from "./SearchCourse";

const Course = () => {
    return (
        <div className="flex min-h-screen bg-[#f6f4fa]">
            <Sidebar />

            <main className="flex-1 w-full md:ml-[72px] lg:ml-[240px] bg-white p-6 md:p-8">
                <SearchCourse />


                courses
            </main>
        </div>
    )
}

export default Course