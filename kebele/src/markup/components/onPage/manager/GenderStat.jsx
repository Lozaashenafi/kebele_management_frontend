import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";

const items = [
  { id: "id_B", value: 15, label: "Female", color: "#FFBB28" },
  { id: "id_C", value: 20, label: "Male", color: "#FF8042" },
];

const formatObject = (obj) => {
  if (obj === null) {
    return "  undefined";
  }
  return JSON.stringify(obj, null, 2)
    .split("\n")
    .map((l) => `  ${l}`)
    .join("\n");
  cd;
};

export default function GenderStat() {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(undefined);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  const formattedItems = items.map((item) => ({
    ...item,
    label: `${item.label} (${Math.round(
      (item.value / items.reduce((total, curr) => total + curr.value, 0)) * 100
    )}%)`,
  }));

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <Typography
        component="pre"
        sx={{
          maxWidth: { xs: "100%", md: "50%", flexShrink: 1 },
          overflow: "auto",
        }}
      ></Typography>

      <PieChart
        series={[
          {
            data: formattedItems,
            dataLabel: {
              visible: true,
              content: "{value}",
              formatter: (value) => `${value}%`,
            },
          },
        ]}
        onClick={handleClick}
        width={400}
        height={200}
        margin={{ right: 200 }}
      />
    </Stack>
  );
}
