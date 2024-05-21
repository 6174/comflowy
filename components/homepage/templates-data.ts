import instantIDBasicThumbnail from "./templatesThumbnails/InstantID_basic.png";
import instantIDIPAdapterThumbnail from "./templatesThumbnails/InstantID_ipadapter.png";
import instantIDPosedThumbnail from "../templatesThumbnails/InstantID_posed.png";
import layerDiffusionRemoveBackgroundThumbnail from "./templatesThumbnails/layer_diffusion_remove_background.png";
import instantIDStickerThumbnail from "./templatesThumbnails/InstantID-Sticker.png";
import oldPhotoThumbnail from "./templatesThumbnails/OldPhoto.png";
import memojiThumbnail from "./templatesThumbnails/Memoji.png";
import replaceBackgroundwithRMBGThumbnail from "./templatesThumbnails/replace-background-withRMBG.png";
import replaceBackgroundThumbnail from "./templatesThumbnails/replace-background.png";
import combineBackgroundWithRMBGTumbnail from "./templatesThumbnails/combine-background-withRMBG.png";
import combineBackgroundTumbnail from "./templatesThumbnails/combine-background.png";
import rMBGRemoveBackgroundThumbnail from "./templatesThumbnails/RMBG-remove-background.png";
import bIRefNetRemoveBackgroundThumbnail from "./templatesThumbnails/BIRefNet-remove-background.png";
import instantIDGhibliThumbnail from "./templatesThumbnails/InstantID-Ghibli.png";
import replaceObjectsAndMaterialsThumbnail from "./templatesThumbnails/replace-objects-and-materials.png";

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