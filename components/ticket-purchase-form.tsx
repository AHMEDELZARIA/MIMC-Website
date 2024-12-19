"use client";

import {
  Button,
  Checkbox,
  Divider,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function TicketPurchaseForm() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tickets, setTickets] = useState({
    adult: 0,
    marriage: 0,
    youth: 0,
    child: 0,
  });
  // const { push } = useRouter();
  const [donation, setDonation] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    smsOptIn: false,
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  // Dynamic forms state
  const [adultTicketDetails, setAdultTicketDetails] = useState<any[]>([]);
  const [marriageTicketDetails, setMarriageTicketDetails] = useState<any[]>([]);
  const [youthTicketDetails, setYouthTicketDetails] = useState<any[]>([]);
  const [childTicketDetails, setChildTicketDetails] = useState<any[]>([]);

  const prices = {
    adult: 20,
    marriage: 5,
    youth: 5,
    child: 0,
  };

  useEffect(() => {
    const newTotal = Object.entries(tickets).reduce(
      (acc, [key, count]) => acc + count * prices[key],
      donation ? 2 : 0
    );
    setTotalPrice(newTotal);
  }, [tickets, donation]);

  const handleTicketChange = (e) => {
    const { id, value } = e.target;
    const count = Math.max(parseInt(value) || 0, 0);
    setTickets((prev) => ({
      ...prev,
      [id]: count,
    }));

    // Update dynamic forms when ticket counts change
    if (id === "adult") {
      setAdultTicketDetails(
        Array(count).fill({ fullName: "", email: "", school: "", gender: "" })
      );
    } else if (id === "marriage") {
      setMarriageTicketDetails(Array(count).fill({ fullName: "", email: "" }));
    } else if (id === "youth") {
      setYouthTicketDetails(
        Array(count).fill({ fullName: "", caregiverPhone: "" })
      );
    } else if (id === "child") {
      setChildTicketDetails(
        Array(count).fill({ fullName: "", caregiverPhone: "" })
      );
    }
  };

  const handlePersonalDetailsChange = (e) => {
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
    value: string
  ) => {
    if (type === "adult") {
      setAdultTicketDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    } else if (type === "marriage") {
      setMarriageTicketDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    } else if (type === "youth" || type === "child") {
      const setDetails =
        type === "youth" ? setYouthTicketDetails : setChildTicketDetails;
      setDetails((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      );
    }
  };

  const handleSubmit = async () => {
    const finalTickets = {
      personalDetails,
      adult: adultTicketDetails,
      marriage: marriageTicketDetails,
      youth: youthTicketDetails,
      child: childTicketDetails,
      donation,
    };
    console.log(finalTickets);

    // const link = await (
    //   await fetch(`http://localhost:8000/tickets-link`, {
    //     method: "POST",
    //     body: JSON.stringify(finalTickets),
    //   })
    // ).json();
    // push(link.link);
  };

  return (
    <div className="flex justify-center items-center p-4 min-h-screen">
      <div className="max-w-4xl w-full bg-[#3B0819] p-8 rounded-lg shadow-lg">
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
            <strong className="text-[#A9DA88]">Time:</strong> 10 AM - 9 PM
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
              name="firstName"
              isRequired
              label="First Name"
              placeholder="Enter first name"
              value={personalDetails.firstName}
              onChange={handlePersonalDetailsChange}
            />
            <Input
              name="lastName"
              isRequired
              label="Last Name"
              placeholder="Enter last name"
              value={personalDetails.lastName}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <Input
            name="email"
            isRequired
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            value={personalDetails.email}
            onChange={handlePersonalDetailsChange}
            className="mb-3"
          />
          <Input
            name="confirmEmail"
            isRequired
            type="email"
            label="Confirm Email Address"
            placeholder="Re-enter email address"
            value={personalDetails.confirmEmail}
            onChange={handlePersonalDetailsChange}
            className="mb-3"
          />
          <Input
            name="phone"
            isRequired
            type="tel"
            label="Phone Number"
            placeholder="Enter phone number"
            value={personalDetails.phone}
            onChange={handlePersonalDetailsChange}
            className="mb-3"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <Input
              name="emergencyContactName"
              isRequired
              label="Emergency Contact Name"
              placeholder="Enter emergency contact name"
              value={personalDetails.emergencyContactName}
              onChange={handlePersonalDetailsChange}
            />
            <Input
              name="emergencyContactPhone"
              isRequired
              type="tel"
              label="Emergency Contact Phone"
              placeholder="Enter emergency contact phone"
              value={personalDetails.emergencyContactPhone}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <Checkbox
            name="smsOptIn"
            color="success"
            radius="full"
            isSelected={personalDetails.smsOptIn}
            onChange={() =>
              setPersonalDetails((prev) => ({
                ...prev,
                smsOptIn: !prev.smsOptIn,
              }))
            }
          >
            Opt-in for SMS announcements during the event
          </Checkbox>
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
              I consent to photography, videography, and audio recording, which
              may be publicly released.
            </li>
            <li>
              I consent to not hold MacMSA or McMaster University liable for
              lost, stolen, or damaged property.
            </li>
            <li>
              I consent to receive emails regarding MIMC and future events.
            </li>
          </ul>
          <p className="text-white text-sm mb-2">
            All proceeds for the marriage lecture go to charity. You must have
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            id="adult"
            type="number"
            placeholder="0"
            min="0"
            label="Adult Pass (14+ Years Old) - $20/ticket"
            onChange={handleTicketChange}
          />
          <Input
            id="marriage"
            type="number"
            placeholder="0"
            min="0"
            label="Marriage Lecture (14+ Years Old) - $5/ticket"
            onChange={handleTicketChange}
          />
          <Input
            id="youth"
            type="number"
            placeholder="0"
            min="0"
            label="Youth Pass (7-13 Years Old) - $5/ticket"
            onChange={handleTicketChange}
          />
          <Input
            id="child"
            type="number"
            placeholder="0"
            min="0"
            label="Child Pass (0-6 Years Old) - Free"
            onChange={handleTicketChange}
          />
        </div>

        {/* Donate Checkbox */}
        <Checkbox
          className="mb-2 text-[#570326] font-semibold"
          color="success"
          radius="full"
          isSelected={donation}
          onChange={() => setDonation(!donation)}
        >
          Donate $2 to MacMSA
        </Checkbox>

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
                label="Full Name"
                placeholder="Enter full name"
                value={adultTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "adult",
                    "fullName",
                    e.target.value
                  )
                }
                className="mb-3"
              />
              <Input
                isRequired
                label="Email Address"
                type="email"
                placeholder="Enter email address"
                value={adultTicketDetails[index].email}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "adult",
                    "email",
                    e.target.value
                  )
                }
                className="mb-3"
              />
              <RadioGroup
                label="Select your school (if applicable)"
                orientation="horizontal"
                color="success"
                value={adultTicketDetails[index].school}
                onValueChange={(value) =>
                  handleDynamicFormChange(index, "adult", "school", value)
                }
              >
                <Radio value="mcmaster">McMaster</Radio>
                <Radio value="brock">Brock</Radio>
                <Radio value="uoft">UofT</Radio>
                <Radio value="western">Western</Radio>
                <Radio value="utm">UTM</Radio>
                <Radio value="humber">Humber</Radio>
                <Radio value="mohawk">Mohawk</Radio>
                <Radio value="wlu">Laurier</Radio>
                <Radio value="uw">Waterloo</Radio>
                <Radio value="fanshawe">Fanshawe</Radio>
                <Radio value="windsor">Windsor</Radio>
                <Radio value="tmu">TMU</Radio>
                <Radio value="guelph">Guelph</Radio>
                <Radio value="seneca">Seneca</Radio>
              </RadioGroup>
              <RadioGroup
                isRequired
                label="Gender"
                orientation="horizontal"
                color="success"
                className="mt-2"
                value={adultTicketDetails[index].gender}
                onValueChange={(value) =>
                  handleDynamicFormChange(index, "adult", "gender", value)
                }
              >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </RadioGroup>
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
                label="Full Name"
                placeholder="Enter full name"
                value={marriageTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "marriage",
                    "fullName",
                    e.target.value
                  )
                }
                className="mb-3"
              />
              <Input
                isRequired
                label="Email Address"
                type="email"
                placeholder="Enter email address"
                value={marriageTicketDetails[index].email}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "marriage",
                    "email",
                    e.target.value
                  )
                }
                className="mb-3"
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
                label="Full Name"
                placeholder="Enter full name"
                value={youthTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "youth",
                    "fullName",
                    e.target.value
                  )
                }
                className="mb-3"
              />
              <Input
                isRequired
                label="Caregiver's Phone Number"
                type="tel"
                placeholder="Enter phone number"
                value={youthTicketDetails[index].caregiverPhone}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "youth",
                    "caregiverPhone",
                    e.target.value
                  )
                }
                className="mb-3"
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
                label="Full Name"
                placeholder="Enter full name"
                value={childTicketDetails[index].fullName}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "child",
                    "fullName",
                    e.target.value
                  )
                }
                className="mb-3"
              />
              <Input
                isRequired
                label="Caregiver's Phone Number"
                type="tel"
                placeholder="Enter phone number"
                value={childTicketDetails[index].caregiverPhone}
                onChange={(e) =>
                  handleDynamicFormChange(
                    index,
                    "child",
                    "caregiverPhone",
                    e.target.value
                  )
                }
                className="mb-3"
              />
            </div>
          ))}
        </div>

        {/* Checkout Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            color="danger"
            className="font-bold uppercase"
            radius="full"
            variant="flat"
          >
            Cancel
          </Button>
          <Button
            color="success"
            className="font-bold uppercase text-black"
            radius="full"
            variant="solid"
            onClick={() => handleSubmit()}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
