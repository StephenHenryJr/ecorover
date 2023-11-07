"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import FeatureItem from "./FeatureItem";

const container = {
  visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.3 }},
  hidden: { opacity: 0 },
};

const features = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -100 },
};

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 lg:min-h-[900px]"
        >
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </motion.div>

        <motion.div    initial="hidden"
          whileInView="visible"
          variants={container}
          className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/paws.png"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-35px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <motion.div variants={features}  >
                <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
