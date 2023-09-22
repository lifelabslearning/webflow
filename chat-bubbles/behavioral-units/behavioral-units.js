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
            Let's check in again with Sheila and Kris. Remember, Kris?
            Celebrating 1 year in a new role? Here's the rest of Sheila and
            Kris' conversation.
            <br /><br />Look for q-stepping, playbacks, and split-tracks.
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

        <div class="chat-row me message" style="--delay: 23s">
          <div>
            <span class="name"
              >Kris <span class="title">&#8226; Employee</span></span
            >

            <p class="send message">
              Thanks for your question, Sheila. I guess I hadn't taken time to
              think about my successes.
              <br /><br />
              A challenge was that it took me longer than I anticipated to
              settle in because I was transitioning from a different industry.
              <br /><br />
              A success was completing 3 major projects in the last 3 months.
              That was pretty exciting and gave me more confidence in my role.
            </p>
          </div>
          <div>
            <div class="avatar"></div>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 30s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              So, what I'm hearing is that transitioning from another industry
              was challenging, and completing those 3 projects must have helped
              to boost your confidence. Right?
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 34s">
          <div>
            <span class="name"
              >Kris <span class="title">&#8226; Employee</span></span
            >

            <p class="send message">
              Yeah, that's right. I was excited about a career change and knew I
              could apply my previous skills to this new role. I expected I
              would just jump right in. It took me a long time to learn the new
              systems, acronyms, and even the employee directory!
              <br /><br />
              I finally feel like I know what to do now and I want to carefully
              plan for my next year.
            </p>
          </div>
          <div>
            <div class="avatar"></div>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 44s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              I'm excited to talk about next year's plans, but if it's okay, I'd
              like to spend a little more time with what you accomplished. I'm
              hearing that it was both a big career change and that it required
              learning new systems. Right?
            </p>
          </div>
        </div>

        <div class="chat-row me message" style="--delay: 51s">
          <div>
            <span class="name"
              >Kris <span class="title">&#8226; Employee</span></span
            >

            <p class="send message">You've got it.</p>
          </div>
          <div>
            <div class="avatar"></div>
          </div>
        </div>

        <div class="chat-row manager message" style="--delay: 54s">
          <div>
            <div class="avatar"></div>
          </div>
          <div>
            <span class="name"
              >Sheila <span class="title">&#8226; Manager</span></span
            >
            <p class="receive">
              Where would you like to do some more reflection? Around the career
              transition or the new systems?
            </p>
          </div>
        </div>

        <div class="chat-row message closing" style="--delay: 60s">
          <p>
            Did you notice the q-steps, playbacks, and split-tracks in the
            conversation?
          </p>
        </div>
      </div>
    </div>
`;
