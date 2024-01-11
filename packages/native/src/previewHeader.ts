export const nativePreviewHead = (head: string) => `${head}
    ${process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR ? '' :
    '<script> (function () {const n = window,i = document,o = i.getElementsByTagName("script")[0],t = i.createElement("script"); (t.src = "https://js.appetize.io/embed.js"), (t.async = 1), o.parentNode.insertBefore(t, o); const s = new Promise(function (e) {t.onload = function () {e();};});n.appetize = {getClient: function (...e) { return s.then(() => n.appetize.getClient(...e));},};})(); </script>'}
    `;
