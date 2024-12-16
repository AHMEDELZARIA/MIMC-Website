"use client";

import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { motion } from "framer-motion";

// Map container style
const containerStyle = {
  width: "100%",
  height: "600px",
};

// Center the map on McMaster University
const center = {
  lat: 43.264578808358884,
  lng: -79.91668015922147,
};

// Custom map options
const mapOptions = {
  mapTypeId: "satellite", // 3D map style with building features
  disableDefaultUI: true, // Hide default controls
  zoomControl: true, // Keep zoom control
  gestureHandling: "greedy", // Allow zoom without holding Ctrl
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "on" }], // Keep street names visible
    },
  ],
};

// List of relevant buildings with labels and colors
const buildings = [
  {
    name: "PGCLL",
    position: { lat: 43.2654, lng: -79.9182 },
    description: "The main venue for keynotes and lectures.",
    color: "#FF5733",
  },
  {
    name: "The Hub",
    position: { lat: 43.265026232009895, lng: -79.91718951306761 },
    description: "Interactive workshops and group activities.",
    color: "#33FF57",
  },
  {
    name: "Student Centre",
    position: { lat: 43.26356654215769, lng: -79.9177269126629 },
    description: "Lunch and refreshments area.",
    color: "#3357FF",
  },
  {
    name: "DBAC",
    position: { lat: 43.26499956463301, lng: -79.91584275657611 },
    description: "Location for the Art and Calligraphy Workshop.",
    color: "#FF33A8",
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering the child animations
      },
    },
  };

export default function McMasterMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAU3Vm-45jxOWTSXyUErQ9vvbuXPg6L-TQ",
  });
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading indicator while the map is loading
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative px-4 md:px-8"
    >
      {/* Section Title */}
      <motion.h1
        className="text-6xl font-bold mb-4 text-center relative group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <span className="inline-block relative">
          CAMPUS MAP
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h1>
      <motion.p
        className="text-sm md:text-base font-medium text-[#F0FFC9] opacity-80 mb-8 text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        Navigate McMaster University with ease using this interactive map.
        Explore the key locations for the event, including lecture halls, dining
        areas, and activity venues. Use the legend within the map to quickly
        identify locations by their unique colors.
      </motion.p>

      {/* Google Map */}
      <div className="relative">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={mapOptions}
        >
          {/* Render markers for each building */}
          {buildings.map((building, index) => (
            <Marker
              key={index}
              position={building.position}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: building.color,
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 8, // Adjust pin size
              }}
              onClick={() => setSelectedBuilding(building)}
            />
          ))}

          {/* Show InfoWindow when a building is selected */}
          {selectedBuilding && (
            <InfoWindow
              position={selectedBuilding.position}
              onCloseClick={() => setSelectedBuilding(null)}
            >
              <div
                style={{
                  background: "#570326",
                  color: "#F0FFC9",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3 className="font-bold mb-1">{selectedBuilding.name}</h3>
                <p className="text-sm">{selectedBuilding.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>

        {/* Map Legend within the Map */}
        <div
          className="absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 z-10"
          style={{ maxWidth: "200px" }}
        >
          <h3 className="font-bold text-lg mb-2 text-[#570326]">Legend</h3>
          <ul className="space-y-2">
            {buildings.map((building, index) => (
              <li key={index} className="flex items-center">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: building.color }}
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {building.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
