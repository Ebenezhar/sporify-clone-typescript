import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

function Card(props: any) {
  console.log(props);

  return (
    <div className="card m-2" style={{ width: "10rem" }}>
      {props.data.images ? (
        <img
          className="card-img-top p-2 overflow-hidden"
          src={props.data.images.background}
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

      <div className="card-body row">
        <p className="card-text col-lg-10">{props.data.title}</p>
        <button
          className="col-lg-2"
          onClick={() => props.handleFavourites(props.data.title)}
        >
          {props.starVal ? <AiTwotoneStar /> : <AiOutlineStar />}
        </button>
      </div>
    </div>
  );
}

export default Card;
