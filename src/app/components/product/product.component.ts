import { Component, OnInit, Input, Output ,  EventEmitter} from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{


@Input() product: Product= {
  id: '' ,
  // title:'',
  name:'',
  // image: '',
  img:'',
  price: 0,
  description: ''
}

@Output() addProduct= new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addProduct.emit(this.product);
  }
}
