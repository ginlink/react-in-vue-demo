import React, { useState, useEffect, useRef } from "react";
import { SheetComponent } from "@antv/s2-react";
import "@antv/s2-react/dist/style.min.css";

// 初始化配置
const s2Options = {
  width: 600,
  height: 400,
  showSeriesNumber: true,
  tooltip: { showTooltip: false },
  interaction: { enableCopy: true, hoverHighlight: false },
  showDefaultHeaderActionIcon: false,
};

// 初始化数据
const s2DataCfg = {
  fields: { columns: ["province", "city", "type", "price"] },
  sortParams: [],
};

const data: any[] = new Array(1000000).fill(0).map((_, index) => ({
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: index,
}));

export default function EditTable() {
  const S2Ref = useRef(null);
  const [options, setOptions] = useState(s2Options);
  const [dataCfg, setDataCfg] = useState({ ...s2DataCfg, data });

  return (
    <div style={{ position: "relative" }}>
      <SheetComponent
        ref={S2Ref}
        dataCfg={dataCfg}
        options={options}
        sheetType="editable"
      />
    </div>
  );
}
