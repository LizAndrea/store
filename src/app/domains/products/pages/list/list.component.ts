import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(change: SimpleChanges) {
      this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {  }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
