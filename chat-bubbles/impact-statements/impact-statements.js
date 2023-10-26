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
  class="chat-row card-container-w-padding prompt message"
  style="--delay: 0s"
>
  <div class="prompt" style="--delay: 0s">
    <p>
      Here is an example of a feedback conversation <b>between a manager and her direct report.</b>
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
  <div class="chat-row chat-row-w-padding manager message" style="--delay: 0s">
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65394c83ba2cb6218a55aced_farah3.png"
          alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
          class="avatar farah"
        />
      </div>
    </div>
    <div>
      <span class="name"
        >Farah <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        <span>
          Hi Vikram, I have some feedback on our meeting with leadership
          yesterday. Can I share it with you?</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding me message" style="--delay: 3s">
    <div>
      <span class="name"
        >Vikram <span class="title">&#8226; Direct Report</span></span
      >
      <p class="send">Yes, please do!</p>
    </div>

    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b242dab6affbb1a8c5d8_Vikram.png"
        loading="lazy"
        class="avatar vikram"
        alt="Masculine-presenting adult cartoon character with dark hair and a mustache and beard."
      />
    </div>
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 5s">
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65394c83ba2cb6218a55aced_farah3.png"
          alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
          class="avatar farah"
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
    class="chat-row chat-row-w-padding prompt message"
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
  <div class="chat-row chat-row-w-padding spark message" style="--delay: 0s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name">LifeLabs</span>
      <p class="receive">
        Farah, that feedback was like the smell of coffee. It's promising,
        but I'm not awake yet. Give it another go!
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 3s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65394c83ba2cb6218a55aced_farah3.png"
        alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
        class="avatar farah"
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
          Hi, Vikram, I have some feedback on our meeting with leadership
          yesterday. Can I share it with you?
        </span>
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding me message" style="--delay: 6s">
    <div>
      <span class="name"
        >Vikram <span class="title">&#8226; Direct Report</span></span
      >
      <p class="send">Yes, please do!</p>
    </div>
    <img
      src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6534b242dab6affbb1a8c5d8_Vikram.png"
      alt="Masculine-presenting adult cartoon character with dark hair and a mustache and beard."
      class="avatar vikram"
    />
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 8s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65394c83ba2cb6218a55aced_farah3.png"
        alt="Feminine-presenting adult cartoon character with long dark locs in a ponytail and dangling earrings."
        class="avatar farah"
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
  <div class="chat-row chat-row-w-padding message closing" style="--delay: 14s">
    <p>
      What's different about Farah's second attempt?<br />We're guessing
      it landed differently because it contains an
      <b> impact statement</b> - a statement that explains why the
      feedback matters. Hopefully Vikram is more motivated to share his progress in their next meeting!
    </p>
  </div>
</div>
</div>
`;

impact_peer.innerHTML = `
<div class="chat-box-w-button">
<div
  id="main-prompt-peer"
  class="chat-row card-container-w-padding prompt message"
  style="--delay: 0s"
>
  <div class="prompt" style="--delay: 0s">
    <p>
      Here is an example of a feedback conversation
      <b>between two peers.</b>
    </p>
    <div class="prompt-button-wrapper">
      <button
        id="peer-button"
        type="button"
        class="button w-button prompt-button"
        onclick="play('peer', 'peer-1')"
      >
        Play Tracy and Aleyna's conversation
      </button>
    </div>
  </div>
</div>

<div id="peer-1" style="display: none">
  <div class="chat-row chat-row-w-padding manager message" style="--delay: 0s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e0565a382945fccba8f_Tracy.png"
        alt="Feminine-presenting adult cartoon character wearing glasses and has short, gray hair with blue streaks."
        class="avatar tracy"
      />
    </div>

    <div>
      <span class="name"
        >Tracy <span class="title">&#8226; Peer</span></span
      >
      <p class="receive">
        <span>
          Hi, Aleyna, I have some feedback on your presentation from last
          week. Can I share it with you?</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding me message" style="--delay: 3s">
    <div>
      <span class="name"
        >Aleyna <span class="title">&#8226; Peer</span></span
      >
      <p class="send">Yes, I'd love to hear it!</p>
    </div>
    <img
      src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/653882f46b3dce952fcf89d6_aleyna1.png"
      alt="Feminine-presenting adult cartoon character wearing a bright pink headscarf."
      class="avatar aleyna"
    />
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 5s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e0565a382945fccba8f_Tracy.png"
        alt="Feminine-presenting adult cartoon character wearing glasses and has short, gray hair with blue streaks."
        class="avatar tracy"
      />
    </div>
    <div>
      <span class="name"
        >Tracy <span class="title">&#8226; Peer</span></span
      >
      <p class="receive">
        <span>
          I liked how there was very little text on each slide.</span
        >
      </p>
    </div>
  </div>

  <div
    id="try-peer-2"
    class="chat-row chat-row-w-padding prompt message"
    style="--delay: 7s"
  >
    <div class="prompt">
      <p>
        How does Tracy's feedback land with you? If you were Aleyna, what
        did you learn from that feedback?<br /><br />
        Eager to learn more? Let's give Tracy another try.
      </p>
      <div class="prompt-button-wrapper">
        <button
          type="button"
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
  <div class="chat-row chat-row-w-padding spark message" style="--delay: 0s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name">LifeLabs</span>
      <p class="receive">
        Tracy, that feedback was like a broken escalator, still useful,
        but not as useful as it could be. Try again!
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 3s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e0565a382945fccba8f_Tracy.png"
        alt="Feminine-presenting adult cartoon character wearing glasses and has short, gray hair with blue streaks."
        class="avatar tracy"
      />
    </div>
    <div>
      <span class="name"
        >Tracy <span class="title">&#8226; Peer</span></span
      >
      <p class="receive pre message" style="--delay: 3s">
        Okay, here it goes!
      </p>
      <p class="receive message" style="--delay: 4s">
        <span>
          Hi, Aleyna, I have some feedback on your presentation from last
          week. Can I share it with you?</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row chat-row-w-padding me message" style="--delay: 6s">
    <div>
      <span class="name"
        >Aleyna <span class="title">&#8226; Peer</span></span
      >
      <p class="send">Yes, I'd love to hear it!</p>
    </div>
    <img
      src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/653882f46b3dce952fcf89d6_aleyna1.png"
      alt="Feminine-presenting adult cartoon character wearing a bright pink headscarf."
      class="avatar aleyna"
    />
  </div>

  <div class="chat-row chat-row-w-padding manager message" style="--delay: 8s">
    <div>
      <img
        src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e0565a382945fccba8f_Tracy.png"
        alt="Feminine-presenting adult cartoon character wearing glasses and has short, gray hair with blue streaks."
        class="avatar tracy"
      />
    </div>
    <div>
      <span class="name"
        >Tracy <span class="title">&#8226; Peer</span></span
      >
      <p class="receive pre message" style="--delay: 8s">
        Great! I liked how there was very little text on each slide.
      </p>
      <p class="receive message impact" style="--delay: 10s">
        Since I have dyslexia, it made it easier for me to absorb the
        information.
      </p>
    </div>
  </div>
  <div class="chat-row chat-row-w-padding message closing" style="--delay: 14s">
    <div style="--delay: 14s">
      <p>
        How was Tracy's second attempt more helpful for Aleyna?
        <br />
        Tracy's impact statement explains why "very little text on each
        slide" is important. Now, Aleyna knows how to make her future
        presentations more inclusive for people with dyslexia.
      </p>
    </div>
  </div>
</div>
</div>
`;

impact_report.innerHTML = `
<div class="chat-box-w-button">
      <div
        id="main-prompt-report"
        class="chat-row card-container-w-padding prompt message"
        style="--delay: 0s"
      >
        <div class="prompt" style="--delay: 0s">
          <p>
            Here is an example of a feedback conversation
            <b>between a direct report and his manager.</b>
          </p>
          <div class="prompt-button-wrapper">
            <button
              id="report-button"
              type="button"
              class="button w-button prompt-button"
              onclick="play('report','report-1')"
            >
              Play Felipe and Tia's conversation
            </button>
          </div>
        </div>
      </div>

      <div id="report-1" style="display: none">
        <div class="chat-row chat-row-w-padding manager message" style="--delay: 0s">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e044539ef48415718df_Felipe.png"
              alt="Masculine-presenting adult cartoon character with short, blonde hair sitting in a wheelchair."
              class="avatar felipe"/>
          </div>
          <div>
            <span class="name">Felipe <span class="title">&#8226; Direct Report</span></span>
            <p class="receive">
              <span>
                Hi, Tia, I'd like to talk to you about our one-on-ones. Can I
                share my thoughts?
              </span>
            </p>
          </div>
        </div>

        <div class="chat-row chat-row-w-padding me message" style="--delay: 3s">
          <div>
            <span class="name">Tia <span class="title">&#8226; Manager</span></span>
            <p class="send">Absolutely!</p>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e043ca73a37602eb50e_Tia.png"
            alt="Feminine-presenting adult cartoon character with dark hair in pigtails."
            class="avatar tia"
          />
        </div>

        <div class="chat-row chat-row-w-padding manager message" style="--delay: 5s">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e044539ef48415718df_Felipe.png"
              alt="Masculine-presenting adult cartoon character with short, blonde hair sitting in a wheelchair."
              class="avatar felipe"/>
          </div>
          <div>
            <span class="name">Felipe <span class="title">&#8226; Direct Report</span></span>
            <p class="receive">
              <span>
                I noticed that you've been around 10 minutes late to our last 3 one-on-ones.
              </span>
            </p>
          </div>
        </div>

        <div
          id="try-report-2"
          class="chat-row chat-row-w-padding prompt message"
          style="--delay: 7s"
        >
          <div class="prompt">
            <p>
              How does Felipe's feedback land with you? If you were Tia, would you be motivated to be on time?<br /><br />
              If not, let's give Felipe another try.
            </p>
            <div class="prompt-button-wrapper">
              <button
                type="button"
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
        <div class="chat-row chat-row-w-padding spark message" style="--delay: 0s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name">LifeLabs</span>
            <p class="receive">
              Felipe, that feedback was like having a closed umbrella in the rain. It's handy, but I'm still getting wet. Try again.
            </p>
          </div>
        </div>

        <div class="chat-row chat-row-w-padding manager message" style="--delay: 3s">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e044539ef48415718df_Felipe.png"
              alt="Masculine-presenting adult cartoon character with short, blonde hair sitting in a wheelchair."
              class="avatar felipe"/>
          </div>
          <div>
            <span class="name">Felipe <span class="title">&#8226; Direct Report</span></span>
            <p class="receive pre message" style="--delay: 3s">
              Got it! Here we go...
            </p>
            <p class="receive message" style="--delay: 4s">
              <span>
                Hi, Tia, I'd like to talk to you about our one-on-ones. Can I
                share my thoughts?
              </span>
            </p>
          </div>
        </div>

        <div class="chat-row chat-row-w-padding me message" style="--delay: 6s">
          <div>
            <span class="name">Tia <span class="title">&#8226; Manager</span></span>
            <p class="send">Absolutely!</p>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e043ca73a37602eb50e_Tia.png"
            alt="Feminine-presenting adult cartoon character with dark hair in pigtails."
            class="avatar tia"
          />
        </div>

        <div class="chat-row chat-row-w-padding manager message" style="--delay: 8s">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/65355e044539ef48415718df_Felipe.png"
              alt="Masculine-presenting adult cartoon character with short, blonde hair sitting in a wheelchair."
              class="avatar felipe"/>
          </div>
          <div>
            <span class="name">Felipe <span class="title">&#8226; Direct Report</span></span>
            <p class="receive pre message" style="--delay: 8s">
              I noticed that you've been around 10 minutes late to our last 3 one-on-ones.
            </p>
            <p class="receive message impact" style="--delay: 10s">
              <b>I'm bringing it up because I'm worried you don't find our one-on-ones to be a good use of time.</b>
            </p>
          </div>
        </div>

        <div class="chat-row chat-row-w-padding message closing" style="--delay: 14s">
          <div style="--delay: 14s">
            <p>
              This impact statement is strong because Felipe is sharing his perception of what's going on and why. Now, Tia can problem-solve if there is an underlying issue. And if she's just busy that day, maybe they can find a new time slot for their one-on-ones.
            </p>
          </div>
        </div>
      </div>
    </div>
`;
