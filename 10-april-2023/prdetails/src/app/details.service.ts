import { Injectable } from '@angular/core';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  
  productDetails!:items[];
  getDetails():items[]{
    
    this.productDetails=[
    {id:"ABC",
    itemName:"whitesaree", 
    type:"silk",
    price:10000,
    qty:5,
    size:"s",
  wishlist:"yes"},
    

    {id:"XYZ",
    itemName:"blacksaree", 
    type:"banaras",
    price:20000,
    qty:3,
    size:"s",
    wishlist:"yes"},

    {id:"PQR",
    itemName:"redsaree", 
    type:"cotton",
    price:140000,
    qty:4,
    size:"s",
    wishlist:"yes"},

    {id:"XXX",
    itemName:"bluesaree", 
    type:"floral",
    price:25000,
    qty:4,
    size:"s",
    wishlist:"yes"},

    {id:"YYY",
    itemName:"maroon saree", 
    type:"cotton",
    price:18000,
    qty:4,
    size:"s",
    wishlist:"yes"},

  ]

  return this.productDetails
}
}
