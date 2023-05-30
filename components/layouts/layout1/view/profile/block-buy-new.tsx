import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/system/Unstable_Grid";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Stack } from "@mui/material";
type Props = {};

const BlockBuyNew = (props: Props) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="clsblockbuynew">
      <Grid2 container spacing={1}>
        <Grid xs={12} tablet={6} laptop={3}>
          Email
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          abcd@gmail.com
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          Nickname
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          Nickname social ID
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          Name
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          Tên thật của social ID
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          Birthday/Age
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          22/12/1999 /Male
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          {" "}
          Event/mail quảng cáo
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label=" Không nhận tin tức đa dạng như event, service mới"
              />
              Ngày từ chối: 22/12/2023
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Nhận tin tức đa dạng như event, service mới"
              />
              Ngày đồng ý : 22/12/2023
            </RadioGroup>
          </FormControl>
          {/* <p>
            <Checkbox className={"clsformlogin-input"} size="small" sx={{ marginLeft: -1 }} /> nhận
            tin tức đa dạng như event, service mới
            <br />
            거부일자 : 2023년04월05일 ngày từ chối
          </p> */}
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}></Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          {/* <p>
            <Checkbox className={"clsformlogin-input"} size="small" sx={{ marginLeft: -1 }} />{" "}
            이벤트, 신규 서비스 등 다양한 소식을 받습니다.
            <br />
            동의일자 : 2023년05월01일
          </p> */}
        </Grid>
        <Grid xs={12} tablet={12} laptop={12}>
          <p>
            Email hướng dẫn cần thiết nhằm sử dụng dịch vụ thành viên được gửi bất kể sự đồng ý nhận
            quảng cáo .
          </p>
        </Grid>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
          <Button variant="contained">chỉnh sửa</Button>
        </Stack>
      </Grid2>
    </div>
  );
};

export default BlockBuyNew;
