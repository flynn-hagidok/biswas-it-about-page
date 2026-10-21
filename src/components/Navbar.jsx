import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="shadow-md">
            <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
                {/* desktop navigation */}
                <p className="text-2xl font-bold">Biswas IT Firm</p>
                <nav className="lg:block hidden">
                    <a href="about"
                        className="font-semibold text-slate-600 hover:text-black border-b-2 px-2 py-2 border-blue-600"
                    >
                        About Us
                    </a>
                </nav>
                <button
                    className="px-4 py-2 font-semibold bg-blue-500 text-[#ffff] rounded-md cursor-pointer active:scale-98 hidden lg:block"
                >
                    Get Started
                </button>

                {/* mobile navigation */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden"
                >
                    <CiMenuBurger />
                </button>
            </header>
            {
                isOpen && (
                    <div className="flex flex-col lg:hidden p-4 space-y-2 border-t border-slate-300">
                        <nav>
                            <a href="about"
                                onClick={() => setIsOpen(false)}
                                className="font-semibold text-slate-600 hover:text-black"
                            >About</a>
                        </nav>
                        <button className="px-4 py-2 font-semibold bg-blue-500 text-[#ffff] rounded-md cursor-pointer active:scale-98">Get Started</button>
                    </div>
                )
            }
        </section>
    )
}

export default Navbar;