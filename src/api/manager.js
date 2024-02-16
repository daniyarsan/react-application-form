import {APPLY, BASE_API_URL, DISCIPLINES_LIST, SPECIALTIES_LIST, STATES_LIST
} from "./const.js";

import requester, {multipartRequester, publicRequester} from "./axios.js";

export const getDisciplines = async () => {
    return await publicRequester.get(`${DISCIPLINES_LIST}`)
}
export const getSpecialties = async (data) => {
    return await publicRequester.get(`${SPECIALTIES_LIST}?discipline=${data}`)
}
export const getStates = async () => {
    return await requester.get(`${STATES_LIST}`)
}

export const apply = async (formData) => {
    return await multipartRequester.post(APPLY, formData)
}

// export const login = async (data) => {
//     return await requester.post(`${LOGIN}`, data)
// }
// export const resetPassword = async (data) => {
//     return await requester.post(`${RESET_PASSWORD}`, data)
// }
// export const recoverToken = async (data) => {
//     return await requester.post(`${RECOVER_TOKEN}`, data)
// }
// export const getUserStat = async () => {
//     return await requester.get(`${USER_STAT}`)
// }
// /* Multipart data */
// export const createAlbum = async (formData) => {
//     return await multipartRequester.post(`${ALBUM_CREATE}`, formData)
// }
// export const updateAlbum = async (formData) => {
//     return await multipartRequester.post(`${ALBUM_UPDATE_BY_ID}`, formData)
// }