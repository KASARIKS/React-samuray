// Selectors
import { createSelector } from 'reselect'   

export const getUsers = state => state.users.usersData

export const getUsersU = state => getUsers(state).filter(user => true)

export const getUsersSuper = createSelector(getUsers, 
    (usersData) => usersData.filter(user => true))

export const getPageSize = state => state.users.pageSize

export const getTotalUsersCount = state => state.users.totalUsersCount

export const getCurrentPage = state => state.users.currentPage

export const get_count_page_tmp = state => state.users.count_page_tmp

export const getIsFetching = state => state.users.isFetching

export const getIsFollowingInProcess = state => state.users.isFollowingInProcess

export const countSomethingSelector = state => {
    let count = 23
    return count
}