const WorkProcess = () => {
    return (
        <section className="bg-blue-50 py-20 px-5 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Our Work Process</h2>
                    <p className="text-slate-500 mt-4 leading-7"> We follow a simple process to turn your
                        ideas into successful digital products.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">01</div>
                        <div className="text-4xl mt-5">💡</div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Discover</h3>
                        <p className="text-sm text-slate-500 mt-3 leading-6">We understand your needs and goals.</p>
                    </div>
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">02</div>
                        <div className="text-4xl mt-5">📝</div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Plan</h3>
                        <p className="text-sm text-slate-500 mt-3 leading-6">We create a clear strategy and roadmap for your project.</p>
                    </div>
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">03</div>
                        <div className="text-4xl mt-5">💻</div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Design & Develop</h3>
                        <p className="text-sm text-slate-500 mt-3 leading-6">We design and build a modern, user-friendly website.</p>
                    </div>
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">04</div>
                        <div className="text-4xl mt-5">🔍</div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Test</h3>
                        <p className="text-sm text-slate-500 mt-3 leading-6">We test the website and fix issues before launch.</p>
                    </div>
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">05</div>
                        <div className="text-4xl mt-5">🚀</div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Launch</h3>
                        <p className="text-sm text-slate-500 mt-3 leading-6">We launch your project and help you move forward.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;