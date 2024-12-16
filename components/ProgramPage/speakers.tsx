"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Rodal from "rodal";
import "rodal/lib/rodal.css"; // Import Rodal styles
import { Button } from "@nextui-org/react";

export default function Speakers() {
  const [activeSpeaker, setActiveSpeaker] = useState(null); // State for the active speaker
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  // Speaker Data
  const people = [
    {
      name: "Dr. Nazir Khan",
      occupation: "Assistant Professor @ McMaster University",
      imageUrl: "/imgs/speakers/drNazir.png",
      bio: "Dr. Nazir Khan MD, FRCPC, is a clinical neuroscientist, Islamic theologian, and Qur’anic sciences expert, currently an Assistant Professor at McMaster University. He is the Director of Research Strategy at Yaqeen Institute and previously served as founding President of Yaqeen Canada. Dr. Khan memorized the Qur’an and holds certifications in its ten canonical readings, as well as traditional certifications in Hadith and Islamic theology. He completed a Diagnostic Radiology residency at the University of Manitoba and a Neuroradiology fellowship at the University of Calgary. With experience as an Imam and educator, his work bridges science and faith.",
    },
    {
      name: "Mufti Abdul Aahab Waheed",
      occupation: "Co-founder of Miftaah Institute",
      imageUrl: "/imgs/speakers/muftiAbdul.png",
      bio: "Mufti Abdul Wahab Waheed, born and raised in Ann Arbor, Michigan, USA, memorized the Quran at age eleven. He studied Islamic Shariah for seven years in Toronto, Canada, and pursued advanced Hadith studies at Jamia Uloom Islamia in Karachi, Pakistan, under esteemed scholars. Specializing in Islamic Jurisprudence at Al-Ihsan Institute, Vancouver, B.C., he taught Fiqh and Hadith while serving as a Khateeb and lecturer. As a Co-Founder of Miftaah Institute and Michigan Islamic Institute, he actively engages in Da’wah across North America. Mufti Abdul Wahab resides in Warren, Michigan, with his wife and son and is visiting us today.",
    },
    {
      name: "Ust. Razia Hamidi",
      occupation: "CEO of DiscoverU",
      imageUrl: "/imgs/speakers/ustRazia.png",
      bio: "Razia Hamidi is a renowned spiritual teacher, relationship coach, and CEO of DiscoverU, the leading Islam-based self-development organization. Holding degrees in family psychology and education, she integrates Islamic spirituality with modern counseling to empower individuals and couples. Certified in the Gottman Seven Principles and trained in Alima studies, Razia provides tailored premarital and marriage coaching. With over 20 years of experience in nonprofits, advisory boards, and international speaking, she addresses topics like Qur’anic growth and faith-centered relationships. Through her programs, Razia’s mission, 'building believers,' inspires Muslims to cultivate resilience, self-awareness, and excellence (Ihsan) in all aspects of life.",
    },
    {
      name: "Ustadhah Nabeela Syeda",
      occupation: "Registered Psychotherapist",
      imageUrl: "/imgs/speakers/ustNabeela.png",
      bio: "Nabeela Syeda is a Registered Psychotherapist (Qualifying) with the CRPO and a member of the Ontario Association of Mental Health Professionals. She holds an Alimiyyah degree, a Master of Education in Counselling, and a Bachelor’s in Mental Health Studies. Nabeela specializes in self-esteem, stress management, immigrant experiences, trauma, and mood disorders, integrating Islamic principles with a client-centered approach. She has worked at CAMH, supported university students, and empowered Muslim women with eating disorders. Passionate about fostering resilience and hope, Nabeela combines her expertise and faith to promote healing and well-being within her community.",
    },
    {
      name: "Sh. Hosam Helal",
      occupation: "Imam @ ISNA Canada",
      imageUrl: "/imgs/speakers/shHosam.png",
      bio: "Sheikh Hosam Helal memorized the Qur’an at the age of eight and has received several Ijazahs in its recitation styles. He completed his Islamic studies at Al-Azhar University and is pursuing a PhD in Qur’anic exegesis at the University of Toronto. He founded Qur’an Journey, is an Imam and Youth & Education Manager at ISNA Canada, and serves as a Muslim Chaplain at Brock and McMaster University. He is part of the Stanford Muslim Mental Health Lab and actively engages with many MSAs across Ontario, including McMaster’s, inspiring youth through education and community involvement.",
    },
    {
      name: "Sh. Moutasem Al-Hameedy",
      occupation: "Islamic Scholar and Imam",
      imageUrl: "/imgs/speakers/shMoutasem.png",
      bio: "Sheikh Moutasem Al-Hameedy is a renowned Islamic scholar and Imam with extensive experience in Da’wah and Islamic education across Jordan, the UK, and Canada. A student of esteemed scholars influenced by Shaykh al-Albani, he has mastered disciplines like Hadith, Fiqh, Aqeedah, and Arabic linguistics. Inspired by Ibn al-Qayyim, Ibn Taymiyyah, and Imam al-Ghazali, he has served institutions such as Ibn Taymiyyah Mosque in London and Abu Huraira Center in Toronto. Through his initiative, Rashidoon, he bridges Islamic teachings with modern life, empowering Muslims to deepen their faith, revive their spirituality, and connect profoundly with Allah.",
    },
    {
      name: "Sh. Sohaib Zuberi",
      occupation: "Instructor @ Mathabah Institute",
      imageUrl: "/imgs/speakers/shSohaib.png",
      bio: "Sheikh Sohaib Zuberi memorized the Qur'an while studying Business Economics at York University. He completed management training at Cornell University and CELTA from Cambridge University before pursuing higher Islamic studies at Al-Rashid Islamic Institute. After completing the seven-year Alimiyyah program, he began an advanced Iftaa Degree in Islamic Law at Jamiah Qasim ul Uloom in Scarborough. Sheikh Sohaib works full-time with Islamic Relief Canada as Major Donors Manager. He is an instructor at Mathabah Institute, delivers khutbahs, and leads halaqahs at various masaajid and MSAs across the GTA. He is cherished by MacMSA and every community he serves.",
    },
    {
      name: "Sh. Aarij Anwer",
      occupation: "Imam in London, Ontario",
      imageUrl: "/imgs/speakers/shAarij.png",
      bio: "Shaykh Aarij Anwer is an Imam in London, Ontario, with diverse academic and professional experience. He holds degrees in Computer Science, Education, and Islamic Jurisprudence and is pursuing a Master’s in Tafsir. He leads Qutoof Academy for Arabic studies, teaches at AlKauthar Institute, and coordinates Islamic education at the London Muslim Mosque. Previously, he held leadership roles at London Muslim Mosque and Khalid Bin Waleed Mosque and served as a chaplain at Western University. He is also a marriage officiant, Hajj and Umrah leader, Zakat advisor, IDA lecturer, and board member at SPFunds Trust and the London Muslim Mosque.",
    },
    {
      name: "Sh. Numan Attique",
      occupation: "Religious Director @ ICCM",
      imageUrl: "/imgs/speakers/shNuman.png",
      bio: "Sheikh Numan Attique memorized the Qur’an at age 13 and graduated from a 5-year dawah and Sharia program under the Ministry of Islamic Affairs in Riyadh, Saudi Arabia. He holds Ijazaat in the six books of Hadith and served as an Imam in South Korea. Sheikh Numan earned a bachelor’s degree in Human Kinetics from the University of Guelph and has been involved with various Islamic institutions, including Al Falah Islamic Center and Mountain Masjid. Currently, he is the religious director at ICCM Milton and is pursuing an 8-year specialization in Ilm Al-Aqeedah under Dr. Sultan Alumayri in Makkah.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  return (
    <>
      {/* Main Section */}
      <motion.section
        className="w-full px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h3 className="text-xl font-bold text-center">PRESENTING OUR</h3>
        <h1 className="text-7xl font-bold mb-8 text-center relative group">
          <span className="inline-block relative">
            SPEAKERS
            {/* Underline Animation */}
            <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
          </span>
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14"
          variants={containerVariants}
        >
          {people.map((person, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              variants={cardVariants}
            >
              {/* Speaker Avatar */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-5 border-[#A9DA88] shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  src={person.imageUrl}
                />
              </div>
              <h3 className="text-lg uppercase text-[#A9DA88] font-semibold mt-3">
                {person.name}
              </h3>
              <p className="text-sm text-[#F0FFC9] opacity-70 font-semibold">
                {person.occupation}
              </p>
              <Button
                className="mt-4 text-[#F0FFC9] border-2 border-[#A9DA88]"
                radius="full"
                variant="ghost"
                onPress={() => {
                  setActiveSpeaker(person);
                  setModalOpen(true);
                }}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Modal */}
      <Rodal
        visible={isModalOpen}
        onClose={() => setModalOpen(false)}
        animation="zoom"
        customStyles={{
          backgroundColor: "#3B0819",
          width: "95%",
          maxWidth: "600px",
          height: "86vh",
          maxHeight: "200vh", 
          overflowY: "auto",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeSpeaker && (
          <div className="flex flex-col items-center">
            {/* Speaker Image */}
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#A9DA88] mb-4 shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={activeSpeaker.imageUrl}
                alt={activeSpeaker.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Occupation */}
            <h2 className="text-2xl uppercase font-bold text-[#F0FFC9]">
              {activeSpeaker.name}
            </h2>
            <p className="text-white font-medium uppercase tracking-widest mb-4">
              {activeSpeaker.occupation}
            </p>

            {/* Separator Line */}
            <div className="w-16 h-[2px] bg-[#A9DA88] mb-4"></div>

            {/* Bio */}
            <p className="text-white text-md leading-relaxed text-justify">
              {activeSpeaker.bio}
            </p>
          </div>
        )}
      </Rodal>

      {/* No Scroll CSS */}
      <style jsx global>{`
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
