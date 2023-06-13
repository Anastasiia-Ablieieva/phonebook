import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/signup', user);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/login', user);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (user, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout', user);
            clearAuthHeader();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken)
            const response = await axios.get('/users/current');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
