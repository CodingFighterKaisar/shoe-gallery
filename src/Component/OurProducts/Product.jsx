import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Product = () => {
  return (
    <Card className="w-76  rounded-lg">
      <CardHeader shadow={false} floated={false}>
        <img
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-image"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="px-2 py-2 ">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button
          ripple={false}
          fullWidth={true}
          className="text-blue-gray-900 shadow-none bg-indigo-300 hover:bg-green-400 hover:text-white py-2 "
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
