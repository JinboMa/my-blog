export default {
    timeToString(value) {
        var isDate = value instanceof Date
        if (isDate) {
            var time = value
        } else {
            var time = new Date()
        }
        return time.toLocaleDateString() + " " + time.toLocaleTimeString()
    }
}