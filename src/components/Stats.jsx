const Stats = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-semibold text-sm">
                        OUR ACHIEVEMENTS
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                        Our Journey in Numbers
                    </h2>

                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                        Our growth reflects our commitment to quality,
                        innovation, and successful projects.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div className="flex flex-col justify-center items-center bg-white border border-slate-200 h-56 w-56 rounded-full p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                        <p className="text-4xl md:text-5xl font-bold text-blue-600">
                            4+
                        </p>

                        <p className="text-slate-600 font-medium mt-3">
                            Years of Experience
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white border border-slate-200 h-56 w-56 rounded-full p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                        <p className="text-4xl md:text-5xl font-bold text-blue-600">
                            10+
                        </p>

                        <p className="text-slate-600 font-medium mt-3">
                            Team Members
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white border border-slate-200 h-56 w-56 rounded-full p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                        <p className="text-4xl md:text-5xl font-bold text-blue-600">
                            50+
                        </p>

                        <p className="text-slate-600 font-medium mt-3">
                            Successful Projects
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;