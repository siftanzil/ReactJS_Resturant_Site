import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import LoadComments from "./LoadComments";

function DishDetail(props) {
  return (
    <div>
      <Card style={{ narginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            {props.dish.description}
            <br />
            {props.dish.price}/-
          </CardText>
          <hr />
          <LoadComments comments={props.dish.comments} />
        </CardBody>
      </Card>
    </div>
  );
}

export default DishDetail;
