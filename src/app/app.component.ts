import { Component } from '@angular/core';
import { Product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
 showimg= true;




  onLoaded(img: string){
    console.log("log padre", img);
    }

    togglerImg(){
      this.showimg = !this.showimg;
    }
}

