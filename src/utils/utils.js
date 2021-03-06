import moment from 'moment'

export function datetoString(date) {
    if(date) {
        return moment(date).format("MMMM Do YYYY, h:mm:ss a")
    }
    return ''
}

export function datetoStringLocal(date) {
    if(date) {
        return moment(date).format("MMMM Do YYYY")
    }
    return ''
}