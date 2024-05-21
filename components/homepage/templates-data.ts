import instantIDBasicThumbnail from "./templates-thumbnails/instant_basic.png";
import instantIDIPAdapterThumbnail from "./templates-thumbnails/instant_ipadapter.png";
import instantIDPosedThumbnail from "./templates-thumbnails/instant_posed.png";
import instantIDStickerThumbnail from "./templates-thumbnails/instant_sticker.png";

import layerDiffusionRemoveBackgroundThumbnail from "./templates-thumbnails/layer_diffusion_remove_background.png";
import oldPhotoThumbnail from "./templates-thumbnails/OldPhoto.png";
import memojiThumbnail from "./templates-thumbnails/Memoji.png";
import replaceBackgroundwithRMBGThumbnail from "./templates-thumbnails/replace-background-withRMBG.png";
import replaceBackgroundThumbnail from "./templates-thumbnails/replace-background.png";
import combineBackgroundWithRMBGTumbnail from "./templates-thumbnails/combine-background-withRMBG.png";
import combineBackgroundTumbnail from "./templates-thumbnails/combine-background.png";
import rMBGRemoveBackgroundThumbnail from "./templates-thumbnails/RMBG-remove-background.png";
import bIRefNetRemoveBackgroundThumbnail from "./templates-thumbnails/BIRefNet-remove-background.png";
import instantIDGhibliThumbnail from "./templates-thumbnails/instant_ghibli.png";

export type Template = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
};

const url = "https://app.comflowy.com/templates";
export const TemplatesInfo: Template[] = [
  {
    image: instantIDBasicThumbnail.src,
    title: "InstantID Basic",
    url,
  },
  {
    image: instantIDIPAdapterThumbnail.src,
    title: "InstantID IP Adapter",
    url,
  },
  {
    image: instantIDPosedThumbnail.src,
    title: "InstantID Posed",
    url,
  },
  {
    image: oldPhotoThumbnail.src,
    title: "Old Photo Restoration",
    url,
  },
  
  {
    image: memojiThumbnail.src,
    title: "Image to Memoji",
    url,
  },
  {
    image: instantIDStickerThumbnail.src,
    title: "Portrait to Sticker",
    url,
  },
    {
    image: instantIDGhibliThumbnail.src,
    title: "Portrait to Ghibli",
    url,
  },
  {
    image: replaceBackgroundwithRMBGThumbnail.src,
    title: "Replacement Product Background with RMBG",
    url,
  },
  {
    image: replaceBackgroundThumbnail.src,
    title: "Replacement Product Background",
    url,
  },
  {
    image: combineBackgroundWithRMBGTumbnail.src,
    title: "Combine Product Background with RMBG",
    url,
  },
  {
    image: combineBackgroundTumbnail.src,
    title: "Combine Product Background",
    url,
  },
  {
    image: bIRefNetRemoveBackgroundThumbnail.src,
    title: "Remove Background(BIRefNet)",
    url,
  },
  {
    image: rMBGRemoveBackgroundThumbnail.src,
    title: "Remove Background(RMBG)",
    url,
  },
  {
    image: layerDiffusionRemoveBackgroundThumbnail.src,
    title: "Remove Background(Layer Diffusion)",
    url,
  },
];