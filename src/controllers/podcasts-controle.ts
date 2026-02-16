import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";


// Lista
export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content = await serviceListEpisodes();

    response.writeHead(StatusCode.OK, { 'content-type': "application/json" })
    response.end(JSON.stringify(content));
}

// Filtro
export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {


    const content = await serviceFilterEpisodes(request.url);

    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content))

}