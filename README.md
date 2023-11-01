
# Translate-restAPI

This is basically a google translate rest api

## API Reference

#### Get request

```http
  GET /translate?q={string}&lang={string}
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

Visit my deployed [RestAPI](https://oke.com)

