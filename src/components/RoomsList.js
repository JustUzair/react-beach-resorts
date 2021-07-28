import React from "react";
import Room from "./Room";
export default function RoomList({ rooms }) {
  if (!rooms.length)
    return (
      <div className="empty-search">
        <h3>No match found</h3>
      </div>
    );
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}
