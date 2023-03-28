import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Media } from "../../model/dataEniList";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  card$: Observable<Media>

  counter: any
  constructor(private route: ActivatedRoute) {
    this.card$ = this.route.data.pipe(
      filter(Boolean),
      map(({ card }) => card)
    )
  }
}
