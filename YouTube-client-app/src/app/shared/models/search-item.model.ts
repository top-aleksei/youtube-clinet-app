export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: SearchStatistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
export interface Thumbnails {
  default: ThumbnailItem;
  medium: ThumbnailItem;
  high: ThumbnailItem;
  standard: ThumbnailItem;
  maxres: ThumbnailItem;
}

export interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}

export interface SearchStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
