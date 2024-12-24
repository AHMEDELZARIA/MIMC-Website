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

const TicketPurchaseForm: React.FC = () => {
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

  const prices = {
    adult: 20,
    marriage: 5,
    youth: 5,
    child: 0,
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
    const link = await (
      await fetch(`http://localhost:7000/tickets-link`, {
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
              style={{
                color: "white",
                "::placeholder": {
                  color: "rgba(255, 255, 255, 0.6)", // Optional: For placeholder styling
                },
              }}
            />
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
          <Checkbox
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
            Adult Pass (14+ y/o) - $20/ticket
          </h3>
          <Input
            id="adult"
            // label="Adult Pass (14+ y/o) - $20/ticket"
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
        </div>

        {/* Donate Checkbox */}
        <Checkbox
          className="mb-2 text-[#570326] font-semibold"
          color="success"
          isSelected={donation}
          radius="full"
          onChange={() => setDonation(!donation)}
        >
          Donate $3 to MacMSA
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
                  <option value="seneca">High School</option>
                  <option value="seneca">Other</option>
                </select>
              </div>
              <RadioGroup
                isRequired
                className="mt-2"
                color="success"
                label="Gender"
                orientation="horizontal"
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
        </div>

        {/* Checkout Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            className="font-bold uppercase bg-[#A9DA88] text-[#3B0819]"
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
};

export default TicketPurchaseForm;
