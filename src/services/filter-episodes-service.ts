import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busca dados
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    //verifica se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
}