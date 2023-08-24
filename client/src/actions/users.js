import * as api from '../api/index'

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        dispatch({ type: 'FETCH_USERS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id, updateData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(id, updateData)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data})
        // fetchAllUsers()
    } catch (error) {
        console.log(error)
    }
}

export const friendAdd = (id, friendData) => async (dispatch) => {
    try {
        const { data } = await api.friendAdd(id, friendData);
        dispatch(fetchAllUsers());
    } catch (error) {
        console.log(error.message)
    }
}

export const friendRemove = (id, friendData) => async (dispatch) => {
    try {
        const { data } = await api.friendRemove(id, friendData);
        dispatch(fetchAllUsers);
    } catch (error) {
        console.log(error.message)
    }
}