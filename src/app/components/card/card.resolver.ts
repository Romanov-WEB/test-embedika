import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataCardsService } from "../../services/get-data-cards.service";
import { Media } from "../../model/dataEniList";

@Injectable({
  providedIn: 'root'
})
export class CardResolver implements Resolve<Media> {
  constructor(private dataCards: GetDataCardsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Media> {
    return this.dataCards.getDataCard(route.paramMap.get('id')!)
  }
}
