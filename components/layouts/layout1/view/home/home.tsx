import React, { useEffect } from "react";
import MainLayout from "../../hoc-component/main-layout";
import ContentHome from "../../content-home/content-home";
import { createPage } from "@components/dynamic-rendering.service";
import mockResponse from "@components/dynamic-rendering/dynamic-rendering.mock";
import { useRouter } from "next/router";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import Loading from "@components/common/loading/loading-common";

type Props = {};

function HomeLayout1({}: Props) {
  const router = useRouter();
  const loading = useAppSelector((state) => state.commonReducer.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListTop({ page: 1 }));
    return () => {};
  }, []);
  return (
    <>
      {createPage(mockResponse)}
      {loading && <Loading />}
      {/* <MainLayout>
        <ContentHome />
      </MainLayout> */}
    </>
  );
}

export default HomeLayout1;
