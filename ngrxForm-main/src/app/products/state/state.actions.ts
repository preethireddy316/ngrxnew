import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/models/product.model"

const get ="get products"
const delet="delete product"
const create="create product"
const update="update product"
const loadProductsSucc="load products success"

export const getProducts =createAction(get)

export const deleteProduct =createAction(delet,props<{id:string}>())

export const createProduct =createAction(create,props<{product:Product}>())

export const UpdateProduct =createAction(update)

export const loadProductsSuccess =createAction(loadProductsSucc,props<{products:Product[]}>())


