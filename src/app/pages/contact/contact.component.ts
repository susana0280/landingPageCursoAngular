import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  
contactForm!:FormGroup;
message:string=""


constructor(private formBuilder:FormBuilder){
this.contactForm=formBuilder.group({

  email:["",[Validators.email,Validators.required]],

  message:["", [Validators.minLength(10), Validators.required]],
})
}

ngOnInit(): void {
 
}

hasError(controlName:string,errorType:string){

  return  this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
}






enviar(event:Event){
event.preventDefault();
console.log(this.contactForm.value)
}
}



