import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-teamstime',
  templateUrl: './teamstime.component.html',
  styleUrls: ['./teamstime.component.css']
})
export class TeamstimeComponent implements OnInit {
  TeamsList :any =[];
  timer:any;
  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
    this.timer=setInterval(()=>{
      this.TeamsList=this.TeamsList.map((obj:any)=>{
        let temp=Math.floor((Date.now() - new Date(obj.startTime).getTime())/1000)
        if (temp>5400){
          obj.time = "Finished Counting"
        }else{
          obj.time = `${Math.floor(temp/3600)}h ${Math.floor(temp%3600/60)}m ${temp%60}s`;
        }
        return obj;
      })
    },1000)
    this.service.getTeamList().subscribe( res =>{
      this.TeamsList=res.map(obj=>{
        let temp=Math.floor((Date.now() - new Date(obj.startTime).getTime())/1000)
        if (temp>5400){
          obj.time = "Finished Counting"
        }else{
          obj.time = `${Math.floor(temp/3600)}h ${Math.floor(temp%3600/60)}m ${temp%60}s`;
        }
        return obj;
      });
    })
  }
  ngOnDestroy():void{
    clearInterval(this.timer);
  }


}
