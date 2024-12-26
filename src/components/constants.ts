const baseUrl = `https://storage.googleapis.com/big-website-assets/webp`
export const imageNames = {
   PEOPLE_WALKING_WITH_ANIMALS: `${baseUrl}/DSCN3311.webp`,
    BANNI_GRASSLAND_1: `${baseUrl}/banni_grassland.webp`,
    DENSE_GRASSLAND_1: `${baseUrl}/DSCN3574.webp`,
    THORN_SCRUB_FOREST_1: `${baseUrl}/DSCN3574.webp`,
    MANGROVES_1: `${baseUrl}/mangrove_forest.webp`,
    RAIN_FED_AGRICULTURE_1: `${baseUrl}/DSCN3574.webp`,
    IRRIGATED_AGRICULTURE_1: `${baseUrl}/DSCN3574.webp`,
    HERO_LEADING_COWS_1: `${baseUrl}/DSCN3115.webp`,
    SHEEPLINGS_SLEEPING: `${baseUrl}/DSCN3127.webp`,
    SHEEP_GRAZING_GOAT_LOOKING: `${baseUrl}/DSCN3136.webp`,
    SHEEP_OWNER_HAPPY: `${baseUrl}/DSCN3140.webp`,
    COW_LOOKING_DIRECT: `${baseUrl}/DSCN3222.webp`,
   HAPPY_WITH_COWS: `${baseUrl}/DSCN3574.webp`,
       GOAT_OPTIMISTIC: `${baseUrl}/DSCN3613.webp`,
}

const imgPath = (imgNum: number) => `${baseUrl}/IMG_${imgNum}.webp`

export const imageSet2 = {
    BANNER_VIKALP_SANGAM: imgPath(3487),
    GOAT_CURIOUS: imgPath(3306),
    MAN_WITH_GOAT_LOOKING_AWAY: imgPath(3332),
    GOAT_FOLLOWING_MAN: imgPath(3292),
    DUCKS_IN_POND: imgPath(3847),
    DUCKS_IN_LAKE: imgPath(3934),
    UNCLE_MARCHING_IN_KHET: imgPath(4016),
    LADY_TEACHING_GROUP: imgPath(4751),
    CAMELS_GROUP: imgPath(4783),
    CAMELS_FOOD: imgPath(4827),
}