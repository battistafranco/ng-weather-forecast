import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Fav } from '../../../models/fav';

@Injectable({ providedIn: 'root' })
export class FavService extends EntityCollectionServiceBase<Fav> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Fav', serviceElementsFactory);
  }

  createDb() {
    let favs = [
     
    ];
    return {favs};
  }
}