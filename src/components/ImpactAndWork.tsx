import Pyramid, {pyramidLayers} from "@/components/HoverablePyramid.tsx";
import BlogPreview, {DefaultBlogPreview} from "@/components/BlogPreview.tsx";

const HighlightBox = ({ highlight, description }: {highlight: string, description: string}) => {
    return (
        <div className="flex flex-col items-center text-center px-4 py-6 bg-transparent border-l border-gray-300 last:border-r-0 md:last:border-r-0">
            <h2 className="text-5xl font-bold text-white">{highlight}</h2>
            <p className="text-white mt-4 text-lg">{description}</p>
        </div>
    );
};


const ImpactSection = () => {
    const data = [
        {
            highlight: "100+",
            description:
                "collaboration projects to prevent conflicts with grizzly bears and wolves in the West, including range riders, electric fencing, and bear-resistant garbage containers.",
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
                        <Pyramid key={"custom karka"} layers={pyramidLayers}/>
                        <BlogPreview allBlogsLink={DefaultBlogPreview.allBlogsLink} featuredBlog={DefaultBlogPreview.featuredBlog} />
                        {data.map((item, index) => (
                            <HighlightBox
                                key={index}
                                highlight={item.highlight}
                                description={item.description}
                            />
                        ))}
                    </>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
