import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const RATING = {
  'zh-CN': '评分',
  'en-US': 'Rating',
}

const DOWNLOAD = {
  'zh-CN': '在云端启动',
  'en-US': 'Launch on Cloud',
}

export default function TemplateScoreCard({score,downloadlink}) {
  const { locale } = useRouter()
  const yellowStars = Math.floor(score / 2);
  const grayStars = 5 - yellowStars;

  return (
    <div className="border-l-[0.5px] border-[#3D3F53] flex flex-col h-full pl-10 pt-6">
      <div className="flex flex-col items-left">
        <div className='flex items-center'>
          <div className="text-[#FFFFFF]/50 ">
            {RATING[locale]}
          </div>
          <div className='flex size-4 ml-2'>
            {[...Array(yellowStars)].map((_, i) => <img key={i} src="/yellow-star.svg" alt="Star Icon" />)}
            {[...Array(grayStars)].map((_, i) => <img key={i} src="/gary-star.svg" alt="Star Icon" />)}
          </div>
        </div>
        <div className="text-5xl font-bold mt-4 mb-6">
          {score}
        </div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <a href={downloadlink} className="w-full p-2 rounded-lg bg-[#2ABDAE] text-white flex items-center justify-center">
          {DOWNLOAD[locale]}
        </a>
      </div>
    </div>
  )
}
