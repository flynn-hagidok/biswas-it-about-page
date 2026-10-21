const members = [
    {
        name: "Biswas",
        image: "https://i.ibb.co.com/KxqtQBxJ/member-1.jpg",
        passion: "CEO & Founder"
    },
    {
        name: "Anik",
        image: "https://i.ibb.co.com/zV6M88rf/member-2.jpg",
        passion: "UI/UX"
    },
    {
        name: "Jhankar",
        image: "https://i.ibb.co.com/xSnKJj8b/member-3.jpg",
        passion: "Marketing"
    },
    {
        name: "Sumon",
        image: "https://i.ibb.co.com/5hfpGG0N/member-4.jpg",
        passion: "Web Developer"
    },
]

const TeamMembers = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl text-center font-bold mb-10">Our Team Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-around px-4">
                    {
                        members.map(member =>
                            <div className="p-4 rounded-md shadow-md border border-slate-200 hover:-translate-y-2 transition duration-300">
                                <img src={member.image} alt={member.name}
                                    className="h-80 w-full object-cover"
                                />
                                <h2 className="font-semibold mt-2">{member.name}</h2>
                                <p className="text-lg font-semibold">{member.passion}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;