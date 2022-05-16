import { Component, OnInit } from '@angular/core';
import { ServicePageService } from '../services/service-page.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  public embrev: any

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
          obj.push(a)
        })
        console.log(obj)
        this.embrev = obj

      }


    )
  }

}
