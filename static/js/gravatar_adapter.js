var BASE_URL_BEG = "http://www.gravatar.com/avatar/";
var BASE_URL_END = "?s=512"

var getGravatarURL = function(email)
{
	var emailHash;

	emailHash = md5(email);

	return BASE_URL_BEG + emailHash + BASE_URL_END;
};

$(document).ready(function() {
	$(".gravatar").attr("src", getGravatarURL('sthoma4@gmail.com'));
})
