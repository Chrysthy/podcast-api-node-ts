import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";


// Lista
export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodes();

    response.writeHead(200, { 'content-type': "application/json" })
    response.end(JSON.stringify(content));
}

// Filtro
export const getFilterEpisodes = async ( request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceFilterEpisodes("flow");

    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(content))

}