import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiInstance from '../../api/api';

export const createList = createAsyncThunk(
  'list/createList',
  async ({userId, title, describe, pomodoro, category}) => {
    const api = await apiInstance();
    return api
      .post(`/api/list`, {
        userId,
        title,
        describe,
        pomodoro,
        category
      })
      .then(function (response) {
        // handle success
        console.log("createList", response)
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log("ERROR:>:>", error)
        if (error.message == 'Network Error') {
          Alert.alert('Uyarı', 'Network Hatası, tekrar deneyin', [
            {text: 'Tamam'},
          ]);
        } else {
          Alert.alert('Uyarı', 'Kullanıcı adı veya parola hatalı', [
            {text: 'Tamam'},
          ]);
        }
      });
  },
);

export const initialState = {
  lists: [],
  loading: false,
  error: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  extraReducers: {
    [createList.pending]: state => {
      state.loading = true;
    },
    [createList.fulfilled]: (state, action) => {
      state.lists = action?.payload?.data;
      state.loading = false;
    },
    [createList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});

export default listSlice.reducer;

const listSelector = state => state.list;

export const loadingSelector = createSelector(
  [listSelector],
  state => state.loading,
);
export const listsSelector = createSelector(
  [listSelector],
  state => state.lists,
);
export const errorSelector = createSelector(
  [listSelector],
  state => state.error,
);