const SkipToMain = {
  skip({ skipMain, main }) {
    skipMain.addEventListener('click', (event) => {
      event.preventDefault();
      main.focus();
    });
  },
};

export default SkipToMain;
