import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})

export class HttpService{
  constructor(private http: HttpClient){}

  private createroute(route:string,environment:string){
    return `${environment}/${route}`
  }

  public postdata(route:string,body:any){
    return this.http.post(this.createroute(route,environment.serverUrl),body)
  }

  public getData(route:string){
    return this.http.get(this.createroute(route,environment.serverUrl))
  }
}
