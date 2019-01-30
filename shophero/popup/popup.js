chrome.runtime.onMessage.addListener(function(request, sender) {
	if (request.action == "getSource") {
		message.innerText = request.source;
	}
});
function addListerners() {
	const button = document.querySelector('button');

}

function onWindowLoad() {

	var message = document.querySelector('#message');

	chrome.tabs.executeScript(null, {
		file: "getPagesSource.js"
	}, function() {
		// If you try and inject into an extensions page or the webstore/NTP you'll get an error
		if (chrome.runtime.lastError) {
			message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
		}
	});

	// BUTTON
	document.querySelector('#page').addEventListener("click", (e) => {
		var createData = {
			type: "detached_panel",
			url: "page/page.html",
			width: 250,
			height: 100
		};
		var creating = browser.tabs.create(createData);
		creating;
	});
}

window.onload = onWindowLoad;
//addListeners();
//runtime.openOptionsPage()
