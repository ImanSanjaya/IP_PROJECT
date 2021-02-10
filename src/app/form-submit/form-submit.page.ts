import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../api/restservice.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.page.html',
  styleUrls: ['./form-submit.page.scss'],
})
export class FormSubmitPage implements OnInit {

  nama_kategori;
  path_gambar;

  constructor(
    private service: RestserviceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(){
    
    const data = {
      nama_kategori : this.nama_kategori,
      nama_kategoris : this.nama_kategori,
      path_gambar   : this.path_gambar
    };
  
    this.service.addData(data)
      .subscribe( res => {
        if(res['Success'] == true){
          // berhasil login
          console.log("Success ==> "+ JSON.stringify(res));
          this.router.navigateByUrl('/');  
        } else{
          console.log("Fail ==> "+ JSON.stringify(res));
        }
      },
      err => {
        console.error('Simpan Data Gagal ==> ', err.status);
      });
  }

}
