import { getAirQuailty } from "./airServices.js";

//TODO increase Timeout
// beforeEach(() => {
//   jest.setTimeout(90 * 1000);
// });

describe("toMatch response air_quality property", () => {
  test("all properties must exist", async () => {
    const { Pollution } = await getAirQuailty(48.856613, 2.352222);
    expect(Pollution).toHaveProperty("ts");
    expect(Pollution).toHaveProperty("aqius");
    expect(Pollution).toHaveProperty("mainus");
    expect(Pollution).toHaveProperty("aqicn");
    expect(Pollution).toHaveProperty("maincn");
  });
});
