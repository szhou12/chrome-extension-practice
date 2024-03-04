chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    console.log("testing catching message")
});