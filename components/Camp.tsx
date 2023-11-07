'use client'
import Campsite from "./Campsite";

import Image from "next/image";
import { motion } from "framer-motion";

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Yellowstone National Park"
          subtitle="Wyoming, U.S"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="bg-bg-img-2"
          title="The Serengeti"
          subtitle="Tanzania, Africa"
          peopleJoined="50+ Joined"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:0.5}}
        className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6"
      >
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Camp;

