import { Badge } from "@mui/material";
import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface Schedule {
  id: number;
  title: string;
  date: string; // yyyy-mm-dd
}

interface Props {
  schedules: Schedule[];
}

const groupByDate = (schedules: Schedule[]) => {
  return schedules.reduce<Record<string, Schedule[]>>((acc, cur) => {
    if (!acc[cur.date]) {
      acc[cur.date] = [];
    }
    acc[cur.date].push(cur);
    return acc;
  }, {});
};

export default function Calendar({ schedules }: Props) {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const grouped = groupByDate(schedules);

  return (
    <DateCalendar
      value={value}
      onChange={(newValue) => setValue(newValue)}
      slots={{
        day: (props) => {
          const dateStr = props.day.format("YYYY-MM-DD");
          const daySchedules = grouped[dateStr] || [];

          return (
            <Badge
              variant="dot"
              color="error"
              invisible={daySchedules.length === 0}
            >
              <PickersDay {...props} />
            </Badge>
          );
        },
      }}
    />
  );
}
