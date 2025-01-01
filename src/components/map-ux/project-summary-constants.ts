import {imageNames} from "@/components/constants.ts";

export interface Article {
  title: string;
  description: string;
  initiative: string;
  location: Coordinate;
  blogParts: string[];
  videoUrl?: string;
  blogBackgroundImg: string;
}
export interface Coordinate {
  lat: number;
  lng: number;
  name: string;
}
export interface CoordinateProjectSummary {
  coordinate: Coordinate,
  project_count: number;
}
export const DELHI: Coordinate = {
    name: 'delhi',
    lat: 28.6139,
    lng: 77.2090
};
const delhiArticles: Article[] = [
    {
        "title": "Revitalizing Urban Water Bodies in Delhi",
        "description": "A project aimed at restoring and conserving Delhi's urban lakes and ponds to enhance groundwater recharge and biodiversity.",
        "initiative": "Urban Water Conservation Program",
        "blogParts": [
            "Urban water bodies play a crucial role in maintaining ecological balance. This project focuses on cleaning and rejuvenating lakes and ponds across Delhi to ensure sustainable groundwater recharge.",
            "Efforts include removing pollutants, planting aquatic vegetation, and engaging local communities in conservation efforts to maintain the health of these ecosystems.",
            "The initiative also provides a habitat for urban wildlife and enhances recreational opportunities for city residents, promoting a healthier environment."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "location": DELHI
    },
    {
        "title": "Community-Led Waste Management in Delhi",
        "description": "Empowering local communities to manage solid waste effectively, promoting recycling and composting practices.",
        "initiative": "Sustainable Urban Development Initiative",
        "blogParts": [
            "Effective waste management starts at the community level. This project empowers local residents to segregate waste and adopt recycling and composting techniques.",
            "Workshops and awareness drives are conducted to educate citizens about the environmental benefits of proper waste disposal and the economic value of recycled materials.",
            "Collaboration with municipal authorities ensures that the waste management system is streamlined and sustainable over the long term."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "location": DELHI
    },
    {
        "title": "Air Quality Improvement through Green Corridors",
        "description": "Developing green corridors along major roads to mitigate air pollution and provide urban green spaces.",
        "initiative": "Green Delhi Campaign",
        "blogParts": [
            "Green corridors are essential for improving urban air quality. By planting native trees along major roads, we aim to reduce particulate matter and improve the overall environment.",
            "These green spaces also serve as noise barriers and provide shade, contributing to a more comfortable urban experience.",
            "The project involves collaboration with urban planners and environmental experts to ensure the corridors are strategically located for maximum impact."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "location": DELHI
    },
    {
        "title": "Promoting Rooftop Solar Energy Adoption",
        "description": "Encouraging households and businesses to install rooftop solar panels to reduce dependence on non-renewable energy sources.",
        "initiative": "Renewable Energy Promotion Scheme",
        "blogParts": [
            "Rooftop solar panels offer a sustainable solution to urban energy needs. This project aims to make solar energy more accessible to households and businesses in Delhi.",
            "Financial incentives and technical assistance are provided to encourage adoption, reducing the initial cost barrier for solar installations.",
            "The program also includes awareness campaigns highlighting the environmental and economic benefits of shifting to renewable energy sources."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "location": DELHI
    },
    {
        "title": "Urban Biodiversity Parks Development",
        "description": "Creating biodiversity parks within the city to preserve native flora and fauna and provide recreational spaces.",
        "initiative": "Delhi Biodiversity Conservation Project",
        "blogParts": [
            "Urban biodiversity parks are vital for preserving the city's natural heritage. These parks provide a haven for native plant and animal species.",
            "The project involves transforming underutilized urban areas into vibrant green spaces that support biodiversity and serve as educational hubs for citizens.",
            "Recreational facilities within these parks ensure they are well-integrated into the community, fostering a connection between people and nature."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "location": DELHI
    }
]

const AHEMDABAD: Coordinate = {
    name: 'ahemdabad',
    lat: 23.0225,
    lng: 72.5714
};
const ahemdabadArticles: Article[] = [
    {
        "title": "Sabarmati Riverfront Biodiversity Enhancement",
        "description": "Enhancing the biodiversity along the Sabarmati Riverfront through native species plantation and habitat restoration.",
        "blogParts": [
            "The Sabarmati Riverfront is not just a landmark of urban development but also a critical area for biodiversity conservation. Through this project, we aim to transform the riverfront into a thriving habitat for native species.",
            "By planting indigenous trees and shrubs, we are creating a natural ecosystem that supports local wildlife, birds, and insects. This approach also helps in improving air quality and reducing urban heat.",
            "Community participation plays a vital role in this initiative. Workshops and awareness drives are conducted to engage citizens in the plantation and maintenance activities, ensuring long-term sustainability."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "initiative": "Riverfront Biodiversity Project",
        "location": AHEMDABAD
    },
    {
        "title": "Sustainable Urban Mobility Solutions",
        "description": "Implementing eco-friendly public transportation options to reduce carbon emissions and traffic congestion.",
        "blogParts": [
            "Urban mobility is at the heart of sustainable cities. Our initiative focuses on introducing electric buses and cycling tracks to encourage eco-friendly commuting options.",
            "Reducing traffic congestion and carbon emissions are key objectives. By prioritizing shared and green modes of transport, we aim to make Ahmedabad a cleaner and more livable city.",
            "Citizen feedback is essential in designing efficient public transport systems. Regular surveys and pilot projects help us understand and cater to the mobility needs of the community."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "initiative": "Green Mobility Initiative",
        "location": AHEMDABAD
    },
    {
        "title": "Community Rainwater Harvesting Systems",
        "description": "Installing rainwater harvesting systems in residential areas to address water scarcity and promote sustainable water use.",
        "blogParts": [
            "Water scarcity is a pressing issue in urban areas. Our project focuses on implementing rainwater harvesting systems to capture and store rainwater for everyday use.",
            "These systems are designed to be easy to maintain and cost-effective, ensuring they can be adopted by a wide range of households and communities.",
            "Educational campaigns and workshops are organized to raise awareness about the benefits of rainwater harvesting and how it contributes to sustainable water management."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "initiative": "Water Sustainability Program",
        "location": AHEMDABAD
    }
]

const KOLKATATA: Coordinate = {
    name: 'kolkata',
    lat: 22.5726,
    lng: 88.3639
};
const kolkataArticles: Article[] = [
        {
            "title": "Sundarbans Mangrove Restoration",
            "description": "Engaging local communities in restoring degraded mangrove areas in the Sundarbans to protect against coastal erosion.",
            "blogParts": [
                "Mangroves are vital for protecting coastal regions from erosion and storms. This project focuses on restoring degraded mangrove areas, ensuring the region's long-term ecological balance and stability.",
                "Community involvement is central to this initiative. Local residents are trained in sustainable mangrove plantation techniques and are encouraged to participate in monitoring and maintenance efforts.",
                "Restoring mangroves also enhances biodiversity, providing habitats for numerous species while simultaneously offering livelihood opportunities for local communities through eco-tourism and sustainable harvesting."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Sundarbans Restoration Project",
            "location": KOLKATATA
        },
        {
            "title": "Hooghly River Pollution Control",
            "description": "Implementing measures to reduce industrial and domestic pollution in the Hooghly River.",
            "blogParts": [
                "The Hooghly River faces severe pollution due to industrial discharges and domestic waste. This project aims to mitigate these effects through improved waste management systems and public awareness campaigns.",
                "Efforts include setting up treatment plants, promoting clean industrial practices, and creating regulatory frameworks to ensure long-term sustainability of the river's ecosystem.",
                "Educational workshops are conducted to inform local communities about the importance of reducing pollution and preserving water quality for future generations."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "River Pollution Control Program",
            "location": KOLKATATA
        },
        {
            "title": "Urban Wetlands Conservation",
            "description": "Protecting and managing urban wetlands to support biodiversity and provide ecosystem services.",
            "blogParts": [
                "Urban wetlands are crucial for biodiversity and water management. This project focuses on conserving these ecosystems to maintain their ecological and social benefits.",
                "Activities include removing invasive species, planting native vegetation, and creating public spaces that allow communities to connect with nature.",
                "Public awareness campaigns and partnerships with local schools aim to educate citizens about the value of wetlands and encourage active participation in their preservation."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Urban Wetlands Conservation Project",
            "location": KOLKATATA
        },
        {
            "title": "Cyclone Resilience Building in Coastal Areas",
            "description": "Strengthening community resilience to cyclones through infrastructure development and training.",
            "blogParts": [
                "Kolkata's coastal areas are vulnerable to cyclones. This program focuses on improving resilience through better infrastructure, including cyclone shelters and reinforced embankments.",
                "Community training programs equip locals with skills to respond effectively during emergencies, ensuring minimal loss of life and property.",
                "The initiative collaborates with government and non-government organizations to create sustainable and scalable solutions for cyclone preparedness."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Coastal Resilience Program",
            "location": KOLKATATA
        },
        {
            "title": "Sustainable Fisheries Management",
            "description": "Promoting sustainable fishing practices among local fishing communities to preserve fish stocks.",
            "blogParts": [
                "Overfishing poses a significant threat to marine biodiversity. This project focuses on educating fishing communities about sustainable practices to maintain fish stocks.",
                "Workshops and training sessions introduce eco-friendly techniques and resource management strategies to reduce overexploitation.",
                "By ensuring sustainable fisheries, the initiative also secures long-term livelihoods for local communities while preserving marine ecosystems."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Fisheries Sustainability Project",
            "location": KOLKATATA
        },
        {
            "title": "Air Quality Monitoring and Improvement",
            "description": "Establishing air quality monitoring stations and developing strategies to reduce air pollution.",
            "blogParts": [
                "Air pollution is a growing concern in Kolkata. This program sets up monitoring stations to track air quality and identify major pollution sources.",
                "Strategies include promoting cleaner transportation options, increasing green cover, and regulating industrial emissions to improve air quality.",
                "Awareness campaigns educate citizens on the impact of air pollution and encourage practices such as carpooling and reducing the use of non-renewable energy sources."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Air Quality Improvement Program",
            "location": KOLKATATA
        },
        {
            "title": "Heritage Tree Conservation",
            "description": "Identifying and conserving old and culturally significant trees within the city.",
            "blogParts": [
                "Heritage trees are an integral part of Kolkata's cultural and ecological identity. This project aims to document and protect these natural landmarks.",
                "Efforts include preventing illegal cutting, providing care to aging trees, and engaging communities in conservation activities.",
                "Collaborations with schools and local organizations ensure public involvement and awareness about the historical and environmental significance of these trees."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Heritage Tree Conservation Project",
            "location": KOLKATATA
        },
        {
            "title": "Community Urban Farming Initiatives",
            "description": "Encouraging urban farming to enhance food security and promote sustainable practices.",
            "blogParts": [
                "Urban farming offers a practical solution to food security issues in Kolkata. This program supports citizens in growing their own food using innovative techniques.",
                "Community gardens and workshops provide hands-on experience in methods like vertical gardening and hydroponics, making farming accessible in urban spaces.",
                "The initiative fosters community spirit and environmental awareness while promoting healthier lifestyles through locally grown produce."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Urban Farming Program",
            "location": KOLKATATA
        }
    ]
;

export const BHUJ: Coordinate = {
    name: 'BHUJ',
    lat: 23.2420,
    lng: 69.6669
};
const bhujArticles: Article[] = [
        {
            "title": "Camel Milk and Medicinal Plant Research",
            videoUrl: "https://www.youtube.com/watch?v=VupuiZaCPCw",
            "description": "Exploring the medicinal benefits of camel milk and indigenous plants in mitigating health issues while promoting traditional knowledge systems.",
            "blogParts": [
                "Camel milk has been a cornerstone of traditional diets in arid regions, offering unique health benefits. Recent studies focus on its therapeutic properties, especially for managing diabetes and autism.",
                "Indigenous medicinal plants in India, rich in pharmacological potential, are increasingly being studied for their role in modern healthcare. These plants are often overlooked but hold the key to affordable and effective treatments.",
                "This initiative integrates traditional wisdom with scientific research, aiming to create awareness about the medicinal properties of camel milk and plants while fostering sustainable practices for their use."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Traditional Wisdom and Modern Research Initiative",
            "location": BHUJ
        },
        {
            "title": "Ecological Conservation Through Community Action",
            "description": "Mobilizing communities to protect and restore local ecosystems, addressing climate change and biodiversity loss.",
            "blogParts": [
                "Climate change and habitat destruction are critical global challenges. This initiative empowers communities to take actionable steps toward ecological conservation.",
                "Activities include reforestation drives, cleanup campaigns, and biodiversity monitoring, with a focus on education and capacity building.",
                "The program emphasizes local ownership, ensuring that conservation efforts are sustainable and impactful in the long term."
            ],
            videoUrl: "https://www.youtube.com/watch?v=dRxOD7W77TM",
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Community Conservation Program",
            "location": BHUJ,
        },
        {
            "title": "Resilience in Kutch: Water Conservation",
            "description": "Addressing water scarcity in the arid regions of Bhuj through innovative community-led water conservation practices.",
            "blogParts": [
                "Water scarcity is a pressing issue in the arid regions of Bhuj. This project introduces community-driven initiatives to conserve water and promote sustainable practices.",
                "Activities include rainwater harvesting, the revival of traditional water systems, and awareness campaigns to educate residents about efficient water use.",
                "The initiative not only addresses water needs but also empowers communities to adopt long-term solutions for sustainable water management."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Water Conservation Initiative",
            "location": BHUJ
        },
        {
            "title": "Preservation of Indigenous Crafts",
            "description": "Empowering local artisans in Bhuj to preserve traditional crafts and promote sustainable livelihoods.",
            "blogParts": [
                "Bhuj is home to rich artisan traditions that are under threat due to modernization. This program supports artisans in preserving their craft while providing sustainable livelihood opportunities.",
                "Efforts include skill development workshops, market linkages, and promoting local crafts to a global audience through digital platforms.",
                "The initiative ensures that traditional knowledge and skills are passed on to future generations, fostering cultural pride and economic stability."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Bhuj Artisans Development Program",
            "location": BHUJ
        },
        {
            "title": "Reviving Pastoral Traditions in Kutch",
            "description": "Supporting the pastoral communities in Bhuj by ensuring sustainable grazing practices and promoting traditional knowledge.",
            "blogParts": [
                "Pastoral communities in Kutch play a vital role in the region's ecology. This initiative supports them by promoting sustainable grazing and preserving traditional knowledge.",
                "Workshops and community programs focus on the management of grazing lands and the introduction of modern tools to complement traditional practices.",
                "The program fosters resilience among pastoralists, ensuring their way of life is sustained while protecting the environment."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Pastoral Heritage Program",
            "location": BHUJ
        },
        {
            "title": "Kutch Mangrove Restoration Initiative",
            "description": "Restoring and conserving mangroves in the coastal areas of Bhuj to protect biodiversity and mitigate climate impacts.",
            "blogParts": [
                "Mangroves in Bhuj's coastal regions are crucial for biodiversity and climate resilience. This project focuses on restoring degraded mangrove areas to enhance ecological balance.",
                "Community-led planting drives and partnerships with environmental organizations ensure the success and sustainability of the initiative.",
                "By conserving mangroves, the program also helps mitigate the effects of climate change, such as coastal erosion and rising sea levels."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Mangrove Conservation Program",
            "location": BHUJ
        },
        {
            "title": "Promoting Eco-Tourism in Bhuj",
            "description": "Developing eco-tourism opportunities in Bhuj to balance conservation efforts with sustainable economic development.",
            "blogParts": [
                "Eco-tourism offers a sustainable way to boost Bhuj's economy while preserving its natural and cultural heritage. This program develops eco-tourism models to attract visitors responsibly.",
                "Initiatives include creating eco-friendly infrastructure, training local communities, and promoting lesser-known destinations to distribute tourism benefits more evenly.",
                "The project ensures that tourism contributes to conservation efforts and supports local livelihoods without compromising environmental integrity."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Eco-Tourism Development Initiative",
            "location": BHUJ
        },
        {
            "title": "Bhuj Renewable Energy Solutions",
            "description": "Encouraging the adoption of renewable energy technologies like solar and wind to meet the region's energy needs sustainably.",
            "blogParts": [
                "Renewable energy is essential for addressing Bhuj's energy challenges. This initiative promotes the use of solar and wind power across households and industries.",
                "Subsidies and incentives are provided to encourage adoption, and training programs equip locals with the skills to maintain renewable energy systems.",
                "By shifting to clean energy sources, the program contributes to reducing carbon emissions and fostering energy independence in the region."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Renewable Energy for Kutch",
            "location": BHUJ
        },
        {
            "title": "Traditional Water Storage System Revival",
            "description": "Rejuvenating traditional water storage systems like step wells and tanks to enhance water availability in Bhuj.",
            "blogParts": [
                "Traditional water storage systems like step wells and tanks have long been a part of Bhuj's heritage. This project aims to revive these systems to address current water challenges.",
                "Restoration efforts include cleaning and repairing structures, as well as educating communities about their historical and functional importance.",
                "The initiative enhances water availability while preserving cultural heritage, demonstrating a balance between tradition and modernity."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Heritage Water Conservation",
            "location": BHUJ
        },
        {
            "title": "Biodiversity Conservation in Kutch",
            "description": "Protecting the unique flora and fauna of Kutch through habitat restoration and anti-poaching measures.",
            "blogParts": [
                "Kutch is home to unique biodiversity that requires protection from threats like habitat loss and poaching. This project focuses on restoring habitats and enforcing conservation laws.",
                "Partnerships with local communities and wildlife organizations enhance the effectiveness of anti-poaching measures and awareness campaigns.",
                "The program ensures the survival of Kutch's diverse flora and fauna, contributing to the region's ecological stability."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Biodiversity Protection Program",
            "location": BHUJ
        },
        {
            "title": "Soil Health and Sustainable Agriculture",
            "description": "Improving soil health and promoting sustainable agricultural practices among farmers in Bhuj.",
            "blogParts": [
                "Soil health is critical for sustainable agriculture. This initiative introduces practices such as crop rotation, organic farming, and soil testing to improve productivity.",
                "Workshops and field demonstrations help farmers adopt techniques that reduce dependency on chemical inputs, enhancing long-term soil fertility.",
                "The program promotes a balance between ecological sustainability and economic viability for the farming community."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Agricultural Sustainability Initiative",
            "location": BHUJ
        },
        {
            "title": "Climate Resilience through Community Action",
            "description": "Building climate resilience in Bhuj through community-driven projects addressing droughts and extreme weather events.",
            "blogParts": [
                "Climate change poses significant challenges to Bhuj. This program empowers communities to tackle these issues through sustainable practices and infrastructure improvements.",
                "Projects include constructing water conservation structures, promoting drought-resistant crops, and training locals in disaster preparedness.",
                "The initiative fosters resilience and self-reliance, enabling communities to adapt to changing environmental conditions effectively."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kutch Climate Action Program",
            "location": BHUJ
        }
    ]
;

const GUWAHATI: Coordinate = {
    name: 'guwahati',
    lat: 26.1445,
    lng: 91.7362
};
const guwahatiArticles: Article[] = [
        {
            "title": "Brahmaputra Riverbank Erosion Control",
            "description": "Implementing measures to prevent soil erosion along the banks of the Brahmaputra River and protect nearby communities.",
            "blogParts": [
                "Riverbank erosion along the Brahmaputra poses a significant threat to nearby communities. This initiative implements sustainable practices such as planting vegetation and constructing embankments to mitigate erosion.",
                "Community involvement is key to the program's success. Training and workshops are conducted to educate locals on soil conservation methods and disaster preparedness.",
                "The project not only protects lives and property but also ensures the ecological health of the Brahmaputra's riparian zones."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Brahmaputra Erosion Control Program",
            "location": GUWAHATI
        },
        {
            "title": "Kaziranga National Park Buffer Zone Management",
            "description": "Developing buffer zones around Kaziranga to reduce human-wildlife conflicts and promote sustainable livelihoods.",
            "blogParts": [
                "Kaziranga's buffer zones play a critical role in minimizing human-wildlife conflicts. This initiative focuses on creating these zones to provide safe habitats for wildlife while protecting nearby communities.",
                "The program supports sustainable livelihoods for local residents through eco-tourism and alternative income-generating activities.",
                "Collaborations with wildlife experts and local authorities ensure the effective implementation and long-term sustainability of the buffer zones."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Kaziranga Buffer Zone Program",
            "location": GUWAHATI
        },
        {
            "title": "Flood Resilience in Urban Guwahati",
            "description": "Strengthening infrastructure and community preparedness to mitigate urban flooding caused by heavy rains.",
            "blogParts": [
                "Urban flooding in Guwahati is a recurring challenge. This project strengthens infrastructure, such as stormwater drains and flood barriers, to reduce flood impacts.",
                "Community preparedness programs are conducted to equip residents with knowledge and tools for responding to flood emergencies.",
                "The initiative combines modern engineering solutions with traditional knowledge to create a holistic approach to flood resilience."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Urban Flood Resilience Program",
            "location": GUWAHATI
        },
        {
            "title": "Biodiversity Conservation in Pobitora Wildlife Sanctuary",
            "description": "Enhancing biodiversity conservation efforts in Pobitora by engaging local communities in habitat restoration.",
            "blogParts": [
                "Pobitora Wildlife Sanctuary is a biodiversity hotspot requiring active conservation efforts. This program involves habitat restoration projects, such as reforestation and wetland preservation.",
                "Local communities are engaged through education and employment opportunities, ensuring their participation in protecting the sanctuary's ecosystem.",
                "The initiative also works to balance conservation with sustainable development, benefiting both nature and people."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Pobitora Conservation Project",
            "location": GUWAHATI
        },
        {
            "title": "Air Quality Monitoring and Reduction Strategies",
            "description": "Installing air quality monitoring stations in Guwahati and implementing strategies to reduce urban air pollution.",
            "blogParts": [
                "Air pollution is a growing issue in Guwahati. This project sets up monitoring stations to track pollution levels and identify major sources.",
                "Strategies to reduce pollution include promoting public transportation, regulating industrial emissions, and increasing green cover.",
                "Awareness campaigns educate residents about the health impacts of air pollution and encourage the adoption of eco-friendly practices."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Clean Air Guwahati Initiative",
            "location": GUWAHATI
        },
        {
            "title": "Community-Based Tourism in Assam",
            "description": "Promoting sustainable tourism practices that benefit local communities and highlight Assam's rich cultural heritage.",
            "blogParts": [
                "Sustainable tourism is vital for preserving Assam's cultural and natural wealth. This initiative promotes community-based tourism to empower local residents.",
                "Tourism models include homestays, cultural tours, and eco-friendly travel experiences that provide income while protecting the environment.",
                "Training programs equip locals with the skills needed to manage tourism services, ensuring a long-term, sustainable approach."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Sustainable Tourism Development Project",
            "location": GUWAHATI
        },
        {
            "title": "Preservation of Traditional Assamese Handlooms",
            "description": "Supporting handloom weavers in Guwahati to preserve traditional weaving techniques and promote sustainable livelihoods.",
            "blogParts": [
                "Assamese handlooms are a vital cultural asset. This program supports artisans in preserving traditional techniques and promoting their crafts.",
                "Efforts include providing market linkages, modern tools, and training to enhance production quality and profitability.",
                "The initiative also fosters cultural pride and economic sustainability for weaving communities in Guwahati."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Assam Handloom Preservation Program",
            "location": GUWAHATI
        },
        {
            "title": "Urban Wetlands Restoration",
            "description": "Restoring Guwahati's urban wetlands to enhance biodiversity, water storage, and urban cooling.",
            "blogParts": [
                "Urban wetlands play a crucial role in maintaining ecological balance. This project focuses on restoring these habitats to benefit biodiversity and water management.",
                "Activities include removing encroachments, planting native vegetation, and creating awareness about the importance of wetlands.",
                "Restored wetlands also contribute to urban cooling and provide recreational spaces for the community."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Urban Wetlands Restoration Project",
            "location": GUWAHATI
        },
        {
            "title": "Wildlife Corridor Management",
            "description": "Protecting critical wildlife corridors connecting Manas National Park and other protected areas near Guwahati.",
            "blogParts": [
                "Wildlife corridors are essential for maintaining ecological connectivity. This initiative focuses on protecting corridors that link Manas National Park with other habitats.",
                "Efforts include preventing illegal encroachments, reforesting degraded areas, and collaborating with local communities to ensure corridor functionality.",
                "The program safeguards biodiversity by enabling safe wildlife movement and reducing human-animal conflicts."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Assam Wildlife Corridor Program",
            "location": GUWAHATI
        },
        {
            "title": "Reducing Plastic Pollution in Guwahati",
            "description": "Implementing city-wide initiatives to reduce plastic waste and promote sustainable alternatives.",
            "blogParts": [
                "Plastic waste is a major issue in Guwahati. This project promotes the reduction of plastic use through education and alternative solutions.",
                "Efforts include city-wide bans on single-use plastics, encouraging recycling, and introducing biodegradable materials.",
                "Community involvement is emphasized, with campaigns and workshops to raise awareness and drive collective action."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Plastic-Free Guwahati Campaign",
            "location": GUWAHATI
        },
        {
            "title": "Conservation of Assamese Medicinal Plants",
            "description": "Preserving native medicinal plants of Assam through cultivation and awareness programs.",
            "blogParts": [
                "Assam's medicinal plants are a treasure trove of traditional knowledge. This initiative focuses on cultivating these plants and raising awareness about their uses.",
                "Activities include setting up herbal gardens, conducting research on medicinal properties, and involving local communities in conservation efforts.",
                "The program ensures the survival of valuable plant species while promoting traditional healing practices."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Assam Medicinal Plants Conservation Project",
            "location": GUWAHATI
        },
        {
            "title": "Integrated Solid Waste Management in Guwahati",
            "description": "Developing an integrated system for solid waste management, focusing on segregation, recycling, and composting.",
            "blogParts": [
                "Effective waste management is critical for a clean city. This project develops systems for waste segregation, recycling, and composting in Guwahati.",
                "Public awareness campaigns educate citizens about the importance of waste reduction and proper disposal practices.",
                "Collaboration with municipal bodies ensures the scalability and sustainability of the integrated waste management system."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Guwahati Solid Waste Management Project",
            "location": GUWAHATI
        },
        {
            "title": "Reviving Traditional Fishery Practices",
            "description": "Encouraging the use of traditional fishery practices to sustainably manage fish stocks in the Brahmaputra.",
            "blogParts": [
                "Traditional fishery practices offer a sustainable way to manage fish stocks. This initiative promotes their adoption among communities dependent on the Brahmaputra River.",
                "Workshops and training sessions focus on eco-friendly fishing methods and resource management to prevent overfishing.",
                "By integrating modern insights with traditional knowledge, the project ensures the ecological health of the river and its fisheries."
            ],
            "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
            "initiative": "Sustainable Fisheries Program",
            "location": GUWAHATI
        }
    ]
;

const BANGALORE: Coordinate = {
    name: 'Bangalore',
    lat: 12.9716,
    lng: 77.5946
};
const bangaloreArticles: Article[] = [
    {
        "title": "Counting Pebbles in Bangalore",
        "description": "A whimsical project focused on documenting the number of pebbles found in public parks around Bangalore, with no practical applications.",
        "blogParts": [
            "Public parks in Bangalore are rich with small, often unnoticed natural features, including pebbles. This initiative takes a playful approach to engage the community in counting and categorizing these tiny elements.",
            "Volunteers and park-goers are invited to participate, turning a mundane task into an interactive activity that fosters connection with nature and each other.",
            "While the project lacks direct practical benefits, it serves as a reminder of the joy in observing and appreciating the little details of our surroundings."
        ],
        "blogBackgroundImg": imageNames.BANNI_GRASSLAND_1,
        "initiative": "Pebble Counting Initiative",
        "location": BANGALORE
    }
];

export const articles: Article[] = [
    ...bhujArticles,
    ...ahemdabadArticles,
    ...delhiArticles,
    ...guwahatiArticles,
    ...kolkataArticles,
    ...bangaloreArticles
]
