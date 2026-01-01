"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesService = exports.properties = void 0;
const common_1 = require("@nestjs/common");
exports.properties = [
    {
        id: 1,
        title: "Modern Apartment in Downtown Baku",
        description: "Spacious renovated apartment close to metro, shops, and parks.",
        type: "apartment",
        price: 120000,
        currency: "USD",
        location: {
            city: "Baku",
            district: "Nizami",
            street: "Babek Ave, 45",
        },
        area: 95,
        rooms: 3,
        floor: 6,
        buildYear: 2015,
        ceilingHeight: 2.8,
        condition: "renovated",
        furnishing: "semi-furnished",
        ownership: "owner",
        status: "available",
        amenities: ["balcony", "elevator", "parking"],
        documents: ["ownership certificate"],
        contact: {
            name: "Eldar",
            phone: "+994501234567",
            email: "eldar@example.com",
        },
        views: 153,
        postedDate: "2025-09-10",
        thumbnail: "https://example.com/images/apartment1_thumb.jpg",
        images: [
            "https://nizami-street-hotel.aboutbakuhotels.com/data/Imgs/OriginalPhoto/9698/969808/969808855/img-nizami-street-hotel-baku-1.JPEG",
            "https://sea-pearl-hotel.aboutbakuhotels.com/data/Photos/OriginalPhoto/16221/1622142/1622142602.JPEG",
        ],
    },
    {
        id: 2,
        title: "Cozy House with Garden",
        description: "Private house with land and a fruit garden.",
        type: "house",
        price: 220000,
        currency: "AZN",
        location: {
            city: "Sumgait",
            settlement: "Khidirli",
        },
        area: 180,
        landArea: 600,
        rooms: 5,
        buildYear: 2008,
        ceilingHeight: 3.2,
        condition: "needs_repair",
        furnishing: "unfurnished",
        ownership: "agency",
        status: "available",
        amenities: ["garage", "garden", "terrace"],
        documents: ["technical passport"],
        contact: {
            name: "Real Estate Agency",
            phone: "+994552223344",
        },
        views: 89,
        postedDate: "2025-09-12",
        thumbnail: "https://example.com/images/house1_thumb.jpg",
        images: [
            "https://arenda.az/uploads/emlak/thumbs/big_gallery/da/9e/da9e13381670367a0bcffc85941c6d4b.jpg",
            "https://arenda.az/uploads/emlak/thumbs/big_gallery/31/47/3147949abe44ffaaa43070027b5da872.jpg",
        ],
    },
    {
        id: 3,
        title: "Office Space in Business Center",
        description: "Modern office downtown, fully ready for work.",
        type: "office",
        price: 1500,
        currency: "USD",
        location: {
            city: "Baku",
            district: "Yasamal",
            street: "Neftchilar Ave, 101",
        },
        area: 70,
        rooms: 2,
        floor: 10,
        condition: "new",
        furnishing: "furnished",
        ownership: "owner",
        status: "rented",
        amenities: ["air conditioning", "internet", "security"],
        documents: ["lease agreement"],
        contact: {
            name: "Firuz",
            phone: "+994777777777",
            email: "firuz.office@example.com",
        },
        views: 320,
        postedDate: "2025-09-01",
        thumbnail: "https://example.com/images/office1_thumb.jpg",
        images: [
            "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/the-investor-street-sector16/t849dj.jpg",
            "https://cdn-klbmd.nitrocdn.com/oflAEolSqrPhKMSrYpDBcfHfpcFckcly/assets/images/optimized/rev-1bcb9bb/www.dbsindia.com/images/plans/Mumbai-Lower-Parel/Furnished-Office-Space.webp",
            "https://cdn-klbmd.nitrocdn.com/oflAEolSqrPhKMSrYpDBcfHfpcFckcly/assets/images/optimized/rev-1bcb9bb/www.dbsindia.com/images/plans/Mumbai-Lower-Parel/Shared-Office-Space.webp",
        ],
    },
];
let PropertiesService = class PropertiesService {
    create(createPropertyDto) {
        return "create new properties";
    }
    findAll() {
        return exports.properties;
    }
    findOne(id) {
        return exports.properties.find(product => product.id === id);
    }
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)()
], PropertiesService);
//# sourceMappingURL=properties.service.js.map