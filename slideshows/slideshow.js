let currentTab = 0; // Current tab is set to be the first tab (0)

function selectCarousel(id) {
  document.getElementById("intro").style.display = "none";
  document.getElementById("carousel-container").style.display = "block";
  const all_containers = document.getElementsByClassName("tabs");
  for (i = 0; i < all_containers.length; i++) {
    if (all_containers[i].id == "tabs-" + id) {
      all_containers[i].style.display = "block";
    } else {
      all_containers[i].style.display = "none";
    }
  }
  const all_tabs = document.getElementsByClassName("tab");
  for (x = 0; x < all_tabs.length; x++) {
    const tab = all_tabs[x];
    tab.style.display = "none";
  }
  currentTab = 0;
  showTab(0, id);
}

function showTab(tabIndex, id) {
  // This function will display the specified tab of the form...
  const container = document.getElementById("tabs-" + id);
  const tabs = container.getElementsByClassName("tab-" + id);
  console.log(tabs);

  tabs[tabIndex].style.display = "block";

  if (tabIndex == 0) {
    document.getElementById("prevBtn-" + id).style.display = "none";
  } else {
    document.getElementById("prevBtn-" + id).style.display = "inline";
  }
  if (tabIndex == tabs.length - 1) {
    document.getElementById("nextBtn-" + id).innerHTML = "Finish";
  } else {
    document.getElementById("nextBtn-" + id).innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(tabIndex, id);
}

function nextPrev(increment, id) {
  const container = document.getElementById("tabs-" + id);
  const tabs = container.getElementsByClassName("tab-" + id);

  // Hide the current tab:
  tabs[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + increment;
  // Update steps UI
  const steps = document.getElementById("steps-" + id);
  // if you have reached the end of the form...
  if (currentTab == tabs.length) {
    document.getElementById("intro").style.display = "block";
    document.getElementById("carousel-container").style.display = "none";
    // ...do something
    return false;
  }
  steps.getElementsByClassName("step")[currentTab].className += " finish";

  // Otherwise, display the correct tab:
  showTab(currentTab, id);
}

function fixStepIndicator(stepIndex, id) {
  // This function removes the "active" class of all steps...
  const steps = document
    .getElementById("steps-" + id)
    .getElementsByClassName("step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  steps[stepIndex].className += " active";
}
