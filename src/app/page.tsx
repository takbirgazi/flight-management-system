import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header  */}
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#1c1c1d]">
        <div className=" text-white py-20 px-6 text-center container mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl">Welcome to Flight Management System</h1>
          <p className="mt-4 text-lg md:text-xl pb-10">Manage flights seamlessly with advanced features and responsive design.</p>
          <Link href="/signup" className="my-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">User Authentication</h3>
            <p className="mt-2 text-gray-600">Secure login and registration system for all users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Flight Management</h3>
            <p className="mt-2 text-gray-600">Easily create, update, and manage flight details.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Search & Filter</h3>
            <p className="mt-2 text-gray-600">Quickly find flights with powerful search and filter tools.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200">
        <div className=" py-12 px-6  container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            The Flight Management System is designed to simplify flight operations, improve efficiency, and enhance user experience with modern web technologies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;

