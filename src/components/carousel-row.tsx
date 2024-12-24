// import {Image} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {imageNames, imageSet2} from "@/components/constants.ts";

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
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                    src={image}
                                    alt={`Carousel image ${index + 1}`}
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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

