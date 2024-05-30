import { useRouter } from 'next/router';
import TemplateScoreCard from './template-score-card';
import Tag from './tag';

const AUTHOR = {
  'zh-CN': '作者',
  'en-US': 'Author',
}

const UPLOADED = {
  'zh-CN': '上传时间',
  'en-US': 'Uploaded',
}

const TYPE = {
  'zh-CN': '类型',
  'en-US': 'Type',
}

const COMMERCIAL = {
  'zh-CN': '商业用途',
  'en-US': 'Commercial',
}

const COMMERCIALYES = {
  'zh-CN': '允许',
  'en-US': 'Yes',
}

const COMMERCIALNO = {
  'zh-CN': '否',
  'en-US': 'No',
}

function DetailItem({ label, value }) {
  return (
    <div className="flex flex-row items-start pb-2 grid grid-cols-7 mt-1">
      <p className='mr-2 text-[#FFFFFF]/50 col-span-2'>{label}</p>
      <div className='col-span-5'>{value}</div>
    </div>
  );
}

export default function TemplateDetailCard({Name, Author, Uploaded, Type, Commercial, Score, Downloadlink}) {
  const { locale } = useRouter()
  return (
    <div className="rounded-lg border border-[#31353A] bg-[#252630] my-3 p-3">
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-5 p-2 text-sm">
          <div className="text-4xl font-bold mb-8">
            {Name}
          </div>
          <DetailItem label={AUTHOR[locale]} value={Author} />
          <DetailItem label={UPLOADED[locale]} value={Uploaded} />
          <DetailItem label={TYPE[locale]} value={Type} />
          <DetailItem label={COMMERCIAL[locale]} value={Commercial ? COMMERCIALYES[locale] : COMMERCIALNO[locale]} />
        </div>
        <div className="col-span-2">
          <TemplateScoreCard 
            score={Score}
            downloadlink={Downloadlink}
          />
        </div>
      </div>
    </div>
  );
}