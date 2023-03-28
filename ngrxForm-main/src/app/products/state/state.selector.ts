import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductState } from './state';

const getProductsState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(getProductsState, (state):Observable<Product[]>=> {
  return state.products;
});

// export const getProductById = createSelector(getProductsState, (state:any, props:any) => {
//   return state.products.find((product:any) => product.id === props.id);
// });