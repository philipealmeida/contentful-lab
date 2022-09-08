import { Link, useParams } from 'react-router-dom';
import { useGraphQLContentful } from '../../shared/graphql/hooks/graphql-use-contentful';
import { queryShoeById } from '../../shared/graphql/queries/shoes';
import { DataShoe } from '../../shared/types';
import './PDP.scss';

function PDP() {
  const { id } = useParams();
  const { data } = useGraphQLContentful<{data: DataShoe}>
    (queryShoeById(id || ''));

  if (!data)
    return <div style={{ marginTop: '2rem' }}>
      Ops, error ocurred in get product detail.
      <Link to="/">Go to Catalog</Link></div>

  return (
    <div className='pdp-wrapper'>
      <picture>
        <img src={data.shoes.image.url} alt={data.shoes.image.title} />
      </picture>
      <div className='content-wrapper'>
        <h3>{data.shoes.name}</h3>
        <span>{data.shoes.price}€</span>
        <p className='description'>{data.shoes.description}</p>
        <a className="cta-link" target="_blank" href={data.shoes.link}>View more</a>
      </div>
    </div>
  )
}

export default PDP