chrome.runtime.onMessage.addListener(function(request, sender) {
	if (request.action == "getSource") {
		message.innerText = request.source;
	}
});
function addListerners() {
	document.addEventListener("click", (e) => {
		console.log("au");
		if(e.target.classList.contains("page")) {
			var createData = {
				type: "detached_panel",
				url: "page/page.html",
				width: 250,
				height: 100
			};
			var creating = browser.tabs.create(createData);
			creating;
		}
	});

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

}

window.onload = onWindowLoad;
//addListeners();
//runtime.openOptionsPage()
