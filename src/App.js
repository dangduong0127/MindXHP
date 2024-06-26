document.addEventListener("DOMContentLoaded", function () {
  let interval = 1500;
  // Update number values
  const updateNumbers = () => {
    const valueDisplays = document.querySelectorAll(".num");

    const increaseFloatNum = (x, s) => {
      let startVl = s;
      let endVl = parseFloat(x.getAttribute("data-val"));
      let duration = Math.floor(interval / endVl);
      let count = setInterval(() => {
        startVl += 0.1;
        x.textContent = startVl.toFixed(1) + "%";
        if (startVl.toFixed(1) == endVl.toFixed(1)) {
          clearInterval(count);
        }
      }, duration);
    };

    const increaseIntNum = (x, s) => {
      let startVl = s;
      let endVl = parseInt(x.getAttribute("data-val"));
      let duration = Math.floor(interval / endVl);
      let count = setInterval(() => {
        startVl += 1;
        x.textContent = startVl + "+";
        if (startVl == endVl) {
          clearInterval(count);
        }
      }, duration);
    };

    increaseIntNum(valueDisplays[0], 0);
    increaseIntNum(valueDisplays[1], 39700);
    increaseFloatNum(valueDisplays[2], 15);
    increaseFloatNum(valueDisplays[3], 87);
  };

  updateNumbers();
});
