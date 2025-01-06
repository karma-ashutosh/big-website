import React, { useState } from 'react';

const imageNames = "banni_grassland.webp,DSCN3113.webp,DSCN3114.webp,DSCN3115.webp,DSCN3116.webp,DSCN3119.webp,DSCN3120.webp,DSCN3124.webp,DSCN3127.webp,DSCN3128.webp,DSCN3133.webp,DSCN3135.webp,DSCN3136.webp,DSCN3137.webp,DSCN3138.webp,DSCN3139.webp,DSCN3140.webp,DSCN3141.webp,DSCN3142.webp,DSCN3143.webp,DSCN3144.webp,DSCN3145.webp,DSCN3146.webp,DSCN3149.webp,DSCN3153.webp,DSCN3154.webp,DSCN3161.webp,DSCN3162.webp,DSCN3163.webp,DSCN3164.webp,DSCN3165.webp,DSCN3166.webp,DSCN3174.webp,DSCN3197.webp,DSCN3212.webp,DSCN3213.webp,DSCN3222.webp,DSCN3253.webp,DSCN3275.webp,DSCN3277.webp,DSCN3281.webp,DSCN3282.webp,DSCN3284.webp,DSCN3286.webp,DSCN3288.webp,DSCN3292.webp,DSCN3294.webp,DSCN3300.webp,DSCN3301.webp,DSCN3304.webp,DSCN3305.webp,DSCN3306.webp,DSCN3309.webp,DSCN3311.webp,DSCN3320.webp,DSCN3321.webp,DSCN3323.webp,DSCN3324.webp,DSCN3328.webp,DSCN3329.webp,DSCN3330.webp,DSCN3335.webp,DSCN3347.webp,DSCN3348.webp,DSCN3349.webp,DSCN3350.webp,DSCN3353.webp,DSCN3354.webp,DSCN3355.webp,DSCN3356.webp,DSCN3374.webp,DSCN3375.webp,DSCN3376.webp,DSCN3388.webp,DSCN3389.webp,DSCN3390.webp,DSCN3396.webp,DSCN3397.webp,DSCN3398.webp,DSCN3419.webp,DSCN3420.webp,DSCN3421.webp,DSCN3422.webp,DSCN3423.webp,DSCN3425.webp,DSCN3430.webp,DSCN3431.webp,DSCN3433.webp,DSCN3434.webp,DSCN3435.webp,DSCN3436.webp,DSCN3440.webp,DSCN3449.webp,DSCN3450.webp,DSCN3451.webp,DSCN3467.webp,DSCN3475.webp,DSCN3480.webp,DSCN3487.webp,DSCN3492.webp,DSCN3496.webp,DSCN3497.webp,DSCN3498.webp,DSCN3499.webp,DSCN3500.webp,DSCN3501.webp,DSCN3502.webp,DSCN3503.webp,DSCN3509.webp,DSCN3559.webp,DSCN3562.webp,DSCN3566.webp,DSCN3567.webp,DSCN3568.webp,DSCN3569.webp,DSCN3570.webp,DSCN3572.webp,DSCN3573.webp,DSCN3574.webp,DSCN3575.webp,DSCN3576.webp,DSCN3577.webp,DSCN3578.webp,DSCN3579.webp,DSCN3580.webp,DSCN3586.webp,DSCN3587.webp,DSCN3588.webp,DSCN3589.webp,DSCN3590.webp,DSCN3598.webp,DSCN3599.webp,DSCN3600.webp,DSCN3601.webp,DSCN3602.webp,DSCN3603.webp,DSCN3613.webp,DSCN3648.webp,DSCN4632.webp,DSCN4639.webp,DSCN4641.webp,DSCN4642.webp,DSCN4643.webp,DSCN4644.webp,DSCN4645.webp,DSCN4646.webp,DSCN4648.webp,DSCN4649.webp,DSCN4650.webp,DSCN4651.webp,DSCN4652.webp,DSCN4657.webp,DSCN4661.webp,IMG_3285.webp,IMG_3286.webp,IMG_3287.webp,IMG_3288.webp,IMG_3289.webp,IMG_3290.webp,IMG_3291.webp,IMG_3292.webp,IMG_3293.webp,IMG_3294.webp,IMG_3295.webp,IMG_3296.webp,IMG_3305.webp,IMG_3306.webp,IMG_3309.webp,IMG_3311.webp,IMG_3312.webp,IMG_3317.webp,IMG_3318.webp,IMG_3323.webp,IMG_3324.webp,IMG_3329.webp,IMG_3330.webp,IMG_3331.webp,IMG_3332.webp,IMG_3333.webp,IMG_3336.webp,IMG_3345.webp,IMG_3346.webp,IMG_3347.webp,IMG_3349.webp,IMG_3487.webp,IMG_3847.webp,IMG_3865.webp,IMG_3866.webp,IMG_3895.webp,IMG_3901.webp,IMG_3902.webp,IMG_3932.webp,IMG_3934.webp,IMG_3937.webp,IMG_3944.webp,IMG_4010.webp,IMG_4011.webp,IMG_4012.webp,IMG_4013.webp,IMG_4014.webp,IMG_4015.webp,IMG_4016.webp,IMG_4017.webp,IMG_4062.webp,IMG_4063.webp,IMG_4064.webp,IMG_4065.webp,IMG_4632.webp,IMG_4661.webp,IMG_4678.webp,IMG_4702.webp,IMG_4703.webp,IMG_4750.webp,IMG_4751.webp,IMG_4752.webp,IMG_4783.webp,IMG_4786.webp,IMG_4827.webp,IMG_4828.webp,IMG_4839.webp,IMG_4840.webp,IMG_4841.webp,IMG_4842.webp,logo.webp,mangrove_forest.webp,payment_upi.webp"
const imageNameArr = imageNames.split(",")
const baseUrl = `https://storage.googleapis.com/big-website-assets/webp`
const imgPath = (img: string) => `${baseUrl}/${img}`

export const allImgPaths = imageNameArr.map(imgPath)


interface ImageListProps {
    imageUrls: string[];
}

const ImageList: React.FC<ImageListProps> = ({ imageUrls }) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (url: string, index: number) => {
        const nameWithExtension = url.substring(url.lastIndexOf('/') + 1);
        const name = nameWithExtension.substring(0, nameWithExtension.lastIndexOf('.')) || nameWithExtension;

        navigator.clipboard.writeText(name)
            .then(() => {
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy!', err);
            });
    };

    return (
        <div className="flex flex-wrap gap-4">
            {imageUrls.map((url, index) => (
                    <div
                        key={index}
                className="relative w-48 h-48 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                >
                <img
                    src={url}
                alt={`img-${index}`}
    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
    />
    <button
        onClick={() => handleCopy(url, index)}
    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 text-gray-800 px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
    {copiedIndex === index ? 'Copied!' : 'Copy Name'}
    </button>
    </div>
))}
    </div>
);
};

export default ImageList;

