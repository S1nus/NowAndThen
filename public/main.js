document.addEventListener("DOMContentLoaded", init);

function init() {
  links = document.getElementsByTagName("a");
  for (var i = 0; i<links.length; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        history.pushState(null, null, this.href);
      });
  }

  options = document.getElementsByClassName("option");
  for (var i = 0; i<options.length; i++) {
    options[i].addEventListener("click", function() {
      clearOptions();
      this.style.backgroundColor = "#12073B";
    });
  }
}

function clearOptions() {
  for (var i = 0; i<options.length; i++) {
    options[i].style.backgroundColor = "#251758";
  }
}

function loadCalendar(date) {
  var table = document.getElementById("calendar");
  var monthLabel = document.getElementById("month-label");
  var month = date.getMonth();
  var year = date.getFullYear();

  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthLabel.innerHTML = ""+monthNames[month] + " " + year;
  var numDays;

  switch(month) {
    case 1:
      if (year%4 == 0) {
        numDays = 29;
      }
      else {
        numDays = 28;
      }
      break;
    case 5:
    case 7:
    case 10:
    case 12:
      numDays = 30;
      break;
    default:
      numDays = 31;
  }

  var currentWeek;
  for (var i = 0; i<numDays; i++) {
    if (i%7 == 0) {
      currentWeek = document.createElement("tr");
      currentWeek.className = "week";
      table.appendChild(currentWeek);
    }
    var newDay = document.createElement("td");
    newDay.className = "day";
    newDay.num = i;
    newDay.addEventListener("click", function(e) {
      createNewEvent(new Date(year, month, this.num+1), e.clientX, e.clientY);
    });
    var newDate = document.createElement("span");
    newDate.className = "date";
    newDate.innerHTML = i+1;
    newDay.appendChild(newDate);
    var plus = document.createElement("img");
    plus.src = "graphics/plus.png";
    plus.className = "plus";
    newDay.appendChild(plus);
    currentWeek.appendChild(newDay);
  }

}

function createNewEvent(day, x=0, y=0) {
  //this don't do shit
}
