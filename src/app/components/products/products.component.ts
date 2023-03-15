import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

import {StoreService} from '../../services/store.service'
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myshoppingCart:Product[] = [] ;

  total = 0;

  products:Product[] = [
  {
    id:'1',
    name: 'Jersey Lowrider',
    price: 200,
    img: 'https://i.ebayimg.com/images/g/-mcAAOSwXSpgUFvd/s-l500.jpg',
    description:"descripcion aqui"
  },
  {
    id:'2',
    name: 'Chamarra Jordan 11 Retro',
    price: 350,
    img: 'https://i.pinimg.com/736x/89/f3/05/89f30537f150231c97dc0fdab9f44949.jpg',
    description:"descripcion aqui"
  },
  {
    id:'3',
    name: 'Pants Adidas Atletico Retro',
    price: 100,
    img: 'https://http2.mlstatic.com/D_NQ_NP_585515-MLM25264910409_012017-O.jpg',
    description:"descripcion aqui"
  },
  {
    id:'4',
    name: 'Bermuda Dickies Importada Hombre',
    price: 110,
    img: 'https://i.pinimg.com/originals/ca/92/79/ca927954271a21b7bd3e0d91a811ff73.jpg',
    description:"descripcion aqui"
  },
  {
    id:'5',
    name: 'Tenis Nike Air Utempo',
    price: 1200,
    img: 'https://cdn-images.farfetch-contents.com/13/12/32/38/13123238_21511257_600.jpg',
    description:"descripcion aqui"
  },
  {
    id:'5',
    name: 'Sandalias Sport',
    price: 1200,
    img: 'https://http2.mlstatic.com/D_NQ_NP_876270-MLM52780016279_122022-O.webp',
    description:"descripcion aqui"
  },
  {
    id:'6',
    name: 'Jersey de Futbol Americano Retro de Diferentes Equipos',
    price: 200,
    img: 'https://i.ebayimg.com/images/g/HAwAAOSwq-VhTxWa/s-l1600.jpg',
    description:"descripcion aqui"
  },
  {
    id:'7',
    name: 'Gorra de los Dodgers Importada',
    price: 80,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_985025-MLM48627717182_122021-F.webp',
    description:"descripcion aqui"
  },
  {
    id:'8',
    name: 'Playera de Caramelo',
    price: 110,
    img: 'https://static.wixstatic.com/media/7fadfb_ec1edbc03cb4473588474832aa838dbf~mv2.jpeg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01/7fadfb_ec1edbc03cb4473588474832aa838dbf~mv2.webp',
    description:"descripcion aqui"
  },
  {
    id:'9',
    name: 'Diadema Deportiva',
    price: 35,
    img: 'https://m.media-amazon.com/images/I/71bLhUiX0nL._AC_SX425_.jpg',
    description:"descripcion aqui"
  },
  {
    id:'10',
    name: 'Gorro de pescador',
    price: 35,
    img: 'https://i8.amplience.net/i/jpl/1-59eb0541b9fc25508c863e0b15ca79a6',
    description:"descripcion aqui"
  },
  {
    id:'11',
    name: 'Camisa de Franela',
    price: 300,
    img: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/36666164_2127059264230087_8414964874265755648_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=dE-_4OjWTpYAX_g5qtJ&_nc_ht=scontent-qro1-1.xx&oh=00_AfAWLoGywC-__oyh2XUFRu9rA4L7VeM-7r6PYhykJxioMg&oe=6414FA8E',
    description:"descripcion aqui"
  },
  {
    id:'12',
    name: 'Chamarra de Baseball White Sox',
    price: 350,
    img: 'https://allsportsmexico.com/wp-content/uploads/2022/10/SOX1.jpg',
    description:"descripcion aqui"
  },
  {
    id:'13',
    name: 'Chamarra de Mezclilla Ben Davis',
    price: 850,
    img: 'https://m.media-amazon.com/images/I/31w3ci2PgqL._AC_.jpg',
    description:"descripcion aqui"
  },
  {
    id:'14',
    name: 'Sandalias Nike',
    price: 850,
    img: 'https://cf.shopee.com.mx/file/7a54a76557edf7f8d6d48133b86f3a07',
    description:"descripcion aqui"
  },
  {
    id:'15',
    name: 'Tenis Jordan',
    price: 1400,
    img: 'https://cf.shopee.com.mx/file/775fae8835639d729946b6a7d198b460 ',
    description:"descripcion aqui"
  },
  {
    id:'16',
    name: 'Jersey de Futbol Americano Lowrider',
    price: 800,
    img: 'https://cdn.shopify.com/s/files/1/0243/6998/7620/products/LRJERSEYFRT_blk.jpg',
    description:"descripcion aqui"
  },
  {
    id:'17',
    name: 'Jersey de los lakers',
    price: 500,
    img: 'https://http2.mlstatic.com/D_NQ_NP_684625-MLM53018334357_122022-V.webp ',
    description:"descripcion aqui"
  }
]


  // products:Product[] = []

  //fecha
  today = new Date();
  date = new Date(2022,8,16)

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  )
  {
    this.myshoppingCart = this.storeService.getShoppingCart()
   }

  ngOnInit(): void {
    // this.productsService.getAllProducts()
    // .subscribe(data =>{
    //   console.log(data);
      // this.products = data;
      this.products;
    // });
  }

  onAddToShoppingCart(product:Product){

  this.storeService.AddProduct(product)

  this.total = this.storeService.getTotal();
}

}
