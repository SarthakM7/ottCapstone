import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
currUser: any;
disp= "";
  users: any;
  ID!: number;
  constructor( public sarv: AllServiceService, public router: Router) { }

  ngOnInit(): void {
    this.retrieveAllUsers();
    
  }
  retrieveAllUsers():void{
    this.sarv.getAllUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
      this.getUser();
      this.retrieveIdUsers(this.ID)
    },
      error=>{
        console.log(error);
      })
  }

  
  getUser(){
    let i=0
    for(i;i<this.users.length;i++){
      if(this.users[i].status ===true){
        console.log("Inside Get User")
        this.ID=i;
        console.log(this.ID)
      }
    }
  }
  retrieveIdUsers(id: any): void {
    this.sarv.getuser(id+1).subscribe(data => {
      this.currUser = JSON.parse(JSON.stringify(data));
      console.log(this.currUser);
      console.log(this.currUser.fname);
      console.log(this.currUser.accType);
      this.showSubscription(this.currUser);
    },
      error => {
        console.log(error);
      })
  }
  showSubscription(currUser: any){
    console.log(currUser);
    if(currUser.accType==true){
      //console.log("inside box2");
      document.getElementById('box2')?.classList.add('select');
      document.getElementById('box2')?.setAttribute('data-bs-target', '#exampleModal');
      this.disp= "You are currently our Premium Member. Explore Everything because it is Free for you."; 
    }else{
      document.getElementById('box1')?.classList.add('select');
      this.disp= "You are currently on Free Membership, and can view only Free Contents. Upgrade Now by Clicking on Premium.";
    }
    
  }
  goToPayment(){
    //window.alert("You are Already our Premium Member.");  
    if(this.currUser.accType==false){
      this.router.navigateByUrl("payment");
    }
  }
}
