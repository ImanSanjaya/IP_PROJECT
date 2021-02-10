import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(){
    return this.http.get<any>(environment.api + '/customer/GetListCategory', {});
  }

  public addData(data){
    return this.http.post(environment.api + "/customer/AddDataCategory", 
    {
      'name_category_outlet': data.nama_kategori, 
      'img_path_category_outlet': data.path_gambar
    }, 
    { responseType: 'json'});
  }

}
