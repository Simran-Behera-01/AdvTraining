import { Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IndexPageComponent } from './components/index-page/index-page.component';

export const routes: Routes = [
    {path:'',redirectTo:'index',pathMatch:'full'},
    {path:'index',component:IndexPageComponent},
    {path:'add',component:AddProductsComponent},
    {path:'edit',component:EditProductComponent},
    {path:'delete',component:DeleteProductComponent},
    {path:'details',component:ProductDetailsComponent},
    {path:'list',component:ProductListComponent}
];
