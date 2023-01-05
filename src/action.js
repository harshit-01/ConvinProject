import { createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchUserDetails = createAsyncThunk(
  'users/fetchUser',
  async (thunkAPI) => {
    const response = await axios.get("https://reqres.in/api/users?page=2")
    // console.log(response)
    return response.data.data
  }
)

export const fetchSingleUserDetails = createAsyncThunk(
    'users/fetchById',async(id,thunkAPI)=>{
        const response = await axios.get(`https://reqres.in/api/users/${JSON.parse(id)+1}`);
        return response.data.data;
    }
)
