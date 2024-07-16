

//api to add videos

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const allVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/allVideos`,reqBody)
}

export const getAllVideoApi=async()=>{
    return await commonApi('GET',`${serverUrl}/allVideos`,'')
}

//api to delete a video

export const deleteVideoApi= async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/allVideos/${id}`,{})
}

//api to add video to watch history

export const addVideoHistory = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

//api to get all video from history

export const getAllVideoHistory = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete a video from history

export const deleteVideoHistoryApi =  async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category

export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

// api to get all category

export const getAllCategory = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

// api to delete a category

export const removeCategory = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

// api to update category

export const updateCategoryApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}