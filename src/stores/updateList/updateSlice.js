import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiInstance from '../../api/api';

export const updateList = createAsyncThunk(
  'update/updateList',
  async ({id, title, describe, pomodoro, category}) => {
    const api = await apiInstance();
    return api
      .patch(`/api/singleList/${id}`, {
        title,
        describe,
        pomodoro,
        category
      })
      .then(function (response) {
        // handle success
        console.log("updateList", response.data)
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

export const updateListSlice = createSlice({
  name: 'update',
  initialState: initialState,
  extraReducers: {
    [updateList.pending]: state => {
      state.loading = true;
    },
    [updateList.fulfilled]: (state, action) => {
      state.lists = action?.payload?.data;
      state.loading = false;
    },
    [updateList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});

export default updateListSlice.reducer;

const updateListSelector = state => state.update;

export const loadingSelector = createSelector(
  [updateListSelector],
  state => state.loading,
);
export const listsSelector = createSelector(
  [updateListSelector],
  state => state.lists,
);
export const errorSelector = createSelector(
  [updateListSelector],
  state => state.error,
);