import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './../services/http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpServiceService: HttpServiceService) { }
  
  confirmationString: string = "New product added";
  isAdded: boolean = false;
  productObj = {};

  addNewProduct = function(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    this.httpServiceService.addNewProduct(this.productObj).subscribe(data => {
        this.isAdded = true;
      }
    )
  }

  ngOnInit() {
  }

}
