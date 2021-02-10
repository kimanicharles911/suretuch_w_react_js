import CardItem from "./CardItem";
import "./Cards.css"; 
import firstImg from "../images/img-9.jpg"

function Cards(){
  return (
    <div className="cards">
      <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={firstImg} text="Explore the deep hidden waterfall inside the Amazon Jungle" label="Adventure" path="/services"/>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;