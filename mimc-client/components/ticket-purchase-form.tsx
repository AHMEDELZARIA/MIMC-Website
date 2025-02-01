"use client";

import {
  Button,
  Checkbox,
  Divider,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getMIMCCouponsRemaining
} from "./../utils/firebase.utils";

const TicketPurchaseForm: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tickets, setTickets] = useState({
    adult: 0,
    marriage: 0,
    youth: 0,
    child: 0,
    free: 0,
  });
  // const { push } = useRouter();
  const [donation, setDonation] = useState(true);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    smsOptIn: true,
    emergencyContactName: "",
    emergencyContactPhone: "",
  });
  const router = useRouter();

  // Dynamic forms state
  const [adultTicketDetails, setAdultTicketDetails] = useState<any[]>([]);
  const [marriageTicketDetails, setMarriageTicketDetails] = useState<any[]>([]);
  const [youthTicketDetails, setYouthTicketDetails] = useState<any[]>([]);
  const [childTicketDetails, setChildTicketDetails] = useState<any[]>([]);
  const [freeTicketDetails, setFreeTicketDetails] = useState<any[]>([]);

  const prices = {
    adult: 30,
    marriage: 5,
    youth: 5,
    child: 0,
    free: 0,
  };

  useEffect(() => {
    const newTotal = Object.entries(tickets).reduce(
      (acc, [key, count]) => acc + count * prices[key as keyof typeof prices],
      donation ? 3 : 0,
    );

    setTotalPrice(newTotal);
  }, [tickets, donation]);

  const handleTicketChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    const count = Math.max(parseInt(value) || 0, 0);

    setTickets((prev) => ({
      ...prev,
      [id]: count,
    }));

    // Update dynamic forms when ticket counts change
    if (id === "adult") {
      setAdultTicketDetails(
        Array(count).fill({ fullName: "", email: "", school: "", gender: "" }),
      );
    } else if (id === "marriage") {
      setMarriageTicketDetails(Array(count).fill({ fullName: "", email: "" }));
    } else if (id === "youth") {
      setYouthTicketDetails(
        Array(count).fill({ fullName: "", caregiverPhone: "" }),
      );
    } else if (id === "child") {
      setChildTicketDetails(
        Array(count).fill({ fullName: "", caregiverPhone: "" }),
      );
    } else if (id === "free") {
      setFreeTicketDetails(
        Array(count).fill({ fullName: "", email: "", school: "", gender: "" }),
      );
    }
  };

  const handlePersonalDetailsChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;

    setPersonalDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDynamicFormChange = (
    index: number,
    type: string,
    field: string,
    value: string,
  ) => {
    if (type === "adult") {
      setAdultTicketDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item,
        ),
      );
    } else if (type === "marriage") {
      setMarriageTicketDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item,
        ),
      );
    } else if (type === "youth" || type === "child") {
      const setDetails =
        type === "youth" ? setYouthTicketDetails : setChildTicketDetails;

      setDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item,
        ),
      );
    } else if (type === "free") {
      setFreeTicketDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item,
        ),
      );
    }
  };

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phoneRegex = /^\d{10,15}$/; // Allows 10-15 digits for phone numbers

    // Check if at least one ticket is selected
    const totalTickets = Object.values(tickets).reduce(
      (sum, count) => sum + count,
      0,
    );

    if (totalTickets === 0) {
      toast.error("You must select at least one ticket to proceed.");

      return false;
    }

    // Ensure at least one adult ticket is selected to buy child tickets
    if (tickets.child > 0 && tickets.adult === 0) {
      toast.error(
        "You must purchase at least one Adult ticket to purchase a child ticket. For any concerns, please email us at info@macmsa.com."
      );
      return false;
    }

    // Validate personal details
    if (!personalDetails.firstName.trim()) {
      toast.error("First Name is required.");

      return false;
    }
    if (!personalDetails.lastName.trim()) {
      toast.error("Last Name is required.");

      return false;
    }
    if (!personalDetails.email.trim()) {
      toast.error("Email is required.");

      return false;
    }
    if (!emailRegex.test(personalDetails.email)) {
      toast.error("Please enter a valid email address.");

      return false;
    }
    if (personalDetails.email !== personalDetails.confirmEmail) {
      toast.error("Emails do not match.");

      return false;
    }
    if (!personalDetails.phone.trim()) {
      toast.error("Phone number is required.");

      return false;
    }
    if (!phoneRegex.test(personalDetails.phone)) {
      toast.error("Phone number must contain only digits and be 10-15 characters long.");
      
      return false;
    }
    if (!personalDetails.emergencyContactName.trim()) {
      toast.error("Emergency Contact Name is required.");

      return false;
    }
    if (!personalDetails.emergencyContactPhone.trim()) {
      toast.error("Emergency Contact Phone is required.");

      return false;
    }
    if (!phoneRegex.test(personalDetails.emergencyContactPhone)) {
      toast.error("Emergency Contact Phone must contain only digits and be 10-15 characters long.");
      
      return false;
    }

    // Validate dynamic forms
    for (const [type, details] of Object.entries({
      adult: adultTicketDetails,
      marriage: marriageTicketDetails,
      youth: youthTicketDetails,
      child: childTicketDetails,
      free: freeTicketDetails,
    })) {
      for (const [index, detail] of details.entries()) {
        for (const [field, value] of Object.entries(detail)) {
          // Skip validation for optional fields like 'school'
          if (field === "school") continue;

          if (typeof value === 'string' && !value.trim()) {
            toast.error(
              `${type.charAt(0).toUpperCase() + type.slice(1)} Ticket #${
                index + 1
              }: ${field.charAt(0).toUpperCase() + field.slice(1)} is required.`
            );
            return false;
          }

          // Validate phone number for youth/child caregiver fields
          if (field === "caregiverPhone" && !phoneRegex.test(value as string)) {
            toast.error(
              `${type.charAt(0).toUpperCase() + type.slice(1)} Ticket #${
                index + 1
              }: Caregiver's Phone must contain only digits and be 10-15 characters long.`
            );
            return false;
          }

          // Validate email for adult/marriage tickets
          if (field === "email" && !emailRegex.test(value as string)) {
            toast.error(
              `${type.charAt(0).toUpperCase() + type.slice(1)} Ticket #${
                index + 1
              }: Please enter a valid email address.`
            );
            return false;
          }
        }
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const finalTickets = {
      personalDetails,
      adult: adultTicketDetails,
      marriage: marriageTicketDetails,
      youth: youthTicketDetails,
      child: childTicketDetails,
      free: freeTicketDetails,
      donation,
    };
    const link = await (
      await fetch(`http://localhost:5000/free-tickets-purchase`, {
        // http://localhost:7000/tickets-link
        // https://us-central1-macmsa-clientapp.cloudfunctions.net/clientapp/tickets-link
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalTickets),
      })
    ).json();
    router.push(link.link);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <ToastContainer />
      <div className="max-w-4xl w-full bg-[#3B0819] p-8 rounded-lg shadow-lg">
        {/* <div className="bg-yellow-200 text-yellow-800 p-4 rounded mb-4 font-bold uppercase">
          Ticket sales will open later this evening inshaAllah, stay tuned!
        </div> */}
        {/* Event Info Section */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold uppercase text-[#F0FFC9] mb-2">
            Event Information
          </h3>
          <p className="text-white text-sm">
            <strong className="text-[#A9DA88]">Date:</strong> Saturday-Sunday,
            February 15-16, 2025
          </p>
          <p className="text-white text-sm">
            <strong className="text-[#A9DA88]">Time:</strong> 10:00 AM - 9:00 PM
          </p>
          <p className="text-white text-sm">
            <strong className="text-[#A9DA88]">Location:</strong> McMaster
            University (1280 Main Street West, Hamilton, Ontario L8S 4L8)
          </p>
        </div>
        <Divider className="my-3" />

        {/* Personal Details Section */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold uppercase text-[#F0FFC9] mb-4">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              isRequired
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              value={personalDetails.firstName}
              onChange={handlePersonalDetailsChange}
            />
            <Input
              isRequired
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              value={personalDetails.lastName}
              onChange={handlePersonalDetailsChange}
            />
              {/* style={{
                color: "white",
                "::placeholder": {
                  color: "rgba(255, 255, 255, 0.6)", // Optional: For placeholder styling
                },
              }} */}
            
          </div>
          <Input
            isRequired
            className="mb-3"
            label="Email Address"
            name="email"
            placeholder="Enter email address"
            type="email"
            value={personalDetails.email}
            onChange={handlePersonalDetailsChange}
          />
          <Input
            isRequired
            className="mb-3"
            label="Confirm Email Address"
            name="confirmEmail"
            placeholder="Re-enter email address"
            type="email"
            value={personalDetails.confirmEmail}
            onChange={handlePersonalDetailsChange}
          />
          <Input
            isRequired
            className="mb-3"
            label="Phone Number"
            name="phone"
            placeholder="Enter phone number"
            type="tel"
            value={personalDetails.phone}
            onChange={handlePersonalDetailsChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <Input
              isRequired
              label="Emergency Contact Name"
              name="emergencyContactName"
              placeholder="Enter emergency contact name"
              value={personalDetails.emergencyContactName}
              onChange={handlePersonalDetailsChange}
            />
            <Input
              isRequired
              label="Emergency Contact Number"
              name="emergencyContactPhone"
              placeholder="Enter emergency contact number"
              type="tel"
              value={personalDetails.emergencyContactPhone}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          {/* <Checkbox
            color="success"
            isSelected={personalDetails.smsOptIn}
            name="smsOptIn"
            radius="full"
            onChange={() =>
              setPersonalDetails((prev) => ({
                ...prev,
                smsOptIn: !prev.smsOptIn,
              }))
            }
          >
            Opt-in for SMS announcements during the event
          </Checkbox> */}
        </div>

        <Divider className="my-3" />

        {/* Disclaimer Section */}
        <div>
          <h3 className="uppercase underline font-semibold text-lg text-[#F0FFC9]">
            Disclaimer
          </h3>
          <p className="text-white text-sm mb-2">
            Children must be accompanied by a guardian throughout the convention
            period. For special accommodations, email:{" "}
            <span className="text-[#A9DA88] font-medium">info@macmsa.com</span>.
            By purchasing tickets, you agree to the following:
          </p>
          <ul className="list-disc pl-5 text-[white] text-sm mb-4">
            <li>
              I consent to being photographed, filmed, and audio-recorded, with
              the understanding that these recordings may be publicly released.
            </li>
            <li>
              I agree not to hold MacMSA or McMaster University liable for any
              lost, stolen, or damaged property, or for any physical injury
              sustained during the event.
            </li>
            <li>I consent to receiving emails about MIMC and future events.</li>
          </ul>
          <p className="text-white text-sm mb-2">
            All proceeds from the marriage lecture go to charity. You must have
            purchased an Adult Pass in order to attend this lecture. More
            information on our Instagram{" "}
            <span className="text-[#A9DA88] font-medium">@macmsa_mimc</span>.
          </p>
        </div>

        <Divider className="my-3" />

        {/* Tickets Section */}
        <h3 className="text-2xl font-semibold uppercase text-[#F0FFC9] mb-4">
          Select Your Tickets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 place-items-start ">
          <h3 className="text-[0.7rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            Coupon code
          </h3>
          <Input
            id="coupon"
            // label="Coupon code"
            min="0"
            placeholder=""
            type="text"
            onChange={handleTicketChange}
          />
          <h3 className="text-[0.7rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            Adult Pass (14+ y/o) - $30/ticket
          </h3>
          <Input
            id="adult"
            // label="Adult Pass (14+ y/o) - $30/ticket"
            min="0"
            placeholder="0"
            type="number"
            onChange={handleTicketChange}
          />
          <h3 className="text-[0.68rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            Extra Marriage Lecture (14+ y/o) - $5/ticket
          </h3>
          <Input
            id="marriage"
            // label="Additional Marriage Lecture (14+ y/o) - $5/ticket"
            min="0"
            placeholder="0"
            type="number"
            onChange={handleTicketChange}
          />
          <h3 className="text-[0.7rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            Youth Pass (7-13 y/o) - $5/ticket
          </h3>
          <Input
            id="youth"
            // label="Youth Pass (7-13 y/o) - $5/ticket"
            min="0"
            placeholder="0"
            type="number"
            onChange={handleTicketChange}
          />
          <h3 className="text-[0.7rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            Child Pass (0-6 y/o) - Free
          </h3>
          <Input
            id="child"
            // label="Child Pass (0-6 y/o) - Free"
            min="0"
            placeholder="0"
            type="number"
            onChange={handleTicketChange}
          />
          <h3 className="text-[0.7rem] font-semibold uppercase text-[#F0FFC9] ml-1">
            FREE Adult Pass (14+ y/o) - $0/ticket
          </h3>
          <Input
            id="free"
            // label="FREE Adult Pass (14+ y/o) - $0/ticket"
            min="0"
            max={getMIMCCouponsRemaining.toString()}
            placeholder="0"
            type="number"
            onChange={handleTicketChange}
          />
        </div>

        {/* Donate Checkbox */}
        <div className="mb-2 flex items-center space-x-2">
          <input
            checked={donation}
            className="custom-checkbox"
            id="donation"
            type="checkbox"
            onChange={() => setDonation(!donation)}
          />
          <label className="font-semibold" htmlFor="donation">
            Donate $3 to MacMSA to support MIMC and future initiatives.
          </label>
        </div>

        {/* Final Price */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-[#A9DA88]">Final Price:</h3>
          <span className="text-2xl font-semibold text-[#A9DA88]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <Divider className="my-3" />

        {/* Dynamic Forms Section */}
        <div className="space-y-6">
          {/* Adult Ticket Forms */}
          {adultTicketDetails.map((_, index) => (
            <div key={`adult-${index}`}>
              <h4 className="font-bold text-[#F0FFC9] mb-3">
                Adult Ticket #{index + 1}
              </h4>
              <Input
                isRequired
                className="mb-3"
                label="Full Name"
                placeholder="Enter full name"
                value={adultTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "adult",
                    "fullName",
                    e.target.value,
                  )
                }
              />
              <Input
                isRequired
                className="mb-3"
                label="Email Address"
                placeholder="Enter email address"
                type="email"
                value={adultTicketDetails[index].email}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "adult",
                    "email",
                    e.target.value,
                  )
                }
              />
              <div>
                <label
                  htmlFor={`school-select-${index}`}
                  className="block mb-2 text-gray-400"
                >
                  Select your school (if applicable)
                </label>
                <select
                  className="w-full p-4 text-sm bg-[#27272a] text-white rounded-xl outline-none cursor-pointer appearance-none"
                  id={`school-select-${index}`}
                  name="school"
                  value={adultTicketDetails[index].school}
                  onChange={(e) =>
                    handleDynamicFormChange(
                      index,
                      "adult",
                      "school",
                      e.target.value,
                    )
                  }
                >
                  <option value="none">None</option>
                  <option value="mcmaster">McMaster</option>
                  <option value="brock">Brock</option>
                  <option value="utsg">UTSG</option>
                  <option value="utm">UTM</option>
                  <option value="wlu">WLU</option>
                  <option value="york">York</option>
                  <option value="tmu">TMU</option>
                  <option value="uw">Waterloo</option>
                  <option value="western">Western</option>
                  <option value="guelph">Guelph</option>
                  <option value="windsor">Windsor</option>
                  <option value="fanshawe">Fanshawe</option>
                  <option value="humber">Humber</option>
                  <option value="mohawk">Mohawk</option>
                  <option value="seneca">Seneca</option>
                  <option value="hs">High School</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <fieldset className="mt-2">
                <legend className="mb-2 text-gray-400">
                  Gender <span className="text-red-500">*</span>
                </legend>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      required
                      checked={adultTicketDetails[index].gender === "male"}
                      className="custom-radio"
                      name={`gender-${index}`}
                      type="radio"
                      value="male"
                      onChange={(e) =>
                        handleDynamicFormChange(
                          index,
                          "adult",
                          "gender",
                          e.target.value,
                        )
                      }
                    />
                    <span className="text-white ml-2">Male</span>
                  </label>
                  <label className="flex items-center space-x-2 ml-2">
                    <input
                      required
                      checked={adultTicketDetails[index].gender === "female"}
                      className="custom-radio"
                      name={`gender-${index}`}
                      type="radio"
                      value="female"
                      onChange={(e) =>
                        handleDynamicFormChange(
                          index,
                          "adult",
                          "gender",
                          e.target.value,
                        )
                      }
                    />
                    <span className="text-white ml-2">Female</span>
                  </label>
                </div>
              </fieldset>
            </div>
          ))}

          {/* Marriage Ticket Forms */}
          {marriageTicketDetails.map((_, index) => (
            <div key={`marriage-${index}`}>
              <h4 className="font-bold text-[#F0FFC9] mb-3">
                Marriage Lecture Ticket #{index + 1}
              </h4>
              <Input
                isRequired
                className="mb-3"
                label="Full Name"
                placeholder="Enter full name"
                value={marriageTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "marriage",
                    "fullName",
                    e.target.value,
                  )
                }
              />
              <Input
                isRequired
                className="mb-3"
                label="Email Address"
                placeholder="Enter email address"
                type="email"
                value={marriageTicketDetails[index].email}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "marriage",
                    "email",
                    e.target.value,
                  )
                }
              />
            </div>
          ))}

          {/* Youth and Child Ticket Forms */}
          {youthTicketDetails.map((_, index) => (
            <div key={`youth-${index}`}>
              <h4 className="font-bold text-[#F0FFC9] mb-3">
                Youth Ticket #{index + 1}
              </h4>
              <Input
                isRequired
                className="mb-3"
                label="Full Name"
                placeholder="Enter full name"
                value={youthTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "youth",
                    "fullName",
                    e.target.value,
                  )
                }
              />
              <Input
                isRequired
                className="mb-3"
                label="Caregiver's Phone Number"
                placeholder="Enter phone number"
                type="tel"
                value={youthTicketDetails[index].caregiverPhone}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "youth",
                    "caregiverPhone",
                    e.target.value,
                  )
                }
              />
            </div>
          ))}

          {childTicketDetails.map((_, index) => (
            <div key={`child-${index}`}>
              <h4 className="font-bold text-[#F0FFC9] mb-3">
                Child Ticket #{index + 1}
              </h4>
              <Input
                isRequired
                className="mb-3"
                label="Full Name"
                placeholder="Enter full name"
                value={childTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "child",
                    "fullName",
                    e.target.value,
                  )
                }
              />
              <Input
                isRequired
                className="mb-3"
                label="Caregiver's Phone Number"
                placeholder="Enter phone number"
                type="tel"
                value={childTicketDetails[index].caregiverPhone}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "child",
                    "caregiverPhone",
                    e.target.value,
                  )
                }
              />
            </div>
          ))}

          {freeTicketDetails.map((_, index) => (
            <div key={`free-${index}`}>
              <h4 className="font-bold text-[#F0FFC9] mb-3">
                FREE Adult Ticket #{index + 1}
              </h4>
              <Input
                isRequired
                className="mb-3"
                label="Full Name"
                placeholder="Enter full name"
                value={freeTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "free",
                    "fullName",
                    e.target.value,
                  )
                }
              />
              <Input
                isRequired
                className="mb-3"
                label="Email Address"
                placeholder="Enter email address"
                type="email"
                value={freeTicketDetails[index].email}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "free",
                    "email",
                    e.target.value,
                  )
                }
              />
              <div>
                <label
                  htmlFor={`school-select-${index}`}
                  className="block mb-2 text-gray-400"
                >
                  Select your school (if applicable)
                </label>
                <select
                  className="w-full p-4 text-sm bg-[#27272a] text-white rounded-xl outline-none cursor-pointer appearance-none"
                  id={`school-select-${index}`}
                  name="school"
                  value={freeTicketDetails[index].school}
                  onChange={(e) =>
                    handleDynamicFormChange(
                      index,
                      "free",
                      "school",
                      e.target.value,
                    )
                  }
                >
                  <option value="none">None</option>
                  <option value="mcmaster">McMaster</option>
                  <option value="brock">Brock</option>
                  <option value="utsg">UTSG</option>
                  <option value="utm">UTM</option>
                  <option value="wlu">WLU</option>
                  <option value="york">York</option>
                  <option value="tmu">TMU</option>
                  <option value="uw">Waterloo</option>
                  <option value="western">Western</option>
                  <option value="guelph">Guelph</option>
                  <option value="windsor">Windsor</option>
                  <option value="fanshawe">Fanshawe</option>
                  <option value="humber">Humber</option>
                  <option value="mohawk">Mohawk</option>
                  <option value="seneca">Seneca</option>
                  <option value="hs">High School</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <fieldset className="mt-2">
                <legend className="mb-2 text-gray-400">
                  Gender <span className="text-red-500">*</span>
                </legend>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      required
                      checked={freeTicketDetails[index].gender === "male"}
                      className="custom-radio"
                      name={`gender-${index}`}
                      type="radio"
                      value="male"
                      onChange={(e) =>
                        handleDynamicFormChange(
                          index,
                          "free",
                          "gender",
                          e.target.value,
                        )
                      }
                    />
                    <span className="text-white ml-2">Male</span>
                  </label>
                  <label className="flex items-center space-x-2 ml-2">
                    <input
                      required
                      checked={freeTicketDetails[index].gender === "female"}
                      className="custom-radio"
                      name={`gender-${index}`}
                      type="radio"
                      value="female"
                      onChange={(e) =>
                        handleDynamicFormChange(
                          index,
                          "free",
                          "gender",
                          e.target.value,
                        )
                      }
                    />
                    <span className="text-white ml-2">Female</span>
                  </label>
                </div>
              </fieldset>
            </div>
          ))}
        </div>

        {/* Checkout Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            className="font-bold uppercase bg-[#A9DA88] text-[#3B0819]"
            radius="full"
            variant="solid"
            onClick={() => handleSubmit()}
            // onClick={() => alert("Ticket sales will open later this evening inshaAllah, stay tuned!")}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketPurchaseForm;