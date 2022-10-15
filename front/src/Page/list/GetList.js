import axios from "axios";
import { useState } from "react";

export function GetList(selectData, location) {
  const [detailData, setDetailData] = useState(null);
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL_API}/v1/shop?page=1&size=10&cityId=${selectData.filter.localId}&areaId=${selectData.filter.areaId}&category=${location.state.categoryInfo}&sort=1`,
  }).then((list) => setDetailData(list.data.data));
  return detailData;
}
