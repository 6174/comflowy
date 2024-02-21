import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const RATING = {
  'zh-CN': '评分',
  'en-US': 'Rating',
}

const DOWNLOAD = {
  'zh-CN': '下载',
  'en-US': 'Download',
}

const SCORE_TEXT = {
  'zh-CN': {
    10: "大师之作",
    9: "奇佳",
    8: "卓越",
    7: "优秀",
    6: "尚可",
    5: "平庸",
    4: "糟糕",
    3: "极差",
    2: "痛苦体验",
    1: "无法忍受"
  },
  'en-US': {
    10: "Masterpiece",
    9: "Amazing",
    8: "Great",
    7: "Good",
    6: "Okay",
    5: "Mediocre",
    4: "Bad",
    3: "Awful",
    2: "Painful",
    1: "Unbearable"
  }
}

export default function ModelScoreCard({score,downloadlink, size}) {
  const { locale } = useRouter()

  let scoreText = SCORE_TEXT[locale][score];

  return (
    <div className="border-l-[0.5px] border-[#3D3F53] flex flex-col h-full items-center">
      <div className="flex flex-col items-center">
        <div className="text-[#FFFFFF]/50 ">
          {RATING[locale]}
        </div>
        <div className="text-5xl font-bold bg-gradient-to-r from-[#2ACBBB] to-[#2BAFF7] rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl text-[#252630] py-2 px-3 my-4">
          {score}
        </div>
        <div className="text-lg font-bold uppercase">
          {scoreText}
        </div>
      </div>
      <div className="p-2 mt-auto ml-2 flex flex-col items-center">
        <div className="text-[#FFFFFF]/50">
          Size: {size}
        </div>
        <button href={downloadlink} className="w-full p-2 rounded-lg bg-[#2ABDAE] text-white mt-2 flex items-center justify-center">
          <img src="/tray.and.arrow.down.svg" alt="Download Icon" className="mr-2" /> 
          {DOWNLOAD[locale]}
        </button>
      </div>
    </div>
  )
}
