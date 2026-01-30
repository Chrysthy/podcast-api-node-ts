# Podcast Manager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódio de podcasts separados por categoria.

### Domínio 

Podcasts feitos em vídeo

### Features (funcionalidades)

- Listar os episódios de podecasts em sessões de categorias;
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcasts.

<br>

# Como vou implementar? (Zoom out)

### 1. Listar episódios

GET: retorna em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, categorias e o link.

Response:

``` js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "bodybuilder", "esporte"]
    },

    {
        podcastName: "flow",
        videoId: "4KDGTdiOV4I",
        episode: "RUBENS BARRICHELLO - Flow #339",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"]
    },

]
```