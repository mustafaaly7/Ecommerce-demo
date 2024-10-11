import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export function CarouselDemo({ products }) {
  return (
    <div className="relative w-full">
      <Carousel className="w-full overflow-hidden">
        <CarouselContent className="flex">
          {products?.map((data, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 lg:basis-1/5 md:basis-1/3"
            >
              <div className="flex justify-center">
                <Card className="w-full max-w-xs shadow ">
                  <CardContent className="flex flex-col items-center justify-between h-92"> {/* Set fixed height */}
                    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to={`/product/id/${data.id}`}>
                        <img
                          className="object-cover"
                          src={data?.thumbnail}
                          alt="product image"
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                      </Link>
                    </div>
                    <span className="text-2xl font-semibold text-black">{data.title}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
