/**
 * 存放所有的网络请求地址
 */
const base ={
    getLogin: "/admin/login",
    getCaptcha: "/admin/captcha",
    getAdminAdd: "/admin/add",
    getAdminUpdate: "/admin/update",
    getAdminAll: "/admin/all",
    getAdminDelete: "/admin/delete?aid=",
    getAdminUsername: "/admin/getUsername",
    getLandTypeAdd: "/landType/add",
    getLandTypeUpdate: "/landType/update",
    getLandTypeAll: "/landType/all",
    getLandTypeDelete: "/landType/delete?typeId=",
    getLandTypeList: "/landType/selectList",
    getLandType: "/landType/selectById",
    getLandAdd: "/land/add",
    getLandUpdate: "/land/update",
    getLandAll: "/land/all",
    getLandDelete: "/land/delete?typeId=",
}
export default base