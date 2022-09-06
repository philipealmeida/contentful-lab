import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContentful } from '../../shared/hooks/useContentful'
import { Shoes } from '../../shared/types';
import './Home.scss'

function Home() {
  const [shoes, setShoes] = useState<null | Shoes[]>(null);
  const { getShoes } = useContentful();

  useEffect(() => {
    getShoes().then((res) => res && setShoes(res));
  }, []);

  return (
    <section className="wrapper-shoes">
      <div className="cards" data-title="Shoes">
        {shoes && shoes.map((item) => (
          <div key={item.name} className="card">
            <Link to={`/pdp/${item.name}`}>
              <picture>
                <img src={item.avatar} alt="xx" />
              </picture>
              <div className="row">
                <p className="card--title">{item.name}</p>
                <p className="card--price">{item.price}</p>
              </div>
              <p className="card--description">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Home
