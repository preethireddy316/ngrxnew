import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductState } from '../state/state';
import { deleteProduct, getProducts } from '../state/state.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products!:Observable<any>

  constructor(private store:Store<ProductState>){

  }

  ngOnInit(){
    this.products=this.store.select(getProducts)
  console.log(this.products)
  }

  onDeleteProduct(id:string){
    this.store.dispatch(deleteProduct({id}))
  }

  objectToArray(obj: any): any[] {
    return Object.keys(obj).map(key => obj[key]);
  }
}


