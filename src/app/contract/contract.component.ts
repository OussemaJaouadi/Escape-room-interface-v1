import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor(private service:SharedServiceService) { }
   player1:String="";
   player2:String="";
   player3:String="";
   showed:boolean=false
  ngOnInit(): void {
    this.showed=false
  }
  refresh(){
    this.showed=false
  }
  addTeam(){
    let list =[this.player1,this.player2,this.player3];
    this.service.addTeam(list).subscribe(res=>this.showed=true);
  }

}
