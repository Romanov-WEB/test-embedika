import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Media } from "../../model/dataEniList";
import { Observable } from "rxjs";
import { SearchFormService } from "./search-form.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  @Input() data!: Observable<Media[]>
  @Output() newList: EventEmitter<Observable<Media[]>> = new EventEmitter<Observable<Media[]>>()

  constructor(public service: SearchFormService) {
    service.data = this.data
  }
  submit(): void {
    this.newList.emit(
      this.service.filterByArray(this.data)
    )
  }
}
