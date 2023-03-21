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
<div style="margin-bottom: 2rem; border-radius: 0.5rem; border: 1px solid; padding:2rem;">
      <div
        id="main-prompt-manager"
        class="chat-row callout message"
        style="--delay: 0s"
      >
        <div class="callout" style="--delay: 0s">
          <p>Let's simulate a feedback conversation with your Manager.</p>
          <div class="callout-button-wrapper">
            <button
              id="manager-button"
              type="button"
              class="button w-button callout-button"
              onclick="play('manager', 'manager-1')"
            >
              Speak with Franklin
            </button>
          </div>
        </div>
      </div>

      <div id="manager-1" style="display: none">
        <div class="chat-row manager message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Franklin <span class="title">&#8226; Manager</span></span
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
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 5s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Franklin <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              Great! I noticed you passed every time I asked you to share about
              the project you're working on.
            </p>
          </div>
        </div>

        <div
          id="try-manager-2"
          class="chat-row callout message"
          style="--delay: 7s"
        >
          <div class="callout">
            <p>
              How does Franklin's feedback land with you?<br /><br />How
              motivated are you to speak up more in the next meeting?<br /><br />Not
              thrilled by their feedback? Let's give Franklin another chance.
            </p>
            <div class="callout-button-wrapper">
              <button
                type="button"
                onclick="tryAgain('try-manager-2', 'manager-2')"
                class="button w-button callout-button"
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
              Franklin, that feedback was like the smell of coffee. It's
              promising, but I'm not awake yet. Give it another go!
            </p>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 3s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Franklin <span class="title">&#8226; Manager</span></span
            >
            <p class="receive pre message" style="--delay: 3s">
              Got it! I'll try again...
            </p>
            <p class="receive message" style="--delay: 4s">
              <span>
                Hi&nbsp;<span data-o-member="FirstName"></span>, I have some
                feedback on our meeting with leadership yesterday. Can I share
                it with you?</span
              >
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 6s">
          <p class="send">Yes, please!</p>
          <div class="avatar">
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 8s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Franklin <span class="title">&#8226; Manager</span></span
            >
            <p class="receive pre message" style="--delay: 8s">
              Great! I noticed you passed every time I asked you to share about
              the project you're working on.
            </p>
            <p class="receive message impact" style="--delay: 10s">
              It's important to speak up because leadership needed to hear your
              updates to know we're on track and I know you've got great ideas
              about where to go next.
            </p>
          </div>
        </div>
        <div class="chat-row callout message" style="--delay: 14s">
          <div class="callout" style="--delay: 14s">
            <p>
              What's different about Franklin's second attempt?<br /><br />How
              much more motivated are you to speak up in the next meeting?
            </p>
          </div>
        </div>
      </div>
    </div>
`;

impact_peer.innerHTML = `
<div style="margin-bottom: 2rem; border-radius: 0.5rem; border: 1px solid; padding:2rem;">
      <div
        id="main-prompt-peer"
        class="chat-row callout message"
        style="--delay: 0s"
      >
        <div class="callout" style="--delay: 0s">
          <p>Let's simulate a feedback conversation with your Peer.</p>
          <div class="callout-button-wrapper">
            <button
              id="peer-button"
              type="button"
              class="button w-button callout-button"
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
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
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
          class="chat-row callout message"
          style="--delay: 7s"
        >
          <div class="callout">
            <p>
              How does Farah's feedback land with you?<br /><br />
              What did you learn from that feedback?<br /><br />
              Eager to learn more? Let's give Farah another try.
            </p>
            <div class="callout-button-wrapper">
              <button
                type="button"
                onclick="tryAgain('try-peer-2', 'peer-2')"
                class="button w-button callout-button"
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
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
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
        <div class="chat-row callout message" style="--delay: 14s">
          <div class="callout" style="--delay: 14s">
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
        class="chat-row callout message"
        style="--delay: 0s"
      >
        <div class="callout" style="--delay: 0s">
          <p>Let's simulate a feedback conversation with your Direct Report.</p>
          <div class="callout-button-wrapper">
            <button
              id="report-button"
              type="button"
              class="button w-button callout-button"
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
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
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
          class="chat-row callout message"
          style="--delay: 7s"
        >
          <div class="callout">
            <p>
              How does Fiona's feedback land with you?<br /><br />
              Are you motivated to be on time?<br /><br />
              If not, let's give Fiona another try.
            </p>
            <div class="callout-button-wrapper">
              <button
                type="button"
                onclick="tryAgain('try-report-2', 'report-2')"
                class="button w-button callout-button"
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
            <img
              src="https://s3.amazonaws.com/outseta-production/7851/0-Ian-Scott-headshot-300x380_b632e9d3-7798-4d20-b509-c85e83079149.jpeg"
              loading="lazy"
              data-o-member="ProfileImageS3Url"
              alt="profile image"
              onerror="this.src='https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/63d2ab48da2a2f97be21593c_blank.png'"
            />
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
        <div class="chat-row callout message" style="--delay: 14s">
          <div class="callout" style="--delay: 14s">
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
