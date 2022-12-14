
# Rick and Morty challenge

## A basic web app to show the characters of the serie.

 made with [Nextjs](https://nextjs.org/)

## Installation

* Clone project
```bash
 git clone https://github.com/ezej4/RickAndMortyCharacters.git && cd RickAndMortyCharacters
```
* Install

```bash
 npm install
```

* Start the project in localhost

```bash
  npm run dev
```

* open a browser in http://localhost:3000


## Pages

- / 

Shows a list from characters

- /detail/${character_id}

Shows the detail from one character

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `character_id`      | `string` | **Required**. Id of the selected character |


- /error

Shows an error page when the API calls fail
- /*

Shows a 404 page if the required page does not exist.

## Features

- Static Generation: The HTML is generated at build time and will be reused on each request.
- Nice and plain.
- Great test coverage.

## Author

- Ezequiel Fabbroni

#### If you deploy this project on a server please create a .env file in your root folder, with the following variable:
 
```bash
  NEXT_PUBLIC_HOST = ${host_url}
```
