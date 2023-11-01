
# Translate-restAPI

This is basically a google translate rest api

## API Reference

#### Get request

```
  GET /translate
```

| Parameter | Type     | Description                | Example|
| :-------- | :------- | :------------------------- | :------|
| `q` | `string` | **Required**. text to be translated |आपका क्या नाम है?|
| `lang` | `string` | **Required**. text will be trtanslated to |en|


#### Output

```json
{
"text": "What is your name?",
"from": "hi"
}
```

Visit my deployed [RestAPI](https://translate-gw3m.onrender.com/)

