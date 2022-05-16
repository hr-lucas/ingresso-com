import { emBrev } from './model/home';
import { ServicePageService } from './../services/service-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public embrev: any
  public destaque:any
  constructor(
    private services: ServicePageService
  ) { }

  ngOnInit(): void {
    this.services.appListFilmBrev.subscribe(
      res => {
        console.log(res)
        let obj: any[] = []
        res.forEach((e: any, i: number) => {
          let a: any = {}
          a.id = res[i].id
          a.title = res[i].title
          a.url = res[i].images
          a.genres = res[i].genres
          a.trailers = res[i].trailers[0]
          obj.push(a)
        })
        console.log(obj)
        this.destaque = obj[0]
        this.embrev = obj




      }


    )
  }

}
