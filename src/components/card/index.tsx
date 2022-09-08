import { Shoes } from "../../shared/types";

type Props = {
  data: Shoes;
}

function Card({ data }: Props) {
  if (!data) <></> 
  return (
    <div className="card-content">
      <picture>
        <img src={data.avatar} alt={data.name} />
      </picture>
      <div className="row">
        <p className="card-content--title">{data.name}</p>
        <p className="card-content--price">{data.price}€</p>
      </div>
      <p className="card-content--description">{data.description}</p>
    </div>
  )
}

export default Card