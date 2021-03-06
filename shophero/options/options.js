
function saveOptions(e) {
    alert(document.querySelector("#like").checked);
    browser.storage.sync.set({
      color: document.querySelector("#color").value,
      doilikebenoit: document.querySelector("#like").checked
    });
    e.preventDefault();
  }
  
  function restoreOptions() {
    var storageItem = browser.storage.managed.get('colour');
    storageItem.then((res) => {
      document.querySelector("#managed-colour").innerText = res.colour;
    });
  
    var gettingItem = browser.storage.sync.get('colour');
    gettingItem.then((res) => {
      document.querySelector("#colour").value = res.colour || 'Firefox red';
    });
  }
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);