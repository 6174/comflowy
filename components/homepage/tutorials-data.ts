import choosemodel from './thumbnails/choose-model.png';
import worthdownloadmodels from './thumbnails/worth-download-models.png';
import newtocomflowy from './thumbnails/new-to-comflowy.png';
import haveproblems from './thumbnails/have-problems.png';
import stablediffusionbasics from './thumbnails/stable-diffusion-basics.png';
import comfyuibasics1 from './thumbnails/comfyui-basics-1.png';
import comfyuibasics2 from './thumbnails/comfyui-basics-2.png';
import sdpromptbasics from './thumbnails/sd-prompt-basics.png';
import embedding from './thumbnails/embedding.png';
import lora from './thumbnails/lora.png';
import imagetoimage from './thumbnails/image-to-image.png';
import upscale from './thumbnails/upscale.png';
import inoutpainting from './thumbnails/in-out-painting.png';
import controlnet from './thumbnails/controlnet.png';
import stablediffusionadvanced from './thumbnails/stable-diffusion-advanced.png';
import controlnetadvanced from './thumbnails/controlnet-advanced.png';
import swapFaces from './thumbnails/swap-faces.png';
import interiorDesign from './thumbnails/interior-design.png';
import generateAppLogo from './thumbnails/generate-app-logo.png';
import animecharacters001 from './thumbnails/anime-characters-001.png';

export type Tutorial = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
  tag: string;
};

export const TutorialsInfo: Tutorial[] = [
  {
    image: swapFaces.src,
    title: "Swap Faces",
    url: "https://www.comflowy.com/blog/face-swap",
    tag: "blog"
  },
  {
    image: interiorDesign.src,
    title: "Interior Design",
    url: "https://www.comflowy.com/blog/generate-interior-design-renderings",
    tag: "blog"
  },
  {
    image: generateAppLogo.src,
    title: "Generate App Logo",
    url: "https://www.comflowy.com/blog/generate-app-logo",
    tag: "blog"
  },
  {
    image: animecharacters001.src,
    title: "Turn anime characters into real people",
    url: "https://www.comflowy.com/blog/generate-anime-characters",
    tag: "blog"
  },
  {
    image: choosemodel.src,
    title: "How to choose the right model?",
    subtitle: "Not sure what model is good to download?",
    url: "https://www.comflowy.com/blog/how-to-choose-a-model",
    tag: "model suggestion"
  },
  {
    image: worthdownloadmodels.src,
    title: "10 Models Worth Downloading",
    url: "https://www.comflowy.com/blog/ten-models-worth-downloading",
    tag: "model suggestion"
  },
  {
    image: newtocomflowy.src,
    title: "New to ComFlowy?",
    subtitle: "Quickly learn how to use Comflowy.",
    url: "https://www.comflowy.com/introduction/new-to-comflowy",
    tag: "get started"
  },
  {
    image: haveproblems.src,
    title: "Having problems?",
    subtitle: "View our FAQ document.",
    url: "https://www.comflowy.com/blog/comflowy-faq",
    tag: "get started"
  },
  {
    image: stablediffusionbasics.src,
    title: "Stable Diffusion Basics",
    url: "https://www.comflowy.com/basics/stable-diffusion-foundation",
    tag: "SD Fundamentals"
  },
  {
    image: comfyuibasics1.src,
    title: "Text-to-image",
    url: "https://www.comflowy.com/basics/comfyui-foundation",
    tag: "SD Fundamentals"
  },
  {
    image: comfyuibasics2.src,
    title: "Basic operations",
    url: "https://www.comflowy.com/basics/basic-nodes",
    tag: "SD Fundamentals"
  },
  {
    image: sdpromptbasics.src,
    title: "SD Prompt Basics",
    url: "https://www.comflowy.com/basics/prompt",
    tag: "SD Fundamentals"
  },
  {
    image: embedding.src,
    title: "Embedding",
    url: "https://www.comflowy.com/basics/embedding",
    tag: "SD Fundamentals"
  },
  {
    image: lora.src,
    title: "LoRA",
    url: "https://www.comflowy.com/basics/lora",
    tag: "SD Fundamentals"
  },
  {
    image: imagetoimage.src,
    title: "Image to Image",
    url: "https://www.comflowy.com/advanced/image-to-image",
    tag: "image-to-image"
  },
  {
    image: upscale.src,
    title: "Upscale",
    url: "https://www.comflowy.com/advanced/upscale",
    tag: "image-to-image"
  },
  {
    image: inoutpainting.src,
    title: "Inpainting & Outpainting",
    url: "https://www.comflowy.com/advanced/in-out-painting",
    tag: "image-to-image"
  },
  {
    image: controlnet.src,
    title: "ControlNet",
    url: "https://www.comflowy.com/advanced/controlnet",
    tag: "image-to-image"
  },
  {
    image: stablediffusionadvanced.src,
    title: "Stable Diffusion Advanced",
    url: "https://www.comflowy.com/advanced/stable-diffusion-advanced",
    tag: "advanced"
  },
  {
    image: controlnetadvanced.src,
    title: "ControlNet Advanced",
    url: "https://www.comflowy.com/expert/controlnet-advanced",
    tag: "advanced"
  },
];

export const sdTutorials = TutorialsInfo.filter(tutorial => tutorial.tag === 'SD Fundamentals');