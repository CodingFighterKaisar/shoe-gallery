import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryImg, categoryName } = category;
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-lg my-10"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${categoryImg})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12 ">
        <Typography
          variant="h2"
          color="white"
          className=" font-medium leading-[1.5] "
        >
          {categoryName}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Category;
