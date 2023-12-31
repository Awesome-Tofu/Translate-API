const express = require('express');
// const axios = require('axios');
const translate = require('translation-google');

const app = express();

app.get('/',(request,response)=>{
    response.json({translate:"/translate?q=What is your name?&lang=en", emojimix:"/emojimix?emoji1=😃&emoji2=🔥"})
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

const axios = require('axios');

app.get('/emojimix', async (req,res)=>{
    try {
        const emoji1 = req.query.emoji1;
        const emoji2 = req.query.emoji2;
        const emojiMix = await import('emoji-mixer');
        const mixedlink = emojiMix.default(emoji1,emoji2); 
    
        axios.get(mixedlink, { responseType: 'arraybuffer' })
        .then(response => {
            res.setHeader('Content-Type', 'image/png');
            res.send(Buffer.from(response.data, 'binary'));
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });  
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});
const PORT = 3030;

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));
