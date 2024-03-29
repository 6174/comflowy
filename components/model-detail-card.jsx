import { useRouter } from 'next/router';
import ModelScoreCard from './model-score-card';
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

const BASEMODEL = {
  'zh-CN': '基础模型',
  'en-US': 'Base Model',
}

const LICENSE = {
  'zh-CN': '许可协议',
  'en-US': 'License',
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

const SPECIALIZESIN = {
  'zh-CN': '擅长领域',
  'en-US': 'Specializes in',
}

function DetailItem({ label, value }) {
  return (
    <div className="flex flex-row items-start pb-2 grid grid-cols-7 mt-1">
      <p className='mr-2 text-[#FFFFFF]/50 col-span-2'>{label}</p>
      <div className='col-span-5'>{value}</div>
    </div>
  );
}

export default function ModelDetailCard({Name, Image, Author, Uploaded, Type, BaseModel, License, Commercial, Specializes, Score, Downloadlink, Size}) {
  const { locale } = useRouter()
  return (
    <div className="rounded-lg border border-[#31353A] bg-[#252630] my-3 p-3">
      <div className="grid grid-cols-11 gap-2">
        <img src={Image} alt="model" className="col-span-3 rounded-lg border border-[#31353A]"/>
        <div className="col-span-6 px-2 text-sm">
          <DetailItem label={AUTHOR[locale]} value={Author} />
          <DetailItem label={UPLOADED[locale]} value={Uploaded} />
          <DetailItem label={TYPE[locale]} value={Type} />
          <DetailItem label={BASEMODEL[locale]} value={BaseModel} />
          <DetailItem label={LICENSE[locale]} value={License} />
          <DetailItem label={COMMERCIAL[locale]} value={Commercial ? COMMERCIALYES[locale] : COMMERCIALNO[locale]} />
          <DetailItem label={SPECIALIZESIN[locale]} value={Specializes} />
        </div>
        <div className="col-span-2">
          <ModelScoreCard 
            score={Score}
            downloadlink={Downloadlink}
            size={Size}
          />
        </div>
      </div>
    </div>
  );
}