import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { emBrev } from '../home/model/home';

@Injectable({
  providedIn: 'root'
})
export class ServicePageService {

  constructor(
    private http: HttpClient
  ) { }

  get appListFilmBrev ():Observable<any>{
    return this.http.get<any>(`${environment.PATCH_URL}v0/templates/soon/23`).pipe(
      tap(res => res),
      tap(res => res)
    )

  }

}
