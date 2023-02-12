const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const app = express();
const port = 3001;

// Configure OpenAI API
const configuration = new OpenAI.Configuration({
  organization: "org-OObNBm6FN5R8nKGXMiIMhgv7",
  apiKey: "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",
});
const openai = new OpenAI.OpenAIApi(configuration);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle user messages
app.post("/", async (req, res) => {
  const message = req.body.message;

  // Call OpenAI API to generate a response
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend to be a terminal.${message}?
    #`,
    max_tokens: 1000,
    temperature: 0,
  });

  // Return the response to the user
  console.log(response.data)
  if(response.data.choices[0].text) {
    res.json({ message: response.data.choices[0].text });
  }
  
});

// Start the Express server
app.listen(port, () => {
  console.log(`ABSG Chat app listening on PORT ${port}!`);
});
