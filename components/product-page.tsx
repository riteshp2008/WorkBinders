"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("s");

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <header className="p-4 flex items-center justify-between border-b">
        <h1 className="text-pink-600 font-semibold">THAT GIRL</h1>
        <div className="flex gap-2">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </header>

      <main className="pb-20">
        <div className="relative aspect-[3/4] w-full">
          <img
            src="https://img.tatacliq.com/images/i20//437Wx649H/MP000000023898198_437Wx649H_202409292001361.jpeg"
            alt="Pleated Slip Dress"
            className="object-cover"
          />
        </div>

        <div className="p-4 space-y-4">
          <div>
            <h2 className="text-lg font-medium">Pleated Slip Dress</h2>
            <p className="text-lg font-semibold">£14.14</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Color</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-pink-500 ring-2 ring-offset-2 ring-pink-500" />
              <button className="w-8 h-8 rounded-full bg-black" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Size</p>
            <RadioGroup
              defaultValue={selectedSize}
              onValueChange={setSelectedSize}
              className="flex gap-2"
            >
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <label
                  key={size}
                  className={`px-4 py-2 border rounded-md cursor-pointer ${
                    selectedSize === size.toLowerCase()
                      ? "border-pink-500 bg-pink-50 text-pink-500"
                      : ""
                  }`}
                >
                  <RadioGroupItem
                    value={size.toLowerCase()}
                    className="hidden"
                  />
                  {size}
                </label>
              ))}
            </RadioGroup>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800">
            ORDER
          </Button>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger>About the Product</AccordionTrigger>
              <AccordionContent>
                Product details and description go here.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Wash Care Instructions</AccordionTrigger>
              <AccordionContent>
                Care instructions and washing guidelines go here.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="service">
              <AccordionTrigger>Service & Policy</AccordionTrigger>
              <AccordionContent>
                Service and policy information go here.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Ratings & Reviews</h3>
              <button className="text-pink-500">Write Review</button>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">4.0</div>
                <div className="flex gap-0.5">
                  <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                  <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                  <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                  <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <p className="text-sm text-gray-500">5 Reviews</p>
              </div>

              <div className="grid gap-2 flex-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="text-sm text-gray-500 w-3">{rating}</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-pink-500 rounded-full"
                        style={{
                          width: rating === 4 ? "80%" : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square relative">
                <Image
                  src="/placeholder.svg"
                  alt={`Product photo ${i}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">You Might Also Like</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/placeholder.svg"
                      alt={`Similar product ${i}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="text-sm font-medium">£14.99</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
