import React from "react";
import Link from "next/link";

import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { Branch } from "@/types";

interface LocationCardProps {
  branch: Branch;
}

const LocationCard = ({ branch }: LocationCardProps) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg mb-4 text-text ">
      <div className="flex flex-col justify-center mb-2 px-6 pt-6">
        <div className="flex space-x-4 items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {branch.location}
          </h2>
          <div className="text-primary ">
            <Link href={`tel:${branch.phone}`}>{branch.phone}</Link>
          </div>
        </div>
        <address className="not-italic mt-2 text-sm md:text-[18px] font-light md:leading-7 ">
          {branch.address.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </address>
        <p className=" text-primary">
          <Link href={branch.googleMaps}>View Map</Link>
        </p>
      </div>
      <div className="flex space-x-2 mb:space-x-4 mb-4 px-6 text-primary text-[18px] md:text-[24px]">
        <Link href={branch.facebook}>
          <FaSquareFacebook />
        </Link>
        <Link href={branch.instagram}>
          <FiInstagram />
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <Link
          className="bg-gradient-to-r from-primary to-third py-4 px-6 text-xl tracking-normal text-center text-white "
          href={`/services`}
        >
          View Services
        </Link>
        <Link
          className="p-6 text-center text-sm tracking-widest  "
          href="/contact"
        >
          Book an Appointment ({branch.location})
          <BiRightArrowAlt className="inline-block mx-2 text-[24px] text-text" />
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
