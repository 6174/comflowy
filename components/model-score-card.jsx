import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const RATING = {
  'zh-CN': 'Comflowy 评分：',
  'en-US': 'Comflowy Rating:',
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

export default function ModelScoreCard({score,downloadlink}) {
  const { locale } = useRouter()
  const { theme } = useTheme()

  let scoreText = SCORE_TEXT[locale][score];

  const lightThemeButtonStyle = "w-full px-6 py-2 border border-gray-500 rounded-lg bg-black text-white";
  const darkThemeButtonStyle = "w-full px-6 py-2 border border-gray-500 rounded-lg bg-white text-black";
  const buttonStyle = theme === 'dark' ? darkThemeButtonStyle : lightThemeButtonStyle;

  return (
    <div class="border-l-2 border-gray-300 flex flex-col h-full">
      <div className="px-4">
        <p className="text-l font-bold">{RATING[locale]}</p>
        <p className="text-6xl my-2 font-bold ">{score}</p>
        <p className="text-2xl font-bold">{scoreText}</p>
      </div>
      <div className="p-2 mt-auto ml-2">
        <button href={downloadlink} className={buttonStyle}>
          {DOWNLOAD[locale]}
        </button>
      </div>
    </div>
  )
}
