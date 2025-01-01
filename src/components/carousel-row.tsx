// import {Image} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {CarouselCustomItem, } from "@/components/constants.ts";

/**
 * If you already have this declared elsewhere,
 * just import it from its proper location.
 */

export interface ImageCarouselProps {
    /**
     * Array of partner objects that will be rendered in the carousel.
     */
    carouselItems: CarouselCustomItem[];
    /**
     * Main heading text displayed above the carousel.
     * Defaults to "Our Partners".
     */
    heading?: string
    /**
     * Subheading text displayed below the main heading.
     * Defaults to "Learn more about the organizations we collaborate with!".
     */
    subheading?: string
    /**
     * Optional container (background) classes for styling.
     * Defaults to "bg-heavygreen container mx-auto px-4 py-8 mt-24".
     */
    containerClassName?: string
    /**
     * Additional classes or styling for the heading wrapper.
     */
    headingWrapperClassName?: string
    /**
     * Additional classes or styling for the heading itself.
     */
    headingClassName?: string
    /**
     * Additional classes or styling for the subheading.
     */
    subheadingClassName?: string
    /**
     * Show or hide the "Visit Website" link below each partner item.
     * Defaults to true.
     */
    showWebsiteLink?: boolean
}

export function ImageCarousel({
                                  carouselItems,
                                  heading = "Our Partners",
                                  subheading = "Learn more about the organizations we collaborate with!",
                                  containerClassName = "bg-heavygreen container mx-auto px-4 py-8 mt-24",
                                  headingWrapperClassName = "mb-6 text-center flex flex-col items-center",
                                  headingClassName = "text-white font-bold text-3xl md:text-4xl uppercase px-8 py-4 transform -rotate-1",
                                  subheadingClassName = "mt-3 max-w-xl mx-auto text-gray-600 md:text-base px-4",
                                  showWebsiteLink = true,
                              }: ImageCarouselProps) {
    return (
        <div className={containerClassName}>
            {/* Header Section */}
            <div className={headingWrapperClassName}>
                <div className="relative inline-block transform rotate-2 bg-gradient-to-bl from-purple-600 to-purple-700 shadow-lg">
                    <h2 className={headingClassName}>{heading}</h2>
                </div>

                <p className={subheadingClassName}>{subheading}</p>
            </div>

            {/* Carousel Section */}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {carouselItems.map((partner, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <div
                                className="relative aspect-[4/3] overflow-hidden rounded-lg flex flex-col items-center justify-center p-4 bg-white"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="object-contain w-full h-40 mb-4"
                                    sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                                />
                                <h3 className="text-md font-semibold text-center">
                                    {partner.name}
                                </h3>
                                {partner.description && (
                                    <p className="text-sm text-center mt-1">
                                        {partner.description}
                                    </p>
                                )}
                                {showWebsiteLink && partner.url && (
                                    <a
                                        href={partner.url}
                                        className="mt-2 text-blue-600 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    )
}
