import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Large Stylized 404 */}
        <h1 className="text-9xl font-black text-slate-200 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-4xl text-blue-600 mt-4">
            Oops!
          </span>
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 mt-2 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-blue-200"
        >
          Return to CodeCircle
        </Link>
      </div>

      {/* Decorative element - similar to your loading screen aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-10 -z-10"></div>
    </div>
  )
}

export default PageNotFound