import { defineStore} from 'pinia'

export const useLoginStore = defineStore("login",{
    // 也可以改用组合式api
    state:()=>{
        return {
            token:"",
            username:""
        }
    },
    // 本地持久化
    persist:{
        enabled:true,
        strategies:[
            {
                key:"token",    // 自定义key值,存储到本地时的key
                storage:localStorage,   // 选择存储的方式（localStorage、SesstionStorage）
                paths: ['token'],
            }
        ]
    }
})