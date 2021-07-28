import React, { Component } from "react";
import defaultBcg from "../images/defaultImg.jpg";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  roomImgs;
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description: desc,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...otherImgs] = images;

    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {otherImgs.map((item, index) => {
              return (
                <img key={index} src={item} alt={name} className="roomImgs" />
              );
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{desc}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                Max Capacity :{" "}
                {capacity < 2 ? `${capacity} Person` : `${capacity} People`}
              </h6>
              <h6>Pets: {pets ? "Allowed" : "No pets Allowed"}</h6>
              <h6 style={{ fontWeight: "bold", fontStyle: "italic" }}>
                {breakfast && "**Price inclusive of Breakfast**"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>- {extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
