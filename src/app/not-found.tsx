import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-[#eef6ff]'>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <h2 className='font-bold text-4xl text-center text-[#1c1c1d]'>404 | Page Not Found</h2>
                <Link className='text-center font-bold border border-[#1c1c1d] rounded-md px-3 py-1 text-[#eef6ff] bg-gradient-to-tr to-gray-800 from-slate-950' href="/">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;