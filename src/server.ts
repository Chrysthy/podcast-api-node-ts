import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controle";

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //listar podcasts
    if (request.method === "GET" && request.url === "/api/list") {
        await getListEpisodes(request, response);
    }

    if(request.method === "GET" && request.url === "/api/episode") {
        await getFilterEpisodes(request, response);
    }

});

const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})


