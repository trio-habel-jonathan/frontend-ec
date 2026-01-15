import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white p-3 mt-5 w-[75%] mx-auto rounded-3xl shadow-lg sticky z-50 top-4 border border-gray-200">
            <div className="grid grid-cols-3 items-center">
                <div className="logo-icon bg-black px-4 py-2 rounded-2xl w-fit">                
                    <span className="font-archivo text-white font-bold">KyL</span>
                </div>

                <div className="flex gap-12 justify-center">
                    <Link href="/" className="text-[#0a0908] font-archivo">
                        Home
                    </Link>
                    <Link href="/about" className="text-[#0a0908] font-archivo">
                        Shop
                    </Link>
                    <Link href="/services" className="text-[#0a0908] font-archivo">
                        About
                    </Link>
                </div>
                <div className="flex gap-4 items-center justify-end">
                    <div className="relative">
                        <input type="text" placeholder="Search..." className="px-4 py-1.5 rounded-xl border border-gray-300 focus:outline-none focus:border-gray-400 text-sm font-archivo w-[100%]"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    {/* <button className="text-[#0a0908]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button> */}
                    <Link href="/account" className="text-[#0a0908]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </Link>
                     <Link href="/cart" className="text-[#0a0908]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}