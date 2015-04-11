//http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

$(document).ready(function() {
	$("#age_display").text(getAge("1993-10-22"));
})