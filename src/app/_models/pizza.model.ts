import { Topping } from "./toppings.enum";

export interface Pizza {
    id: number;
    name: string;
    toppings: Topping[];
    price: number;
    image: string;
}