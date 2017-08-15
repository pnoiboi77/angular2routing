import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()

export class ProductListResolver implements Resolve<IProduct[]> {
    constructor(private products: ProductService,
            private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):     Observable<IProduct[]> {
        return this.products.getProducts();
    }
}