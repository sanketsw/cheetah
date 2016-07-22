import { Component, OnInit } from '@angular/core';
import { InputText, Password, Panel, DataList } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Accordion } from 'primeng/primeng';
import { AccordionTab } from 'primeng/primeng';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { Product } from '../model/product';
<<<<<<< HEAD

=======
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git

@Component({
  selector: 'as-product-planner',
  templateUrl: 'app/product-planner/product-planner.html',
  styleUrls: [
    'app/product-planner/product-planner.css'
  ],
  directives: [InputText, Password, Panel, DataList, Accordion, AccordionTab],
  providers: [ProductService, CategoryService]
})

export class ProductPlannerComponent implements OnInit {

  products: Product[];
  categories: Category[];
  selectedProduct: Product;
  selectedCategory: Category;
<<<<<<< HEAD

=======
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git
  plannedPrice: number;
<<<<<<< HEAD

=======
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git
  initialPrice: number;

  constructor(private router: Router, private productService: ProductService, private categoryService: CategoryService) {
    // sessionStorage.setItem('loggedIn', 'false');
  }

  recalculate() {
    this.calculate(this.products);
  }

  calculate(products) {
    this.plannedPrice = 0;
    for (let currentProduct of products) {
      this.plannedPrice += (currentProduct.price * currentProduct.count);
    }
  }

  calculateInitialPrice(products) {
    this.initialPrice = 0;
    for (let currentProduct of products) {
      this.initialPrice += (currentProduct.price * currentProduct.count);
    }
  }

  ngOnInit() {
    this.productService.getProductsInCurrentPlan().then(products => this.products = products);
    this.categoryService.getCategories().then(categories => this.categories = categories);
    this.productService.getProductsInCurrentPlan().then(products => this.calculate(products));
    this.productService.getProductsInCurrentPlan().then(products => this.calculateInitialPrice(products));
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  select(product: Product) {
    product.count++;
    this.recalculate();
  }
<<<<<<< HEAD

  plannedPrice1() {
    return this.initialPrice;
  }
=======
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git

<<<<<<< HEAD
  initialPrice1() {
    return this.initialPrice;
  }

=======
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git
  deSelect(product: Product) {
    if (product.count > 0) {
<<<<<<< HEAD
      product.count--;
=======
      product.count --;
>>>>>>> branch 'master' of https://github.com/sanketsw/cheetah.git
    }
    this.recalculate();
  }

}
