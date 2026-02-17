import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    //define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busca os dados
    const data = await repositoryPodcast();

    //verifica o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }

    return responseFormat;
}