console.log("simple-image.js is loaded");

class SimpleImage {
  render() {
    return document.createElement("input");
  }
  save(blockContent) {
    return {
      url: blockContent.value,
    };
  }
}
