import { useRouter } from 'next/router';
import ModelScoreCard from './model-score-card';
import Tag from './tag';

const AUTHOR = {
  'zh-CN': '作者：',
  'en-US': 'Author:',
}

const UPLOADED = {
  'zh-CN': '上传时间：',
  'en-US': 'Uploaded:',
}

const TYPE = {
  'zh-CN': '类型：',
  'en-US': 'Type: ',
}

const BASEMODEL = {
  'zh-CN': '基础模型：',
  'en-US': 'Base Model: ',
}

const LICENSE = {
  'zh-CN': '许可协议：',
  'en-US': 'License: ',
}

const COMMERCIAL = {
  'zh-CN': '商业用途：',
  'en-US': 'Commercial: ',
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
  'zh-CN': '擅长领域：',
  'en-US': 'Specializes in: ',
}

export default function ModelDetailCard({Name, Image, Author, Uploaded, Type, BaseModel, License, Commercial, Specializes, Score, Downloadlink}) {
  const { locale } = useRouter()
  return (
    <div className="rounded-lg border border-solid border-gray-300 my-4 p-4">
      
      <div className="grid grid-cols-4 gap-2">
        <img src={Image} alt="model" className="col-span-1 rounded-lg"/>
        <div className="col-span-2 px-2 text-sm">
          <div className="flex flex-row items-center pb-2">
            <p className='font-bold mr-2'>{AUTHOR[locale]}</p>
            {Author}
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold'>{UPLOADED[locale]}</p>
            {Uploaded}
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold'>{TYPE[locale]}</p>
            <Tag tag={Type}/>
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold'>{BASEMODEL[locale]}</p>
            <Tag tag={BaseModel}/>
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold mr-2'>{LICENSE[locale]}</p>
            {License}
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold mr-2'>{COMMERCIAL[locale]}</p>
            {Commercial ? (COMMERCIALYES[locale]) : (COMMERCIALNO[locale])}
          </div>
          <div className="flex flex-row items-center pb-2">
            <p className='mr-2 font-bold mr-2'>{SPECIALIZESIN[locale]}</p>
            {Specializes}
          </div>
        </div>
        <div className="col-span-1">
          <ModelScoreCard 
            score={Score}
            downloadlink={Downloadlink}
          />
        </div>
      </div>
    </div>
  )
}