import React from "react";
import { RoomContext } from "../context";
import { Loading, Room, Title } from "../components";

export class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    // console.log(value);
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
          {/* <Loading /> */}
        </div>
      </section>
    );
  }
}
