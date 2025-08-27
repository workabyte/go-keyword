const editor = document.getElementById("editor");
const saveBtn = document.getElementById("save");

chrome.storage.local.get("shortcuts", (data) => {
  editor.value = JSON.stringify(data.shortcuts || {}, null, 2);
});

saveBtn.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(editor.value);
    chrome.storage.local.set({ shortcuts: parsed });
    alert("Shortcuts saved.");
  } catch (e) {
    alert("Invalid JSON.");
  }
});