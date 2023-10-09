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

const bu_manager = document.getElementById("bu_manager");

bu_manager.innerHTML = `
<div style="margin-bottom: 2rem; border-radius: 0.5rem; border: 1px solid">
<div
  id="main-prompt-manager"
  class="chat-row prompt message"
  style="--delay: 0s"
>
  <div class="prompt" style="--delay: 0s">
    <p>
      You will be prompted to identify opportunities to deblur, practice
      equal phatics, and fill in the gaps in the following conversation:
    </p>
    <div class="prompt-button-wrapper">
      <button
        id="manager-button"
        type="button"
        class="button w-button prompt-button"
        onclick="play('manager', 'manager-1')"
      >
        Play Kent and Julie's conversation
      </button>
    </div>
  </div>
</div>

<div id="manager-1" style="display: none">
  <div class="chat-row manager message" style="--delay: 0s">
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6523832ee3313133286f410c_Kent.jpg"
          alt="Masculine-presenting adult with glasses."
          class="avatar"
        />
      </div>
    </div>
    <div>
      <span class="name">Kent</span>
      <p class="receive">
        <span
          >Hey, Julie! Did you read the newsletter? We have a new Chief
          Financial Officer (CFO)! Her name is Naima.</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row me message" style="--delay: 2s">
    <div>
      <span class="name">Julie</span>
      <p class="send">
        Wow, that’s interesting. She doesn’t really look like a typical
        CFO. I’m not sure about her.
      </p>
    </div>
    <div>
      <div>
        <img
          src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6523832da50676b786920d01_Julie.jpg"
          alt="Feminine-presenting adult with glasses."
          class="avatar"
        />
      </div>
    </div>
  </div>
</div>
</div>
`;
