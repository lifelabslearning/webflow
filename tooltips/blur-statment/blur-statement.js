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

const blur_statement_1 = document.getElementById("blur_statement_1");
const blur_statement_2 = document.getElementById("blur_statement_2");
const blur_statement_3 = document.getElementById("blur_statement_3");

blur_statement_1.innerHTML = `
<div id="quote-1" class="quote">
<p class="quote-label">Blurry feedback</p>
<p class="blur-hidden quote-body" aria-label="Quote text">
  "Your messages are confusing.&nbsp;&nbsp;I'd prefer you to be more
  direct."
</p>
<p class="blur-visible quote-body" aria-label="Quote text">
  "Your&nbsp;
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >messages<span class="quote-body">
      <span class="container"
        ><span class="text" aria-label="Text or word description"
          >Which messages are you referring to? The lack of specificity
          means the recipient can't identify where the problem is, and
          could even lead to defensiveness. <br /><br />
          <b>To Deblur:</b> specify which messages you're referring to.
        </span></span
      ></span
    ></span
  >&nbsp;are
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >confusing<span class="quote-body"
      ><span class="container"
        ><span class="text" aria-label="Text or word description"
          >What is confusing about the messages? Being specific here makes
          it more likely the feedback recipient will make a fix that
          solves the issue.<br />
          <br /><b>To Deblur:</b> specify what is confusing about the
          messages.</span
        ></span
      ></span
    ></span
  >&nbsp;.&nbsp;I'd prefer you to be
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >more direct
    <span class="quote-body">
      <span class="container">
        <span class="text" aria-label="Text or word description"
          >Concepts like "direct" and "indirect" vary between people and
          cultures. If there's something specific you'd like to see, name
          it!<br /><br />
          <b>To Deblur:</b> specify exactly what you'd like the messages
          to include.
        </span>
      </span>
    </span>
  </span>
  <span>&nbsp;."</span>
</p>
<div>
  <button
    type="button"
    class="blur-button button w-button"
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
  "Your&nbsp;
  <span class="tooltip start">email updates</span>
  <span class="tooltip end">on Project X</span>
  are
  <span class="tooltip start">missing</span>
  <span class="tooltip end">next steps</span>&nbsp;.&nbsp;I'd like you
  to&nbsp;
  <span class="tooltip start">include</span>
  <span class="tooltip middle">the action</span>
  <span class="tooltip middle">items and</span>
  <span class="tooltip middle">who</span>
  <span class="tooltip middle">is responsible</span>
  <span class="tooltip end">for each</span>
  ."&nbsp;
</p>
</div>
    `;

blur_statement_2.innerHTML = `
<div id="quote-2" class="quote">
<p class="quote-label">Blurry feedback</p>
<p class="blur-hidden quote-body" aria-label="Quote text">
  "I appreciate how you're always proactive."
</p>
<p class="blur-visible quote-body" aria-label="Quote text">
  "I appreciate how you're&nbsp;
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >always<span class="quote-body">
      <span class="container">
        <span class="text" aria-label="Text or word description">
          It's rare that something is true <i>all the time</i>. Because of
          that, terms like "always" and "never" are a cue for feedback
          receivers to think back and identify at least one example where
          that was not true. Even if you notice a pattern of behavior,
          start by naming recent examples. Then, you can mention the
          pattern once you are both aware of what behaviors you're
          referring to.
          <br />
          <br /><b>To Deblur:</b> name 1-3 recent examples.
        </span>
      </span>
    </span></span
  >&nbsp;
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >proactive
    <span class="quote-body">
      <span class="container">
        <span class="text" aria-label="Text or word description">
          Proactive is one of those words that sounds so positive that few
          people bother to deblur it. Without deblurring, however, it's
          hard to know what behavior is valuable to repeat.
          <br />
          <br /><b>To Deblur:</b> Name the specific action(s) you
          associated with "proactive".</span
        >
      </span>
    </span>
  </span>
  &nbsp;."
</p>
<div>
  <button
    type="button"
    class="blur-button button w-button"
    aria-label="Show blur words"
    onclick="showBlurWords('quote-2')"
  >
    Deblur this feedback
  </button>
  <p id="instructions-2" class="instructions">
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
  "I appreciate how you&nbsp;
  <span class="tooltip start">asked for</span>
  <span class="tooltip middle">clarification</span>
  the
  <span class="tooltip middle">last</span>
  <span class="tooltip middle">three times</span>
  <span class="tooltip end">you got stuck</span>
  ."
</p>
</div>

    `;

blur_statement_3.innerHTML = `
<div id="quote-3" class="quote">
<p class="quote-label">Blurry feedback</p>
<p class="blur-hidden quote-body" aria-label="Quote text">
  "We need to be more efficient and productive during our meetings."
</p>
<p class="blur-visible quote-body" aria-label="Quote text">
  "We need to be
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
    >more efficient and productive<span class="quote-body">
      <span class="container"
        ><span class="text" aria-label="Text or word description"
          >Many people don't realize how blurry terms like "efficient" and "productive" are because they are so widely used. But, if you don't share the specifics, people won’t know what to change.<br />
          <br /><b>To Deblur:</b> specify what you'd like to see. When possible, name metrics.
        </span></span
      ></span
    ></span
  >&nbsp;during our
  <span
    class="tooltip"
    tabindex="0"
    aria-label="Text or word with tooltip"
  >
    meetings
    <span class="quote-body"
      ><span class="container"
        ><span class="text" aria-label="Text or word description">
          This is a tricky one! Since many of us are in lots of meetings every day, and, given how varied meeting types can be, getting clear on which type you're referring to will get you to a solution much faster.
          <br />
          <br /><b>To Deblur:</b> Focus the discussion on one issue at a time.</span
        ></span
      ></span
    ></span
  >
  &nbsp;."
</p>
<div>
  <button
    type="button"
    class="blur-button button w-button"
    aria-label="Show blur words"
    onclick="showBlurWords('quote-3')"
  >
    Deblur this feedback
  </button>
  <p id="instructions-3" class="instructions">
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
  "We need to&nbsp;
  <span class="tooltip start">discuss all</span>
  <span class="tooltip middle">the agenda</span>
  <span class="tooltip middle">items in</span>
  <span class="tooltip middle">30 minutes</span>
  during our
  <span class="tooltip end"> daily check-ins</span>
  ."
</p>
</div>
    `;
