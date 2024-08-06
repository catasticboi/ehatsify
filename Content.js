let ehatsImages = [
  "https://tr.rbxcdn.com/7f2605b0eb24fe79a2e2c9f6ec66853c/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/504e89b1439b3d258c664787e0a7de65/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/2b124d6caab376c4f2fdc35f3957d05c/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/0fb2f1794986ccfdde63d3411ef420fa/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/76e548d1d9f8ec0e02cac32db54c509f/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/3891d9504acd5ba92f46210e53188407/420/420/Hat/Webp",
  "https://tr.rbxcdn.com/a8f94b390339393d70871feb3e7ab7bd/420/420/Hat/Webp"
];

function ehatsify(images) {
  for (let image of images) {
    if (!(ehatsImages.includes(image.src))) {
      const index = Math.floor(Math.random() * ehatsImages.length);
      image.src = ehatsImages[index];
    }
  }
}

window.addEventListener('load', function () {
  const chance = Math.random() * 1000;
  if (chance < 1) {
    ehatsify(document.getElementsByTagName("img"));
    
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.tagName === 'IMG') {
              ehatsify([node]);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              ehatsify(node.getElementsByTagName("img"));
            }
          });
        }
      }
    });
  
    const config = { childList: true, subtree: true };
  
    observer.observe(document.body, config);
  }
});
