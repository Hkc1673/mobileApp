import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiInstance from '../../api/api';

export const registerUsers = createAsyncThunk(
  'register/registerUsers',
  async ({userName, password, uName}) => {
    const api = await apiInstance();
    return api
      .post(`/api/user/register`, {
        password: password,
        email: userName,
        name: uName
      })
      .then(function (response) {
        // handle success
        console.log("registerSlice", response.data)
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log("ERROR:>:>", error.message)
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
  registers: [],
  loading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,
  extraReducers: {
    [registerUsers.pending]: state => {
      state.loading = true;
    },
    [registerUsers.fulfilled]: (state, action) => {
      state.registers = action?.payload?.data;
      state.loading = false;
    },
    [registerUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.data;
    },
  },
});

export default registerSlice.reducer;

const registerSelector = state => state.register;

export const LoadingSelector = createSelector(
  [registerSelector],
  state => state.loading,
);
export const registersSelector = createSelector(
  [registerSelector],
  state => state.registers,
);
export const errorSelector = createSelector(
  [registerSelector],
  state => state.error,
);