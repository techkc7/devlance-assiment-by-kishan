import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import Axios from "axios";

function Usercard() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-gray-800 ">
          <h1>
            <span className="pr-2"> {details.name?.title} </span>
            <span> {details.name?.first} </span>
            <span> {details.name?.last} </span>
          </h1>
        </CardTitle>
        <CardText>
         
          <p className="span">City: {details.location?.city}</p>
          <p>Phone: {details.phone}</p>
          <p>Email: {details.email}</p>
          <p>Age: {details.dob?.age}</p>
          <button className="btn btn-dark text-large" onClick={fetchDetails}>Click To Change</button>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Usercard;
