import Image from "next/image";
import { MdArticle, MdPictureAsPdf, MdArchive } from "react-icons/md";

const IntroductionCardSecond = () => {
  return (
    <div className="w-full rounded-md p-6 bg-gradient-to-b from-[#E1E7EA] to-white shadow">
      <div className="flex flex-col md:flex-row pb-4 gap-6 items-start">
        {/* Image */}


        {/* Content */}
        <div className="flex-1 my-auto">
          <h1 className="text-[32px] font-bold text-[rgb(0,87,156)]">
            Perinatal Journal
          </h1>
          <h2 className="text-[18px] pt-3 font-bold leading-[20px] text-[rgb(0,87,156)] mt-2">
            Volume 33, Issue-1, April 2025
          </h2>
          <div className="journal-pages text-green-700 mt-3">
            Pages: 1-61
          </div>
          <p className="mt-4 text-[12px] leading-[20px] font-normal text-black">
            Perinatal Journal is an international, online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of Perinatal Medicine Foundation. It is published three times a year in April, August and December. The publication language of the journal is English.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">

          </div>
        </div>
        <div className="w-[173px] h-[230px] relative shadow-[4px_8px_8px_rgba(0,0,0,0.4)]">
          <Image
            src="/images/perinatal-journal-small-en-US.jpg"
            alt="Perinatal Journal Cover"
            width={173}
            height={230}
            className="w-[173px] h-[230px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionCardSecond;
