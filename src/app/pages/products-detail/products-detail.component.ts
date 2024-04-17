import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ApiServiceService } from '../../services/api-service.service';
import { Iproducts } from '../../models/products.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit {


loading:boolean=true
_apiService=inject(ApiServiceService)
id:number=0
private _route=inject(ActivatedRoute)
public product?:Iproducts

ngOnInit(): void {

this.loading=true
  this._route.params.subscribe((param)=>{
    
   this.id=parseInt(param['id'])
   

    this._apiService.getProduct(this.id).subscribe((data:Iproducts)=>{
      this.product=data
      console.log(data)

    })
  
  })
  this.loading=false
}





}
