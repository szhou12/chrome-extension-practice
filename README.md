# Project Purpose
The application aims to self-teaching on the development of chrome extension by following online tutorials

# Folder Structure
```
project-folder/
├── extension/
│   ├── background.js
│   ├── content.js
│   ├── content.js.map
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon32.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── popup/
│   │   ├── popup.html
│   │   └── popup.js
│   └── manifest.json
├── src/
│   └── index.js // source files for the extension
├── .babelrc // babel.config.js
├── package.json
├── package-lock.json
├── webpack.config.js
└── node_modules/
    └── // dependencies installed by npm

```

# Getting Started
## Stage 1 - Set Up Boilerplate
```
project-folder/
├── extension/
├── src/
│   └── index.js
├── .babelrc
├── package.json
├── package-lock.json
└── webpack.config.js
```
* `.babelrc`: configuration file for Babel. It tells Babel how to compile your code. Babel is a JavaScript compiler that does the magica to transform your JavaScript code into a version that is compatible with older browsers.
* `package.json`: cornerstone of Node.js and npm ecosystem projects. It holds metadata relevant to the project and manages the project's dependencies, scripts, and dependencies' versions.
* `package-lock.json`: If not present, automatically generated by `npm install` when installing node modules. Meant to keep track of the exact versions of each package/dependency that are installed, ensuring that the same versions are installed in all environments.
* `webpack.config.js`: configuration file for Webpack. When Webpack processes your application, it internally builds a dependency graph that maps every module your project needs and generates one or more bundles. (转写！) In this project, whatever code you edit in `src/index.js` will be compiled by Webpack and injected to `extension/content.js`.
* In terminal, run `npm install`
    * STEP 1. Check `package.json` -> STEP 2. Consult/Create `package-lock.json` -> STEP 3. Create/Update `node_modules` & Install dependencies into this folder.
* In terminal, **run `npm run build-dev`**
    * Execute a custom script defined in a project's `package.json` file under the `scripts` section
    * Create `content.js` and `content.js.map` in `extension/` folder.
```
project-folder/
├── extension/
│   ├── content.js
│   └── content.js.map
├── src/
│   └── index.js
├── .babelrc
├── package.json
├── package-lock.json
├── webpack.config.js
└── node_modules/
```


## Stage 2 - `manifest.json`
* Create: `manifest.json`, `icons/` folder with extension icons, `background.js` (empty, not used in this practice), `popup/` folder (currently empty)
```
project-folder/
├── extension/
│   ├── background.js // empty
│   ├── content.js
│   ├── content.js.map
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon32.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── popup/ // empty
│   └── manifest.json
├── src/
│   └── index.js
├── .babelrc
├── package.json
├── package-lock.json
├── webpack.config.js
└── node_modules/
```

# Stage 3 - Popup
```
project-folder/
├── extension/
│   ├── background.js // empty
│   ├── content.js
│   ├── content.js.map
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon32.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── popup/
│   │   ├── popup.html
│   └── manifest.json
├── src/
│   └── index.js
├── .babelrc
├── package.json
├── package-lock.json
├── webpack.config.js
└── node_modules/
```


# manifest.json
* `"background"`: manage state across browser sessions, save info to local storage.
    * think it as the back-end of your extension. 
    * the javascript file here won't have access to any of tabs or popups.
    * mainly to handle API calls.
* `"action"`: associate user's actions with anything specified here
    * `"default_icon"`: meaning there're some behaviors that will be triggered when the user clicks on the icon. Such behaviors can be defined in `"background.js"`
    * `"permissions": ["tabs", "activeTab"]`: VERY IMPORTANT! Gives the extension the permission to access user's data (e.g. tabs that user opened)
        * `"tabs"`: permission to access user's all open tabs in the browser. (May be audited by the Google Chrome team for the purpose of accessing all tabs)
        * `"activeTab"`: permission to access ONLY the current tab the user is on.
    * `"default_popup"`: specify the HTML file that will be displayed when the user clicks on the icon.
        * This HTML page rendering a popup window stands alone as a mini-application. You can style it with CSS and add javascript to it.
        * Note that any behavior defined for this popup window is not going to have any effect on the web page. No interation!
        * If you wish to have some interaction, you need to send API from `popup.js` to `content.js` or `background.js`.
* `"content_scripts"`: to run some javascripts inside the web page that the user is currently opening.
    * `"js": ["content.js"]` The path to your content script that runs the javascript inside the page (so-called "inject").
    * `"matches": ["..."]`: specify what web pages you want to run the content script on.
        * `["<all_urls>"]`: run on all web pages. NOT a good practice.
        * `["*://chat.openai.com/*"]`: run the content script ONLY on chatGPT page. * matches whatever goes there (通配符).
    * `"run_at": "document_end"`: specify the location where you want your script to be injected.
        * `"document_end"`: standard development practice. If you want your script to access or modify all elements in the page, then inject the script at the end of the document. 就是把`content.js`插入到当前tab展示的网页，插入位置在网页的HTML文档的末尾。相当于，你在"修改"当前的网页的HTML，通过在最后加上一条`content.js`的方式。
* `"web_accessible_resources"`: specify files within your extension that allow web pages to access (webpage -access-> extension). Here, since we want to display a sub-panel that presents results. This sub-panel is something we want the web page to access.

# Resources
- [Create a Chrome Extension (Manifest V3) for ChatGPT](https://www.youtube.com/watch?v=nviEA5chYA8&ab_channel=AlejandroAO-Software%26Ai)