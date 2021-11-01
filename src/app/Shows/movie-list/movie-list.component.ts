import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const movieList: {name: string, rating: number, genre: string}[] = [
  {'name': 'The Matrix', 'rating': 4.9, 'genre': 'Sci Fi'},
  {'name': 'Inception', 'rating': 3.5, 'genre': 'Sci Fi'}
  
];

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public model: any;

  search: OperatorFunction<string, readonly {name, rating, genre}[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : movieList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  cars = [
    { id: 1, name: "BMW Hyundai" },
    { id: 2, name: "Kia Tata" },
    { id: 3, name: "Volkswagen Ford" },
    { id: 4, name: "Renault Audi" },
    { id: 5, name: "Mercedes Benz Skoda" },
  ];
  
  selected = [{ id: 3, name: "Volkswagen Ford" }];
}


