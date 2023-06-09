import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { useAppSelector } from "@hook/hooks";
import apiConfig from "lib/api/apiConfig";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
interface ICardRowMain {
  className?: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const CardRowMain: React.FC<ICardRowMain> = ({ children, className = "", sx = {} }) => {
  const { topmovie } = useAppSelector((state) => state.movie);

  return (
    <article className={`${className} classNameclsarticlemain`}>
      {topmovie[0] && (
        <Link href={"/detail/s"}>
          <Box className="clsarticlemain-content" sx={{ ...sx }}>
            {topmovie[0]?.backdrop_path && (
              <div className="clsarticlemain-img">
                <Image
                  src={
                    topmovie[0]?.backdrop_path
                      ? apiConfig.originalImage(topmovie[0]?.backdrop_path)
                      : img
                  }
                  alt={topmovie[0]?.title}
                  width="1500"
                  height="750"
                />
              </div>
            )}

            <div className="clsarticlemain-summary">
              <h5 className="clsarticlemain-summary__title">{topmovie[0]?.title}</h5>
              <h5 className="clsarticlemain-summary__category"> category-name</h5>

              <div className="clsarticlemain-summary__des">
                <p> {topmovie[0]?.overview}</p>
              </div>
              <div className="clsarticlemain-summary__category">
                <p className="clsarticlemain-summary__category-author">
                  <PersonIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />
                  {topmovie[0]?.original_title.slice(0, 10)}
                </p>
                <p className="clsarticlemain-summary__category-time">
                  <CalendarMonthIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />{" "}
                  {topmovie[0]?.release_date}
                </p>
              </div>
            </div>
          </Box>
        </Link>
      )}
    </article>
  );
};

export default CardRowMain;
