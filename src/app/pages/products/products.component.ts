import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Iproducts } from '../../models/products.models';
import { RouterLink, RouterModule, RouterOutlet, Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports:[CommonModule],
  providers: [ApiServiceService ]
})
export class ProductsComponent implements OnInit {

  route=inject(Router)
  _apiService=inject(ApiServiceService)
  listProducts:Iproducts[]=[]

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
   
    this._apiService.getAllProductos().subscribe((data:Iproducts[])=>{

      this.listProducts=data
      console.log(data)

    })
    
  }

  navigate(id:number){
    this.route.navigate(['/products/',id])
  }

}
