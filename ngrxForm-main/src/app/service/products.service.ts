import { Observable } from 'rxjs';
// import { Product } from './../http-practice/product.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({providedIn:"root"})
export class ProductService {
  private _refreshrequired=new Subject<void>();

    constructor(private http:HttpClient){
    }

    get Refreshrequired(){
      return this._refreshrequired
    }

    addProduct(product:{name:string,desc:string,price:string}):Observable<any>{
        return this.http.post<any>('https://angularproject-d03f8-default-rtdb.firebaseio.com/products.json',product)
    }

    deleteProduct(id:string){
        return this.http.delete('https://angularproject-d03f8-default-rtdb.firebaseio.com/products/'+id+'.json')
    .subscribe();
    }

    updateProduct(id:string,product:any){
        return this.http.put('https://angularproject-d03f8-default-rtdb.firebaseio.com/products/'+id+'.json',product)
      .subscribe()
    }

    getProducts():Observable<Product[]>{
        return(
        this.http.get<Product[]>('https://angularproject-d03f8-default-rtdb.firebaseio.com/products.json')
    .pipe(map(
      (res)=>{
      const products:Product[]=[]
      for (let key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }
      }
      this.Refreshrequired.next();
      console.log(products)
      return products
    })))
    }




}