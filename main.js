$(document).ready(function(e) {
  setInterval(() => {
    var d = new Date()
    var hours = d.getHours()
    if (hours > 12) {
      hours -= 12
    } else if (hours === 0) {
      hours = 12
    }
    var min = d.getMinutes()
    var sec = d.getSeconds()
    if (sec < 10) {
      sec = "0" + sec
    }
    if (min < 10) {
      min = "0" + min
    }
    $("#output").html(`${hours}:${min}:${sec}`)
  }, 1000)
})
