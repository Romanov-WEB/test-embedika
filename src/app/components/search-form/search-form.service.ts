import { Injectable } from '@angular/core';
import { EnumSeason, EnumSource, Media } from "../../model/dataEniList";
import { combineLatest, map, Observable, of } from "rxjs";

interface MyObjectSeason {
  id: number
  name: EnumSeason
  selected: boolean
}
interface MyObjectSource extends Omit<MyObjectSeason, 'name'> {
  name: EnumSource
}

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  data!: Observable<Media[]>
  searchTitle =''
  selectedSourceId: number | null = null
  seasonElements: Array<MyObjectSeason> = [
    {
      id: 1,
      name: EnumSeason.WINTER,
      selected: false,
    },
    {
      id: 2,
      name: EnumSeason.SUMMER,
      selected: false,
    },
    {
      id: 3,
      name: EnumSeason.SPRING,
      selected: false,
    },
    {
      id: 4,
      name: EnumSeason.FALL,
      selected: false,
    }
  ]
  sourceElements: Array<MyObjectSource> = [
    {
      id: 1,
      name: EnumSource.ORIGINAL,
      selected: false
    },
    {
      id: 2,
      name: EnumSource.DOUJINSHI,
      selected: false
    },
    {
      id: 3,
      name: EnumSource.COMIC,
      selected: false
    },
    {
      id: 4,
      name: EnumSource.GAME,
      selected: false
    },
    {
      id: 5,
      name: EnumSource.ANIME,
      selected: false
    },
    {
      id: 6,
      name: EnumSource.NOVEL,
      selected: false
    },
    {
      id: 7,
      name: EnumSource.OTHER,
      selected: false
    },
    {
      id: 8,
      name: EnumSource.MANGA,
      selected: false
    },
    {
      id: 9,
      name: EnumSource.LIGHT_NOVEL,
      selected: false
    },
    {
      id: 10,
      name: EnumSource.MULTIMEDIA_PROJECT,
      selected: false
    },
    {
      id: 11,
      name: EnumSource.VIDEO_GAME,
      selected: false
    },
    {
      id: 12,
      name: EnumSource.WEB_NOVEL,
      selected: false
    },
    {
      id: 13,
      name: EnumSource.PICTURE_BOOK,
      selected: false
    },
    {
      id: 14,
      name: EnumSource.LIVE_ACTION,
      selected: false
    },
    {
      id: 15,
      name: EnumSource.VISUAL_NOVEL,
      selected: false
    }
  ]
  constructor() { }

  getChecked(): number {
    return this.seasonElements.filter((item) => item.selected).length
  }

  toggleSource(index: number): void {
    const selectedId = this.selectedSourceId;

    this.selectedSourceId = selectedId === this.sourceElements[index].id ? null : this.sourceElements[index].id;

    this.sourceElements.forEach(item => item.selected = this.selectedSourceId === item.id);

    this.filterByArray(this.data);
  }

  filterByArray(newList: Observable<Media[]>): Observable<Media[]> {
    return combineLatest([
      newList,
      of(this.searchTitle),
      of(this.sourceElements),
      of(this.seasonElements)
    ]).pipe(
      map(([data, searchTitle, sourceElements, seasonElements]) => {
        const filterSeason: Array<EnumSeason> = seasonElements.filter((item) => item.selected)
          .map(item => item.name)

        const filterSource: Array<EnumSource> = sourceElements.filter((item) => item.selected)
          .map(item => item.name)

        return data.filter((card) => {
          const isTitleMatch = !searchTitle || card.title.english?.toLowerCase().includes(searchTitle.toLowerCase().trim());
          const isSourceMatch = !filterSource.length || filterSource.includes(card.source);
          const isSeasonMatch = !filterSeason.length || filterSeason.includes(card.season);
          return isTitleMatch && isSourceMatch && isSeasonMatch;
        });
      })
    );
  }
}
