export interface RootSearchAPI {
  items:         SearchItem[];
  kind:          string;
  nextPageToken: string;
  pageInfo:      PageInfo;
  regionCode:    string;
 }
 
 export interface SearchItem {
  id:      ID;
  kind:    string;
  snippet: SearchSnippet;
 }
 
 export interface ID {
  kind:    string;
  videoId: string;
 }
 
 export interface SearchSnippet {
  channelId:            string;
  channelTitle:         string;
  description:          string;
  liveBroadcastContent: string;
  publishTime:          Date;
  publishedAt:          Date;
  thumbnails:           Thumbnails;
  title:                string;
 }
 
 export interface Thumbnails {
  default: Default;
  high:    Default;
  medium:  Default;
 }
 
 export interface Default {
  height: number;
  url:    string;
  width:  number;
 }
 
 export interface PageInfo {
  resultsPerPage: number;
  totalResults:   number;
 }