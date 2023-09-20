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

const qstep_manager = document.getElementById("qstep_manager");

qstep_manager.innerHTML = `
<div
      style="
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        border: 1px solid;
        padding: 2rem;
      "
    >
      <div
        id="main-prompt-manager"
        class="chat-row prompt message"
        style="--delay: 0s"
      >
        <div class="prompt" style="--delay: 0s">
          <p>
            Here is an example of q-stepping in action. Kris is celebrating one
            year in a new role and is meeting with their manager, Sheila.
            <br /><br />As you review the dialogue, notice Sheila's q-stepping.
          </p>
          <div class="prompt-button-wrapper">
            <button
              id="manager-button"
              type="button"
              class="button w-button prompt-button"
              onclick="play('manager', 'manager-1')"
            >
              Play Kris and Sheila's conversation
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
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              <span> Hi Kris!</span>
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 2s">
          <div>
            <span class="name"
              >Kris <span class="title">&#8226; Employee</span></span
            >
            <p class="send">Hi Sheila!</p>
          </div>
          <div>
            <div class="avatar"></div>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 4s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              Today's a big day. You're celebrating one year in your new role.
              Congratulations!
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 8s">
          <div>
            <span class="name"
              >Kris <span class="title">&#8226; Employee</span></span
            >

            <p class="send message" style="--delay: 8s">
              Thanks, Sheila. It feels pretty good. It took me a while to gain
              my confidence in the new role, but I think I've got it down now.
              <br /><br />
              I'm thinking about my goals for next year, but I'm not really sure
              what to do.
              <br /><br />
              What do people typically do after their first year here?
            </p>
          </div>
          <div>
            <div class="avatar"></div>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 18s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              I appreciate you letting me know what you are thinking, Kris. May
              I ask, what were some successes for you this year and what were
              some challenges?
            </p>
          </div>
        </div>

        <div class="chat-row spark message" style="--delay: 24s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name">Spark</span>
            <p class="receive">
              Kris asked Sheila: What do people typically do after their first
              year?
              <br /><br />
              As a manager, Sheila knows what people typically do. However, this
              is an opportunity for Sheila to step into question mode and get
              curious about Kris' perspective first.
            </p>
          </div>
        </div>
      </div>
    </div>
`;
