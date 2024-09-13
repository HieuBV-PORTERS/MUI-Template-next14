import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = [
    {
        id: 1,
        title: "Post 1",
        description: "Desc 1"
    }
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<any>) => {
            const { id, title, description } = action.payload;
            state.push({ id, title, description });
        }

    }
})


export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;