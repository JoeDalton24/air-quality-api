import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rest API Docs",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/airRoutes.js", "./src/model/airQualityModel.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`api documentation is avaible on http:localhost:${port}/docs`);
}
