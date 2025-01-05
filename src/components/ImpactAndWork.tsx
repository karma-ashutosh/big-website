import Pyramid, {pyramidLayers} from "@/components/HoverablePyramid.tsx";
import {ReactNode} from "react";
import {DefaultBlogPreview} from "@/components/constants.ts";
import BlogPreview from "@/components/BlogPreview.tsx";

const HighlightBox = ({ highlight, description, Other }: {highlight: string, description: string, Other?: ReactNode}) => {
    return (
        <div className="flex flex-col items-center text-center px-4 py-6 bg-transparent border-l border-gray-300 last:border-r-0 md:last:border-r-0">
            <h2 className="text-5xl font-bold text-white">{highlight}</h2>
            {
                description && <p className="text-white mt-4 text-lg">{description}</p>
            }
            {
                Other && Other
            }

        </div>
    );
};


const ImpactSection = () => {
    const data = [
        {
            highlight: "Our Strategy",
            description: "Community driven Conservation is at core Sahjeevan. Enable Communities in any aspect possible for a wholistic Us",
        },
    ];

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-16 bg-opacity-20"
            style={{
                backgroundImage:
                    "url('https://path-to-your-image-or-local-background.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Our Work & Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <>
                            <HighlightBox highlight={"Levels of Execution"} description={""} Other={<Pyramid key={"custom karka"} layers={pyramidLayers}/>} />
                        </>
                        <BlogPreview allBlogsLink={DefaultBlogPreview.allBlogsLink} featuredBlog={DefaultBlogPreview.featuredBlog} />
                        {data.map((item, index) => (
                            <HighlightBox
                                key={index}
                                highlight={item.highlight}
                                description={item.description}
                            />
                        ))}

                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
