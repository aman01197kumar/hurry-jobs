import Link from "next/link"

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-4xl mx-auto">
        <section className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Login as Admin</h2>
          <Link href='/admin'>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Admin Login
            </button>
          </Link>
        </section>

        <section className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Login as User</h2>
          <Link href='./jobs'>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
            User Login
          </button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default page
