import { PropertiesService } from './properties.service';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    findAll(): import("./properties.service").Property[];
    findOne(id: string): import("./properties.service").Property | undefined;
}
