import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './../services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpServiceService: HttpServiceService) { }
  id: number;

 
  products : any = [];
  
  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      this.httpServiceService.deleteProduct(id).toPromise()
      .then(() => {
        this.httpServiceService.fetchData().subscribe(data => {
          this.products = data;
        })
      })
    }
  }

  ngOnInit() {
     this.httpServiceService.fetchData().subscribe(data => {
        this.products = data;
      });
  }

}
