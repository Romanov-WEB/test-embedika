export interface Media {
  id: number
  title: {
    english?: string
  }
  //Год выпуска
  seasonYear: number
  description: string
  //Фильтровать по сезону
  season: EnumSeason
  //Фильтровать по типу источника носителя
  source: EnumSource
  coverImage?: {
    extraLarge?: string
    large?: string
    medium?: string
    color?: string
  }
}

export interface PageData {
  media?: Media[]
}

export interface QueryData {
  Page?: PageData
}

export interface QueryResponse {
  Page: any;
  data?: QueryData
}

export enum EnumSeason {
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  FALL = 'FALL'
}

export enum EnumSource {
  ORIGINAL = 'ORIGINAL',
  MANGA = 'MANGA',
  LIGHT_NOVEL = 'LIGHT_NOVEL',
  VISUAL_NOVEL = 'VISUAL_NOVEL',
  VIDEO_GAME = 'VIDEO_GAME',
  OTHER = 'OTHER',
  NOVEL = 'NOVEL',
  DOUJINSHI = 'DOUJINSHI',
  ANIME = 'ANIME',
  WEB_NOVEL = 'WEB_NOVEL',
  LIVE_ACTION = 'LIVE_ACTION',
  GAME = 'GAME',
  COMIC = 'COMIC',
  MULTIMEDIA_PROJECT = 'MULTIMEDIA_PROJECT',
  PICTURE_BOOK = 'PICTURE_BOOK'
}
