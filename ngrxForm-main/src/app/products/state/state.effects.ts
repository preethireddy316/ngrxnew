import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/service/products.service";
import {  getProducts, loadProductsSuccess } from "./state.actions";

@Injectable()

export class ProductEffects {
    constructor(private actions$:Actions,private productService: ProductService,
        // private store: Store<AppState>
        ) {}

  
    // create$:any = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(createProduct),
    //       MergeMap((action:any)=>
    //        {
    //         console.log(action)
    //         return(action: { name: string; desc: string; price: string; } & TypedAction<"create product">)=>{
    //           console.log(action)
    //            this.productService.addProduct({name:action.name,desc:action.desc,price:action.price})
    //            .pipe(map(
    //             (data) => {
    //               //   this.store.dispatch(setLoadingSpinner({status:false}))
    //               //   this.store.dispatch(setErrorMessage({message:''}))
          
    //               //   console.log('success in effects')
    //               //   const user=this.productService.formatUser(data)
    //                 return onsuccess({data});
    //               }))
    //               // catchError(ErrorResponse=>{
    //               //   console.log(ErrorResponse.error.error.message)
    //               //   const message = this.productService.getErrorMessege(ErrorResponse.error.error.message)
                    
    //               //   return of(setErrorMessage({message:message}));
                    
    //               // })
    //           //   );
    //         }
    //       })
    //     );
    //   },{dispatch:false}
    //   );


    loadProducts$:any = createEffect(
      ()=>{
      return this.actions$.pipe(ofType(getProducts),mergeMap(()=>{
          return this.productService.getProducts().pipe(map((products:Product[])=>{
            return loadProductsSuccess({products})
          }))
      }
      
      ))
    })
  
}