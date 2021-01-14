import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./CardDetail.css";
const CardDetail = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="card">
      <div className="card__image__container">
        <img
          src="https://realestatehut.com/wp-content/uploads/2019/10/BLOCK-4_-Thumbnail.jpg"
          alt=""
        />
        <div
          onClick={() => setClick(!click)}
          className={
            click
              ? "property__favorite property__favorite--active"
              : "property__favorite"
          }
        >
          <i class="far fa-heart"></i>
        </div>
        <div className="property__status">
          <button className="property__featured">
            <i class="fas fa-star"></i> <span>FEATURED</span>
          </button>
          <button className="property__sold">
            <i class="fas fa-check"></i> <span>SOLD</span>
          </button>
        </div>
      </div>
      <p className="card__tag--red">$45,000 for sale</p>
      <p className="card__tag--black">Residential Property</p>
      <Grid container direction="row">
        <Grid item xs={12} md={6}>
          <div className="property__info info-1">
            <i class="fas fa-bed"></i>
            <p>2 Bedrooms(s)</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="property__info info-2">
            <i class="fas fa-bath"></i>
            <p>15 Bathroom(s)</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="property__info info-3">
            <i class="fas fa-bed"></i>
            <p>2 Bedrooms(s)</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="property__info info-4">
            <i class="fas fa-bed"></i>
            <p>2 Bedrooms(s)</p>
          </div>
        </Grid>
      </Grid>
      <p className="card__tag--black-last">
        Delta, 48 Boulevard jourdan, mississaunga
      </p>
    </div>
  );
};

export default CardDetail;
