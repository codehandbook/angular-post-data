import { Component, OnInit } from '@angular/core';
import { RootService } from './root.service'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private rootService : RootService) { }

  ngOnInit() {
  	this.rootService.getAPIData().subscribe((response)=>{
  		console.log('response from GET API is ', response)
  	},(error) => {
  		console.log('error is ', error)
  	})

    this.rootService.postAPIData().subscribe((response)=>{
      console.log('response from POST API is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    })
  }

}
