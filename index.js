const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

tabs.forEach((el) => el.addEventListener("click", clickTab));

const active_tab = document.querySelector("input:checked + label");
indicator.style.left = `${active_tab.offsetLeft + 12}px`;
indicator.style.backgroundColor = "#e2921a";
indicator.style.setProperty("--indicator", "#e2921a");

function clickTab() {
  let active_tab = document.querySelector("input:checked + label");
  indicator.style.left = `${active_tab.offsetLeft + 12}px`;
  let active_tab_number = active_tab.getAttribute("for");

  switch (active_tab_number) {
    case "tab-one":
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
      break;
    case "tab-two":
      indicator.style.backgroundColor = "#e3911a";
      indicator.style.setProperty("--indicator", "#e3911a");
      break;
    case "tab-three":
      indicator.style.backgroundColor = "#e6961a";
      indicator.style.setProperty("--indicator", "#e6961a");
      break;
    case "tab-four":
      indicator.style.backgroundColor = "#e39519";
      indicator.style.setProperty("--indicator", "#e39519");
      break;
    default:
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
  }
}
