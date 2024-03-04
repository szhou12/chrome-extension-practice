const btnPrompt = document.querySelector("#btn-prompt");
const btnRender = document.querySelector("#btn-render");

// Bc using Chrome API needs to wait for Chrome to respond
// make listener function asnyc and add awaits
btnPrompt.addEventListener("click", async () => {
    // get current tab's information
    // chrome.tabs.query({queryOptions}): returns an array of tab objects that match the query options
    // {active: true, currentWindow: true}: query only the current active tab (popup)'s info. So return only an array of 1 tab object
    const [currentTab] = await chrome.tabs.query({active: true, currentWindow: true})
    console.log(currentTab)
    // send current tab's id and a message to the content.js
    await chrome.tabs.sendMessage(currentTab.id, {hello:"world", message: "prompting to chatGPT"})

})

btnRender.addEventListener("click", (e) => {
    console.log(e)
})