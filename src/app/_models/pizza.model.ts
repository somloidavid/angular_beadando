import { Toppings } from "./toppings.enum";

export interface Pizza {
    id: number;
    name: string;
    toppings: Toppings[];
    price: number;
    image: string;
}