"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section className="flexCenter flex-col mt-8">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We're at your service
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">
            Lead You the Simple Way
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With the EcoRover app, you'll never have to worry about getting
            lost. We provide offline maps for areas with no internet connection.
            Gather your friends and family for an exciting wilderness adventure,
            exploring valleys and conquering mountain peaks.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full xl:h-[500px] h-[450px] bg-cover bg-no-repeat bg-bg-img-3 bg-center xl:rounded-5xl">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{duration: 0.5}}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            quality={100}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">1hr 15min</p>
              </div>
              <p className="bold-20 mt-2">Danum Valley</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Kinabatangan River
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
