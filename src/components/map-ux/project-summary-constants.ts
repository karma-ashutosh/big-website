
export interface Article {
  title: string;
  description: string;
  initiative: string;
  location: Coordinate
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
        title: "Revitalizing Urban Water Bodies in Delhi",
        description: "A project aimed at restoring and conserving Delhi's urban lakes and ponds to enhance groundwater recharge and biodiversity.",
        initiative: "Urban Water Conservation Program",
        location: DELHI,
    },
    {
        title: "Community-Led Waste Management in Delhi",
        description: "Empowering local communities to manage solid waste effectively, promoting recycling and composting practices.",
        initiative: "Sustainable Urban Development Initiative",
        location: DELHI,
    },
    {
        title: "Air Quality Improvement through Green Corridors",
        description: "Developing green corridors along major roads to mitigate air pollution and provide urban green spaces.",
        initiative: "Green Delhi Campaign",
        location: DELHI,
    },
    {
        title: "Promoting Rooftop Solar Energy Adoption",
        description: "Encouraging households and businesses to install rooftop solar panels to reduce dependence on non-renewable energy sources.",
        initiative: "Renewable Energy Promotion Scheme",
        location: DELHI,
    },
    {
        title: "Urban Biodiversity Parks Development",
        description: "Creating biodiversity parks within the city to preserve native flora and fauna and provide recreational spaces.",
        initiative: "Delhi Biodiversity Conservation Project",
        location: DELHI,
    },
]
const AHEMDABAD: Coordinate = {
    name: 'ahemdabad',
    lat: 23.0225,
    lng: 72.5714
};
const ahemdabadArticles: Article[] = [
    {
        title: "Sabarmati Riverfront Biodiversity Enhancement",
        description: "Enhancing the biodiversity along the Sabarmati Riverfront through native species plantation and habitat restoration.",
        initiative: "Riverfront Biodiversity Project",
        location: AHEMDABAD,
    },
    {
        title: "Sustainable Urban Mobility Solutions",
        description: "Implementing eco-friendly public transportation options to reduce carbon emissions and traffic congestion.",
        initiative: "Green Mobility Initiative",
        location: AHEMDABAD,
    },
    {
        title: "Community Rainwater Harvesting Systems",
        description: "Installing rainwater harvesting systems in residential areas to address water scarcity and promote sustainable water use.",
        initiative: "Water Sustainability Program",
        location: AHEMDABAD,
    },
]
const KOLKATATA: Coordinate = {
    name: 'kolkata',
    lat: 22.5726,
    lng: 88.3639
};
const kolkataArticles: Article[] = [
    {
      title: "Sundarbans Mangrove Restoration",
      description: "Engaging local communities in restoring degraded mangrove areas in the Sundarbans to protect against coastal erosion.",
      initiative: "Sundarbans Restoration Project",
      location: KOLKATATA,
    },
    {
      title: "Hooghly River Pollution Control",
      description: "Implementing measures to reduce industrial and domestic pollution in the Hooghly River.",
      initiative: "River Pollution Control Program",
      location: KOLKATATA,
    },
    {
      title: "Urban Wetlands Conservation",
      description: "Protecting and managing urban wetlands to support biodiversity and provide ecosystem services.",
      initiative: "Urban Wetlands Conservation Project",
      location: KOLKATATA,
    },
    {
      title: "Cyclone Resilience Building in Coastal Areas",
      description: "Strengthening community resilience to cyclones through infrastructure development and training.",
      initiative: "Coastal Resilience Program",
      location: KOLKATATA,
    },
    {
      title: "Sustainable Fisheries Management",
      description: "Promoting sustainable fishing practices among local fishing communities to preserve fish stocks.",
      initiative: "Fisheries Sustainability Project",
      location: KOLKATATA,
    },
    {
      title: "Air Quality Monitoring and Improvement",
      description: "Establishing air quality monitoring stations and developing strategies to reduce air pollution.",
      initiative: "Air Quality Improvement Program",
      location: KOLKATATA,
    },
    {
      title: "Heritage Tree Conservation",
      description: "Identifying and conserving old and culturally significant trees within the city.",
      initiative: "Heritage Tree Conservation Project",
      location: KOLKATATA,
    },
    {
      title: "Community Urban Farming Initiatives",
      description: "Encouraging urban farming to enhance food security and promote sustainable practices.",
      initiative: "Urban Farming Program",
      location: KOLKATATA,
    },
  ];

const BHUJ: Coordinate = {
    name: 'bhuj',
    lat: 23.2420,
    lng: 69.6669
};
const bhujArticles: Article[] = [
    {
        title: "Resilience in Kutch: Water Conservation",
        description: "Addressing water scarcity in the arid regions of Bhuj through innovative community-led water conservation practices.",
        initiative: "Kutch Water Conservation Initiative",
        location: BHUJ,
    },
    {
        title: "Preservation of Indigenous Crafts",
        description: "Empowering local artisans in Bhuj to preserve traditional crafts and promote sustainable livelihoods.",
        initiative: "Bhuj Artisans Development Program",
        location: BHUJ,
    },
    {
        title: "Reviving Pastoral Traditions in Kutch",
        description: "Supporting the pastoral communities in Bhuj by ensuring sustainable grazing practices and promoting traditional knowledge.",
        initiative: "Kutch Pastoral Heritage Program",
        location: BHUJ,
    },
    {
        title: "Kutch Mangrove Restoration Initiative",
        description: "Restoring and conserving mangroves in the coastal areas of Bhuj to protect biodiversity and mitigate climate impacts.",
        initiative: "Mangrove Conservation Program",
        location: BHUJ,
    },
    {
        title: "Promoting Eco-Tourism in Bhuj",
        description: "Developing eco-tourism opportunities in Bhuj to balance conservation efforts with sustainable economic development.",
        initiative: "Eco-Tourism Development Initiative",
        location: BHUJ,
    },
    {
        title: "Bhuj Renewable Energy Solutions",
        description: "Encouraging the adoption of renewable energy technologies like solar and wind to meet the region's energy needs sustainably.",
        initiative: "Renewable Energy for Kutch",
        location: BHUJ,
    },
    {
        title: "Traditional Water Storage System Revival",
        description: "Rejuvenating traditional water storage systems like step wells and tanks to enhance water availability in Bhuj.",
        initiative: "Kutch Heritage Water Conservation",
        location: BHUJ,
    },
    {
        title: "Biodiversity Conservation in Kutch",
        description: "Protecting the unique flora and fauna of Kutch through habitat restoration and anti-poaching measures.",
        initiative: "Kutch Biodiversity Protection Program",
        location: BHUJ,
    },
    {
        title: "Soil Health and Sustainable Agriculture",
        description: "Improving soil health and promoting sustainable agricultural practices among farmers in Bhuj.",
        initiative: "Kutch Agricultural Sustainability Initiative",
        location: BHUJ,
    },
    {
        title: "Climate Resilience through Community Action",
        description: "Building climate resilience in Bhuj through community-driven projects addressing droughts and extreme weather events.",
        initiative: "Kutch Climate Action Program",
        location: BHUJ,
    },
];

const GUWAHATI: Coordinate = {
    name: 'guwahati',
    lat: 26.1445,
    lng: 91.7362
};
const guwahatiArticles: Article[] = [
    {
      title: "Brahmaputra Riverbank Erosion Control",
      description: "Implementing measures to prevent soil erosion along the banks of the Brahmaputra River and protect nearby communities.",
      initiative: "Brahmaputra Erosion Control Program",
      location: GUWAHATI,
    },
    {
      title: "Kaziranga National Park Buffer Zone Management",
      description: "Developing buffer zones around Kaziranga to reduce human-wildlife conflicts and promote sustainable livelihoods.",
      initiative: "Kaziranga Buffer Zone Program",
      location: GUWAHATI,
    },
    {
      title: "Flood Resilience in Urban Guwahati",
      description: "Strengthening infrastructure and community preparedness to mitigate urban flooding caused by heavy rains.",
      initiative: "Urban Flood Resilience Program",
      location: GUWAHATI,
    },
    {
      title: "Biodiversity Conservation in Pobitora Wildlife Sanctuary",
      description: "Enhancing biodiversity conservation efforts in Pobitora by engaging local communities in habitat restoration.",
      initiative: "Pobitora Conservation Project",
      location: GUWAHATI,
    },
    {
      title: "Air Quality Monitoring and Reduction Strategies",
      description: "Installing air quality monitoring stations in Guwahati and implementing strategies to reduce urban air pollution.",
      initiative: "Clean Air Guwahati Initiative",
      location: GUWAHATI,
    },
    {
      title: "Community-Based Tourism in Assam",
      description: "Promoting sustainable tourism practices that benefit local communities and highlight Assam's rich cultural heritage.",
      initiative: "Sustainable Tourism Development Project",
      location: GUWAHATI,
    },
    {
      title: "Preservation of Traditional Assamese Handlooms",
      description: "Supporting handloom weavers in Guwahati to preserve traditional weaving techniques and promote sustainable livelihoods.",
      initiative: "Assam Handloom Preservation Program",
      location: GUWAHATI,
    },
    {
      title: "Urban Wetlands Restoration",
      description: "Restoring Guwahati's urban wetlands to enhance biodiversity, water storage, and urban cooling.",
      initiative: "Urban Wetlands Restoration Project",
      location: GUWAHATI,
    },
    {
      title: "Wildlife Corridor Management",
      description: "Protecting critical wildlife corridors connecting Manas National Park and other protected areas near Guwahati.",
      initiative: "Assam Wildlife Corridor Program",
      location: GUWAHATI,
    },
    {
      title: "Reducing Plastic Pollution in Guwahati",
      description: "Implementing city-wide initiatives to reduce plastic waste and promote sustainable alternatives.",
      initiative: "Plastic-Free Guwahati Campaign",
      location: GUWAHATI,
    },
    {
      title: "Conservation of Assamese Medicinal Plants",
      description: "Preserving native medicinal plants of Assam through cultivation and awareness programs.",
      initiative: "Assam Medicinal Plants Conservation Project",
      location: GUWAHATI,
    },
    {
      title: "Integrated Solid Waste Management in Guwahati",
      description: "Developing an integrated system for solid waste management, focusing on segregation, recycling, and composting.",
      initiative: "Guwahati Solid Waste Management Project",
      location: GUWAHATI,
    },
    {
      title: "Reviving Traditional Fishery Practices",
      description: "Encouraging the use of traditional fishery practices to sustainably manage fish stocks in the Brahmaputra.",
      initiative: "Sustainable Fisheries Program",
      location: GUWAHATI,
    },
  ];

const BANGALORE: Coordinate = {
    name: 'delhi',
    lat: 12.9716,
    lng: 77.5946
};
const bangaloreArticles: Article[] = [{
    title: "Counting Pebbles in Bangalore",
    description: "A whimsical project focused on documenting the number of pebbles found in public parks around Bangalore, with no practical applications.",
    initiative: "Pebble Counting Initiative",
    location: BANGALORE,
}];

export const articles: Article[] = [
    ...bhujArticles,
    ...ahemdabadArticles,
    ...delhiArticles,
    ...guwahatiArticles,
    ...kolkataArticles,
    ...bangaloreArticles
]
