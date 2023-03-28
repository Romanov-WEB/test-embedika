import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from "rxjs";

import { DashboardService } from "./dashboard.service";
import { GetDataCardsService } from "../../services/get-data-cards.service";
import { Media } from "../../model/dataEniList";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  dataList$: Observable<Media[]>
  constructor(
    private readonly dataCards: GetDataCardsService,
    public service: DashboardService
  ) {
    this.dataList$ = dataCards.getAll()
  }

  updateDate($event: Observable<Media[]>): void {
    this.service.resetPagination()
    this.service.changeList$ = $event.pipe(
      map((cardList) => {
        this.service.setCurrentData(cardList);
        return cardList
      })
    )
  }
}
