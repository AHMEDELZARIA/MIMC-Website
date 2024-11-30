import { title } from "@/components/primitives";

export default function SponsorsPage() {
  return (
    <div>
      {/* Section Title */}
      <h1 className="text-7xl font-bold mb-4 text-center relative group">
        <span className="inline-block relative">
          SPONSORS
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>
      <p className="text-base text-center font-medium text-gray-300 mb-8">
        Jazaka Allahu khayrain to all of our amazing sponsors. something
        something smthg i want to be genuine and words aren’t wording rn. Click
        their logo to learn more about them!
      </p>
    </div>
  );
}
