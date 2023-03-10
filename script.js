//Source Code Button
function showPageSource() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", document.location, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4 && xhr.status == 200) {
		var sourceWindow = window.open("", "", "width=800,height=600");
		sourceWindow.document.write("<pre>" + xhr.responseText.replace(/[<>&]/g, function(c) {
		  return {'<':'&lt;','>':'&gt;','&':'&amp;'}[c];
		}) + "</pre>");
	  }
	};
	xhr.send();
  }
