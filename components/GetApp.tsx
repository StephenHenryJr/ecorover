"use client";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-6 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{duration: 0.5}}
          className="flex flex-1 items-center justify-end"
        >
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </motion.div>
      </div>
    </section>
  );
};

export default GetApp;
