import { Component } from '@angular/core';
import { RestserviceService } from '../api/restservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myData    : any;

  constructor(
    private service: RestserviceService
  ) {}

  ngOnInit() {
    this.loadDataRestApi();
    // this.myData = JSON.parse(localStorage.getItem('dataTmp'));
  }

  loadDataRestApi(){
    this.service.getData().subscribe( (data:any[]) =>{
      this.myData = data['category'];
      // console.log('Data Saya ===>'+JSON.stringify(data['category']));
      localStorage.setItem('dataTmp', JSON.stringify(data['category']));
    })
  }

}
