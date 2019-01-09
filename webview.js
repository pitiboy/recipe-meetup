module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // - headerTab-label > countIndicator countIndicator--messagesTab(data-count="x") x
    // - convoList j-active-list> convoItem > convoItem-link line unlink >convoItem-infoContainer unit size4of5> convoItem-name ellipsize unit size4of5> convoItem-unreadDot

    if (document.getElementsByClassName('countIndicator countIndicator--messagesTab').length > 0) {
      // get the total number from the header menu as an attribute
      if (document.getElementsByClassName('countIndicator countIndicator--messagesTab')[0].getAttribute('data-count') != null) {
        count = parseInt(document.getElementsByClassName('countIndicator countIndicator--messagesTab')[0].getAttribute('data-count').replace(/[^0-9.]/g, ''), 10);
      }

      // get the total number from the header menu as the inner text.
      if (document.getElementsByClassName('countIndicator countIndicator--messagesTab').length > 0) {
        count = parseInt(document.getElementsByClassName('countIndicator countIndicator--messagesTab')[0].innerText.replace(/[^0-9.]/g, ''), 10);
      }
    }

    // checking all new unread messages one by one from all the chat inbox parties
    if (document.getElementsByClassName('convoItem-unreadDot').length > 0) {
      count = document.getElementsByClassName('convoItem-unreadDot').length;
    }

    // was only used for checking the age of the last comment, but that might have come from any parties
    // if (document.getElementsByClassName('convoItem-timestamp').length > 0) {
    //   // this is only a hack without knowing exaclty the new chat indication...
    //   // it is just listening if the last message arrived within 1 days
    //   if (document.getElementsByClassName('convoItem-timestamp')[0].innerText.match(/.*[ms]$/)) count++;
    // }

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
