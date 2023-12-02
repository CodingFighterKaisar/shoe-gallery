import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import './Product.css'
import AddToCart from "../AddToCart/AddToCart";


const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <Card className="w-full rounded-lg border-2 border-gray-400 wishProduct ">
      <div className="cart">
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
        <CardBody className="flex  justify-between content-center items-center px-2 ">
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
      </div>
      <CardFooter>
        <AddToCart></AddToCart>
      </CardFooter>
    </Card>
  );
};

export default Product;
