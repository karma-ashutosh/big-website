import {sahJeevanThemes as themes} from "@/components/constants.ts";
export default function ThemeGrid() {
    return (
        <div className="bg-gray-100 py-8 px-4">
            {/* Title & Subtitle Section */}
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
                The issues we work on
            </h2>
            {/*<p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">*/}
            {/*    Imagine a world where forests flourish and oceans are full of life.*/}
            {/*    Where energy is as clean as a mountain stream. Where everyone has*/}
            {/*    security, dignity, and joy. We can’t build this future alone,*/}
            {/*    but we can build it together.*/}
            {/*</p>*/}

            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8"/>

            {/* Theme Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        {/* Card Title Section */}
                        <div className="p-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">
                                {theme.title}
                            </h3>
                            <a
                                href={theme.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-700 transition"
                                aria-label={`Learn more about ${theme.title}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="border-t-2 border-purple-500 w-12 mx-auto mb-4"></div>

                        {/* Card Image Section */}
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${theme.image}')`,
                            }}
                        ></div>

                        {/* Card Description Section */}
                        <div className="p-4">
                            <p className="text-gray-600 text-sm">{theme.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
