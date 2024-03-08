const btnPrompt = document.querySelector("#btn-prompt")
const btnRender = document.querySelector("#btn-render")
// get current tab's information
// chrome.tabs.query({queryOptions}): returns an array of tab objects that match the query options
// {active: true, currentWindow: true}: query only the current active tab (popup)'s info. So return only an array of 1 tab object
const [currentTab] = await chrome.tabs.query({active: true, currentWindow: true})

// Bc using Chrome API needs to wait for Chrome to respond
// make listener function asnyc and add awaits
btnPrompt.addEventListener("click", async () => {
    // send current tab's id and a message to the content.js
    // content.js will access message by specified keyword
    await chrome.tabs.sendMessage(currentTab.id, {action: "PROMPT"})

})

btnRender.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(currentTab.id, {action: "RENDER"})
})