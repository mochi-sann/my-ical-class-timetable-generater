import { expect, test } from "vitest";

import GetNextDayOfWeek from "../GetNextDayOfWeek";
import { dayjsWapper } from "../dayjs";

test("get-next-day-of-week", () => {
  const result = dayjsWapper
    .tz("2022-09-11T00:00:00.000Z", "Asia/Tokyo")
    .toDate();

  expect(
    GetNextDayOfWeek({
      dayOfWeek: 0, // 日曜日
      date: "2022-09-05", // 月曜日
      includeToday: true,
    })
  ).toStrictEqual(result);
});

test("get-next-day-of-week 1 ", () => {
  const result = dayjsWapper
    .tz("2022-09-05T00:00:00.000Z", "Asia/Tokyo")
    .toDate();
  expect(
    GetNextDayOfWeek({
      dayOfWeek: 1, // 月曜日
      date: "2022-09-05", // 月曜日
      includeToday: true,
    })
  ).toStrictEqual(result);
});
test("get-next-day-of-week 2 ", () => {
  const result = dayjsWapper
    .tz("2022-09-10T00:00:00.000Z", "Asia/Tokyo")
    .toDate();
  expect(
    GetNextDayOfWeek({
      dayOfWeek: 6, // 土曜日
      date: "2022-09-05", // 月曜日
      includeToday: true,
    })
  ).toStrictEqual(result);
});
test("get-next-day-of-week 3 ", () => {
  const result = dayjsWapper
    .tz("2022-09-08T00:00:00.000Z", "Asia/Tokyo")
    .toDate();
  console.log(result.toString(), "result");
  expect(
    GetNextDayOfWeek({
      dayOfWeek: 4, // 木曜日
      date: "2022-09-08", // 木曜日
      includeToday: true,
    })
  ).toStrictEqual(result);
});
