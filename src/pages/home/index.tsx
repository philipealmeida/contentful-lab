import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
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
          <Link className="card-wrapper" key={item.name} to={`/pdp/${item.id}`}>
           <Card data={item} />
          </Link>
        ))}
      </div>

    </section>
  )
}

export default Home
