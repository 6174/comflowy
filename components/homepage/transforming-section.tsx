import Image from 'next/image'
import WorkflowImage from './transforming-section-images/001.png'
import AppImage from './transforming-section-images/002.png'

export function TransformingSection() {
  return (
    <section className="transforming-section">
      <div className="left-panel">
        <h2>Transforming Workflow into App</h2>
        <p>You can easily transform the workflow interface into the familiar App interface!</p>
        <button className="try-now-btn">
          Try Now
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1097 18.1044L22.1003 8.64988C22.1003 7.99071 21.6671 7.5387 20.9891 7.5387H11.5252C10.8848 7.5387 10.4422 8.01896 10.4422 8.58397C10.4422 9.13956 10.9225 9.60099 11.4969 9.60099H14.8776L18.8703 9.46915L17.1565 10.9758L8.21987 19.9219C8.00328 20.1479 7.88086 20.4115 7.88086 20.6752C7.88086 21.2308 8.38937 21.7581 8.9638 21.7581C9.22747 21.7581 9.49114 21.6451 9.71715 21.4286L18.6632 12.4825L20.1887 10.7687L20.0286 14.5919V18.1327C20.0286 18.7165 20.49 19.2062 21.0645 19.2062C21.6295 19.2062 22.1097 18.7259 22.1097 18.1044Z" fill="white" />
          </svg>
        </button>
        <Image 
          src={WorkflowImage} 
          alt="Workflow Interface" 
          layout="responsive"
          className="workflow-image"
        />
      </div>
      <div className="middle-panel">
        <div className="arrow">→</div>
      </div>
      <div className="right-panel">
        <Image 
          src={AppImage} 
          alt="App Interface" 
          layout="responsive"
          className="app-image"
        />
      </div>
    </section>
  )
}
