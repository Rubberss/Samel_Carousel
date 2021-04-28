function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}


function main() {
data = fazGet("https://api-teste.samel.com.br/fotos");
usuarios =JSON.parse(data);
console.log(usuarios);

  }
  // Para cada usuario
      // criar uma linha
      // adicionar na tabela


main()