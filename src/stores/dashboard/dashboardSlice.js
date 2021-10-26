import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import apiInstance from '../../api/api';


export const GetPosts = createAsyncThunk(
  'post/getPosts',
  async ({id}) => {
    const api = await apiInstance();
    return api
      .get(
        `/api/list/${id}`
      )
      .then(function (response) {
        // handle success
        console.log("dashboardSlice", response?.data)
        return response;
      })
      .catch(function (error) {
        // handle error
        if (error.message == 'Network Error') {
          Alert.alert('Uyarı', 'Network Hatası, tekrar deneyin', [
            {text: 'Tamam'},
          ]);
        } else {
          Alert.alert('Uyarı', 'Beklenmedik bir hata oluştu.', [
            {text: 'Tamam'},
          ]);
        }
      });
  },
);

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};
export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  extraReducers: {
    [GetPosts.pending]: state => {
      state.loading = true;
    },
    [GetPosts.fulfilled]: (state, action) => {
      state.posts = action?.payload?.data;
      state.loading = false;
    },
    [GetPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});
export default postSlice.reducer;

const postSelector = state => state.post;

export const postLoadingSelector = createSelector(
  [postSelector],
  state => state.loading,
);
export const postsSelector = createSelector(
  [postSelector],
  state => state.posts,
);
export const errorSelector = createSelector(
  [postSelector],
  state => state.error,
);
