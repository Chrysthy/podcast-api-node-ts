import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    // http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];


    //listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }

});

const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})


