import Link from "next/link";
import Image from "next/image";

const ImageSectionCardRight = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-white ">
      <div className="w-full lg:w-1/2 flex justify-end">
        <div className=" mb-2 p-12 max-w-full  lg:max-w-[512px] xl:max-w-[640px]">
          <div className="relative">
            <div className="secondary-the font-secondary text-primary ">
              The
            </div>
            <h2 className="text-[40px] leading-[36px] mt-5 font-light text-primary">
              Stylists
            </h2>
          </div>

          <p className="mt-5 text-sm md:text-lg font-light leading-7 text-text">
            Our team specializes in customizing hair patches and wigs that offer
            an impeccable blend of natural appearance and comfort. With a deep
            understanding of various hair types and an eye for aesthetic detail,
            they excel in crafting solutions that are tailored to each client's
            unique needs.
          </p>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 bg-cover bg-[0] bg-no-repeat min-h-25vh lg:min-h-50vh"
        style={{
          backgroundImage: "url('/images/hair-adjusting.webp')",
        }}
      ></div>
    </div>
  );
};

export default ImageSectionCardRight;
