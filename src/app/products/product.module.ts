import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductListResolver } from './product-list-resolver.service';
import { ProductResolver } from './product-resolver.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ // component less route
    SharedModule,
    RouterModule.forChild([
      { path: 'products', 
        children: [
          { path: '',
            component: ProductListComponent,
            resolve: {
              products: ProductListResolver
            } },
          { path: ':id',
            component: ProductDetailComponent,
            resolve: {
              product: ProductResolver } },
          { path: ':id/edit',
            component: ProductEditComponent,
            resolve: {
              product: ProductResolver
              /*product: 'productResolverInline'*/ },
            children: [
              { path: '',
                redirectTo: 'info',
                pathMatch: 'full' },
              { path: 'info',
                  component: ProductEditInfoComponent },
              { path: 'tags',
                  component: ProductEditTagsComponent }
            ] }
        ] },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe,
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductListResolver,
    {
      provide: 'productResolverInline',
      useValue: () => {
        return {
          id: 5, 
          productName: 'Inline Hammer',
          description: 'Test Description for inline hammer'
        }
      }
    }
  ]
})
export class ProductModule {}
