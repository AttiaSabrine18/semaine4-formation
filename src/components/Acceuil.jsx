// Acceuil.js
import React from "react";
import img from "../img/1.jpg";
const Acceuil = () => {
  return (
    <div>
      {" "}
      <h1>Acceuil</h1>
      <img
        src={img}
        alt="Acceuil Image"
        width={300}
      />
    </div>
  );
};

export default Acceuil;
