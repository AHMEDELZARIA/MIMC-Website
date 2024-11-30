import React from "react";
import { Button } from "@nextui-org/react";

export default function Speakers() {
  // Speaker Data
  const people = [
    {
      name: "SH. ABCDE",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "An inspiring leader who has dedicated his life to serving the community.",
    },
    {
      name: "SH. FGHIJ",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "A highly respected academic who has contributed to modern thought.",
    },
    {
      name: "SH. KLMNO",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "A renowned author who has delivered impactful speeches worldwide.",
    },
    {
      name: "SH. PQRST",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "A committed individual focused on building a stronger community.",
    },
    {
      name: "SH. UVWXY",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "An engaging speaker who inspires audiences to achieve their goals.",
    },
    {
      name: "SH. ZYXWV",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "The visionary founder of a successful organization impacting lives.",
    },
    {
      name: "SH. VUTSR",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "A philanthropist dedicated to making the world a better place.",
    },
    {
      name: "SH. RQPON",
      occupation: "Director of Smth",
      imageUrl: "/imgs/speakers/s1.jpg",
      bio: "An activist and writer advocating for justice and equality.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8">
      <h3 className="text-xl font-bold text-center">PRESENTING OUR</h3>
      <h1 className="text-7xl font-bold mb-8 text-center relative group">
        <span className="inline-block relative">
          SPEAKERS
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Avatar */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 transition-all duration-300 ease-in-out group-hover:border-blue-500 group-hover:scale-105 group-active:scale-95 shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/50">
              <img
                alt={person.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={person.imageUrl}
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold mt-3 transition-all duration-300 ease-in-out group-hover:text-blue-500">
              {person.name}
            </h3>

            {/* Occupation */}
            <p className="text-sm text-gray-400 font-medium">
              {person.occupation}
            </p>

            <Button className="mt-2" radius="full" variant="ghost">
              Learn More
            </Button>

            {/* Modal */}
          </div>
        ))}
      </div>
    </section>
  );
}
