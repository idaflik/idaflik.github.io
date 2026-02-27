function resizeIframe(obj) {
  if (window.innerWidth * 1.5 < window.innerHeight) {
    obj.style.height =
      obj.contentWindow.document.documentElement.scrollHeight + "px";
  }
}
