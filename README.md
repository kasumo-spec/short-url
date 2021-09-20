# Ferramenta para encurtar URL - Salvando em um banco de dados do MongoDB

Utilizar o comando *yarn* para instalar as dependẽncias.
Após, utilizar o comando *yarn nodemon ./src/index.js* para rodar o servidor escutando na porta 3000.

Utilizar o endereço abaixo para requisições na ferramenta que melhor lhe agradar para requisições de teste na API.

POST: http://localhost:3000/api/url/shorten
Body: {
  "longUrl": "URL PARA SER ENCURTADA"
}

Return: {
  "urlCode": "endereçamento do encurtador da URL gerado pelo hash",
  "longUrl": "URL que foi encurtada (pois caso já tenha sido encurtada, não gera um novo, enviando a já existente.",
  "shortUrl": "link para redirecionamento após encurtar a URL, onde esse mesmo link te dispara direto para a longUrl",
  "date": "data da criação da URL encurtada",
  "_id": "id do banco",
  "__v": 0
}
