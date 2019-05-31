import Vue from "vue";

const nameFilter = Vue.filter('nameFilter', function(msg, args){
    return msg.replace(/张/g, args)
})


const dateFormat = Vue.filter('dateFormat',function(dataStr, pattern){
    let dt = new Date(dataStr)

    let y = dt.getFullYear().toString().padStart(2, '0')
    let m = dt.getMonth().toString().padStart(2, '0')
    let d = dt.getDate().toString().padStart(2, '0')
    if (pattern && pattern.toLowercase() == "yyyy-mm-dd") {
        return `${y}-${m}-${d}`
    } else {
        let h = dt.getHours().toString().padStart(2, '0')
        let mm = dt.getMinutes().toString().padStart(2, '0')
        let ss = dt.getSeconds().toString().padStart(2, '0')
        return `${y}-${m}-${d} ${h}:${mm}:${ss}`
    }
})

export default [nameFilter,dateFormat]
