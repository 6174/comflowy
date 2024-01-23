import { Cards } from 'nextra/components'
import {PageCard}  from './blog-card'

export default function ModelCards() {
  return (
    <div>
      <Cards className="mb-10">
        <PageCard 
          pagesUnderRoute={"/model"}
        />
      </Cards>
    </div>
  );
}