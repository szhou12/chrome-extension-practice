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
            if (request.action == "PROMPT") this.promptToChatGPT(this.prompt1)
            if (request.action == "RENDER") this.promptToChatGPT(this.prompt2)
        })
    }

    // method that sends prompts to ChatGPT text box
    promptToChatGPT(prompt) {
        // console.log("prompting test")
        

        // get the text area bar from ChatGPT web page
        const input = document.querySelector("#prompt-textarea")
        // console.log(input)
        input.value = prompt
        const button = document.querySelector("#prompt-textarea~button")

        // Check if the button is disabled, and if so, enable it by removing the 'disabled' attribute
        if (button.disabled) {
            button.disabled = false;
        }

        button.click() // NOTE! The simulated clicking won't work as OpenAI prohibits it.
    }

    prompt1 = "Please act as an experienced developer in chrome extension and assist me with a project."

    prompt2 = "Say hello world in 3 random languages."
}

// Init an instance of ChatGPTExtension
const CGPTExtension = new ChatGPTExtension()