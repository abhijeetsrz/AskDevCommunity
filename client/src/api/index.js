import axios from 'axios'

const API = axios.create({ baseURL: 'stack-over-flow-main.vercel.app' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
}) 

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);  

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);

export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)

export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId})

export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get('/user/getAllUsers');

export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)


//social Media Posts

export const uploadImage = (data) => API.post('/upload', data)

export const uploadPost = (data) => API.post('/posts', data)

export const getTimelinePosts = () => API.get('posts/timeline')  

export const friendAdd = (id, data) => API.patch(`/user/friendAdd/${id}`, data); 

export const friendRemove = (id, data) => API.patch(`/user/friendRemove/${id}`, data)