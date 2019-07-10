import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }

  testPost() {
    //Plug in your api's url here
    const postUrl = 'http://localhost:5000/api/values/post';

    console.log("testPost was called");

    let testPerson = {name: "Bob", age: "15"}

    this.http.post(postUrl, testPerson, httpOptions).subscribe(res => {
      console.log("api responded with: ", res);
    });
  }
}
