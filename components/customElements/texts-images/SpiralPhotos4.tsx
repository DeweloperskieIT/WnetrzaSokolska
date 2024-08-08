import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface SpiralPhotos4Types {
  className?: string;
  images: string[];
}

const SpiralPhotos4 = ({ className, images }: SpiralPhotos4Types) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-1 w-full h-full md:max-h-[800px] overflow-hidden",
        className
      )}
    >
      <div className="basis-1/2">
        <Image
          src={images[0]}
          alt="img"
          width={1920}
          height={1080}
          className="object-cover size-full"
        />
      </div>
      <div className="flex flex-col gap-1 basis-1/2">
        <div className="h-1/2">
          <Image
            src={images[1]}
            alt="img"
            width={1920}
            height={1080}
            className="object-cover size-full"
          />
        </div>
        <div className="flex flex-row gap-1">
          <div>
            <Image
              src={images[2]}
              alt="img"
              width={1920}
              height={1080}
              className="object-cover size-full"
            />
          </div>
          <div>
            <Image
              src={images[3]}
              alt="img"
              width={1920}
              height={1080}
              className="object-cover size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralPhotos4;

// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React from "react";

// interface SpiralPhotos4Types {
//   className?: string;
//   images: string[];
// }

// const SpiralPhotos4 = ({ className, images }: SpiralPhotos4Types) => {
//   return (
//     <div
//       className={cn(
//         "w-full h-fit max-h-screen flex flex-col md:flex-row gap-1",
//         className
//       )}
//     >
//       <Image
//         src={images[0]}
//         alt="img"
//         width={1280}
//         height={768}
//         className="object-cover w-1/2 h-full basis-1/2"
//       />
//       <div className="basis-1/2 flex flex-col gap-1 h-auto">
//         <Image
//           src={images[1]}
//           alt="img"
//           width={1280}
//           height={768}
//           className="object-cover  w-full h-full basis-1/2"
//         />
//         <div className="basis-1/2 flex flex-row gap-1">
//           <Image
//             src={images[2]}
//             alt="img"
//             width={1280}
//             height={768}
//             className="object-cover  w-1/2 h-full basis-1/2"
//           />
//           <Image
//             src={images[3]}
//             alt="img"
//             width={1280}
//             height={768}
//             className="object-cover  w-1/2 h-full  basis-1/2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpiralPhotos4;
