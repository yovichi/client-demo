import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }

  invoices: any = [];
  obj = this;

  GetInvoices(){
    this.http.get(`http://localhost/server-demo/GetInvoices.php`).subscribe(data => {
      this.invoices = data["items"];
    });
  }

  ClearInvoices(){
    this.invoices = [];
  }
}
