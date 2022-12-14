import { ICalEventRepeatingFreq, ICalWeekday } from "ical-generator";
import { expect, test } from "vitest";

import FormDateToIcal, {
  FormDateToIcalArgsType,
  FormDateToIcalReturnType,
} from "../FormDateToIcal";
import { dayjsWapper } from "../dayjs";

test("Convert to Icaldeta 曜日と startDateが同じ", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-26",
    count: 8,
    periodNumber: 0,
    dayOfweek: "Mon",
    summary: "授業の名前",
    location: "hello",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-26 08:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-26 08:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      count: 8,
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});

test("Convert to Icaldeta 曜日と startDateが違う", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-24",
    count: 8,
    periodNumber: 0,
    dayOfweek: "Mon",
    location: "hello",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-26 08:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-26 08:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      count: 8,
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta:3", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-05",
    count: 8,
    periodNumber: 5,
    location: "hello",
    dayOfweek: "Fri",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    url: "https://google.com/",
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-09-09 17:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-09-09 17:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      count: 8,
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
test("Convert to Icaldeta:4", () => {
  const Value: FormDateToIcalArgsType = {
    startDate: "2022-09-30",
    count: 8,
    periodNumber: 5,
    dayOfweek: "Mon",
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    location: "hello",
    url: "https://google.com/",
  };

  const TestResultValue: FormDateToIcalReturnType = {
    summary: "授業の名前",
    description: "授業の説明とかを書くぞ",
    start: dayjsWapper("2022-10-03 17:40:00+09:00").toDate(),
    url: "https://google.com/",
    end: dayjsWapper("2022-10-03 17:40:00+09:00").add(90, "minutes").toDate(),
    timezone: "Asia/Tokyo",
    location: "hello",
    repeating: {
      count: 8,
      freq: ICalEventRepeatingFreq["WEEKLY"],
    },
  };
  expect(FormDateToIcal(Value)).toStrictEqual(TestResultValue);
});
