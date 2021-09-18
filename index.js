const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

tabs.forEach((el) => el.addEventListener("click", clickTab));

const active_tab = document.querySelector("input:checked + label");
indicator.style.left = `${active_tab.offsetLeft + 5}px`;
indicator.style.backgroundColor = "#e2921a";
indicator.style.setProperty("--indicator", "#e2921a");

function clickTab() {
  let active_tab = document.querySelector("input:checked + label");
  indicator.style.left = `${active_tab.offsetLeft + 5}px`;
  let active_tab_number = active_tab.getAttribute("for");

  switch (true) {
    case active_tab_number === "tab-one":
      indicator.style.backgroundColor = "#e2921a";
      indicator.style.setProperty("--indicator", "#e2921a");
      break;
    case active_tab_number === "tab-two" || active_tab_number === "tab-three":
      indicator.style.backgroundColor = "#e29818";
      indicator.style.setProperty("--indicator", "#e29818");
      break;
    case active_tab_number === "tab-four":
      indicator.style.backgroundColor = "#e09916";
      indicator.style.setProperty("--indicator", "#e09916");
      break;
    default:
      indicator.style.backgroundColor = "#e2921a";
      indicator.style.setProperty("--indicator", "#e2921a");
  }
}
