import { Injectable } from '@angular/core';
import { PRODUCTS, PRODUCTS_IN_PLAN, PRODUCTS_IN_NEW_PLAN } from './mock-products';

// Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
@Injectable()
export class ProductService {
    getAllProducts() {
        return Promise.resolve(PRODUCTS);
    }

    getProductsInCurrentPlan() {
      return Promise.resolve(PRODUCTS_IN_PLAN);
    }

    getProductsInNewPlan() {
      return Promise.resolve(PRODUCTS_IN_NEW_PLAN);
    }
}
