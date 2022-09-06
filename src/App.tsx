import { useEffect, useState } from 'react';
import './App.scss'
import { useContentful } from './shared/hooks/useContentful'
import { Shoes } from './shared/types';

function App() {
  const [shoes, setShoes] = useState<null | Shoes[]>(null);
  const { getShoes } = useContentful();

  useEffect(() => {
    getShoes().then((res) => res && setShoes(res));
  }, []);


  return (
    <main className="App">
      <header>
        <h1>Contentful Lab</h1>
        <h2 className="cards-title">//Shoes</h2>
      </header>
      <section className="wrapper-shoes">
        <div className="cards" data-title="Shoes">
          {shoes && shoes.map((item) => (
            <div key={item.name} className="card">
              <picture>
                <img src={item.avatar} alt="xx" />
              </picture>
              <div className="row">
                <p className="card--title">{item.name}</p>
                <p className="card--price">{item.price}</p>
              </div>
              <p className="card--description">{item.description}</p>
            </div>
          ))}
        </div>

      </section>

    </main>
  )
}

export default App
