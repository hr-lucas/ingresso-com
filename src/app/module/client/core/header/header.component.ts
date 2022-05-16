import { header } from './model/header';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter()

  constructor() { }
  nav: header[] = [
    {
      link: '/home',
      name: 'Destaque',
      exact: true,
      admn: false,
      icon:'uil uil-ticket'
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: true,
      admn: false,
      icon:'uil uil-ticket'

    },
    {
      link: '/cinemas',
      name: 'Cinema',
      exact: true,
      admn: false,
      icon:'uil uil-ticket'
    },
    {
      link: '/eventos',
      name: 'Eventos',
      exact: true,
      admn: false,
      icon:'uil uil-ticket'

    },
  ]

  ngOnInit(): void {

  }

  public search(value: string){
    this.emmitSearch.emit(value)
  }

}
