import { createSlice } from "@reduxjs/toolkit"

const latestNewsSlice = createSlice({
  name: "news",
  initialState: {
    value: [],
  },
  reducers: {
    setLatestNews: (state, action) => {
      state.value = action.payload
    },
  },
})

const publisherNewsSlice = createSlice({
  name: "publisherNews",
  initialState: {
    value: [],
  },
  reducers: {
    setPublisherNews: (state, action) => {
      state.value = action.payload
    },
  },
})

export const reducers = {
  latestNewsReducer: latestNewsSlice.reducer,
  publisherNewsReducer: publisherNewsSlice.reducer,
}

export const { setLatestNews } = latestNewsSlice.actions
export const { setPublisherNews } = publisherNewsSlice.actions
