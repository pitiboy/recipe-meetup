module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('convoItem-timestamp').length > 0) {
      // this is only a hack without knowing exaclty the new chat indication...
      // it is just listening if the last message arrived within 1 days
      if (document.getElementsByClassName('convoItem-timestamp')[0].innerText.match(/.*[hms]$/)) count++;
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
