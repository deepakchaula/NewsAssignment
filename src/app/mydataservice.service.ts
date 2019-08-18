import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import SettingModel from './settings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MydataserviceService {
  public customAPI;

  constructor(private http: HttpClient) { 
    this.customAPI = SettingModel.getBaseAPI();
  }

  getMyNews(page: number) {
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.customAPI);
  }
}
