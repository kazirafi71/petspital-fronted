import React from "react";

const HomeServiceList = ({ item }) => {
  const { img, id, title } = item;
  return (
    <div className="text-center">
      <img src={img} alt="" />
      <p style={{ color: "#E61B43", fontWeight: "bold" }} className="py-2">
        {title}
      </p>
    </div>
  );
};

export default HomeServiceList;
