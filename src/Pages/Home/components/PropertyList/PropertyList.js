import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import "./PropertyList.css";
import PropertyItem from "../PropertyItem/PropertyItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const PropertyList = () => {
  const classes = useStyles();
  const [sortby, setSortby] = useState("");

  const handleChange = (event) => {
    setSortby(event.target.value);
  };
  return (
    <div className="propertylist">
      <div className="propertylist__heading">
        <h1 className="propertylist__heading__text">
          Properties in mississaunga
        </h1>
        <div className="propertylist__heading__items">
          <p>7 out of 500 Listing</p>
          <FormControl variant="outlined" style={{ marginLeft: "10px" }}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Sort By
            </InputLabel>
            <Select
              native
              value={sortby}
              onChange={handleChange}
              label="Sort By"
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value="price">price</option>
              <option value="rating">ratings</option>
              <option value="status">status</option>
            </Select>
          </FormControl>
          <button className="button__map">
            <i class="fas fa-map" style={{ fontSize: "18px" }}></i>
          </button>
          <button className="button__table">
            <i class="fas fa-table" style={{ fontSize: "18px" }}></i>
          </button>
        </div>
      </div>
      <PropertyItem />
    </div>
  );
};

export default PropertyList;
