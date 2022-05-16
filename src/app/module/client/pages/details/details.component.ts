import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePageService } from '../services/service-page.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dados:any
  constructor(
    private services: ServicePageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.services.appListFilmBrev.subscribe(res => {
      const id = this.activatedRoute.snapshot.params['id'];
      let filter = res.filter((element: any) => {
        return element.id === id
      })
      filter.forEach((element: any) => {
        this.dados = element
      })
    })

  }


}
