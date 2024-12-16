"use client";

import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";
import McMasterMap from "@/components/ItineraryMapPage/Map";
import { Spacer } from "@nextui-org/react";


export default function ItineraryPage() {
  const itineraryData = {
    day1: [
      {
        time: "10:00 AM",
        event: "Opening Ceremony",
        description: "Welcoming remarks and keynote speech.",
        location: "Main Auditorium",
        type: "Introduction",
      },
      {
        time: "11:00 AM",
        event: "Lecture 1",
        description: '"Truth in Our Times." An insightful discussion.',
        location: "Lecture Hall 1",
        type: "Lecture",
      },
      {
        time: "1:00 PM",
        event: "Lunch Break",
        description: "Enjoy a variety of cuisines.",
        location: "Dining Hall",
        type: "Food",
      },
      {
        time: "2:00 PM",
        event: "Workshop",
        description: '"Building Community." Interactive group activities.',
        location: "Workshop Room A",
        type: "Activity",
      },
      {
        time: "2:00 PM",
        event: "Art Workshop",
        description: "Explore Islamic art and calligraphy.",
        location: "Art Studio",
        type: "Activity",
      },
      {
        time: "4:00 PM",
        event: "Panel Discussion",
        description: '"Faith & Action." A thought-provoking dialogue.',
        location: "Panel Room B",
        type: "Panel",
      },
      {
        time: "6:00 PM",
        event: "QIYAM ACCOMMODATION",
        description: "Go to sleep.",
        location: "Accommodation Area",
        type: "Overnight",
      },
    ],
    day2: [
      {
        time: "10:00 AM",
        event: "Workshop",
        description: '"Practical Faith." Hands-on learning session.',
        location: "Workshop Room C",
        type: "Activity",
      },
      {
        time: "11:30 AM",
        event: "Lecture 2",
        description: '"The Struggle Within." A deep reflection.',
        location: "Lecture Hall 2",
        type: "Lecture",
      },
      {
        time: "1:00 PM",
        event: "Lunch Break",
        description: "Take a break and enjoy some great food.",
        location: "Dining Hall",
        type: "Food",
      },
      {
        time: "2:30 PM",
        event: "Escape Room",
        description: '"Escape Room Challenge." Test your wits.',
        location: "Escape Room A",
        type: "Activity",
      },
      {
        time: "2:30 PM",
        event: "Qur'an Recitation",
        description: "A spiritual session of Qur'an recitation.",
        location: "Prayer Room",
        type: "Spiritual",
      },
      {
        time: "4:30 PM",
        event: "Closing Lecture",
        description: '"Living with Purpose." Inspiring talk.',
        location: "Main Auditorium",
        type: "Lecture",
      },
      {
        time: "6:00 PM",
        event: "Closing Ceremony",
        description: "Farewell and thank-you.",
        location: "Main Auditorium",
        type: "Event",
      },
    ],
  };

  const renderEvents = (events) => {
    const groupedByTime = events.reduce((acc, event) => {
      acc[event.time] = acc[event.time] || [];
      acc[event.time].push(event);
      return acc;
    }, {});

    return Object.entries(groupedByTime).map(([time, eventsAtTime]) => (
      <motion.div
        key={time}
        className="flex items-start mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Time Slot */}
        <div className="w-32 text-right pr-4">
          <p className="text-lg font-bold text-[#F0FFC9]">{time}</p>
        </div>
        {/* Events for the Time Slot */}
        <div className="flex-1 border-l-4 border-[#A9DA88] pl-6 space-y-4">
          {eventsAtTime.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-white">{item.event}</h3>
              <p className="text-sm text-[#F0FFC9]">{item.description}</p>
              <p className="text-sm text-gray-300 italic">{item.location}</p>
              <Chip className="mt-2" radius="md" size="sm" variant="shadow">
                {item.type}
              </Chip>
            </div>
          ))}
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="px-4 md:px-8">
      {/* Section Title */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-7xl font-bold mb-4 text-center relative group">
          <span className="inline-block relative">
            ITINERARY
            <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
          </span>
        </h1>
        <p className="text-sm md:text-base font-medium text-[#F0FFC9] opacity-80 mb-8 text-justify">
          Get ready for an incredible two-day experience filled with inspiring
          lectures, engaging workshops, and unforgettable activities. Our
          itinerary is thoughtfully designed to provide a balance between
          learning, networking, and fun. Whether you are here for the
          thought-provoking discussions or the exciting competitions, there’s
          something for everyone to enjoy.
        </p>
      </motion.section>

      {/* Side-by-Side Itinerary */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Day 1 Schedule */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <h2 className="text-5xl font-bold mb-8 text-center relative group">
            <span className="inline-block relative">
              MIMC DAY 1
              <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
            </span>
          </h2>
          <div className="space-y-6">{renderEvents(itineraryData.day1)}</div>
        </motion.div>

        {/* Day 2 Schedule */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <h2 className="text-5xl font-bold mb-8 text-center relative group">
            <span className="inline-block relative">
              MIMC DAY 2
              <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
            </span>
          </h2>
          <div className="space-y-6">{renderEvents(itineraryData.day2)}</div>
        </motion.div>
      </motion.section>
      <Spacer y={20} />
      <McMasterMap />
    </div>
  );
}
