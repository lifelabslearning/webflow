let manager_triggered = false;
let peer_triggered = false;
let report_triggered = false;

const play = (trigger, id) => {
  if (trigger == "manager") {
    manager_triggered = true;
    document.getElementById("manager-button").style.display = "none";
  }
  if (trigger == "peer") {
    peer_triggered = true;
    document.getElementById("peer-button").style.display = "none";
  }
  if (trigger == "report") {
    report_triggered = true;
    document.getElementById("report-button").style.display = "none";
  }
  const main_prompt = document.getElementById("main-prompt-" + trigger);
  main_prompt.style.display = "none";
  const el = document.getElementById(id);
  el.style.display = "block";
};

const tryAgain = (prompt, id) => {
  const el = document.getElementById(id);
  const p = document.getElementById(prompt);
  el.style.display = "block";
  p.style.display = "none";
};

const impact_manager = document.getElementById("impact_manager");
const impact_peer = document.getElementById("impact_peer");
const impact_report = document.getElementById("impact_report");

impact_manager.innerHTML = `
<div class="chat-box-w-button">
<div
  id="main-prompt-manager"
  class="chat-row prompt message"
  style="--delay: 0s"
>
  <div class="prompt" style="--delay: 0s">
    <p>
      Here is an example of a feedback conversation between a manager and
      her direct report.
    </p>
    <div class="prompt-button-wrapper">
      <button
        id="manager-button"
        type="button"
        class="button w-button prompt-button"
        onclick="play('manager', 'manager-1')"
      >
        Play Farah and Vikram's conversation
      </button>
    </div>
  </div>
</div>

<div id="manager-1" style="display: none">
  <div class="chat-row manager message" style="--delay: 0s">
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b24297cd72e210f5eb77_Farah.png"
          alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
          class="avatar"
        />
      </div>
    </div>
    <div>
      <span class="name"
        >Farah <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        <span>
          Hi&nbsp;<span data-o-member="FirstName"></span>, I have some
          feedback on our meeting with leadership yesterday. Can I share
          it with you?</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row me message" style="--delay: 3s">
    
    <div>
      <span class="name">Vikram <span class="title">&#8226; Direct Report</span></span>
      <p class="send">Yes, please do!</p>
    </div>


   
    <div class="avatar">
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b242dab6affbb1a8c5d8_Vikram.png"
        loading="lazy"
        alt="Masculine-presenting adult cartoon character with dark hair and a mustache and beard."
      />
    </div>
  </div>

  <div class="chat-row manager message" style="--delay: 5s">
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b24297cd72e210f5eb77_Farah.png"
          alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
          class="avatar"
        />
      </div>
    </div>
    <div>
      <span class="name"
        >Farah <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        Great! I noticed you declined to share when I asked you for
        information about the project you're working on.
      </p>
    </div>
  </div>

  <div
    id="try-manager-2"
    class="chat-row prompt message"
    style="--delay: 7s"
  >
    <div class="prompt">
      <p>
        How does Farah's feedback land with you?<br /><br />How motivated
        do you think Vikram is to speak up in the next meeting?<br /><br />Let's
        give Farah another chance.
      </p>
      <div class="prompt-button-wrapper">
        <button
          type="button"
          onclick="tryAgain('try-manager-2', 'manager-2')"
          class="button w-button prompt-button"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
</div>

<div id="manager-2" style="display: none">
  <div class="chat-row spark message" style="--delay: 0s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name">Spark</span>
      <p class="receive">
        Farah, that feedback was like the smell of coffee. It's promising,
        but I'm not awake yet. Give it another go!
      </p>
    </div>
  </div>

  <div class="chat-row manager message" style="--delay: 3s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b24297cd72e210f5eb77_Farah.png"
        alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
        class="avatar"
      />
    </div>
    <div>
      <span class="name"
        >Farah <span class="title">&#8226; Manager</span></span
      >
      <p class="receive pre message" style="--delay: 3s">
        Got it! I'll try again...
      </p>
      <p class="receive message" style="--delay: 4s">
        <span>
          Hi, Vikram&nbsp;<span data-o-member="FirstName"></span>, I have
          some feedback on our meeting with leadership yesterday. Can I
          share it with you?
        </span>
      </p>
    </div>
  </div>

  <div class="chat-row me message" style="--delay: 6s">
    <div>
      <span class="name">Vikram <span class="title">&#8226; Direct Report</span></span>
      <p class="send">Yes, please do!</p>
    </div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b242dab6affbb1a8c5d8_Vikram.png"
        alt="Masculine-presenting adult cartoon character with dark hair and a mustache and beard."
        class="avatar"
      />
  </div>

  <div class="chat-row manager message" style="--delay: 8s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b24297cd72e210f5eb77_Farah.png"
        alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
        class="avatar"
      />
    </div>
    <div>
      <span class="name"
        >Farah <span class="title">&#8226; Manager</span></span
      >
      <p class="receive pre message" style="--delay: 8s">
        Great! I noticed you declined to share when I asked you for
        information about the project you're working on.
      </p>
      <p class="receive message impact" style="--delay: 10s">
        <b
          >It's important to speak up because leadership needed to hear
          your updates to know we're on track, and I know you've got great
          ideas about where to go next.
        </b>
      </p>
    </div>
  </div>
  <div class="chat-row message closing" style="--delay: 14s">
    <p>What's different about Farah's second attempt?</p>
    <p>
      We're guessing it landed differently because it contains an <b> impact
        statement</b> - a statement that explains why the feedback matters.
    </p>
  </div>
</div>
</div>
`;

impact_peer.innerHTML = `
<div style="margin-bottom: 2rem; border-radius: 0.5rem; border: 1px solid; padding:2rem;">
      <div
        id="main-prompt-peer"
        class="chat-row prompt message"
        style="--delay: 0s"
      >
        <div class="prompt" style="--delay: 0s">
          <p>Let's simulate a feedback conversation with your Peer.</p>
          <div class="prompt-button-wrapper">
            <button
              id="peer-button"
              data-o-person-activity="Clicked Impact Statement: peer-button"
              type="button"
              aria-label="Speak with Farah"
              class="button w-button prompt-button"
              onclick="play('peer', 'peer-1')"
            >
              Speak with Farah
            </button>
          </div>
        </div>
      </div>

      <div id="peer-1" style="display: none">
        <div class="chat-row peer message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Farah <span class="title">&#8226; Peer</span></span
            >
            <p class="receive">
              <span>
                Hi&nbsp;<span data-o-member="FirstName"></span>, I have some
                feedback on your presentation from last week. Can I share it
                with you?</span
              >
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 3s">
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: -7px;">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"></path>
          </svg>
          </div>
        </div>

        <div class="chat-row peer message" style="--delay: 5s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Farah <span class="title">&#8226; Peer</span></span
            >
            <p class="receive">
              Awesome! I liked how there was very little text on each slide.
            </p>
          </div>
        </div>

        <div
          id="try-peer-2"
          class="chat-row prompt message"
          style="--delay: 7s"
        >
          <div class="prompt">
            <p>
              How does Farah's feedback land with you?<br /><br />
              What did you learn from that feedback?<br /><br />
              Eager to learn more? Let's give Farah another try.
            </p>
            <div class="prompt-button-wrapper">
              <button
                type="button"
                aria-label="Try again"
                id="peer-try-again"
                data-o-person-activity="Clicked Impact Statement: peer-try-again"
                onclick="tryAgain('try-peer-2', 'peer-2')"
                class="button w-button prompt-button"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="peer-2" style="display: none">
        <div class="chat-row spark message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name">Spark</span>
            <p class="receive">
              Farah, that feedback was like a broken escalator, still useful,
              but not as useful as it could be. Try again!
            </p>
          </div>
        </div>

        <div class="chat-row peer message" style="--delay: 3s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Farah <span class="title">&#8226; Peer</span></span
            >
            <p class="receive pre message" style="--delay: 3s">
              Okay, here it goes!
            </p>
            <p class="receive message" style="--delay: 4s">
              <span>
                Hi&nbsp;<span data-o-member="FirstName"></span>, I have some
                feedback on your presentation from last week. Can I share it
                with you?</span
              >
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 6s">
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: -7px;">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"></path>
          </svg>
          </div>
        </div>

        <div class="chat-row peer message" style="--delay: 8s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Farah <span class="title">&#8226; Peer</span></span
            >
            <p class="receive pre message" style="--delay: 8s">
              Great! I liked how there was very little text on each slide.
            </p>
            <p class="receive message impact" style="--delay: 10s">
              As someone with dyslexia, it made it easier for me to absorb the
              information.
            </p>
          </div>
        </div>
        <div class="chat-row prompt message" style="--delay: 14s">
          <div class="prompt" style="--delay: 14s">
            <p>
              We're guessing that feedback landed differently. It's because it
              contains an impact statement - a statement that explains why the
              feedback matters. <br />
              <br />
              This impact statement is strong because it also includes an
              element of learning for the feedback receiver — they now know how
              to make their presentations more inclusive to folks with dyslexia.
            </p>
          </div>
        </div>
      </div>
    </div>
`;

impact_report.innerHTML = `
<div style="margin-bottom: 2rem; border-radius: 0.5rem; border: 1px solid; padding:2rem;">
      <div
        id="main-prompt-report"
        class="chat-row prompt message"
        style="--delay: 0s"
      >
        <div class="prompt" style="--delay: 0s">
          <p>Let's simulate a feedback conversation with your Direct Report.</p>
          <div class="prompt-button-wrapper">
            <button
              id="report-button"
            data-o-person-activity="Clicked Impact Statement: report-button"
              type="button"
              aria-label="Speak with Fiona"
              class="button w-button prompt-button"
              onclick="play('report','report-1')"
            >
              Speak with Fiona
            </button>
          </div>
        </div>
      </div>

      <div id="report-1" style="display: none">
        <div class="chat-row report message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Fiona <span class="title">&#8226; Direct Report</span></span
            >
            <p class="receive">
              <span>
                Hi&nbsp;<span data-o-member="FirstName"></span>, I'd like to
                talk to you about our one-on-ones. Can I share my thoughts?
              </span>
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 3s">
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: -7px;">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"></path>
          </svg>
          </div>
        </div>

        <div class="chat-row report message" style="--delay: 5s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Fiona <span class="title">&#8226; Direct Report</span></span
            >
            <p class="receive">
              I noticed that you've been around 10 minutes late to our last 3
              one-on-ones.
            </p>
          </div>
        </div>

        <div
          id="try-report-2"
          class="chat-row prompt message"
          style="--delay: 7s"
        >
          <div class="prompt">
            <p>
              How does Fiona's feedback land with you?<br /><br />
              Are you motivated to be on time?<br /><br />
              If not, let's give Fiona another try.
            </p>
            <div class="prompt-button-wrapper">
              <button
                type="button"
                aria-label="Try again"
                id="report-try-again"
                data-o-person-activity="Clicked Impact Statement: report-try-again"
                onclick="tryAgain('try-report-2', 'report-2')"
                class="button w-button prompt-button"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="report-2" style="display: none">
        <div class="chat-row spark message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name">Spark</span>
            <p class="receive">
              Fiona, that feedback was like having a closed umbrella in the
              rain. It's handy, but I'm still getting wet. Try again.
            </p>
          </div>
        </div>

        <div class="chat-row report message" style="--delay: 3s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Fiona <span class="title">&#8226; Direct Report</span></span
            >
            <p class="receive pre message" style="--delay: 3s">
              Got it! Here we go...
            </p>
            <p class="receive message" style="--delay: 4s">
              <span>
                Hi&nbsp;<span data-o-member="FirstName"></span>, I'd like to
                talk to you about our one-on-ones. Can I share my thoughts?
              </span>
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 6s">
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: -7px;">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"></path>
          </svg>
          </div>
        </div>

        <div class="chat-row report message" style="--delay: 8s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Fiona <span class="title">&#8226; Direct Report</span></span
            >
            <p class="receive pre message" style="--delay: 8s">
              I noticed that you've been at least 10 minutes late to our last
              three one-on-ones.
            </p>
            <p class="receive message impact" style="--delay: 10s">
              I'm bringing it up because I'm wondering if we should move them to
              a different day when you have fewer meetings.
            </p>
          </div>
        </div>
        <div class="chat-row prompt message" style="--delay: 14s">
          <div class="prompt" style="--delay: 14s">
            <p>
              If this feedback feels different, it's because it contains an
              impact statement that explains why the feedback matters.<br /><br />
              This impact statement is strong because it clarifies how the
              feedback-giver feels about the issue - not upset, just eager to
              problem-solve.
            </p>
          </div>
        </div>
      </div>
    </div>
`;
