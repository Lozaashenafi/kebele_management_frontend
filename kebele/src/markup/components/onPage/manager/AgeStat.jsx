import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {}
const dataset = [
  {
    seoul: 21,
    year: "1-5",
  },

  {
    seoul: 41,
    year: "5-10",
  },
  {
    seoul: 200,
    year: "10-20",
  },
  {
    seoul: 99,
    year: "20-30",
  },
  {
    seoul: 144,
    year: "40-50",
  },
  {
    seoul: 319,
    year: "50-60",
  },
  {
    seoul: 249,
    year: "60-70",
  },
  {
    seoul: 70,
    year: "above 70",
  },
];

const valueFormatter = (value) => `${value}percent`;

const chartSetting = {
  yAxis: [
    {
      label: "Age (percent)",
    },
  ],
  series: [{ dataKey: "seoul", label: "Age Distribution", valueFormatter }],
  height: 350,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function AgeStat() {
  const [tickPlacement, setTickPlacement] = React.useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState("middle");

  return (
    <div style={{ width: "70%" }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "year",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
