import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { HttpServiceService } from './../services/http-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  details: object = {};
  products : any = [];
  productObj: object = {};

  constructor(private router: Router, private route: ActivatedRoute, private httpServiceService: HttpServiceService) { }

  updateProduct(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    };
    this.httpServiceService.updateProduct(this.productObj, this.id)
    .toPromise()
    .then(() => {
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.httpServiceService.fetchData().subscribe(data => {
        this.products = data;
        for(var i = 0; i < this.products.length; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.details = this.products[i];
            break;
          }
        }
      }
    )
  }

}
