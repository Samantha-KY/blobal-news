import newsEndpoints from "../utils/endpoints"
import {
  API_BASE_URL,
  API_KEY,
  LATEST_NEWS_MAXIMUM_RESULT_SIZE,
  SEARCH_RESULT_BY_PUBLISHER_MAXIMUM_SIZE,
  SEARCH_RESULT_MAXIMUM_SIZE,
} from "../utils/constants"
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import { setLatestNews, setPublisherNews } from "./news"

const { topHeadLines, source, sourceNews } = newsEndpoints

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    headers: {
      "X-Api-Key": API_KEY,
    },
  }),

  endpoints: (build) => ({
    getGlobalLatestNews: build.query({
      query: () =>
        `${topHeadLines}?pageSize=${LATEST_NEWS_MAXIMUM_RESULT_SIZE}&language=us`,
      transformResponse: (response) => response["articles"],
    }),

    getLatestNewsByCategory: build.query({
      query: (category) =>
        `${topHeadLines}?pageSize=${LATEST_NEWS_MAXIMUM_RESULT_SIZE}&category=${category}&language=en`,
      transformResponse: (response) => response["articles"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        dispatch(setLatestNews(data))
      },
    }),

    getPublishers: build.query({
      query: () => `${source}?language=en`,
      transformResponse: (response) => response.sources,
    }),

    getPublishersByCategory: build.query({
      query: (category) =>
        `${source}?category=${category}&language=en`,
    }),

    getPublisherNews: build.query({
      query: (publisher) =>
        publisher ? `${sourceNews}?sources=${publisher}` : null,
      transformErrorResponse: (response) => response["articles"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        dispatch(setPublisherNews(data.articles))
      },
    }),

    getNewsBySearchQuery: build.query({
      query: (searchQuery) =>
        searchQuery
          ? `everything?q=${searchQuery}&pageSize=${SEARCH_RESULT_MAXIMUM_SIZE}&language=en`
          : null,
    }),

    getNewsBySearchQueryAndSource: build.query({
      query: (searchQuery) => {
        return `everything?q=${searchQuery.query}&sources=${searchQuery.source}&pageSize=${SEARCH_RESULT_BY_PUBLISHER_MAXIMUM_SIZE}&language=en`
      },
    }),
  }),
})

export const {
  useGetGlobalLatestNewsQuery,
  useGetLatestNewsByCategoryQuery,
  useGetPublishersQuery,
  useGetPublishersByCategoryQuery,
  useGetPublisherNewsQuery,
  endpoints,
} = newsApi
