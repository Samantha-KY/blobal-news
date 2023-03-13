import axios from "axios";
import newsEndpoints from "./endpoints";

const {topHeadLines, source, sourceNews} = newsEndpoints;

class ApiServices {
    LATEST_NEWS_MAXIMUM_RESULT_SIZE = 10

    api = axios.create({
        baseURL: "https://newsapi.org/v2",
    })
        .interceptors
        .request
        .use((config) => {
            config.headers["X-Api-Key"] = process.env.API_KEY
        })


    async getGlobalLatestNews() {
        const response = await this.api.get(topHeadLines, {
            params: {
                pageSize: this.LATEST_NEWS_MAXIMUM_RESULT_SIZE
            }
        });
        return response.data.source;
    }

    async getLatestNewsByCategory(category) {
        const response = await this.api.get(topHeadLines, {
            params: {
                pageSize: this.LATEST_NEWS_MAXIMUM_RESULT_SIZE,
                category
            }
        })
        return response.data.source
    }

    async getPublisher() {
        const response = await this.api.get(source);
        return response.data.source

    }

    async getPublisherByCategory(category) {
        const response = await this.api.get(source, {
            params: {
                category
            }
        })
        return response.data.source
    }

    async getPublisherNews(publisher) {
        const response = await this.api.get(sourceNews, {
            params: {
                source: publisher,
            }
        })
        return response.data.source
    }

}

const apiServices = new ApiServices();

export default apiServices;
