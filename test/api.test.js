import frisby from "frisby";
const Joi = frisby.Joi;

const result = Joi.object({
  Pollution: Joi.object({
    ts: Joi.string().required(),
    aqius: Joi.number().required(),
    mainus: Joi.string().required(),
    aqicn: Joi.number().required(),
    maincn: Joi.string().required(),
  }),
});

describe("GET /air_quailty", function () {
  it("should return valid air quality information", function () {
    return frisby
      .get(
        "http://localhost:3000/api/city_air_quality?lat=48.856613&lon=2.352222"
      )
      .expect("status", 200)
      .expect("jsonTypesStrict", "*", result);
  });
});
