export default function ImageGrid() {
    const items = [
        {
            image: "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
            title: "We'll never give up on wolves",
            link: "#"
        },
        {
            image: "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
            title: "Wildlife and Politics",
            link: "#"
        },
        {
            image: "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
            title: "Make an investment in wildlife!",
            link: "#"
        }
    ]

    return (
        <div className="bg-background container mx-auto px-8 -mt-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
                    <div key={i} className="flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                style={{
                    backgroundImage: `url('${item.image}')`,
                }}
        />
    </div>
    <div className="flex items-start">
    <div className="h-1 w-12 bg-purple-600 mt-3 mr-4" />
    <a
        href={item.link}
    className="text-2xl font-bold hover:text-purple-600 transition-colors duration-200 flex items-center group"
        >
        {item.title}
        <svg
    className="w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    >
    <path
        strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 5l7 7-7 7"
        />
        </svg>
        </a>
        </div>
        </div>
))}
    </div>
    </div>
)
}

