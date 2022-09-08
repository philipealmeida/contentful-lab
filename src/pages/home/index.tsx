import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
import { useContentful } from '../../shared/hooks/useContentful'
import { Banner, Shoes } from '../../shared/types';
import './Home.scss'

function Home() {
  const [shoes, setShoes] = useState<null | Shoes[]>(null);
  const [heroBanner, setHeroBanner] = useState<null | Banner[]>(null);
  const { getShoes, getHeroShoesBanner } = useContentful();

  useEffect(() => {
    getShoes().then((res) => res && setShoes(res));
    getHeroShoesBanner().then((res) => res && setHeroBanner(res));
  }, []);


  return (
    <section className="wrapper-shoes">
      {heroBanner && heroBanner.map((banner) => (
        <div key={banner.title} className="hero-banner">
          <picture>
            <img src={banner.image} alt={banner.title} />
          </picture>
          <a className="cta-banner" target="_blank" href={banner.link}></a>
        </div>
      ))}
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
