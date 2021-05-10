/**
 * 本地存储模块
 */

export const getItem = (name)=>{
    return window.localStorage.getItem(name)
}

export const setItem = (name,value)=>{
    window.localStorage.setItem(name,value)
}

export const removeItem = (name)=>{
    window.localStorage.removeItem(name)
}