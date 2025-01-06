const baseUrl = `https://storage.googleapis.com/big-website-assets/webp`
const imgPath = (imgNum: number) => `${baseUrl}/IMG_${imgNum}.webp`
const imgNamePath = (imgName: string) => `${baseUrl}/${imgName}.webp`
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
    ECOSYSTEM_CONSERVATION: imgNamePath("DSCN3503"),
    SUSTAINABLE_LIVELIHOOD: imgNamePath("IMG_3895"),
    BREED_CONSERVATION: imgNamePath("DSCN3492"),
    WATER_RESOURCE_CONSERVATION: imgNamePath("IMG_3866"),
    INDIAN_GREY_WOLF: imgNamePath("DSCN3613"),
    KUTCH_MANGROVES: imgNamePath("IMG_3288"),
    SAVE_HUMANS: imgNamePath("IMG_3487"),
    ACTION_IN_PROGRESS: imgNamePath("IMG_4703"),


}


export const pressUpdates: PressUpdate[] = [
    {
        image: imageNames.SHEEP_OWNER_HAPPY,
    },
    {
        image: imageNames.COW_LOOKING_DIRECT,
        name: "Conserving native animal diversity",
    },
    {
        image: imageNames.SHEEP_GRAZING_GOAT_LOOKING,
        name: "Educating",
        description: "Educating about importance of cultivating variety of farm animals in harmony"
    },
    {
        image: "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
        name: "Make an investment in wildlife!",
        url: "https://news.google.com"
    },
];
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

export interface CarouselCustomItem {
    name?: string;
    image: string;
    description?: string;
    url?: string;
}
export type OurPartner = CarouselCustomItem
export type PressUpdate = CarouselCustomItem

// Change this to wherever your partner images actually reside
const partnerImage = (imgName: string) => `https://storage.googleapis.com/big-website-assets/partner_logos/${imgName}.webp`;

export const OurPartners: OurPartner[] = [
    // ------------------------------ Funders: Government ------------------------------
    {
        name: "Dept. of Animal Husbandry, Gandhinagar",
        description: "",
        url: "https://doah.gujarat.gov.in/",
        image: partnerImage("dept_of_animal_husbandry")
    },
    {
        name: "Gujarat Forest Department - Kachchh Circle, Bhuj",
        description: "",
        url: "https://forests.gujarat.gov.in/",
        image: partnerImage("gujarat_forest_department_kachchh_circle")
    },

    // ------------------------------ Funders: Others (Including CSR, National & International) ------------------------------
    {
        name: "Ford Foundation",
        description: "",
        url: "https://www.fordfoundation.org/",
        image: partnerImage("ford_foundation")
    },
    {
        name: "AXIS Bank Foundation",
        description: "",
        url: "https://www.axisbankfoundation.org/",
        image: partnerImage("axis_bank_foundation")
    },
    {
        name: "Excel Crop Care Limited",
        description: "",
        url: "http://www.excelcropcare.com/",
        image: partnerImage("excel_crop_care_ltd")
    },
    {
        name: "Agrocel Industries Limited",
        description: "",
        url: "http://www.agrocel.co.in/",
        image: partnerImage("agrocel_industries_ltd")
    },
    {
        name: "Ashoka Trust for Research in Ecology and the Environment (ATREE)",
        description: "",
        url: "https://www.atree.org/",
        image: partnerImage("atree")
    },
    {
        name: "Kranti Guru Shyamji Krishna Kachchh University",
        description: "",
        url: "https://www.kskvku.ac.in/",
        image: partnerImage("kskvku")
    },
    {
        name: "Rohini Nilekani Philanthropies",
        description: "",
        url: "https://rohininilekaniphilanthropies.org/",
        image: partnerImage("rohini_nilekani_philanthropies")
    },
    {
        name: "Azim Premji Philanthropic Initiative Pvt. Ltd",
        description: "",
        url: "https://azimpremjifoundation.org/philanthropy",
        image: partnerImage("azim_premji_philanthropic_initiative")
    },
    {
        name: "Bajaj Alliance General Insurance Co. Ltd",
        description: "",
        url: "https://www.bajajallianz.com/",
        image: partnerImage("bajaj_alliance_general_insurance")
    },
    {
        name: "Dasra",
        description: "",
        url: "https://www.dasra.org/",
        image: partnerImage("dasra")
    },

    // ------------------------------ Programme Partners: Regional & National ------------------------------
    {
        name: "Kutch Mahila Vikas Sangathan (KMVS)",
        description: "",
        url: "https://kmvs.org.in/",
        image: partnerImage("kmvs")
    },
    {
        name: "Arid Communities and Technologies (ACT)",
        description: "",
        url: "https://act-india.org/",
        image: partnerImage("act")
    },
    {
        name: "Setu Abhiyan",
        description: "",
        url: "http://setuabhiyan.org",
        image: partnerImage("setu_abhiyan")
    },
    {
        name: "Urban Setu",
        description: "",
        url: "https://urbansetu.wordpress.com",
        image: partnerImage("urban_setu")
    },
    {
        name: "Anand Agriculture University (AAU)",
        description: "",
        url: "http://www.aau.in",
        image: partnerImage("anand_agriculture_university")
    },
    {
        name: "Sarhad Dairy",
        description: "",
        url: "http://www.sarhaddairy.coop",
        image: partnerImage("sarhad_dairy")
    },
    {
        name: "Amul Dairy",
        description: "",
        url: "http://www.amuldairy.com",
        image: partnerImage("amul_dairy")
    },
    {
        name: "Sahiyaren Jo Sangathan (SJS)",
        description: "",
        url: "https://sahjeevan.org/",
        image: partnerImage("sjs")
    },
    {
        name: "KHAMIR",
        description: "",
        url: "http://www.khamir.org",
        image: partnerImage("khamir")
    },
    {
        name: "Kutch Unth Uchherak Maldhari Sangathan (KUUMS)",
        description: "",
        url: "https://kuums.org/",
        image: partnerImage("kuums")
    },
    {
        name: "Lakhpat Taluka-Sheep and Goat Breeders’ Association",
        description: "",
        url: "",
        image: partnerImage("lakhpat_sheep_goat_breeders_association")
    },
    {
        name: "Urmul Seemant Samiti (Rajasthan)",
        description: "",
        url: "https://urmul.org/urmul-family/urmul-seemant/",
        image: partnerImage("urmul_seemant_samiti")
    },
    {
        name: "Hunnarshala",
        description: "",
        url: "http://www.hunnarshala.org/",
        image: partnerImage("hunnarshala")
    },
    {
        name: "K-link",
        description: "",
        url: "https://www.klinkindia.in/",
        image: partnerImage("k_link")
    },
    {
        name: "Access Livelihoods Consulting India Ltd.",
        description: "",
        url: "https://www.alcindia.org/",
        image: partnerImage("alc_india")
    },
    {
        name: "Banni Pashu Uchherak Maldhari Sangathan (BPUMS)",
        description: "",
        url: "http://banni.in",
        image: partnerImage("bpums")
    },

    // ------------------------------ International ------------------------------
    {
        name: "International Union for Conservation of Nature (IUCN)",
        description: "",
        url: "https://www.iucn.org",
        image: partnerImage("iucn")
    },
    {
        name: "Kutch Navnirman Abhiyan",
        description: "",
        url: "http://www.kutchabhiyan.org",
        image: partnerImage("kutch_navnirman_abhiyan")
    },
    {
        name: "Revitalising Rainfed Agriculture (RRA) Network",
        description: "",
        url: "http://www.rainfedindia.org",
        image: partnerImage("rra_network")
    },
    {
        name: "Watershed Support Services and Activities Network (WASSAN)",
        description: "",
        url: "http://www.wassan.org/",
        image: partnerImage("wassan")
    },
    {
        name: "Pravah",
        description: "",
        url: "http://www.pravah-gujarat.org",
        image: partnerImage("pravah")
    }
];

export interface BlogPreviewProps {
    featuredBlog: {
        title: string;
        excerpt: string;
        imageUrl: string;
        link: string;
    };
    allBlogsLink: string;
}

export const DefaultBlogPreview: BlogPreviewProps = {
    featuredBlog: {
        title: "Save humans",
        excerpt: "Save humans to create humans",
        imageUrl: imageNames.SAVE_HUMANS,
        link: "https://news.google.com/1",
    },
    allBlogsLink: "https://news.google.com/2",
}
