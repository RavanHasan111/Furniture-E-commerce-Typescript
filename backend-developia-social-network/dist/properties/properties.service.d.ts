import { CreatePropertyDto } from './dto/create-property.dto';
export interface Location {
    city: string;
    district?: string;
    street?: string;
    settlement?: string;
}
export interface Contact {
    name: string;
    phone: string;
    email?: string;
}
export interface Property {
    id: number;
    title: string;
    description: string;
    type: "apartment" | "house" | "office" | "land" | "commercial";
    price: number;
    currency: "USD" | "AZN" | "EUR";
    location: Location;
    area: number;
    landArea?: number;
    rooms?: number;
    floor?: number;
    buildYear?: number;
    ceilingHeight?: number;
    condition: "new" | "renovated" | "needs_repair";
    furnishing: "furnished" | "semi-furnished" | "unfurnished";
    ownership: "owner" | "agency";
    status: "available" | "sold" | "rented";
    amenities?: string[];
    documents?: string[];
    contact: Contact;
    views: number;
    postedDate: string;
    thumbnail: string;
    images: string[];
}
export declare const properties: Property[];
export declare class PropertiesService {
    create(createPropertyDto: CreatePropertyDto): string;
    findAll(): Property[];
    findOne(id: number): Property | undefined;
}
