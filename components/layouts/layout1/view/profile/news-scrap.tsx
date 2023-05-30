import CardRow from "@components/common/card-row/card-row";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";

type Props = {};
const arr = [1, 2, 3, 4, 5];
const NewsScrap = (props: Props) => {
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);

  return (
    <div className="clsnewsscrap">
      {topmovie.slice(0, 15).map((item, index) => {
        return (
          <div className="clsbuynewsscrap-item" key={index}>
            <CardRow item={item} sx={{ marginTop: "20px" }} isNewTab={true} />
            <div className="clsbuynewsscrap-close">
              <CloseIcon sx={{ fontSize: "30px" }}></CloseIcon>
            </div>
          </div>
        );
      })}
      {topmovie.length == 0 && (
        <>
          <div className="clsnewsscrap-nodata">
            <p>không có news nào scrap . </p>
            <p>vui lòng bảo quản news được quan tâm .</p>
          </div>
          <div className="clsnewsscrap-coppyright">
            <p>
              이용약관 <b>개인정보처리방침</b>
            </p>
            <p>© 언론사명. All rights reserved.</p>
          </div>
        </>
      )}
      {/* {topmovie.length != 0 && (
        <div className="content">
          <div className="paging">
            <ArrowBackIosIcon />
            {arr.map((item, index) => {
              return (
                <p className="paging-item" key={index}>
                  {item}
                </p>
              );
            })}
            <ArrowForwardIosIcon className="right" />
          </div>
        </div>
      )} */}
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} width={"100%"}>
        <Pagination count={10} variant="outlined" shape="rounded" sx={{ marginTop: 3 }} />
      </Stack>
    </div>
  );
};

export default NewsScrap;
