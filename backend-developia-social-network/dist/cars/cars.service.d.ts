export interface Car {
    id: number;
    brand: string;
    model: string;
    color: string;
    mileage: number;
    bodyType: string;
    year: number;
    isNew: boolean;
    city: string;
    transmission: string;
    seats: number;
    price: number;
    img: string;
}
export declare const cars: Car[];
export declare class CarsService {
    findAll(): Car[];
    findOne(id: number): Car | undefined;
}
