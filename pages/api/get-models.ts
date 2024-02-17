import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import renderingStyle from 'public/model/lora/3d-rendering-style.png';
import addMoreDetails from 'public/model/lora/add-more-details.png';
import animagineXL from 'public/model/anime/animagine-xl.png';
import darkSushi from 'public/model/anime/dark-sushi.png';
import detailTweaker from 'public/model/lora/detail-tweaker.png';
import dreamShaperInpainting from 'public/model/dream-shaper-inpainting/modelimg.png';
import dreamShaperLcm from 'public/model/dream-shaper-lcm/banner.png';
import dreamShaper from 'public/model/dream-shaper/banner.png';


const getModel = async(req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = [
      {
        image: renderingStyle.src,
        title: "3d Rendering Style",
        url: "https://www.comflowy.com/model/3d-rendering-style",
        tag: "LoRA",
        size: "36.11 MB"
      },
      {
        image: addMoreDetails.src,
        title: "Add More Details",
        url: "https://www.comflowy.com/model/add-more-details",
        tag: "LoRA",
        size: "9.11 MB"
      },
      {
        image: animagineXL.src,
        title: "Animagine XL",
        url: "https://www.comflowy.com/model/animagine-xl",
        tag: "Checkpoint",
        size: "6.46 GB"
      },
      {
        image: darkSushi.src,
        title: "Dark Sushi Mix",
        url: "https://www.comflowy.com/model/dark-sushi-mix",
        tag: "Checkpoint",
        size: "1.99 GB"
      },
      {
        image: detailTweaker.src,
        title: "Detail Tweaker",
        url: "https://www.comflowy.com/model/detail-tweaker",
        tag: "LoRA",
        size: "36.11 MB"
      },
      {
        image: dreamShaperInpainting.src,
        title: "DreamShaper V8.0 Inpainting",
        url: "https://www.comflowy.com/model/dream-shaper-inpainting-v-8",
        tag: "Checkpoint",
        size: "1.99 GB"
      },
      {
        image: dreamShaperLcm.src,
        title: "DreamShaper V8.0 LCM",
        url: "https://www.comflowy.com/model/dream-shaper-lcm",
        tag: "Checkpoint",
        size: "1.99 GB"
      },
      {
        image: dreamShaper.src,
        title: "DreamShaper V8.0",
        url: "https://www.comflowy.com/model/dream-shaper-v-8",
        tag: "Checkpoint",
        size: "1.99 GB"
      },

    ];
    
    // 将 JSON 数据作为响应返回
    res.status(200).json(data);
  } catch (error) {
    // 处理错误
    res.status(500).json({ error: 'Failed to fetch model data' });
  }
};

export default getModel;
