// import {Image} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {imageSet2, OurPartners} from "@/components/constants.ts";

const images = [
    imageSet2.BANNER_VIKALP_SANGAM,
    imageSet2.UNCLE_MARCHING_IN_KHET,
    imageSet2.DUCKS_IN_LAKE,
    imageSet2.GOAT_CURIOUS,
    imageSet2.CAMELS_FOOD,
    imageSet2.LADY_TEACHING_GROUP,
    imageSet2.MAN_WITH_GOAT_LOOKING_AWAY,

]

export function ImageCarousel() {
    return (
        <div className="bg-heavygreen container mx-auto px-4 py-8 mt-24">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {OurPartners.map((partner, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div
                                className="relative aspect-[4/3] overflow-hidden rounded-lg flex flex-col items-center justify-center p-4 bg-white">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="object-cover w-full h-40 mb-4 transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                                />
                                <h3 className="text-md font-semibold text-center">
                                    {partner.name}
                                </h3>
                                {partner.description && (
                                    <p className="text-sm text-center mt-1">{partner.description}</p>
                                )}
                                {partner.url && (
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
                <CarouselPrevious className="hidden md:flex"/>
                <CarouselNext className="hidden md:flex"/>
            </Carousel>
        </div>
    )
}

