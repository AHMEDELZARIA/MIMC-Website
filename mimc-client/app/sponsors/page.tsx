"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/config/fonts";

export default function SponsorsPage() {
  // Animation variants for each row (group)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Define sponsor groups with a custom logo size (Tailwind classes)
  const sponsorGroups = [
    {
      group: "Charity Partner",
      sponsors: [
        {
          name: "ICNA Relief",
          logo: "/imgs/sponsors/icna-relief.png",
          link: "https://www.icnareliefcanada.ca/?utm_source=google&utm_medium=cpc&utm_campaign=BRS00&gad_source=1&gbraid=0AAAAADhMmSP1qDaMVjcoLDBUK3eDBItbh&gclid=CjwKCAiAtYy9BhBcEiwANWQQL63gotq4sQIdyLMaZhC72-CSWmrCcoJD0SAX1LYe1ErsRvShzK8q1hoCq5gQAvD_BwE",
        },
      ],
      logoSize: "w-72",
    },
    {
      group: "Platinum",
      sponsors: [
        {
          name: "MusTravelz",
          logo: "/imgs/sponsors/mustravelz.png",
          link: "https://mustravelz.com/",
        },
      ],
      logoSize: "w-72",
    },
    {
      group: "Gold",
      sponsors: [
        {
          name: "NZF",
          logo: "/imgs/sponsors/nzf.png",
          link: "https://www.nzfcanada.com/?utm_source=google_grants&campaign=&utm_medium=search_ad&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAiAtYy9BhBcEiwANWQQLyGA5gsJXRLLAwxeprdTY3KYrRLUZG3Om8aqMUQCxomi8F8Qw7Dr-hoCVIoQAvD_BwE",
        },
      ],
      logoSize: "w-48",
    },
    {
      group: "Silver",
      sponsors: [
        {
          name: "HCI",
          logo: "/imgs/sponsors/hci.png",
          link: "https://humanconcern.org/",
        },
        {
          name: "MAH",
          logo: "/imgs/sponsors/mah.png",
          link: "https://www.mahcanada.com/",
        },
      ],
      logoSize: "w-36",
    },
    {
      group: "Bronze/Other",
      sponsors: [
        {
          name: "Ayaat Academy",
          logo: "/imgs/sponsors/ayaat-academy.png",
          link: "https://ayaatacademy.ca/",
        },
        {
          name: "IDRF",
          logo: "/imgs/sponsors/idrf.png",
          link: "https://idrf.ca/",
        },
        {
          name: "ISNA",
          logo: "/imgs/sponsors/isna.png",
          link: "https://www.isnacanada.com/",
        },
      ],
      logoSize: "w-24",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/imgs/sponsors/bg-sponsors.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-8 text-center relative group`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variants={titleVariants}
          >
            <span className="inline-block relative">
              OUR SPONSORS
              <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
            </span>
          </motion.h1>
          <motion.p
            className="text-sm md:text-base font-semibold text-[#F0FFC9] opacity-80 mb-8 mx-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Alhamdulillah for our generous sponsors. Your contributions not only uplift our community but also sow seeds of barakah and unity. May Allah SWT reward you abundantly for your kindness and bless our shared efforts in serving the Ummah.
          </motion.p>

          {sponsorGroups.map((group, idx) => (
            <motion.div
              key={idx}
              className="mb-12 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 
                className={`${cinzel.className} text-3xl font-semibold mb-6 text-[#F0FFC9]`}
                variants={itemVariants}
              >
                {group.group}
              </motion.h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {group.sponsors.map((sponsor, i) => (
                  <motion.a
                    key={i}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-transform ${group.logoSize}`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
