import * as api from '../api'

export const getTimelinePosts = () => async(dispatch) => {
    dispatch({type: "RETREIVING_START"})

    try {
        const {data} = await api.getTimelinePosts();
        dispatch({type: "RETREIVING_SUCCESS", data: data});
    } catch (error) {
        dispatch({type: "RETREIVING_FAIL"})
        console.log(error.message)
    }
}