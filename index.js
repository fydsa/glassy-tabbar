const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

tabs.forEach((el) => el.addEventListener("click", clickTab));

const active_tab = document.querySelector("input:checked + label");
indicator.style.left = `${active_tab.offsetLeft + 5}px`;
indicator.style.backgroundColor = "#e2921a";

function clickTab() {
  let active_tab = document.querySelector("input:checked + label");
  indicator.style.left = `${active_tab.offsetLeft + 5}px`;
  let indicator_left = indicator.style.left;
  switch (true) {
    case indicator_left === "17px" || indicator_left === "18px":
      indicator.style.backgroundColor = "#e2921a";
      break;
    case indicator_left === "91px" || indicator_left === "92px":
      indicator.style.backgroundColor = "#e29818";
      break;
    case indicator_left === "166px" || indicator_left === "167px":
      indicator.style.backgroundColor = "#e29818";
      break;
    case indicator_left === "241px" || indicator_left === "242px":
      indicator.style.backgroundColor = "#e19c16";
      break;
    default:
      indicator.style.backgroundColor = "#e2921a";
  }
}
