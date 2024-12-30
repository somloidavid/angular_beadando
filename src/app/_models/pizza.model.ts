import { Toppings } from "./toppings.enum";

export interface Pizza {
    id?: number;
    name: string;
    toppings: Toppings[];
    price: string;
    image: string;
}