import React from "react";

function ArtistCard(props: any) {
  console.log(props);

  return (
    <div className="card m-2" style={{ width: "10rem" }}>
      {props.data.artist.avatar ? (
        <img
          className="card-img-top p-2 overflow-hidden"
          src={props.data.artist.avatar}
          alt="Card image cap"
        />
      ) : (
        <img
          className="card-img-top p-2 overflow-hidden"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlLpnyH6WTO56Y5ZWk61TdrogQ4DihyUSJPB4JPwyRA&s"
          }
          alt="Card image cap"
        />
      )}
    </div>
  );
}

export default ArtistCard;
