import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiInstance from '../../api/api';

export const fetchUsers = createAsyncThunk(
  'home/fetchUsers',
  async ({userName, password}) => {
    const api = await apiInstance();
    return api
      .post(`/api/user/login`, {
        password: password,
        email: userName,
      })
      .then(function (response) {
        // handle success
        console.log("loginSlice", response)
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
  users: [],
  loading: false,
  error: null,
};

export const homeSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action?.payload?.data;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});

export default homeSlice.reducer;

const homeSelector = state => state.home;

export const userLoadingSelector = createSelector(
  [homeSelector],
  state => state.loading,
);
export const usersSelector = createSelector(
  [homeSelector],
  state => state.users,
);
export const errorSelector = createSelector(
  [homeSelector],
  state => state.error,
);