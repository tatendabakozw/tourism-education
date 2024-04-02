import React, { useState } from "react";
import { Select, useToast } from "@chakra-ui/react";
import { useFetch } from "@hooks/useFetch";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import slugify from "@helpers/sligify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "@utils/apiUrl";
import { getMessage } from "@helpers/getMessage";
import cog_wheel from "@assets/cogwheel1.svg";
import cog_blue1 from "@assets/cog_blue1.svg";

type Props = {};

function Register({}: Props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [full_name, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [nat_id, setNatId] = useState("");
  const [org_type, setOrgType] = useState("");
  const [thematic_area, setThematicArea] = useState("");
  const [presentation_type, setPresType] = useState("");
  const [delegate_type, setDelagateType] = useState("");
  const [special_needs, setSpecialNeeds] = useState("");
  const [dietary, setDietaryNeeds] = useState("");
  const [loading, setFileLoading] = useState(false);
  const toast = useToast();
  const [agreed, setAgreed] = useState<any>(false);
  const [job_title, setJobTitle] = useState("");

  const history = useNavigate();

  const countries_url = `https://restcountries.com/v3.1/all`;
  const countries = useFetch(countries_url);

  const registerUser = async () => {
    setFileLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/api/event/register`, {
        email: email,
        name: full_name,
        phone_number: phone,
        country,
        city,
        id_number: nat_id,
        org_type: org_type,
        thematic_area: thematic_area,
        delegate_type,
        presentation_type,
        special_needs,
        diet: dietary,
        title: title,
      });
      console.log(data);
      setEmail("");
      setPhone("");
      setCountry("");
      setFullName("");
      setCity("");
      setTitle("");
      setOrgType("");
      setThematicArea("");
      setPresType("");
      setDelagateType("");
      setSpecialNeeds("");
      setDietaryNeeds("");
      setFileLoading(false);

      setTimeout(() => {
        history("/success");
      }, 1000);
      toast({
        title: "Registration Successful.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      setFileLoading(false);

      toast({
        title: "Registration Failed.",
        description: getMessage(error),
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-full  min-h-screen relative">
      <div className="h-60 md:bg-gradient-to-r bg-gradient-to-b from-blue-100 relative to-blue-300 items-center justify-center content-center">
        <p className="text-center font-bold text-slate-900 text-4xl">Register Now</p>
        <div className="absolute md:h-96 h-40 md:w-96 w-40 rounded-full md:-top-20 -top-10 md:-right-20 -right-10 z-0">
          <img src={cog_wheel} alt="" className="" />
        </div>
        <div className="absolute  rounded-full md:h-[600px] h-[400px] md:w-[600px] w-[400px] top-0 my-auto z-0 mx-0 bottom-0 md:-left-40 -left-40">
          <img src={cog_blue1} alt="" className="" />
        </div>
      </div>
      <div className="max-w-7xl border border-slate-200/20 mt-8 shadow bg-white absolute z-50 left-1/2 transform -translate-x-1/2  p-4 w-full mx-auto rounded-lg">
        <div className="bg-white w-full max-w-5xl flex flex-col space-y-8 mx-auto md:p-8 p-4 h-full rounded-lg">
          <div className="flex  w-full flex-row items-center justify-between">
            <Link
              to="/"
              className="flex bg-slate-200 hover:bg-slate-100 rounded-full p-2"
            >
              <ArrowLeftIcon height={24} width={24} />
            </Link>
            <a
              href="/participation"
              className="bg-slate-200 hover:bg-slate-100 p-2 font-semibold rounded"
            >
              How to participate
            </a>
          </div>
          <p className="text-lg font-semibold text-slate-900 text-center">
            Register Now
          </p>
          <FieldItem
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder_="email"
          />
          <FieldItem
            label="Phone Number"
            value={phone}
            setValue={setPhone}
            placeholder_="Phone Number"
          />

          <FieldItem
            label="Full Name"
            value={full_name}
            setValue={setFullName}
            placeholder_="John Doe"
          />
          <FieldItem
            label="Job Title"
            value={job_title}
            setValue={setJobTitle}
            placeholder_="John Doe"
          />
          <FieldItem
            label="Title"
            value={title}
            is_dropdown
            select_options={[
              { value: "mr", name: "Mr" },
              { value: "mrs", name: "Mrs" },
              { value: "miss", name: "Miss" },
              { value: "ms", name: "Ms" },
              { value: "doc", name: "Dr" },
              { value: "sr", name: "Sister" },
              { value: "fr/rev", name: "Father/Reverend" },
              { value: "prof", name: "Prof" },
              { value: "hon", name: "Honorable" },
            ]}
            setValue={setTitle}
            placeholder_="Select title"
          />
          <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
            <div className="col-span-1 font-semibold">{"Select Country"} </div>
            <div className="md:col-span-3 col-span-1">
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled selected>
                  Select Country
                </option>
                {countries?.data
                  ?.sort((a: any, b: any) =>
                    a.name.common.localeCompare(b.name.common)
                  )
                  ?.map((option: any, index: number) => (
                    <option key={index} value={slugify(option.name.common)}>
                      {option.name.common}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
          <FieldItem
            label="City"
            value={city}
            setValue={setCity}
            placeholder_="Enter city"
          />
          {/* 
          <FieldItem
            label="National Id/Passport No"
            value={nat_id}
            setValue={setNatId}
            placeholder_="national id/ passport No"
          /> */}
          <FieldItem
            label="Affiliation"
            value={org_type}
            setValue={setOrgType}
            // is_dropdown
            // select_options={[
            //   { name: "Agriculture" },
            //   { name: "Education" },
            //   { name: "Energy" },
            //   { name: "Tourism" },
            //   { name: "Finance" },
            //   { name: "Construction" },
            //   { name: "Commerce" },
            //   { name: "Health" },
            // ]}
            placeholder_="Indicate your organisation type"
          />

          <FieldItem
            label="Indicate Special Needs"
            is_message
            value={special_needs}
            setValue={setSpecialNeeds}
            placeholder_="Indicate any special needs e.g wheelchair bound"
          />
          <FieldItem
            label="Indicate dietary requirements"
            is_message
            value={dietary}
            setValue={setDietaryNeeds}
            placeholder_="Indicate any special dietary requirements"
          />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              value={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-primary focus:ring-red-400"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I consent to share
              <span className="text-blue-900"> the information above</span>
            </label>
          </div>

          {agreed ? (
            <>
              {loading ? (
                <div className="flex self-end bg-blue-900 text-white p-2 rounded-lg cursor-pointer">
                  Please Wait ...
                </div>
              ) : (
                <div
                  onClick={registerUser}
                  className="flex self-end bg-blue-900 text-white p-2 rounded-lg cursor-pointer"
                >
                  Register
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex self-end bg-gray-500 text-white p-2 rounded-lg cursor-pointer">
                Register
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface FieldItemProps {
  label: string;
  placeholder_?: string;
  value: any;
  setValue: any;
  optional?: boolean;
  is_dropdown?: boolean;
  select_options?: any;
  is_message?: boolean;
}

const FieldItem = ({
  label,
  value,
  setValue,
  optional,
  placeholder_,
  is_dropdown,
  select_options,
  is_message,
}: FieldItemProps) => {
  return (
    <div className="grid md:grid-cols-4 md:gap-4 gap-2 grid-cols-1 items-center">
      <div className="col-span-1 font-semibold capitalize">
        {label}{" "}
        {optional && (
          <span className="tex-slate-400 text-xs font-normal">(optional)</span>
        )}
      </div>
      <div className="md:col-span-3 col-span-1">
        {is_dropdown ? (
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="" disabled selected>
              {placeholder_}
            </option>
            {select_options?.map((option: any, index: number) => (
              <option key={index} value={slugify(option.name)}>
                {option.name}
              </option>
            ))}
          </Select>
        ) : (
          <>
            {is_message ? (
              <textarea
                rows={5}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder_}
                className="outline-none p-2 w-full border border-slate-200 rounded"
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder_}
                className="outline-none p-2 w-full border border-slate-200 rounded"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
