import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get("http://localhost:5555/products");
  }

  deleteProduct(id) {
    const url = `${"http://localhost:5555/products"}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }

  addNewProduct(obj) {
    return this.http.post("http://localhost:5555/products/", obj);
  }

  updateProduct(obj, id) {
    const url = `${"http://localhost:5555/products"}/${id}`;
    return this.http.put(url, JSON.stringify(obj), {headers: this.headers});
  }

}
