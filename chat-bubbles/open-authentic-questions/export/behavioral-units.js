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
      Let's see how Yuki guides Theo to develop his own solution with
      authentic and open questions to resolve a conflict between team
      members.
    </p>
    <div class="prompt-button-wrapper">
      <button
        id="manager-button"
        type="button"
        class="button w-button prompt-button"
        onclick="play('manager', 'manager-1')"
      >
        Play Yuki and Theo's conversation.
      </button>
    </div>
  </div>
</div>

<div id="manager-1" style="display: none">
  <div class="chat-row manager open-authentic-theo message" style="--delay: 0s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name"
        >Theo <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        <span
          >Yuki, I was wondering if I could talk to you about a
          conflict.</span
        >
      </p>
    </div>
  </div>

  <div class="chat-row me open-authentic-yuki message" style="--delay: 2s">
    <div>
      <span class="name"
        >Yuki <span class="title">&#8226; Senior Leader</span></span
      >
      <p class="send">
        Sure! I have some time right now. What’s going on?
      </p>
    </div>
    <div>
      <div class="avatar"></div>
    </div>
  </div>

  <div class="chat-row manager open-authentic-theo message" style="--delay: 4s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name"
        >Theo <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        I have these two team members. They both do great work, but they
        just can't seem to get along. In fact, it's starting to impact the
        rest of the team.
        <br />
        <br />
        I thought having them work on the same project would help them
        create a connection and find things they have in common, but it’s
        getting worse.
      </p>
    </div>
  </div>

  <div class="chat-row me open-authentic-yuki message" style="--delay: 8s">
    <div>
      <span class="name"
        >Yuki <span class="title">&#8226; Senior Leader</span></span
      >

      <p class="send message" style="--delay: 8s">
        Interpersonal conflict can be tricky. You're right- it can impact the rest of the team. I've dealt with a couple of these situations myself. So, what are you thinking of doing?
      </p>
    </div>
    <div>
      <div class="avatar"></div>
    </div>
  </div>

  <div class="chat-row manager open-authentic-theo message" style="--delay: 12s">
    <div>
      <div class="avatar"></div>
    </div>
    <div>
      <span class="name"
        >Theo <span class="title">&#8226; Manager</span></span
      >
      <p class="receive">
        That's just it. I'm feeling stuck because I've tried everything. What do you suggest I do? How have you handled it?
      </p>
    </div>
  </div>

  <div class="chat-row me open-authentic-yuki message" style="--delay: 16s">
    <div>
      <span class="name"
        >Yuki <span class="title">&#8226; employee</span></span
      >

      <p class="send message">
        While I do have experience in handling interpersonal conflict, let’s think through how you could help your team members. Let's imagine that these folks were working effectively together. What might that look like?
      </p>
    </div>
    <div>
      <div class="avatar"></div>
    </div>
  </div>

  <div class="chat-row message closing" style="--delay: 23s">
    <p>
      Yuki has likely dealt with resolving interpersonal conflict with team members and could simply tell Theo what to do. This certainly would be easier for Yuki, but it’s a great opportunity to ask questions to learn more about Theo’s insights on how to help the team members through their conflict instead of imposing a solution.
    </p>
  </div>
</div>
</div>
`;
