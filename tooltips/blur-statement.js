const showBlurWords = () => {
  document.getElementById("blur-visible").style.display = "block";
  document.getElementById("instructions").style.display = "block";
  document.getElementById("blur-button").style.display = "none";
  document.getElementById("blur-hidden").style.display = "none";
};
(function () {
  const blurWords = {
    strategic: {
      text: "strategic",
      tip: "Strategic is a blur word because...",
    },
    commentary: {
      text: "commentary",
      tip: "Commentary is a blur word because...",
    },
  };
  // Get all the toggletip buttons
  var toggletipTexts = document.querySelectorAll("[data-toggletip]");

  // Iterate over them
  Array.prototype.forEach.call(toggletipTexts, function (toggletipText) {
    // Create the container element
    var container = document.createElement("span");
    container.setAttribute("class", "toggletip-container");

    // Put it before the original element in the DOM
    toggletipText.parentNode.insertBefore(container, toggletipText);

    // Create the button element
    var toggletip = document.createElement("button");
    toggletip.classList.add("blur-word");
    toggletip.setAttribute("type", "button");
    toggletip.setAttribute("aria-label", "deblur tip");
    toggletip.setAttribute(
      "data-toggletip-content",
      blurWords[toggletipText.innerHTML].tip
    );
    toggletip.textContent = toggletipText.innerHTML;

    // Place the button element in the container
    container.appendChild(toggletip);

    // Create the live region
    var liveRegion = document.createElement("span");
    liveRegion.setAttribute("role", "status");

    // Place the live region in the container
    container.appendChild(liveRegion);

    // Remove the original element
    toggletipText.parentNode.removeChild(toggletipText);

    // Build `data-tooltip-content`
    var message = toggletip.getAttribute("data-toggletip-content");
    toggletip.setAttribute("data-toggletip-content", message);
    toggletip.removeAttribute("title");

    // Get the message from the data-content element
    var message = toggletip.getAttribute("data-toggletip-content");

    // Get the live region element
    var liveRegion = toggletip.nextElementSibling;

    // Toggle the message
    toggletip.addEventListener("click", function () {
      liveRegion.innerHTML = "";
      window.setTimeout(function () {
        liveRegion.innerHTML =
          '<span class="toggletip-bubble">' + message + "</span>";
      }, 100);
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (toggletip !== e.target) {
        liveRegion.innerHTML = "";
      }
    });

    // Remove toggletip on ESC
    toggletip.addEventListener("keydown", function (e) {
      if ((e.keyCode || e.which) === 27) liveRegion.innerHTML = "";
    });

    // Remove on blur
    toggletip.addEventListener("blur", function (e) {
      liveRegion.innerHTML = "";
    });
  });
})();

const blur_statement = document.getElementById("blur_statement");
console.log("blur_statement", blur_statement);

blur_statement.innerHTML = `
    <div class="quote">
      <p id="blur-hidden" class="quote-body" aria-label="Quote text">
        I know quite certainly that I myself have no special talent; curiosity,
        obsession and dogged endurance, combined with self-criticism have
        brought me to my ideas.
      </p>
      <p id="blur-visible" class="quote-body" aria-label="Quote text">
        I know quite certainly that I myself have no special talent; curiosity,
        <span
          class="tooltip"
          tabindex="0"
          aria-label="Text or word with tooltip"
          >obsession<span class="quote-body"
            ><span class="container"
              ><span class="text" aria-label="Text or word description"
                >A persistent preoccupation with an often unreasonable idea or
                feeling.</span
              ></span
            ></span
          ></span
        >&nbsp;and dogged endurance, combined with
        <span
          class="tooltip"
          tabindex="0"
          aria-label="Text or word with tooltip"
          >self-criticism<span class="quote-body"
            ><span class="container"
              ><span class="text" aria-label="Text or word description"
                >Criticism of oneself or one's actions.</span
              ></span
            ></span
          ></span
        >&nbsp;have brought me to my ideas.
      </p>
      <div style="padding-top: 2rem">
        <button
          type="button"
          id="blur-button"
          aria-label="Show blur words"
          onclick="showBlurWords()"
        >
          Show blur words
        </button>
        <p id="instructions">
          Select a blur word to learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            style="height: 1.2rem"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </p>
      </div>
    </div>
    `;
