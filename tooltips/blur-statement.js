const hideInstructions = (id) => {
  document.getElementById(id).style.visibility = "hidden";
};
const showBlurWords = (id) => {
  const quote = document.getElementById(id);
  const tooltips = quote.getElementsByClassName("tooltip");
  const instructions_id = quote.getElementsByClassName("instructions")[0].id;

  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener(
      "click",
      () => {
        hideInstructions(instructions_id);
      },
      false
    );
    tooltips[i].addEventListener(
      "mouseover",
      () => {
        hideInstructions(instructions_id);
      },
      false
    );
    tooltips[i].addEventListener(
      "focus",
      () => {
        hideInstructions(instructions_id);
      },
      false
    );
  }
  quote.getElementsByClassName("blur-visible")[0].style.display = "block";
  quote.getElementsByClassName("deblur-quote-label")[0].style.display = "block";
  quote.getElementsByClassName("deblur-visible")[0].style.display = "block";
  quote.getElementsByClassName("instructions")[0].style.display = "block";
  quote.getElementsByClassName("blur-button")[0].style.display = "none";
  quote.getElementsByClassName("blur-hidden")[0].style.display = "none";
};

const blur_statement = document.getElementById("blur_statement");

blur_statement.innerHTML = `
<div id="quote-1" class="quote">
      <p class="quote-label">Blurry feedback</p>
      <p class="blur-hidden quote-body" aria-label="Quote text">
        "Your messages are confusing.&nbsp;&nbsp;I'd prefer if you'd be more
        direct."
      </p>
      <p class="blur-visible quote-body" aria-label="Quote text">
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
          >confusing.<span class="quote-body"
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
        >&nbsp;&nbsp;I'd prefer if you'd be more
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
      <div>
        <button
          type="button"
          class="blur-button"
          aria-label="Show blur words"
          onclick="showBlurWords('quote-1')"
        >
          Deblur this feedback
        </button>
        <p id="instructions-1" class="instructions">
          Select a blur word to learn more
          <span style="margin-left: 0.5rem" class="bounce">
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
          </span>
        </p>
      </div>
      <p class="deblur-quote-label">Deblurred feedback</p>
      <p class="deblur-visible quote-body" aria-label="Quote text">
        <span class="tooltip start">"Your email updates on Project X</span>
        <span class="tooltip end">do not have clear next steps.</span
        >&nbsp;&nbsp;I'd prefer if you'd&nbsp;
        <span class="tooltip start">include the action</span>
        <span class="tooltip middle">&nbsp;and the person</span>
        <span class="tooltip middle">&nbsp;you'd like to</span>
        <span class="tooltip end">&nbsp;you'd like to own the next step."</span>
      </p>
    </div>
    `;
