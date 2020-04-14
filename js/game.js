// View an image

const imgs = document.getElementsByClassName("is-game-gallery-image");

for (let i = 0; i < imgs.length; i++) {
  const viewer = new window.Viewer(imgs[i], {
    inline: false,
    navbar: false,
    toolbar: false,
    viewed() {
      viewer.zoomTo(1);
    },
  });
}
