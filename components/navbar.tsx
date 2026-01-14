import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[#252422] p-4 mt-5 w-[45%] mx-auto rounded-3xl shadow-xl sticky z-50 top-4">
            <div className="grid grid-cols-3 items-center">
                {/* Logo Kiri */}
                <div className="logo-icon bg-white px-4 py-2 rounded-2xl w-fit">                
                    <span className="font-archivo text-black font-bold">Kylin</span>
                </div>

                {/* Menu Tengah */}
                <div className="flex gap-6 justify-center">
                    <Link href="/" className="text-white font-archivo">
                        Home
                    </Link>
                    <Link href="/about" className="text-white font-archivo">
                        About
                    </Link>
                    <Link href="/services" className="text-white font-archivo">
                        Services
                    </Link>
                    <Link href="/contact" className="text-white font-archivo">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}