// Request senders

import axios from 'axios'

// Base form of server request
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'b06738c5-44cb-4e22-b88a-876d1713dd0b'
    }
})

// API which follow and unfollow, return users, return one profile
export const usersAPI = {
    getUsers(page_num = 1, pageSize = 10) {
        return instance.get(`users?page=${page_num}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow_api(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    follow_api(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },

    getProfile(id) {
        console.warn('Old methdo. Use profileAPI.getProfile')
        return profileAPI.getProfile(id)
    },
}

// API which display profile, status, and update status
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto(photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    },
}

// API of 'main' user, user which do a request
export const authAPI = {
    getMyProfile() {
        return instance.get(`auth/me`)
    },

    login(login_state) {
        return instance.post(`auth/login`, {
            email: login_state.email,
            password: login_state.password,
            rememberMe: login_state.remember_me,
            captcha: login_state.captchaUrl,
        })
    },

    logout() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}