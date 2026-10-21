import { FaEye } from "react-icons/fa"
import { SiTarget } from "react-icons/si"

const MissionVision = () => {
    return (
        <section className="my-30 px-10">
            <div className="max-w-7xl mx-auto flex items-center gap-10 justify-between px-6 lg:px-0">
                <div className="w-1/2 space-y-4">
                    <SiTarget size={60} className="text-red-600" />
                    <h2 className="text-2xl lg:4xl font-bold">Our Mission</h2>
                    <p>To deliver high-quality, affortable and scalable digital solutions that help business achieve their goals and grow in the digital world.</p>
                </div>
                <div className="border-2 border-slate-400 h-100 lg:h-80"></div>
                <div className="w-1/2 space-y-4">
                    <FaEye size={60} className="text-blue-600" />
                    <h2 className="text-2xl lg:4xl font-bold">Our Vision</h2>
                    <p>To become a leading global IT service provider, known for innovation, reliability and exceptional customer satisfaction.</p>
                </div>
            </div>
        </section>
    )
}

export default MissionVision;