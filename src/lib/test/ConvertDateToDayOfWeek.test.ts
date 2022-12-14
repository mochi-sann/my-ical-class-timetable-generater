import { assert, expect, test } from "vitest";

import ConvertDateToDayofWeek from "../ConvertDateToDayofWeek";
import { dayjsWapper } from "../dayjs";

test("Convert to Icaldeta friday", () => {
  const day = dayjsWapper("2022-9-2").format("YYYY-MM-DD");
  expect(ConvertDateToDayofWeek(day)).toBe(5);
});
test("Convert to Icaldeta Monday", () => {
  const day = dayjsWapper("2022-9-4").format("YYYY-MM-DD");
  expect(ConvertDateToDayofWeek(day)).toBe(0);
});
