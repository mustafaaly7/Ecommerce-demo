import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="relative w-full">
      <Carousel className="w-full overflow-hidden"> {/* Prevent overflow */}
        <CarouselContent className="flex">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 lg:basis-1/5 md:basis-1/3" // Adjust widths
            >
              <div className="flex justify-center"> {/* Centering the card */}
                <Card className="w-full max-w-xs border-shadow"> {/* Constrain max width */}
                  <CardContent className="flex aspect-square items-center justify-center p-6 ">
                    <span className="text-2xl font-semibold text-black">HELLo</span>
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
