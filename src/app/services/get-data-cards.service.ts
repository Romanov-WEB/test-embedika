import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { filter, map, Observable } from "rxjs";
import { Media, QueryResponse } from "../model/dataEniList";

const query = gql`
  query {
    Page {
      media {
        id
        title {
          english
        }
        seasonYear
        season
        source
        description
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetDataCardsService {
  constructor(private apollo: Apollo) {}

  getAll(): Observable<Media[]>{
    return this.apollo
      .watchQuery<QueryResponse>({ query })
      .valueChanges.pipe(
        filter(Boolean),
        map((response) => {
          return response.data.Page.media
        }))
  }

  getDataCard(id: string): Observable<Media> {
    return this.apollo
      .watchQuery<QueryResponse>({ query })
      .valueChanges.pipe(
        filter(Boolean),
        map((response) => {
          return response.data.Page.media.find((item: Media) => item.id === +id)
        }))
  }

}
