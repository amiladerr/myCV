import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyCV';

 isDisplay=false;
 isDisplay2=true;
 isDisplay3=false;
 isDisplay4=false;
 isDisplay5=false;
 isDisplay6=false;

toggleDisplay(){
this.isDisplay=!this.isDisplay;
 this.isDisplay2=true;
 this.isDisplay3=false;
 this.isDisplay4=false;
 this.isDisplay5=false;
 this.isDisplay6=false;

}

toggleDisplay2(){
this.isDisplay2=!this.isDisplay2;
this. isDisplay3=false;
this. isDisplay4=false;
this. isDisplay5=false;
this. isDisplay6=false;
}


toggleDisplay3(){
this.isDisplay3=!this.isDisplay3;
 this.isDisplay2=false;
 this.isDisplay4=false;
 this.isDisplay5=false;
 this.isDisplay6=false;
}
toggleDisplay4(){
this.isDisplay4=!this.isDisplay4;
 this.isDisplay2=false;
 this.isDisplay3=false;
 this.isDisplay5=false;
 this.isDisplay6=false;

}

toggleDisplay5(){
this.isDisplay5=!this.isDisplay5;
 this.isDisplay2=false;
 this.isDisplay3=false;
 this.isDisplay4=false;
 this.isDisplay6=false;

}
toggleDisplay6(){
this.isDisplay6=!this.isDisplay6;
 this.isDisplay2=false;
 this.isDisplay3=false;
 this.isDisplay4=false;
 this.isDisplay5=false;


}

}
