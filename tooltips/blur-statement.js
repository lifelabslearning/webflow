let highlight = false;

const enableHighlight = () => {
  highlight = true;
};

const show = (tip_id) => {
  if (highlight) {
    console.log(tip_id);
    const tips = {
      messages: `<h3><u>Your messages</u></h3>
                <p>Which message? All messages? A particular topic? The lack of specificity means the recipient not only doesn't know where the problem is, they are also likely to get defensive.</p>
                <p>To Deblur: “Your messages” &#8594; “Your email updates on Project X"</p>`,
      confusing: `<h3><u>Confusing</u></h3>
                <p>What is confusing about them? Are they too short/long? Formatted in a way that's hard to read? Delivered to the wrong people?</p>
                <p>To Deblur: Being clear here will make it more likely the other person will make a fix that solves the issue. “confusing” &#8594; “do not have a clear next step.”</p>`,
      direct: `<h3><u>More direct</u></h3>
          <p>Concepts like “direct” and “indirect” are subjective person to person and culture to culture.</p>
          <p>To Deblur: If there's something specific you'd like to see, name it. “more direct” > “you'd include the action and the person you'd like to own the next step.”</p>`,
    };
    const tip_container = document.getElementById("tip_container");
    tip_container.innerHTML = tips[tip_id];
    tip_container.classList.add("fade-in");
  }
};

const showBlurWords = () => {
  document.getElementById("blur-visible").style.display = "block";
  document.getElementById("instructions").style.display = "block";
  document.getElementById("blur-button").style.display = "none";
  document.getElementById("blur-hidden").style.display = "none";
  enableHighlight();
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

blur_statement.innerHTML = `
<div id="quote-1" class="quote">
      <p id="blur-hidden" class="quote-body" aria-label="Quote text">
        "Your messages are confusing, I'd prefer if you'd be more direct."
      </p>
      <p id="blur-visible" class="quote-body" aria-label="Quote text">
        <span
          class="tooltip"
          tabindex="0"
          aria-label="Text or word with tooltip"
          >"Your messages<span class="quote-body">
            <span class="container"
              ><span class="text" aria-label="Text or word description"
                >Which message? All messages? A particular topic? The lack of
                specificity means the recipient not only doesn't know where the
                problem is, they are also likely to get defensive. <br /><br />
                <b>To Deblur:</b> "Your messages" &#8594; "Your email updates on
                Project X"
              </span></span
            ></span
          ></span
        >&nbsp;are
        <span
          class="tooltip"
          tabindex="0"
          aria-label="Text or word with tooltip"
          >confusing,<span class="quote-body"
            ><span class="container"
              ><span class="text" aria-label="Text or word description"
                >What is confusing about them? Are they too short/long?
                Formatted in a way that's hard to read? Delivered to the wrong
                people?<br />
                <br /><b>To Deblur:</b> Being clear here will make it more
                likely the other person will make a fix that solves the issue.
                "confusing" &#8594; "do not have a clear next step."</span
              ></span
            ></span
          ></span
        >&nbsp;I'd prefer if you'd be more
        <span
          class="tooltip"
          tabindex="0"
          aria-label="Text or word with tooltip"
          >direct."<span class="quote-body"
            ><span class="container"
              ><span class="text" aria-label="Text or word description"
                >Concepts like "direct" and "indirect" are subjective person to
                person and culture to culture.<br /><br />
                <b>To Deblur:</b> If there's something specific you'd like to
                see, name it. "more direct" &#8594; "you'd include the action
                and the person you'd like to own the next step."</span
              ></span
            ></span
          ></span
        >
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
