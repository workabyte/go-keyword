chrome.omnibox.onInputEntered.addListener((text) => {
  chrome.storage.local.get("shortcuts", (data) => {
    const shortcuts = data.shortcuts || {};
    const url = shortcuts[text] || `https://www.google.com/search?q=${encodeURIComponent(text)}`;
    chrome.tabs.create({ url });
  });
});