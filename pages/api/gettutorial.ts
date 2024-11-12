import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import choosemodel from 'public/thumbnails/choose-model.png';
import worthdownloadmodels from 'public/thumbnails/worth-download-models.png';
import newtocomflowy from 'public/thumbnails/new-to-comflowy.png';
import haveproblems from 'public/thumbnails/have-problems.png';
import stablediffusionbasics from 'public/thumbnails/stable-diffusion-basics.png';
import comfyuibasics1 from 'public/thumbnails/comfyui-basics-1.png';
import comfyuibasics2 from 'public/thumbnails/comfyui-basics-2.png';
import sdpromptbasics from 'public/thumbnails/sd-prompt-basics.png';
import embedding from 'public/thumbnails/embedding.png';
import lora from 'public/thumbnails/lora.png';
import imagetoimage from 'public/thumbnails/image-to-image.png';
import upscale from 'public/thumbnails/upscale.png';
import inoutpainting from 'public/thumbnails/in-out-painting.png';
import controlnet from 'public/thumbnails/controlnet.png';
import stablediffusionadvanced from 'public/thumbnails/stable-diffusion-advanced.png';
import controlnetadvanced from 'public/thumbnails/controlnet-advanced.png';


const getTutorial = async(req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = [
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
        url: "https://www.comflowy.com/basics/new-to-comflowy",
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
        title: "ComfyUI Basics ①",
        url: "https://www.comflowy.com/basics/comfyui-foundation",
        tag: "SD Fundamentals"
      },
      {
        image: comfyuibasics2.src,
        title: "ComfyUI Basics ②",
        url: "https://www.comflowy.com/basics/basic-nodes",
        tag: "SD Fundamentals"
      },
      {
        image: sdpromptbasics.src,
        title: "SD Prompt Basics",
        url: "https://www.comflowy.com/basics/prompt",
        tag: "text-to-image"
      },
      {
        image: embedding.src,
        title: "Embedding",
        url: "https://www.comflowy.com/basics/embedding",
        tag: "text-to-image"
      },
      {
        image: lora.src,
        title: "LoRA",
        url: "https://www.comflowy.com/basics/lora",
        tag: "text-to-image"
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
        url: "https://www.comflowy.com/advanced/advanced-optional/stable-diffusion-advanced"
      },
      {
        image: controlnetadvanced.src,
        title: "ControlNet Advanced",
        url: "https://www.comflowy.com/advanced/advanced-optional/controlnet-advanced"
      },
    ];
    
    // 将 JSON 数据作为响应返回
    res.status(200).json(data);
  } catch (error) {
    // 处理错误
    res.status(500).json({ error: 'Failed to fetch tutorial data' });
  }
};

export default getTutorial;
