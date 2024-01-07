import Link from "next/link";
import Image from "next/image";

const ImageSectionCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white ">
      <div
        className="w-full lg:w-1/2 bg-cover bg-[0] bg-no-repeat min-h-25vh lg:min-h-50vh"
        style={{
          backgroundImage: "url('/images/cutting-hair.webp')",
        }}
      ></div>
      <div className="w-full lg:w-1/2 ">
        <div className=" mb-2 p-12 max-w-full  lg:max-w-[512px] xl:max-w-[640px]">
          <div className="relative">
            <div className="secondary-the font-secondary text-primary ">
              The
            </div>
            <h2 className="text-[40px] leading-[36px] mt-5 font-light text-primary">
              Experience
            </h2>
          </div>

          <p className="mt-5 text-sm md:text-lg font-light leading-7 text-text">
            At Rock&apos;z Hair Studio, we specialize in bespoke hair patch
            services, offering a blend of style, comfort, and natural
            aesthetics. Our expert stylists are adept at creating hair patches
            that seamlessly match your hair for an undetectable and flawless
            look.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSectionCard;
