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

export const TemplatesInfo: Template[] = [
  {
    image: instantIDBasicThumbnail.src,
    title: "InstantID Basic",
    url: "https://www.comflowy.com/",
  },
  {
    image: instantIDIPAdapterThumbnail.src,
    title: "InstantID IP Adapter",
    url: "https://www.comflowy.com/",
  },
  {
    image: instantIDPosedThumbnail.src,
    title: "InstantID Posed",
    url: "https://www.comflowy.com/",
  },
  {
    image: oldPhotoThumbnail.src,
    title: "Old Photo Restoration",
    url: "https://www.comflowy.com/",
  },
  {
    image: instantIDStickerThumbnail.src,
    title: "Portrait to Sticker",
    url: "https://www.comflowy.com/",
  },
  {
    image: memojiThumbnail.src,
    title: "Image to Memoji",
    url: "https://www.comflowy.com/",
  },
  {
    image: replaceBackgroundwithRMBGThumbnail.src,
    title: "Replacement Product Background with RMBG",
    url: "https://www.comflowy.com/",
  },
  {
    image: replaceBackgroundThumbnail.src,
    title: "Replacement Product Background",
    url: "https://www.comflowy.com/",
  },
  {
    image: rMBGRemoveBackgroundThumbnail.src,
    title: "Remove Background(RMBG)",
    url: "https://www.comflowy.com/",
  },
  {
    image: layerDiffusionRemoveBackgroundThumbnail.src,
    title: "Remove Background(Layer Diffusion)",
    url: "https://www.comflowy.com/",
  },
  {
    image: combineBackgroundWithRMBGTumbnail.src,
    title: "Combine Product Background with RMBG",
    url: "https://www.comflowy.com/",
  },
  {
    image: combineBackgroundTumbnail.src,
    title: "Combine Product Background",
    url: "https://www.comflowy.com/",
  },
  {
    image: bIRefNetRemoveBackgroundThumbnail.src,
    title: "Remove Background(BIRefNet)",
    url: "https://www.comflowy.com/",
  },
  {
    image: instantIDGhibliThumbnail.src,
    title: "Portrait to Ghibli",
    url: "https://www.comflowy.com/",
  },
];