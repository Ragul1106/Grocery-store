import React from "react";
import BlogImage from "../assets/images/blog header image.png"; 

const ReadMore = () => {
  return (
    <div className="container py-5" style={{marginTop:"100px"}}>
      <h2 className="text-center fs-1 fw-bold mb-4" style={{color:"#FF7C08"}}>Eco-Friendly Shopping Tips</h2>

      <p className="fs-3">
        Grocery Items should be an essential component of every interior design. Greenery brightens up indoor spaces and is known to have mood-boosting qualities.
        Indoor plants are popular because they are relatively easy to take care of, provide health benefits and can be used in a variety of indoor décor themes.
        Indoor plants are a great option for those who have little yard space for an outdoor garden or for those who live in climates with severely cold winters.
      </p>

      <p className="fs-3">
        So, if you’re caring for indoor plants for the first time, our ultimate guide will provide you with the necessary information to allow your green friends to thrive.
        To provide you with expert insight, we asked our Senior Horticulturist at Ambius, Matt Kostelnik, to answer the most frequently asked questions about indoor plants.
      </p>

      <div className="text-center my-4">
        <img
          src={BlogImage}
          alt="Eco-Friendly Groceries"
          className="img-fluid rounded-4 shadow"
          style={{ maxWidth: "800px" }}
        />
      </div>

      <h5 className="text-center fs-2 fw-bold mt-4" style={{color:"#FF7C08"}}>Why shopping tip for groceries is important?</h5>
      <p className="fs-3">
        Indoor plants are plants that grow indoors. There are a variety of tropical plants, like palms, that thrive in indoor environments.
      </p>

      <h5 className="text-center fs-2 fw-bold mt-4" style={{color:"#FF7C08"}}>Essential grocery lists?</h5>
      <p className="fs-3">
        Most of the time, indoor plants are already in containers, so there is no need to plant them.
        There are typically only two reasons you need to plant an indoor plant:
      </p>
      <ol className="fs-3">
        <li>If your plant is getting too big, then you will need to replant.</li>
        <li>If you wanted to grow bulbs indoors, then you will need to plant the bulbs yourself.</li>
      </ol>
    </div>
  );
};

export default ReadMore;
