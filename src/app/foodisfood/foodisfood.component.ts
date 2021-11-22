import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-foodisfood',
  templateUrl: './foodisfood.component.html',
  styleUrls: ['./foodisfood.component.css']
})
export class FoodisfoodComponent implements OnInit {

  constructor(private service:SharedServiceService) { }
  user:String="";
  password:String=""
  auth:boolean | null=null;
  ngOnInit(): void {
  }
  refresh(){
    this.auth=null;
  }
  login(){
    let payload={
      "user":this.user,
      "password":this.password
    }
    this.service.login(payload).subscribe((res:any)=>{
      this.auth=res["logged"];
    })
  }

}
