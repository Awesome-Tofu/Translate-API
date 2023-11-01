const express = require('express');
const translate = require('translation-google');

const app = express();

app.get('/',(request,response)=>{
    response.json({redirect:"/translate?q=What is your name?&lang=en"})
})
app.get('/translate', async (request,response)=>{
    const prompt = request.query.q;
    const language = request.query.lang;
    try {
      translate(prompt, {to: language}).then(res => {
        const translated_text = res.text;
        const from_lang = res.from.language.iso;
        response.json({text:translated_text, from: from_lang})
    });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

const PORT = 3030;

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));