import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiInstance from '../../api/api';

export const deleteList = createAsyncThunk(
  'delete/deleteList',
  async ({id}) => {
    const api = await apiInstance();
    return api
      .delete(`/api/singleList/${id}`)
      .then(function (response) {
        // handle success
        console.log("deleteList", response)
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

export const deleteListSlice = createSlice({
  name: 'delete',
  initialState: initialState,
  extraReducers: {
    [deleteList.pending]: state => {
      state.loading = true;
    },
    [deleteList.fulfilled]: (state, action) => {
      state.lists = action?.payload?.data;
      state.loading = false;
    },
    [deleteList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});

export default deleteListSlice.reducer;

const deleteListSelector = state => state.delete;

export const loadingSelector = createSelector(
  [deleteListSelector],
  state => state.loading,
);
export const listsSelector = createSelector(
  [deleteListSelector],
  state => state.lists,
);
export const errorSelector = createSelector(
  [deleteListSelector],
  state => state.error,
);