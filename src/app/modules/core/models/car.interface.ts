import { Currency } from './commons.type';

export interface ICar {
    id: number,
    Name: string,
    Price: number,
    Currency: Currency,
    Year: string,
    Horsepower: number,
    Acceleration: number,
    Cylinders: number,
    Displacement: number,
    Miles_per_Gallon: number,
    Origin: string,
    Weight_in_lbs: number,
}
