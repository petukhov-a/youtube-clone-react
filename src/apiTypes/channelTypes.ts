import { PageInfo, Thumbnails } from "./searchTypes";

export interface RootChannelAPI {
  items:    ChannelItem[];
  kind:     string;
  pageInfo: PageInfo;
 }
 
 export interface ChannelItem {
  brandingSettings: BrandingSettings;
  contentDetails:   ContentDetails;
  id:               string;
  kind:             string;
  snippet:          ChannelSnippet;
  statistics:       Statistics;
 }
 
 export interface BrandingSettings {
  channel: Channel;
  image:   Image;
 }
 
 export interface Channel {
  country:             string;
  description:         string;
  keywords:            string;
  title:               string;
  unsubscribedTrailer: string;
 }
 
 export interface Image {
  bannerExternalUrl: string;
 }
 
 export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
 }
 
 export interface RelatedPlaylists {
  likes:   string;
  uploads: string;
 }
 
 export interface ChannelSnippet {
  country:     string;
  customUrl:   string;
  description: string;
  localized:   Localized;
  publishedAt: Date;
  thumbnails:  Thumbnails;
  title:       string;
 }
 
 export interface Localized {
  description: string;
  title:       string;
 }
 
 export interface Statistics {
  hiddenSubscriberCount: boolean;
  subscriberCount:       string;
  videoCount:            string;
  viewCount:             string;
 }

 