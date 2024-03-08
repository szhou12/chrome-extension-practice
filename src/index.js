// Test purpose for stage 5.4
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request)
//     console.log("testing catching message")
// });

class ChatGPTExtension {
    constructor() {
        // call handleRequest() in contructor to make it work
        // everytime this class is init, it will run handleRequest()
        this.handleRequest()
    }

    handleRequest() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            // console.log(request)
            if (request.action == "PROMPT") this.promptToChatGPT()
        })
    }

    // method that sends prompts to ChatGPT text box
    promptToChatGPT() {
        // console.log("prompting test")
        const prompt = "Please act as an experienced developer in chrome extension and assist me for a project"
    }
}

// Init an instance of ChatGPTExtension
const CGPTExtension = new ChatGPTExtension()