import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { reducers } from "./features/news"
import { newsApi } from "./features/newsApi"
import { ApiProvider } from "@reduxjs/toolkit/query/react"

const { latestNewsReducer, newsToReadReducer } = reducers

const store = configureStore({
  reducer: {
    latestNews: latestNewsReducer,
    newsToRead: newsToReadReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ApiProvider api={newsApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
)
