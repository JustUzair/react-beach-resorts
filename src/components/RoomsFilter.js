import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]?.sort(function (a, b) {
      return a - b;
    });
  };
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  // console.log(types);
  return (
    <section className="filter-container">
      <Title title="Search Rooms"></Title>
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End of Select Type */}

        {/* Guest */}
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End of Guest */}
        {/* Price  */}
        <div className="form-group">
          <label htmlFor="price">Room Price : ${price}</label>
          <input
            type="range"
            id="price"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* Price End */}
        {/* Room size  */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              min="0"
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              min="0"
              className="size-input"
              onChange={handleChange}
            />
            SQFT
          </div>
        </div>
        {/* Room size end */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* extras end */}
      </form>
    </section>
  );
}
