import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useAppSelector } from "@hook/hooks";
interface ICardRowProps {
  item: IresponeMovie;
  isdes?: boolean;
  isShowNumber?: boolean;
  isAuthor?: boolean;
  isImg?: boolean;
  className?: string;
  number?: number;
  isReverse?: boolean;
  isNewTab?: boolean;
  sx?: SxProps<Theme>;
}

const CardRow: React.FC<ICardRowProps> = ({
  item,
  isdes = true,
  isImg = true,
  className = "",
  sx = {},
  isAuthor = false,
  isShowNumber = false,
  number = 0,
  isReverse = false,
  isNewTab = false,
}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <article className={`${className} clsarticle`}>
      <Link href={"/detail/123"} target={isNewTab ? "_blank" : "_parent"}>
        <Box
          className="clsarticle-content"
          sx={
            isReverse
              ? {
                  ...sx,
                  flexDirection: "row-reverse",
                }
              : { ...sx }
          }
        >
          {isShowNumber ? (
            <div className="clsarticle-number">
              <h2>{number}</h2>
            </div>
          ) : (
            <>
              {isImg && item?.backdrop_path && (
                <div className="clsarticle-img">
                  <Image
                    src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
                    alt={item?.title || "img"}
                    width="500"
                    height="350"
                  />
                </div>
              )}
            </>
          )}
          <div className="clsarticle-summary">
            <h5 className="clsarticle-summary__title">{item?.title}</h5>
            <h5 className="clsarticle-summary__category">{"category-name"} </h5>
            <div className="clsarticle-summary__des">{isdes && <p>{item?.overview}</p>}</div>
            {isAuthor && (
              <div className="clsarticletitletop-category">
                <span className="clsarticletitletop-category__author">
                  <PersonIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />
                  {item?.original_title.slice(0, 10)}
                </span>
                <span className="clsarticletitletop-category__time">
                  <CalendarMonthIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />{" "}
                  {item?.release_date}
                </span>
              </div>
            )}
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardRow;
