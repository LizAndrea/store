import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    category: Category;
    price: number;
    images: string[];
    creationAt: string;
}