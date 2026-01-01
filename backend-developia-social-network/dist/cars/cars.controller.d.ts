import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): import("./cars.service").Car[];
    findOne(id: string): import("./cars.service").Car | undefined;
}
