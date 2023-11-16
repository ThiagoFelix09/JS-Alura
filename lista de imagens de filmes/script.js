
var listaFilmes = ['https://wp.ufpel.edu.br/empauta/files/2015/05/madmax6.jpg', 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg', 'https://m.media-amazon.com/images/M/MV5BNjY4MTE3MWYtYzU3YS00Y2UxLTk2NDMtMjJlODk2MzBmOTdiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg','https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/OsVingadores2.jpg/250px-OsVingadores2.jpg','https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg'];

for(var i = 0; i<listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">");
}