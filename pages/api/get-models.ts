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
import dreamShaperXL from 'public/model/dream-shaper-xl/banner.png';
import filmGirl from 'public/model/lora/filmgirl.png';
import drehelloWorldsdxl from 'public/model/realistic/hello-world-sdxl.png';
import juggernautXL from 'public/model/realistic/juggernaut-xl.png';
import lcmAndTurbomix from 'public/model/lora/lcm-and-turbomix.png';
import majicMIXRealisti from 'public/model/realistic/majicMIX-realistic.png';
import meinaMix from 'public/model/anime/meina-mix.png';
import moxin from 'public/model/lora/moxin.png';
import pixelArtStyle from 'public/model/lora/pixel-art-style.png';
import pixelArtXL from 'public/model/lora/pixel-art-xl.png';
import realistic from 'public/model/realistic/realistic-version-banner.png';
import realVisXL from 'public/model/realistic/realvisxl.png';
import badDream from 'public/model/embedding/baddream.png';
import unrealDream from 'public/model/embedding/unrealistic-dream.png';
import negativeHand from 'public/model/embedding/negative-hand.png';
import ageSlider from 'public/model/embedding/age-slider.png';
import ageSliderNegative from 'public/model/embedding/age-slider-negative.png';

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
      {
        image: dreamShaperXL.src,
        title: "DreamShaper XL",
        url: "https://www.comflowy.com/model/dream-shaper-xl",
        tag: "Checkpoint",
        size: "6.46 GB"
      },
      {
        image: filmGirl.src,
        title: "FilmGirl",
        url: "https://www.comflowy.com/model/filmgirl",
        tag: "LoRA",
        size: "144.11 MB"
      },
      {
        image: drehelloWorldsdxl.src,
        title: "Hello World SDXL",
        url: "https://www.comflowy.com/model/hello-world-sdxl",
        tag: "Checkpoint",
        size: "6.46 GB"
      },
      {
        image: juggernautXL.src,
        title: "Juggernaut XL",
        url: "https://www.comflowy.com/model/juggernaut-xl",
        tag: "Checkpoint",
        size: "6.62 GB"
      },
      {
        image: lcmAndTurbomix.src,
        title: "LCM & TurboMix",
        url: "https://www.comflowy.com/zh-CN/model/lcm-and-turbomix",
        tag: "LoRA",
        size: "12.36 MB"
      },
      {
        image: majicMIXRealisti.src,
        title: "MajicMIX Realistic",
        url: "https://www.comflowy.com/model/majicMIX-realistic",
        tag: "Checkpoint",
        size: "1.99 GB"
      },
      {
        image: meinaMix.src,
        title: "Meina Mix",
        url: "https://www.comflowy.com/model/meina-mix",
        tag: "Checkpoint",
        size: "1.99 GB"
      },
      {
        image: moxin.src,
        title: "MoXin",
        url: "https://www.comflowy.com/model/moxin",
        tag: "LoRA",
        size: "144.11 MB"
      },
      {
        image: pixelArtStyle.src,
        title: "Pixel Art Style",
        url: "https://www.comflowy.com/model/pixel-art-style",
        tag: "LoRA",
        size: "144.11 MB"
      },
      {
        image: pixelArtXL.src,
        title: "Pixel Art XL",
        url: "https://www.comflowy.com/model/pixel-art-xl",
        tag: "LoRA",
        size: "162.64 MB"
      },
      {
        image: realistic.src,
        title: "Realistic Vision V6.0",
        url: "https://www.comflowy.com/model/realistic-vision-v-6",
        tag: "Checkpoint",
        size: "3.97 GB"
      },
      {
        image: realVisXL.src,
        title: "RealVisXL",
        url: "https://www.comflowy.com/model/realvisxl",
        tag: "Checkpoint",
        size: "6.46 GB"
      },
      {
        image: badDream.src,
        title: "Bad Dream",
        url: "https://www.comflowy.com/model/baddream",
        tag: "Embedding",
        size: "207.85 KB"
      },
      {
        image: unrealDream.src,
        title: "Unrealistic Dream",
        url: "https://www.comflowy.com/model/unrealistic-dream",
        tag: "Embedding",
        size: "111.85 KB"
      },
      {
        image: negativeHand.src,
        title: "Negative Hand",
        url: "https://www.comflowy.com/model/negative-hand",
        tag: "Embedding",
        size: "24.93 KB"
      },
      {
        image: ageSlider.src,
        title: "Age Slider",
        url: "https://www.comflowy.com/model/age-slider",
        tag: "Embedding",
        size: "51.86 KB"
      },
      {
        image: ageSliderNegative.src,
        title: "Age Slider Negative",
        url: "https://www.comflowy.com/model/age-slider-negative",
        tag: "Embedding",
        size: "36.94 KB"
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
