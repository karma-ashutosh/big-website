// import {Image} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Component} from "react";

/* --------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface CarouselCustomItem {
    name: string
    image: string
    description?: string
    url?: string
}

/**
 * Extra heading design props for advanced styling overrides.
 */
export interface SplitBannerClasses {
    container?: string
    mainBanner?: string
    subBanner?: string
    mainHeading?: string
    subHeading?: string
}

export interface ImageCarouselProps {
    /**
     * Array of carousel items that will be rendered in the carousel.
     */
    carouselItems: CarouselCustomItem[]

    /**
     * Main heading text displayed above the carousel.
     */
    heading?: string

    /**
     * Subheading text displayed below the main heading.
     */
    subheading?: string

    /**
     * Optional container (background) classes for styling.
     * Defaults to "bg-heavygreen container mx-auto px-4 py-8 mt-24".
     */
    containerClassName?: string

    /**
     * Show or hide the "Visit Website"/"Know More" link below each item.
     * Defaults to true.
     */
    showWebsiteLink?: boolean

    /**
     * Determines which design template to use for the carousel items.
     *  - "classic": original card design (image at top, text below).
     *  - "imageBackground": new design (image as background, text overlay).
     * Defaults to "classic".
     */
    designTemplate?: "classic" | "imageBackground"

    /**
     * Determines which design to use for the heading.
     *  - "purpleBanner": your existing style with a purple angled banner.
     *  - "splitBanner": a big banner for the main heading and a smaller offset
     *    banner for the subheading.
     * Defaults to "purpleBanner".
     */
    headingDesign?: "purpleBanner" | "splitBanner" | "purple2Banner"

    /**
     * Optional classes to customize the "splitBanner" heading layout.
     * Only applied when headingDesign="splitBanner".
     */
    splitBannerClasses?: SplitBannerClasses
}

/* --------------------------------------------------------------------------
 * Heading Layouts
 * -------------------------------------------------------------------------- */

/**
 * 1) PurpleBannerHeading
 *    Your original heading design with a purple angled banner.
 */
function PurpleBannerHeading({
                                 heading,
                                 subheading,
                             }: {
    heading?: string
    subheading?: string
}) {
    return (
        <div className="mb-6 text-center flex flex-col items-center">
            {heading &&
                <div
                    className="relative inline-block transform rotate-2 bg-gradient-to-bl from-purple-600 to-purple-700 shadow-lg">
                    <h2 className="text-white font-bold text-3xl md:text-4xl uppercase px-8 py-4 transform -rotate-1">
                        {heading}
                    </h2>
                </div>
            }
            {subheading && (
                <p className="mt-3 max-w-xl mx-auto text-gray-600 md:text-base px-4">
                    {subheading}
                </p>
            )}
        </div>
    )
}

/**
 * 2) SplitBannerHeading
 *    A refined version of the “split banner” idea, with optional class overrides.
 *    - Main banner for heading
 *    - Smaller offset banner for subheading
 */
function SplitBannerHeading({
                                heading,
                                subheading,
                                classes,
                            }: {
    heading?: string
    subheading?: string
    classes: SplitBannerClasses
}) {
    const {
        container = "relative flex flex-col mb-6",
        // A darker teal for the main banner, so it's still "bluish" but not jarringly bright
        mainBanner = "bg-teal-700 text-white p-6 md:py-8 md:px-12 w-full md:w-2/3",
        // A softer teal background for the sub banner; darker text for contrast
        subBanner = "bg-teal-100 text-teal-800 p-3 md:px-6 md:py-4 w-full md:w-1/2 mt-2 md:mt-4 md:ml-8 shadow-sm",
        mainHeading = "text-2xl md:text-3xl lg:text-4xl font-bold uppercase",
        subHeading = "text-sm md:text-base",
    } = classes


    return (
        <div className={container}>
            {/* Main Banner */}
            {heading && <div className={mainBanner}>
                <h2 className={mainHeading}>{heading}</h2>
            </div>}

            {/* Subheading Banner */}
            {subheading && (
                <div className={subBanner}>
                    <p className={subHeading}>{subheading}</p>
                </div>
            )}
        </div>
    )
}
function TonedBlueBannerHeading({
                                    heading,
                                    subheading,
                                }: {
    heading?: string
    subheading?: string
}) {
    return (
        <div className="mb-6 text-center flex flex-col items-center">
            {/* Softer sky-blue gradient instead of vivid blue */}
            {
                heading && (
                    <div
                        className="relative inline-block transform rotate-2 bg-gradient-to-bl from-sky-600 to-sky-700 shadow-lg">
                        <h2 className="text-white font-bold text-3xl md:text-4xl uppercase px-8 py-4 transform -rotate-1">
                            {heading}
                        </h2>
                    </div>
                )
            }

            {subheading && (
                <p className="mt-3 max-w-xl mx-auto text-gray-600 md:text-base px-4">
                    {subheading}
                </p>
            )}
        </div>
    )
}

/* --------------------------------------------------------------------------
 * Carousel Item Layouts
 * -------------------------------------------------------------------------- */

/**
 * CLASSIC DESIGN SUB-COMPONENT
 * Renders the item with an image at the top and text below it.
 */
function ClassicCarouselItem({
                                 item,
                                 showWebsiteLink,
                             }: {
    item: CarouselCustomItem
    showWebsiteLink: boolean
}) {
    return (
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg flex flex-col items-center justify-center p-4 bg-white">
            <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-40 mb-4"
                sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
            />
            <h3 className="text-md font-semibold text-center">{item.name}</h3>
            {item.description && (
                <p className="text-sm text-center mt-1">{item.description}</p>
            )}
            {showWebsiteLink && item.url && (
                <a
                    href={item.url}
                    className="mt-2 text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Website
                </a>
            )}
        </div>
    )
}

class CaouselRigthBanner extends Component<{
    name: string,
    description: string | undefined,
    showWebsiteLink: boolean,
    url: string | undefined
}> {
    render() {
        return <div
            className="relative z-10 ml-auto w-full md:w-1/3 h-full bg-blue-100 bg-opacity-90 p-4 flex flex-col">

            {
                this.props.name && (<h3 className="text-lg font-bold mb-2">{this.props.name}</h3>)
            }
            {this.props.description && (
                <p className="text-sm text-gray-800 mb-2">{this.props.description}</p>
            )}
            {this.props.showWebsiteLink && this.props.url && (
                <a
                    href={this.props.url}
                    className="inline-block mt-auto bg-blue-600 text-white px-3 py-1 rounded text-sm self-start hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Know More
                </a>
            )}
        </div>;
    }
}

/**
 * IMAGE-BACKGROUND DESIGN SUB-COMPONENT
 * Renders the item image as a background with a pale blue overlay on the right.
 */
function BackgroundImageCarouselItem({
                                         item,
                                         showWebsiteLink,
                                     }: {
    item: CarouselCustomItem
    showWebsiteLink: boolean
}) {
    return (
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg flex">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${item.image})`}}
            />
            {/* Right overlay (1/3 width) */}
            {(item.name || item.description || item.url) && (
                <CaouselRigthBanner name={item.name} description={item.description} showWebsiteLink={showWebsiteLink}
                                    url={item.url}/>
            )}
        </div>
    )
}

/* --------------------------------------------------------------------------
 * Main Carousel Component
 * -------------------------------------------------------------------------- */

export function ImageCarousel({
                                  carouselItems,
                                  heading,
                                  subheading = "Learn more about the organizations we collaborate with!",
                                  containerClassName = "bg-heavygreen container mx-auto px-4 py-8 mt-24",
                                  showWebsiteLink = true,
                                  designTemplate = "classic",
                                  headingDesign = "purpleBanner",
                                  // Custom style overrides for the split banner design
                                  splitBannerClasses = {},
                              }: ImageCarouselProps) {
    // Decide which heading layout to render
    const renderHeading = () => {
        switch (headingDesign) {
            case "splitBanner":
                return (
                    <SplitBannerHeading
                        heading={heading}
                        subheading={subheading}
                        classes={splitBannerClasses}
                    />
                )
            case "purple2Banner":
               return (<TonedBlueBannerHeading heading={heading} subheading={subheading} />)
            case "purpleBanner":
            default:
                return <PurpleBannerHeading heading={heading} subheading={subheading} />
        }
    }

    // Decide which item layout to render
    const renderItem = (item: CarouselCustomItem) => {
        switch (designTemplate) {
            case "imageBackground":
                return (
                    <BackgroundImageCarouselItem
                        item={item}
                        showWebsiteLink={showWebsiteLink}
                    />
                )
            case "classic":
            default:
                return (
                    <ClassicCarouselItem
                        item={item}
                        showWebsiteLink={showWebsiteLink}
                    />
                )
        }
    }

    return (
        <div className={containerClassName}>
            {/* Render heading based on headingDesign */}
            {renderHeading()}

            {/* Carousel Section */}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {carouselItems.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            {renderItem(item)}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    )
}
