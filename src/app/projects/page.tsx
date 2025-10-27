"use client"
import ProjectsClient from "./component/ProjectsClient"

const layoutProjects = [
	{
		id: 1,
		name: "Eternia",
		area: "10 Acres",
		plots: 170,
		theme: "Nature & Sustainability",
		icon: "Leaf",
		color: "from-green-500 to-emerald-600",
		description:
			"This project is a masterful fusion of thoughtful design and expert execution, carefully crafted to ensure that modern living aligns perfectly with the tranquillity of nature. From the initial concept to the final execution, every detail has been meticulously planned to create spaces that blend seamlessly with their natural surroundings. The design embraces sustainability, with eco-friendly materials, energy-efficient systems, and green spaces that encourage a harmonious connection with the environment. The careful execution brings these elements to life, resulting in homes that not only provide comfort and convenience but also offer a peaceful sanctuary where nature and modernity coexist in perfect harmony.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Master_plan/Eternia/Master_plan/1.jpg",
			"/Renders/Master_plan/Eternia/Master_plan/2.jpg",
			"/Renders/Master_plan/Eternia/Master_plan/3.jpg",
			"/Renders/Entrance_Arch/Eternia/1.jpg",
			"/Renders/Entrance_Arch/Eternia/2.jpg",
			"/Renders/Entrance_Arch/Eternia/3.jpg",
			"/Renders/Entrance_Arch/Eternia/4.jpg",
		],
	},
	{
		id: 2,
		name: "Etasha",
		area: "13 Acres",
		plots: 191,
		theme: "Island Paradise",
		icon: "Waves",
		color: "from-blue-500 to-cyan-600",
		description:
			"This project is a celebration of island life, bringing the serene beauty of tropical islands into every aspect of its design and construction. The entrance features a striking arch designed to resemble an island-themed tree, instantly immersing visitors in the natural, laid-back atmosphere of a coastal paradise. Every amenity has been thoughtfully crafted to align with the island theme, from open, airy spaces that mimic beachfront living to vibrant landscaping that evokes the lushness of island flora. With attention to detail in every corner, this project offers a harmonious blend of nature, comfort, and relaxation, creating a truly immersive island experience for all who visit.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Etasha/1.jpeg",
			"/Renders/Entrance_Arch/Etasha/2.jpeg",
			"/Renders/Entrance_Arch/Etasha/3.jpeg",
		],
	},
	{
		id: 3,
		name: "Ernika",
		area: "12 Acres",
		plots: 220,
		theme: "Amazon Rainforest",
		icon: "TreePine",
		color: "from-emerald-500 to-green-700",
		description:
			"Inspired by the vibrant biodiversity of the Amazon Rainforest, this project blends the beauty of nature with functional design. The design features lush greenery, flowing water elements, and organic forms that evoke the rainforest's rich ecosystem. A striking entrance arch, designed with a parametric structure, gives visitors a sense of walking into the heart of a forest, with its fluid, tree-like form symbolizing the natural environment. In addition to these natural elements, the project includes modern amenities, such as specially designed rugby and baseball courts, creating a dynamic space for both relaxation and sport. Through sustainable construction practices and innovative design, this project celebrates the Amazon’s natural wonder while offering a space for active living.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Ernika/1.png",
			"/Renders/Entrance_Arch/Ernika/2.png",
			"/Renders/Entrance_Arch/Ernika/3.png",
		],
	},
	{
		id: 4,
		name: "Evara",
		area: "8 Acres",
		plots: 114,
		theme: "Sustainable Living",
		icon: "Zap",
		color: "from-amber-500 to-orange-600",
		description:
			"Project is designed with a strong focus on sustainability, offering residents an eco-friendly living environment that harmonizes with nature. The layout maximizes green spaces, ensuring that each plot benefits from ample natural surroundings, while promoting energy-efficient design through thoughtful placement and orientation. Sustainable infrastructure, such as rainwater harvesting systems, solar energy solutions, and efficient waste management, are integrated throughout the development. By prioritizing environmentally conscious building practices and creating a balanced relationship between nature and modern living, this project aims to provide long-term value for both residents and the planet, creating a community that thrives in harmony with its surroundings.",
		scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
		images: [
			"/Renders/Entrance_Arch/Evara/1.png",
			"/Renders/Entrance_Arch/Evara/2.png",
			"/Renders/Entrance_Arch/Evara/3.png",
			"/Renders/Entrance_Arch/Evara/4.png",
			"/Renders/Entrance_Arch/Evara/Evara_1.png",
			"/Renders/Entrance_Arch/Evara/Evara_2.png",
			"/Renders/Entrance_Arch/Evara/Evara_3.png",
			"/Renders/Entrance_Arch/Evara/Evara_4.png",
		],
	},
]

const clubhouseProjects = [
	{
		id: 1,
		name: "Eternia Clubhouse",
		area: "10,600 Sqft",
		theme: "Refined Luxury",
		color: "from-purple-500 to-indigo-600",
		description:
			"The clubhouse at the Eternia Project, where refined luxury meets sustainable design. Anchored by a sculptural waffle-slab ceiling and framed by a striking terracotta jali wall that doubles as a living green façade, the space filters light and invites nature in. Inside, residents enjoy a gym, indoor games, coworking spaces, an AMTC room, and a rooftop restaurant—each space designed to meet modern lifestyle needs.",
		amenities: ["Gym", "Indoor Games", "Coworking Spaces", "AMTC Room", "Rooftop Restaurant"],
		images: [
			"/Renders/Clubhouse/Eternia/eternia_1.png",
			"/Renders/Clubhouse/Eternia/eternia_2.png",
			"/Renders/Clubhouse/Eternia/eternia_3.png",
		],
	},
	{
		id: 2,
		name: "Etasha Clubhouse",
		area: "9,700 Sqft",
		theme: "Island Retreat",
		color: "from-teal-500 to-blue-600",
		description:
			"Island-inspired retreat designed to foster community and relaxation. Surrounded by water and lush greenery, it features a warm Mangalore tile roof and fluid, coastal-style architecture. Inside, residents enjoy a modern gym, indoor games area, co-working space, and a terrace restaurant with panoramic views. With an AMTC room for efficient management, the Clubhouse blends natural charm with everyday functionality.",
		amenities: ["Modern Gym", "Indoor Games", "Co-working Space", "Terrace Restaurant", "AMTC Room"],
		images: [
			"/Renders/Clubhouse/Etasha/Renders/entry.png",
			"/Renders/Clubhouse/Etasha/Renders/a.png",
			"/Renders/Clubhouse/Etasha/Renders/gym_1.png",
			"/Renders/Clubhouse/Etasha/Renders/gym 2.png",
			"/Renders/Clubhouse/Etasha/Renders/1.2.png",
			"/Renders/Clubhouse/Etasha/Renders/3.png",
			"/Renders/Clubhouse/Etasha/Renders/4.png",
			"/Renders/Clubhouse/Etasha/Renders/5 (1).png",
			"/Renders/Clubhouse/Etasha/Renders/6 (1).png",
			"/Renders/Clubhouse/Etasha/Renders/7 (1).png",
			"/Renders/Clubhouse/Etasha/Renders/Terrace.png",
		],
	},
	{
		id: 3,
		name: "Ernika Clubhouse",
		area: "10,200 Sqft",
		theme: "Biophilic Design",
		color: "from-green-500 to-emerald-600",
		description:
			"The clubhouse at the Ernika project, Where Nature Meets Contemporary Living is a vibrant, biophilic hub designed to seamlessly blend nature with modern amenities, fostering wellness, community, and connection. Featuring lush greenery throughout, including vertical gardens, stepped balconies, and landscaped terraces, the architecture emphasizes natural light, ventilation, and organic forms through curved walls and layered elevations.",
		amenities: ["Fully Equipped Gym", "Indoor Games", "Co-working Space", "AMTC Room", "Scenic Terrace Restaurant"],
		images: [
			"/Renders/Clubhouse/Ernika/ernika_0.jpg",
			"/Renders/Clubhouse/Ernika/ernika_1.png",
			"/Renders/Clubhouse/Ernika/ernika_2.png",
			"/Renders/Clubhouse/Ernika/ernika_3.png",
			"/Renders/Clubhouse/Ernika/ernika_4.png",
			"/Renders/Clubhouse/Ernika/ernika_5.png",
			"/Renders/Clubhouse/Ernika/ernika_6.png",
			"/Renders/Clubhouse/Ernika/ernika_7.jpg",
		],
	},
]

const residentialProjects = [
	{
		id: 1,
		name: "Vivid Nest",
		siteArea: "1200 Sqft",
		builtArea: "3000 Sqft",
		location: "Bengaluru, Karnataka",
		year: "Ongoing",
		theme: "Modern Minimalist",
		icon: "Home",
		color: "from-blue-500 to-purple-600",
		description:
			"Crafted with finesse and functionality, this residence exemplifies ingenious design that optimizes space while fostering a harmonious relationship with the outdoors. Discover the seamless integration of balcony connections throughout, offering residents an immersive experience of nature from every vantage point. Ideal for pet enthusiasts, the landscaped courtyard serves as a tranquil oasis for both inhabitants and their furry companions. A focal point of the home, the staircase bay features a captivating skylight with a lovely triple height Landscape courtyard, infusing the interiors with abundant natural light and an airy ambiance. The terrace presents an expansive venue for gatherings. The master bedroom area is complemented by a cozy lounge area, with lower floors dedicated to bedrooms and family room for indoor entertainment. Indulge in the opulence of the master bedroom and bathroom, thoughtfully designed for ultimate relaxation, complete with a luxurious jacuzzi. With nature beckoning from every corner, this residence promises a serene retreat amidst urban living.",
		images: [
			"/Renders/Residential/VividNest/3.jpg",
			"/Renders/Residential/VividNest/11.jpg",
			"/Renders/Residential/VividNest/12.jpg",
			"/Renders/Residential/VividNest/Deepa_4.png",
		],
	},
	{
		id: 2,
		name: "Courtyard Harmony",
		siteArea: "4500 Sqft",
		builtArea: "4850 Sqft",
		location: "Bengaluru, Karnataka",
		year: "Ongoing",
		theme: "Contemporary Courtyard",
		icon: "Home",
		color: "from-emerald-500 to-teal-600",
		description:
			"The residential project embodies a harmonious blend of modern architecture with a focus on creating spaces wrapped around a courtyard. The concept revolves around enhancing visual connectivity and promoting open planning to foster a sense of unity and spaciousness, while acknowledging the luxurious natural lighting spreading across the spaces through various large openings and the skylight. The solid void planning technique is employed strategically to delineate functionality with overlooking decks and balconies that are seamlessly integrated into the design, providing serene outdoor spaces that overlook lush greenery and offer tranquil retreats for residents. For garden enthusiasts, the design incorporates dedicated spaces that cater to gardening activities, fostering a connection with nature right at home. The overall design philosophy emphasizes creating a living environment that celebrates openness, connectivity, and a deep appreciation for natural elements. Residents can enjoy fluid movement between indoor and outdoor spaces, while the thoughtful layout enhances the quality of life and encourages a holistic lifestyle that embraces both relaxation and social engagement.",
		images: [
			"/Renders/Residential/CourtyardHarmony/003.jpg",
			"/Renders/Residential/CourtyardHarmony/Ashutosh_5.png",
			"/Renders/Residential/CourtyardHarmony/Ashutosh_Front_3.png",
			"/Renders/Residential/CourtyardHarmony/IMG_2950.jpg",
			"/Renders/Residential/CourtyardHarmony/option 16.png",
		],
	},
	{
		id: 3,
		name: "Coastal Retreat",
		siteArea: "2400 Sqft",
		builtArea: "3600 Sqft",
		location: "Udupi, Karnataka",
		year: "2023",
		theme: "Mangalore Style",
		icon: "Home",
		color: "from-indigo-500 to-blue-600",
		description:
			"The project stands as a testament to the successful fusion of traditional Mangalore style architecture with contemporary design principles, resulting in a serene coastal retreat. The two-story layout elegantly divides private spaces on the upper level, offering unparalleled privacy and stunning vistas, while communal areas on the ground floor cater to social gatherings and family activities. This harmonious blend of tradition and modernity culminates in a tranquil haven that celebrates coastal living and fosters a profound connection with nature, enriching the overall living experience for inhabitants. The addition of a deck area provides breathtaking panoramic views of the coastal landscape, serving as an idyllic spot for relaxation and contemplation. Sustainable materials and construction techniques have been meticulously employed throughout, minimizing environmental impact while highlighting the coastal essence through natural textures and colors. The sloped roofs, reminiscent of local heritage, have been expertly crafted to optimize rainwater harvesting, showcasing a sustainable approach. A generous verandah seamlessly connects indoor and outdoor spaces, enhancing connectivity to nature and ensuring ample cross-ventilation for a breathable ambiance.",
		images: [
			"/Renders/Residential/CoastalRetreat/1 (1).jpg",
			"/Renders/Residential/CoastalRetreat/1 (2).jpg",
			"/Renders/Residential/CoastalRetreat/1 (4).jpg",
			"/Renders/Residential/CoastalRetreat/1 (5).jpg",
		],
	},
]

const commercialProjects = [
	{
		id: 1,
		name: "Terra",
		builtArea: "18,000 Sqft",
		location: "Pune, Maharashtra",
		year: "Ongoing",
		theme: "Natural Materials",
		icon: "Briefcase",
		color: "from-amber-500 to-orange-600",
		description:
			"This project was conceived to move beyond the conventional corporate environment, crafting a workspace that feels open, warm, and deeply connected to its materials and context. Designed for a tech park in Pune, the office draws on natural materials, abundant daylight, and thoughtful ventilation to create spaces that are both dynamic and serene. Key highlights include an inviting reception area designed with natural stone and textured finishes bathed in natural light. Transitional spaces are reimagined with working pods and highlighter ceilings, making movement through the office more interactive and engaging, not just functional. The rich material palette features stone, clay bricks, and breeze blocks, bringing in tactile variety and visual interest. Integration of green elements throughout softens the built environment and creates a sense of calm. This project celebrates the idea that a workplace can be comfortable, vibrant, and reflective of its natural surroundings, offering an experience far beyond the ordinary.",
		images: [
			"/Renders/Commercial/Terra/Reception.png",
			"/Renders/Commercial/Terra/Reception_2.png",
			"/Renders/Commercial/Terra/pods+toilet+collab.png",
			"/Renders/Commercial/Terra/pantry_office_collab.png",
		],
	},
	{
		id: 2,
		name: "Nuance",
		builtArea: "2,200 Sqft",
		location: "Bengaluru, Karnataka",
		year: "Ongoing",
		theme: "Collaborative Workspace",
		icon: "Briefcase",
		color: "from-purple-500 to-pink-600",
		description:
			"A commercial project, where we've expanded and redesigned office spaces to enhance productivity and collaboration. Our extension seamlessly integrates with the existing architecture, creating a fluid transition between spaces. Designed to accommodate a team of nine, the interior layout prioritizes functionality and comfort. Private workstations offer ample space for focused tasks, while common discussion areas foster creativity and teamwork. Additionally, the inclusion of a conference room and two cabins provides privacy for meetings and confidential discussions. We understand the importance of a conducive work environment, which is why we've incorporated dedicated dining areas for staff to unwind and recharge. To bring the outdoors in, planter boxes throughout the office integrate landscape elements promoting a sense of well-being and connection to nature. This project exemplifies our dedication to crafting dynamic workspaces that inspire innovation and collaboration. Step into a realm where design seamlessly merges with functionality, fostering an environment where productivity flourishes and creativity thrives. Welcome to a space where every detail is meticulously considered, ensuring that work becomes a fulfilling experience.",
		images: [
			"/Renders/Commercial/Nuance/Render09.png",
		],
	},
]

export default function ProjectsPage() {
	return <ProjectsClient layoutProjects={layoutProjects} clubhouseProjects={clubhouseProjects} residentialProjects={residentialProjects} commercialProjects={commercialProjects} />
}
