import storyImg from "../assets/story.png"

const OurStory = () => {
    return (
        <section className="bg-blue-50">
            <div className="max-w-7xl mx-auto md:flex items-center p-10 gap-10 px-4 my-10">
                <div className="space-y-2 md:w-1/2">
                    <h2 className="text-2xl lg:text-4xl font-bold lg:w-90 leading-12">How Biswas IT Firm Started</h2>
                    <p className="text-slate-600">Biswas IT Firm began with a simple vision - to create meaningful digital solutions for businessmans of all sizes. What started as a small team of passionate developers has now grawn into a trusted web and software development agency, serving clients locally and globally.</p>
                    <p className="text-slate-600">We belieave in quality, collaborations and continuous learning. Every project we take is a new opportunity to make a positive impact.</p>
                    <button className="border-blue-400 border px-4 py-2 mt-2 cursor-pointer rounded-md font-semibold text-lg active:scale-98">Learn More</button>
                </div>
                <div className="md:w-1/2 mt-10">
                    <img src={storyImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default OurStory;