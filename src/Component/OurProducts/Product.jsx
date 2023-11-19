import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import airjordan from "../../assets/images/shoes/airjordan.jpg";

const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <Card className="w-full rounded-lg border-2 border-gray-400">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-78 h-52 rounded-tl-md rounded-tr-md "
      >
        <img src={img} alt="card-image" className=" w-full h-full" />
        <div>
          <span className="absolute text-red-300 text-3xl top-0 right-2">
            {rating}
          </span>
        </div>
      </CardHeader>
      <CardBody className="flex  justify-between content-center items-center px-2 bg-sky-300">
        <Typography
          color="blue-gray"
          className="font-medium text-pink-400 text-xl py-2 "
        >
          {title}
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          $ {price}
        </Typography>
      </CardBody>
      <CardFooter className="">
        <button className="text-white w-full py-2 bg-blue-400 hover:bg-blue-800 hover:rounded-bl-lg hover:rounded-br-lg ">
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default Product;
