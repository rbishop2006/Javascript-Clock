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
    if (hours < 10) {
      hours = "0" + hours
    }
    $("#output").html(`${hours}:${min}:${sec}`)
    var num = hours.toString(16) + min.toString(16) + sec.toString(16)
    $("#hexCount").html(`#${num}`)
    $(".hexContainer").css("background-color", `#${num}`)
  }, 1000)
})
