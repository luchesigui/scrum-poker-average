chrome
  .browserAction
  .onClicked
  .addListener(notifyContent);

function notifyContent({ id }) {
  const message = {
    action: 'ADD_AVERAGE_ACTIONS',
  };

  chrome.tabs.sendMessage(id, message);
}
