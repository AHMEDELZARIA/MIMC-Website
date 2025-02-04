"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/config/fonts";

export default function BazaarPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const vendors = [
    {
      logo: "/imgs/vendors/lehijab.png",
      name: "Le Hijab",
      instagram: "https://www.instagram.com/lehijab.ca/",
      website:
        "https://lehijab.com/?fbclid=PAZXh0bgNhZW0CMTEAAaaUWnGiv9Sicw51u_ycrcMYupHP652tzCwtwDUpu1YyXfh_Rx0BohH5exg_aem_qji5d0Ft1tg3tu4qGNI3rg",
      backgroundImage: "/imgs/vendors/lehijab-bg.png",
    },
    {
      logo: "/imgs/vendors/elite-stitches.png",
      name: "Elite Stitchez",
      instagram: "https://www.instagram.com/elite.stitchez/",
      website: "",
      backgroundImage: "/imgs/vendors/elite-stitches-bg.png",
    },
    {
      logo: "/imgs/vendors/sealed-with-misk.png",
      name: "Sealed With Misk",
      instagram: "https://www.instagram.com/sealedwithmisk_?igsh=MWdpMndrNTY4eHBkaw%3D%3D&utm_source=qr",
      website:
        "https://sealed-with-misk.square.site/?fbclid=PAZXh0bgNhZW0CMTEAAaYgk-OuRRQMHbxDC3sZNAy03YEuwPd-RcPUv-e34peT2J2b03z-DRtX0Ys_aem_Yys5ukV47um_7X2YkvJ80Q",
      backgroundImage: "/imgs/vendors/sealed-with-misk-bg.png",
    },
    {
      logo: "/imgs/vendors/seera.png",
      name: "Seera",
      instagram: "https://www.instagram.com/seeraa.co/",
      website:
        "https://www.etsy.com/shop/seeraco/?etsrc=sdt&fbclid=PAZXh0bgNhZW0CMTEAAaYNjDh8Z_GuvTcDUt2No04peoqg-UYeN3oaeZIrJBelzXmV_bEU70Sqsqg_aem_0wHMrJRKPoJb7honxjnDLA",
      backgroundImage: "/imgs/vendors/seera-bg.png", 
    },
    {
      logo: "/imgs/vendors/hikmah-and-haya.png",
      name: "Hikmah and Haya",
      instagram: "https://www.instagram.com/hikmahandhaya/",
      website:
        "https://hikmahandhaya.my.canva.site/view-products?fbclid=PAZXh0bgNhZW0CMTEAAaatJykyi118ymyxT4x6u2s44PG5bJ5JNipJGxnDlEOZ7B2PfVlz04NsC9o_aem_x_TQmuYyADLv6RCJap2EYg",
      backgroundImage: "/imgs/vendors/hikmah-and-haya-bg.png",
    },
    {
      logo: "/imgs/vendors/araveiled.png",
      name: "Araveiled",
      instagram:
        "https://www.instagram.com/araveiled?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      website: "",
      backgroundImage: "/imgs/vendors/araveiled-bg.png",
    },
    {
      logo: "/imgs/vendors/ctrl-v.png",
      name: "CTRL-V Garments",
      instagram: "https://www.instagram.com/ctrlvgarments/",
      website: "",
      backgroundImage: "/imgs/vendor-bg3.jpg",
    },
    {
      logo: "/imgs/vendors/infennity.png",
      name: "Infennity Designs",
      instagram: "",
      website: "",
      backgroundImage: "/imgs/vendor-bg4.jpg", 
    },
    {
      logo: "/imgs/vendors/desiign.png",
      name: "Divine Desiigns",
      instagram: "https://www.instagram.com/divine.desiign?igsh=aWlmd3BicjlkMm0y",
      website: "",
      backgroundImage: "/imgs/vendor-bg3.jpg", 
    },
    {
      logo: "/imgs/vendors/mb.png",
      name: "MB Jewels",
      instagram: "https://www.instagram.com/mb_jewels.ca?igsh=MXQ5cjhpYzFnNGluNg%3D%3D",
      website:
        "https://www.mbjewels.ca/?fbclid=PAZXh0bgNhZW0CMTEAAaapSbm3EPPeC4JGe3nowd2b8-DqSZSR9gpN6A6ctZGrOWP842OcPuKPCdA_aem_fxAsSiBVc_nGSauK5TIRGA",
      backgroundImage: "/imgs/vendor-bg4.jpg",
    },
    {
      logo: "/imgs/vendors/modest-oasis.png",
      name: "Modest Oasis",
      instagram: "https://www.instagram.com/modestoasis/",
      website:
        "https://www.modestoasis.ca/?fbclid=PAZXh0bgNhZW0CMTEAAaYqNfdy_7wWa34lEJ9mxLxifLHJhtYj5b39QXyHjOaK-jKTpv3OtjiCxJs_aem_rMy7jIOn9FTyddmc8Henpg",
      backgroundImage: "/imgs/vendor-bg4.jpg",
    },
    {
      logo: "/imgs/vendors/sabiqoun-books.png",
      name: "Sabiqounbooks",
      instagram: "https://www.instagram.com/sabiqounbooks/",
      website:
        "https://sabiqoun.com/?fbclid=PAZXh0bgNhZW0CMTEAAaa1CIVxL0Q4XIYAcGXwrRKz0IwxbhUQSU7lRp2Ial24VB4zV34dZDMhRlk_aem_r7477ktZuEfPeFpOw0Wt0A",
      backgroundImage: "/imgs/vendor-bg4.jpg",
    },
    {
      logo: "/imgs/vendors/moda-jewelry.png",
      name: "Moda Jewelry",
      instagram: "https://www.instagram.com/moda_jewelryy/",
      website: "",
      backgroundImage: "/imgs/vendor-bg4.jpg", 
    },
    {
      logo: "/imgs/vendors/firdous-books.png",
      name: "Firdous Books",
      instagram: "https://www.instagram.com/firdous.books/",
      website: "https://firdousbooks.ca",
      backgroundImage: "/imgs/vendor-bg4.jpg", 
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <motion.h3
        className={`${cinzel.className} text-xl font-bold text-center`}
        variants={titleVariants}
      >
        BROWSE OUR
      </motion.h3>
      <motion.h1
        className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-8 text-center relative group`}
        variants={titleVariants}
      >
        <span className="inline-block relative">
          BAZAAR
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h1>

      {/* Vendor Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8"
        variants={containerVariants}
      >
        {vendors.map((vendor, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center bg-cover bg-center rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${vendor.backgroundImage})`,
            }}
            variants={itemVariants}
          >
            {/* Vendor Content */}
            <div className="p-6 text-center text-white">
              {/* Vendor Logo */}
              <div className="w-16 h-16 mb-2 mx-auto bg-white rounded-full flex items-center justify-center">
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} Logo`}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              {/* Vendor Name */}
              <h3 className="text-xl font-bold mb-5">{vendor.name}</h3>
              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4">
                <a
                  href={vendor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0FFC9] hover:text-[#A9DA88] transition-colors"
                >
                  <img
                    src="/imgs/instagram-logo.webp"
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0FFC9] underline hover:text-[#A9DA88] transition-colors"
                >
                  Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
