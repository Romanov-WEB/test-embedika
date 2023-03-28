import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs";
import { Media } from "../../model/dataEniList";
import { GetDataCardsService } from "../../services/get-data-cards.service";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  cardList!: Media[]
  startIndex = 0
  endIndex = 5
  changeList$: Observable<Media[]>
  currentPageList!: Media[]
  maxCount!: number
  counter = 1

  constructor(
    private readonly dataCards: GetDataCardsService,
  ) {
    this.changeList$ = dataCards.getAll().pipe(
      tap((data) => this.setCurrentData(data))
    )
  }

  setCurrentData (data: Media[]) {
    this.currentPageList = data.slice(this.startIndex, this.endIndex);
    this.cardList = data
    this.maxCount = Math.ceil(this.cardList.length / 5)
  }

  resetPagination(): void {
    this.counter = 1
    this.startIndex = 0
    this.endIndex = 5
  }

  nextPage(): void {
    this.counter += 1
    if (this.maxCount >= this.counter) {
      this.startIndex = this.endIndex;
      this.endIndex += 5;
      this.currentPageList = this.cardList?.slice(this.startIndex, this.endIndex);
    }else {
      this.counter -= 1
    }
  }

  prevPage(): void {
    this.counter -= 1
    if (this.counter !== 0) {
      this.endIndex = this.startIndex;
      this.startIndex -= 5;
      this.currentPageList = this.cardList?.slice(this.startIndex, this.endIndex)
    }else {
      this.counter += 1
    }
  }
}
