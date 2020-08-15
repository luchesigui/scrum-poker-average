const { addActions } = require('./scrum-poker');

chrome
  .runtime
  .onMessage
  .addListener(addActions);

