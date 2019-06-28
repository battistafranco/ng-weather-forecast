import { Component, OnInit } from '@angular/core';
import { Fav } from '../../models/fav';
import { FavService } from './services/fav.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  favs$: Observable<any>;
  loading$: Observable<boolean>;
  count$: Observable<any>;
  message: string;
  constructor(private favService: FavService) {
    this.favs$ = favService.entities$;
    this.count$ = this.favService.count$;
  }

  ngOnInit() {
    this.getFavs();
  }

  add(fav: Fav) {
    this.favService.add(fav).pipe(
      finalize(() => this.message = 'Ok! Fav added.')
    );
  }

  delete(fav: Fav) {
    this.favService.delete(fav).pipe(
      finalize(() => this.message = 'Ok! Fav deleted.')
    );
    this.favs$ = this.favService.entities$

  }

  details(id) {

  }

  getFavs() {
    this.favs$ = this.favService.getAll();
  }

}
