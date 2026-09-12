import { brandAssets, externalMedia } from './assets';

const mobileScrub = Object.freeze({
  sprites: externalMedia.homepageCinematicMobileSprites,
  frameCount: 90,
  framesPerSheet: 30,
  columns: 6,
  rows: 5,
  frameWidth: 640,
  frameHeight: 360,
});

export const homepageCinematic = Object.freeze({
  video: externalMedia.homepageCinematicVideo,
  mobileVideo: externalMedia.homepageCinematicMobileVideo,
  mobileScrub,
  poster: brandAssets.cinematicFallback,
  sourcePoster: externalMedia.homepageCinematicPoster,
  fallback: brandAssets.cinematicFallback,
});
