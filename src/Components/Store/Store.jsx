import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Fetch users
const fetchData = async () => {
    const res = await fetch("http://localhost:3000/users")
    const data = await res.json()
    return data
}
export const fetchUsers = createAsyncThunk('fetchData/Users', fetchData)

// Add user
export const addUserInDB = createAsyncThunk('users/addUser', async (newUser) => {
    const res = await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()
    return data
})

// Edit user
export const editUserInDB = createAsyncThunk('users/editUser', async ({ id, updatedUser }) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
    })
    const data = await res.json()
    return { id, updatedUser: data }
})

// Delete user
export const deleteUserFromDB = createAsyncThunk('users/deleteUser', async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
    return id
})

// Fetch receipts
export const fetchReceipts = createAsyncThunk('receipts/fetchReceipts', async () => {
    const res = await fetch("http://localhost:3000/receipts");
    const data = await res.json();
    // console.log("Fetched Receipts:", data); // Debugging
    return data;
});

// Delete receipt
export const deleteReceipt = createAsyncThunk('receipts/deleteReceipt', async (id) => {
    await fetch(`http://localhost:3000/receipts/${id}`, { method: 'DELETE' })
    return id
})

// User slice
const userslice = createSlice({
    name: 'userslice',
    initialState: {
        items: [],
        isloading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.items = action.payload
                state.isloading = false
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isloading = true
            })
            .addCase(addUserInDB.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addCase(editUserInDB.fulfilled, (state, action) => {
                const { id, updatedUser } = action.payload
                const index = state.items.findIndex(user => user.id === id)
                if (index !== -1) {
                    state.items[index] = { ...state.items[index], ...updatedUser }
                }
            })
            .addCase(deleteUserFromDB.fulfilled, (state, action) => {
                const id = action.payload
                state.items = state.items.filter(user => user.id !== id)
            })
    }
})

// Receipt slice
const receiptSlice = createSlice({
    name: 'receiptSlice',
    initialState: {
        items: [],
        isloading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReceipts.fulfilled, (state, action) => {
                state.items = action.payload
                state.isloading = false
            })
            .addCase(fetchReceipts.pending, (state) => {
                state.isloading = true
            })
            .addCase(deleteReceipt.fulfilled, (state, action) => {
                const id = action.payload
                state.items = state.items.filter(receipt => receipt.id !== id)
            })
    }
})


const store = configureStore({
    reducer: {
        users: userslice.reducer,
        Receipt: receiptSlice.reducer,
    }
})

export default store