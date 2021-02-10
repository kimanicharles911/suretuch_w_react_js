import CardItem from "./CardItem";
import "./Cards.css"; 
import firstImg from "../images/img-9.jpg";
import secondImg from "../images/img-2.jpg";
import thirdImg from "../images/img-3.jpg";
import fourthImg from "../images/img-4.jpg";
import fifthImg from "../images/img-8.jpg";


function Cards(){
  return (
    <div className="cards">
      <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={firstImg} text="Explore the deep hidden waterfall inside the Amazon Jungle" label="Adventure" path="/services"/>
            <CardItem src={secondImg} text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path="/services"/>
          </ul>
          <ul className="cards__items">
            <CardItem src={thirdImg} text="Explore the deep hidden waterfall inside the Amazon Jungle" label="Adventure" path="/services"/>
            <CardItem src={fourthImg} text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path="/services"/>
            <CardItem src={fifthImg} text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path="/services"/>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;