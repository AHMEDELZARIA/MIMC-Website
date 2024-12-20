"use client";

import { motion } from "framer-motion";
import { Card, Spacer, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { cinzel } from "@/config/fonts";

const PhotoGallery: React.FC = () => {
  // Image data for card decks
  const galleryData = {
    LECTURES: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl1.jpg?alt=media&token=f11ef0a5-8d8b-457d-a38f-99542c5a6420",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl10.jpg?alt=media&token=27eaef8a-e2de-4233-a2b5-e8552f7bbce5",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl12.jpg?alt=media&token=f0ecda57-732c-44fe-9b24-10066688a447",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl13.jpg?alt=media&token=ee31f36e-ef1f-4c40-a3a5-d8ce0b40c0be",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl14.jpg?alt=media&token=3981bcd2-16ae-4be6-a381-a500509239de",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl15.jpg?alt=media&token=2b49e216-2588-4f2e-933d-0234febfb879",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl16.jpg?alt=media&token=4be180de-5934-4c73-a787-bd3515f2d74d",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl17.jpg?alt=media&token=522b13a4-e52f-4448-bb00-4fe3d51834d5",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl18.jpg?alt=media&token=ce50b5b7-1284-4633-a42f-d4ab0dc67600",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl19.jpg?alt=media&token=88bfa5ea-e229-453a-a5ac-fd54bd05c11e",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Flec%2Fl2.jpg?alt=media&token=9a01bf94-912e-43ff-9107-29b9266e3673",
        // "/imgs/lec/l13.jpg",
        // "/imgs/lec/l14.jpg",
        // "/imgs/lec/l16.jpg",
        // "/imgs/lec/l17.jpg",
        // "/imgs/lec/l18.jpg",
        // "/imgs/lec/l19.jpg",
        // "/imgs/lec/l20.jpg",
        // "/imgs/lec/l21.jpg",
        // "/imgs/lec/l22.jpg",
        // "/imgs/lec/l23.jpg",
        // "/imgs/lec/l24.jpg",
        // "/imgs/lec/l26.jpg",
        // "/imgs/lec/l27.jpg",
        // "/imgs/lec/l28.jpg",
        // "/imgs/lec/l29.jpg",
        // "/imgs/lec/l30.jpg",
        // "/imgs/lec/l31.jpg",
        // "/imgs/lec/l32.jpg",
        // "/imgs/lec/l33.jpg",
        // "/imgs/lec/l34.jpg",
        // "/imgs/lec/l35.jpg",
        // "/imgs/lec/l36.jpg",
        // "/imgs/lec/l37.jpg",
        // "/imgs/lec/l38.jpg",
        // "/imgs/lec/l40.jpg",
        // "/imgs/lec/l41.jpg",
        // "/imgs/lec/l42.jpg",
        // "/imgs/lec/l43.jpg",
        // "/imgs/lec/l44.jpg",
        // "/imgs/lec/l45.jpg",
        // "/imgs/lec/l46.jpg",
        // "/imgs/lec/l47.jpg",
      ],
      description: "Explore captivating lectures that inspire and enlighten.",
    },
    ACTIVITIES: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact1.jpg?alt=media&token=3e409e3f-7777-4453-b6d1-21075a734449",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact10.jpg?alt=media&token=1937e81b-490e-48d3-b56d-fba7133fcde3",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact11.jpg?alt=media&token=dae2f966-8d1a-423e-ba89-089331213e6c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact12.jpg?alt=media&token=82f2fbba-73ac-4b13-b294-c82e6c0e90ec",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact13.jpg?alt=media&token=d5cc0d7f-0f13-47cc-a60e-2c226aedab18",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact14.jpg?alt=media&token=04998b91-4e17-4d65-aecb-0aef839da8f2",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact15.jpg?alt=media&token=8e33685c-c097-45ea-927a-3c4243766e51",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact16.jpg?alt=media&token=3bf96016-8ca8-4738-b32e-acdf210eaeaa",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact17.jpg?alt=media&token=0441f1ab-6804-415a-8483-88ecc9d294ee",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact18.jpg?alt=media&token=0af7d79f-062f-4466-bd48-1baca9ebfbc0",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact19.jpg?alt=media&token=cd9ace96-2306-4770-95fc-7f5e8402044f",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact2.jpg?alt=media&token=792addd3-c4ba-4660-a59b-e0e9d0912355",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact20.jpg?alt=media&token=f85a0186-103e-4f3b-82f9-66a94fb6e243",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact21.jpg?alt=media&token=20ed24f5-5b1b-4072-872c-a349c0085c7a",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact22.jpg?alt=media&token=c2bc6c52-6dfb-4365-8306-7e333b3b31d0",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact23.jpg?alt=media&token=a7b4191d-ab35-4339-b67d-7ca40afb884c",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact24.jpg?alt=media&token=adfad79f-f946-4995-af03-83f34c0516a1",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact25.jpg?alt=media&token=0d6193cb-bea1-4868-8a41-9d45f5070a46",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact26.jpg?alt=media&token=024f3c8b-2824-4c06-a720-db5abf2429ac",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact27.jpg?alt=media&token=a7a4b268-0662-446b-8232-93f83ff62cd5",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact28.jpg?alt=media&token=8411b3d3-1c11-4a8a-b020-a264d2c5050a",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact29.jpg?alt=media&token=c7f6b878-f2b0-4e05-8965-7fffe85ec442",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact3.jpg?alt=media&token=4c390d6c-11ef-4e8b-adc0-a0f9185e00c0",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact30.jpg?alt=media&token=a141f213-632f-40c4-9bc3-3462b9c0e5dc",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact31.jpg?alt=media&token=7527cf6d-9a0c-4aa4-95fb-da2d3ed91298",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact32.jpg?alt=media&token=b8254d49-9b81-46e8-bc12-8ac86db395b7",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact33.jpg?alt=media&token=cc6812b9-a3a3-4d9a-9044-8a069c90181c",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact34.jpg?alt=media&token=50a917a1-33b3-4cd7-8e4f-ba3a6002c804",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact4.jpg?alt=media&token=841298c3-1166-474d-b17b-55acfbb4a44f",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact5.jpg?alt=media&token=49efe0e4-a147-4d80-b73d-412dc22a5b4e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact6.jpg?alt=media&token=fede210e-6c85-40b6-a8c8-e660720c23bb",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact7.jpg?alt=media&token=de06bd4c-aa68-4700-8502-8ae1cad7a7ff",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact8.jpg?alt=media&token=aad385b9-cf75-41ed-a25d-75836f4fd481",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fact%2Fact9.jpg?alt=media&token=f7741f7a-7456-4564-b99a-c05b0a7065a5",
      ],
      description: "Discover engaging activities that bring everyone together.",
    },
    COMMUNITY: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc1.jpg?alt=media&token=fdb32a0a-3411-4d50-866d-f9c666fbd639",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc10.jpg?alt=media&token=01269993-3c0a-428c-a5ee-2ad7e6a6df3f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc11.jpg?alt=media&token=ac61bcbd-cf42-472a-8807-e5379f994930",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc12.jpg?alt=media&token=0972d437-f4bd-4819-8ff8-01e2482f3550",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc13.jpg?alt=media&token=97b5f68f-d95b-4d19-8e21-73475c5fcb53",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc14.jpg?alt=media&token=b089b41d-feb0-4b54-ac82-006eca2cb7c5",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc15.jpg?alt=media&token=7107466e-bee7-406e-bce3-dcbb91b541b2",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc16.jpg?alt=media&token=9d146d5b-6730-4cd1-a37a-404cac82fd48",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc17.jpg?alt=media&token=d49a6534-d944-491a-9e7b-609b4f6a6e7c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc18.jpg?alt=media&token=cd788769-be26-43fb-abe3-4f4dd52185c5",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc19.jpg?alt=media&token=b861a1f6-1bdd-41d9-970d-debf5f33ac50",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2Fcom%2Fc20.jpg?alt=media&token=65d4c594-0204-4c4f-88e5-b476f5f8270a",
        // "/imgs/com/c13.jpg",
        // "/imgs/com/c14.jpg",
        // "/imgs/com/c15.jpg",
        // "/imgs/com/c16.jpg",
        // "/imgs/com/c17.jpg",
        // "/imgs/com/c18.jpg",
        // "/imgs/com/c19.jpg",
        // "/imgs/com/c21.jpg",
        // "/imgs/com/c22.jpg",
        // "/imgs/com/c23.jpg",
        // "/imgs/com/c24.jpg",
        // "/imgs/com/c25.jpg",
        // "/imgs/com/c26.jpg",
        // "/imgs/com/c27.jpg",
        // "/imgs/com/c28.jpg",
        // "/imgs/com/c29.jpg",
        // "/imgs/com/c30.jpg",
        // "/imgs/com/c31.jpg",
        // "/imgs/com/c32.jpg",
        // "/imgs/com/c33.jpg",
        // "/imgs/com/c34.jpg",
        // "/imgs/com/c35.jpg",
        // "/imgs/com/c36.jpg",
        // "/imgs/com/c37.jpg",
        // "/imgs/com/c38.jpg",
        // "/imgs/com/c39.jpg",
        // "/imgs/com/c40.jpg",
        // "/imgs/com/c41.jpg",
        // "/imgs/com/c42.jpg",
        // "/imgs/com/c43.jpg",
        // "/imgs/com/c44.jpg",
        // "/imgs/com/c45.jpg",
      ],
      description: "Celebrate the sense of belonging and shared purpose.",
    },
  };

  // Image data for sliding displays
  const slidingData = {
    Vertical: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv1.jpg?alt=media&token=5f7dc113-c67e-4d52-b692-b83e8952a5d5",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv10.jpg?alt=media&token=de0ca870-23fd-4ebb-afd8-9436c54d509b",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv11.jpg?alt=media&token=f3ff1cb0-dda0-42e0-8dc2-9095d752743b",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv12.jpg?alt=media&token=981f5041-995f-40ea-8c46-f513904ca90a",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv13.jpg?alt=media&token=3624dae5-043d-4d61-836e-720d75e83596",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv14.jpg?alt=media&token=8bba23e4-c4f2-4f86-a212-d1b23b512833",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv15.jpg?alt=media&token=a2d66770-7c3c-4cd5-ad96-64249c895697",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv16.jpg?alt=media&token=1158ad27-6297-4378-a633-1a85514a683f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv17.jpg?alt=media&token=0c2a53bb-f590-4e69-a393-754f051be760",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv18.jpg?alt=media&token=cbe1a18f-e30a-4f46-abec-a2caa400765f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv19.jpg?alt=media&token=ea69aba6-844c-41cf-8f50-7cc9df07b68c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv2.jpg?alt=media&token=622c7e26-fedb-4995-a983-266c6322381c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv20.jpg?alt=media&token=026c1c5b-a570-4a3b-a8fb-be7b6686a15f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv21.jpg?alt=media&token=54c9ad45-bd65-496e-9ef8-761f41942495",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv22.jpg?alt=media&token=1ed3dd8a-6bd0-4d91-be48-d6b08f595e9e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv23.jpg?alt=media&token=ab53eac2-89ea-4604-b5d7-532cba11323a",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv27.jpg?alt=media&token=be6c7582-49ef-473d-8d7f-671188209f1b",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv28.jpg?alt=media&token=e632ecb6-527c-4ee1-93d3-0495f0cc73c3",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv29.jpg?alt=media&token=717998d7-b702-4daf-9006-ab7570e61147",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv3.jpg?alt=media&token=37051e3f-187a-4954-8fb3-6a25c3884a6a",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv30.jpg?alt=media&token=a3d77dc4-a117-4195-a5b2-fb3dc484b98e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv31.jpg?alt=media&token=74022abc-26a7-4cc8-b2b5-651c46625279",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv32.jpg?alt=media&token=80fa9a62-efc2-4426-94d8-76c405e881ca",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv33.jpg?alt=media&token=32557746-bbc5-4254-84ea-3643d5e60674",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv34.jpg?alt=media&token=6b782e6e-c6a1-49d5-93fc-941d5f3c667e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv35.jpg?alt=media&token=14eff567-eb28-417e-836a-5538e6e7166f",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv36.jpg?alt=media&token=8afb345d-0f77-4302-b0b4-ee6e2fb6d0c9",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv37.jpg?alt=media&token=c1bd4708-3fbe-4f59-86a5-7db3f452e3cd",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv38.jpg?alt=media&token=3cf1e412-33dd-479e-af67-d86cf1827764",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv39.jpg?alt=media&token=c6e9e9e7-abed-409b-851b-63a09e2830e2",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv4.jpg?alt=media&token=ab21ee47-685e-4ffc-8480-77c87ec280bc",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv40.jpg?alt=media&token=ca7f2f82-5118-47d2-9614-1c41e866e6d0",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv41.jpg?alt=media&token=9f317c92-5796-479c-b0fb-36fd856492b8",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv42.jpg?alt=media&token=0671bd03-ef1f-4071-b8a6-5bd6a628f2e2",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv43.jpg?alt=media&token=d5ad9553-6991-4606-93fd-30e9ec9832fd",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv44.jpg?alt=media&token=ea0349bb-a539-4a2e-abc1-cd5feb3d0949",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv45.jpg?alt=media&token=0cde9df4-14b2-455f-a8a1-7b0a9b96d7c7",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv46.jpg?alt=media&token=2f4f53d9-56ad-44ad-9761-2b38b94d60fa",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv47.jpg?alt=media&token=945ea396-f5da-451f-a181-812c99b6b0d4",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv5.jpg?alt=media&token=67d547ca-932d-43b6-a8de-c2762d895e0e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv6.jpg?alt=media&token=43c19eee-b12c-49ca-be29-7894e66f2717",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv7.jpg?alt=media&token=b114e851-0e5a-43be-ad53-4edf45921c7f",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv9.jpg?alt=media&token=eeff8304-6c94-45f9-8a4f-3c00012b3589",
      ],
    },
    Horizontal: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh1.jpg?alt=media&token=7c19e6ea-1518-4b79-bb50-7c87bbdd3d86",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh10.jpg?alt=media&token=f5330e9b-4201-4aac-b632-ade59e8feebd",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh11.jpg?alt=media&token=839f90dd-60c4-46f3-a05f-7c880a1d3c61",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh12.jpg?alt=media&token=79227d27-5e48-49e1-bdff-238ab92b7a06",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh13.jpg?alt=media&token=1ee7a0f8-66b8-411a-aae8-1bcfca0385b3",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh14.jpg?alt=media&token=fcaeee8f-7852-4a2f-b0eb-4cba97e15201",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh15.jpg?alt=media&token=1b0c9826-fd0b-426b-a63b-bc960ae6310f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh16.jpg?alt=media&token=967e51dd-7a9a-4d86-9d77-0acc60e0b9d3",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh17.jpg?alt=media&token=2b00ebb8-e70e-4156-98e8-aa74cf7da768",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh18.jpg?alt=media&token=3bb788ac-533f-47ee-984d-f3426c44220f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh19.jpg?alt=media&token=8ec81903-0974-406c-9d64-e26ff159c180",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh2.jpg?alt=media&token=f9301d3c-a41d-4713-b823-f7fa272422c9",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh20.jpg?alt=media&token=f64ac988-9969-4d39-82fe-54b7e2e63eff",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh21.jpg?alt=media&token=4753aed5-e18a-4ecf-92c5-f531972211ad",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh22.jpg?alt=media&token=b9315661-3a9d-4ef1-a932-738875feceaa",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh23.jpg?alt=media&token=354b7990-d6f4-4b68-bcb5-3e161768f52e",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh24.jpg?alt=media&token=d0b92a25-164e-4b4c-bba7-9a1937a84927",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh25.jpg?alt=media&token=73ab0771-c83b-4b4f-bcee-9dce0cce19d1",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh26.jpg?alt=media&token=5d8dd27e-edf4-46c8-b26e-e3a194fdcd74",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh27.jpg?alt=media&token=c7fc5d50-2444-4a5b-bc94-621656f18613",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh28.jpg?alt=media&token=9c85785b-22b7-4478-9621-f00dda65011d",
        // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh29.jpg?alt=media&token=21b6827e-c9e0-423c-9b5e-b496a4c8f21a",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh3.jpg?alt=media&token=69a2e992-30cf-4b5c-bd20-4c803ba2a9e5",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh30.jpg?alt=media&token=16fb2381-83b3-414f-a94f-f72cae99838f",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh31.jpg?alt=media&token=d9ed8418-592f-4d15-9f04-0415200c6278",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh32.jpg?alt=media&token=3cff4c11-faff-4577-bcf5-fda99b53a710",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh33.jpg?alt=media&token=a53b2559-56c5-4d6e-828c-dd2b90cb6479",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh34.jpg?alt=media&token=9d3d1823-73e8-4c03-959e-dfca87fd687c",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh35.jpg?alt=media&token=f5b5ee77-ad24-49fd-99ed-c08bec916baa",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh36.jpg?alt=media&token=a578132b-4fb7-4092-8a16-b44892dd6df4",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh37.jpg?alt=media&token=246ec8f2-d11b-4ac2-8b41-c151c8533903",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh38.jpg?alt=media&token=bd153c9f-a317-4777-bf2a-305b0eddc59d",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh39.jpg?alt=media&token=8a8cfd01-8d1c-49c4-834c-18e6491d3376",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh4.jpg?alt=media&token=c00d4bfe-70f1-428e-a1ff-1e0c20251569",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh40.jpg?alt=media&token=bbb9901c-60c7-4603-a662-f94c13d75907",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh41.jpg?alt=media&token=413c0983-f57c-4764-bbfd-d1ca3c570d0a",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh42.jpg?alt=media&token=dde07ebb-d51e-416a-8029-cb58b64a60b3",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh43.jpg?alt=media&token=a227b17a-29c2-4fd5-88b4-dd2006906e62",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh44.jpg?alt=media&token=d0100aff-4e7c-47ba-a8a3-64f8e47da257",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh45.jpg?alt=media&token=b34ffa36-d4d0-4d50-829c-649c70860abd",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh5.jpg?alt=media&token=2460ba03-5b23-4a22-989b-ea13f701aa39",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh6.jpg?alt=media&token=e10b6151-7b07-4f31-a8d5-37745d392e3b",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh7.jpg?alt=media&token=99276579-1341-425d-a563-47d1ec5d6cb0",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh8.jpg?alt=media&token=9bffc8a4-1a66-4fe0-be0e-3fdd6518e278",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fh9.jpg?alt=media&token=32ff0eab-535f-43cc-b2d9-655d5c453537",
      ],
    },
  };

  // Framer Motion Variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const swiperSlideVariants = {
    hidden: { scale: 0.8, rotate: -10, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-4 md:px-8 mt-16"
      initial="hidden"
      viewport={{ once: true, amount: 0.3 }}
      whileInView="visible"
    >
      <motion.h2
        className="text-7xl font-bold mb-8 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>MIMC IN A GALLERY</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h2>
      {/* 1x3 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-12">
        {Object.entries(galleryData).map(
          ([category, { images, description }], index) => (
            <motion.div
              key={category}
              className={"p-4 rounded-lg"}
              initial="hidden"
              transition={{ delay: index * 0.3 }}
              variants={cardVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <h3 className="text-2xl font-semibold mb-2 text-center text-white">
                {category}
              </h3>
              <p className="text-sm text-center font-semibold text-[#F0FFC9] opacity-80 mb-4">
                {description}
              </p>
              <Swiper
                className="w-full max-w-sm mx-auto"
                effect="cards"
                grabCursor={false}
                modules={[EffectCards, Pagination]}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: (index, className) =>
                    `<span class="${className}" style="
                    background-color: rgba(0, 128, 255, 0.7); 
                    width: 12px; 
                    height: 12px; 
                    border-radius: 50%; 
                    margin: 0 4px;
                  "></span>`,
                }}
              >
                {images.map((imgSrc, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="rounded-lg pointer-events-none"
                  >
                    <motion.img
                      alt={`${category} ${idx + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                      src={imgSrc}
                      variants={swiperSlideVariants}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          ),
        )}
      </div>

      <Spacer y={10} />

      {/* EXPERIENCE THE JOURNEY */}
      <motion.h3
        className="text-5xl font-bold mb-4 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>EXPERIENCE THE JOURNEY</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h3>
      <motion.p
        className="text-sm md:text-base font-semibold text-[#F0FFC9] opacity-80 mb-8 text-center"
        initial="hidden"
        transition={{ delay: 0.2 }}
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Every image tells a story — relive the moments that brought us closer as
        a community.
      </motion.p>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="w-full"
        loop={true}
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
      >
        {slidingData["Horizontal"].images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-40 md:h-60 overflow-hidden rounded-lg"
              initial="hidden"
              variants={swiperSlideVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <img
                alt={`Loop ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                src={imgSrc}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Vertical Sliding Images */}
      <motion.div className="mt-8">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="w-full"
          loop={true}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={15}
        >
          {slidingData["Vertical"].images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-full overflow-hidden rounded-lg"
                initial="hidden"
                variants={swiperSlideVariants}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <img
                  alt={`Vertical Loop ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  src={imgSrc}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <Spacer y={14} />

      {/* RELIVE THE HIGHLIGHTS */}
      <motion.h3
        className="text-5xl font-bold mb-4 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>RELIVE THE HIGHLIGHTS</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h3>
      <motion.p
        className="text-base text-center font-semibold text-[#F0FFC9] opacity-80 mb-8"
        initial="hidden"
        transition={{ delay: 0.2 }}
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Watch our recap videos from MIMC 2023 and MIMC 2024 to experience the
        energy, excitement, and unity of these unforgettable events.
      </motion.p>

      {/* Highlight Videos */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Stagger animations for children
            },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        {/* MIMC 2023 Video */}
        <motion.div
          className="relative w-full h-0 pb-[56.25%]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/MMS6QCKd_Us"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2023 Highlights"
          />
        </motion.div>

        {/* MIMC 2024 Video */}
        <motion.div
          className="relative w-full h-0 pb-[56.25%]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/hff0PwUltNo"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2024 Highlights"
          />
        </motion.div>
      </motion.div>

      <Spacer y={16} />

      {/* Playlist Card */}
      <motion.div
        className="flex justify-center w-full"
        initial="hidden"
        variants={cardVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <Card
          isHoverable
          isPressable
          className="w-3/4 bg-[#45021e] bg-opacity-70 rounded-lg shadow-lg p-5"
        >
          <CardHeader className="py-6 px-8 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white text-center">
              MIMC Lecture Playlist
            </h3>
            <p className="text-sm font-medium text-[#F0FFC9] opacity-80 text-center mt-2">
              <strong>Missed last year&apos;s lectures?</strong> Catch up with
              our our <strong>high-quality</strong> recordings and get inspired
              by speakers.
            </p>
          </CardHeader>
          <Divider className="mb-4" />
          <CardBody>
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full border-0 rounded-b-lg"
                src="https://www.youtube.com/embed/videoseries?list=PLeOpHlIwa7pKOUuUf2QcMM2EtjnzYEPW9"
                title="MIMC Lecture Playlist"
              />
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default PhotoGallery;
