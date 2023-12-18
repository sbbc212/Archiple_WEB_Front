import ImageCard from "./ImageCard";
import TextCard from "./TextCardList";

import type { CarddataType } from "@/constants/imagecard";

const TextImageCard = ({ data }: { data: CarddataType[] }) => {
  return (
    <div className="py-[7rem]">
      {data.map((content: CarddataType) => (
        <div key={content.title}>
          <div className={`${content.type === "imgleft" ? "flex" : "flex flex-row-reverse"} items-center pt-10 justify-around`}>
            <div className="w-1/2">
              <ImageCard dataimg={content.img} />
            </div>
            <div className="w-1/2">
              <TextCard dataid={content.id} title={content.title} content={content.content} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TextImageCard;
