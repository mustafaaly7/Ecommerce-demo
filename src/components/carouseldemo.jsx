import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                    <img 
                      src={data.images[0]} 
                      alt={data.title} 
                      className="w-full h-52 object-cover" // Set image height and use object-fit
                    />
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
