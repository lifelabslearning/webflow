const feedback_carousel = document.getElementById("feedback-carousel");
console.log("feedback_carousel", feedback_carousel);

feedback_carousel.innerHTML =
  ' <div id="c" class="carousel"> <ul> <li class="slide" style=""> <div> <div style="flex-direction: row; display: flex"> <div> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #e2225f; border-radius: 100%; " ></div> </div> </div> <div style="flex: 1 1 0%"> <div style="padding-top: 30px"> <div class="bubble" style="width: 65%"> <div class="txt"> <p class="name" style="color: #e2225f"> Franklin (your manager) </p> <p class="message" style="font-size: 1em"> Hi, <span data-o-member="FirstName"></span>. I have some feedback on our meeting with leadership yesterday. Can I share it with you? </p> </div> <div class="bubble-arrow"></div> </div> </div> </div> </div> <div style="flex-direction: row; display: flex; justify-content: flex-end" > <div style="flex: 1 1 0%"> <div class="bubble alt" style="width: 30%; margin-left: 70%"> <div class="txt"> <p class="name" style="color: #16b653">You</p> <p class="message" style="font-size: 1em">Yes</p> </div> <div class="bubble-arrow alt"></div> </div> </div> <div style="flex-direction: row; display: flex"> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #16b653; border-radius: 100%; " ></div> </div> </div> </div> </div> </li> <li class="slide" style=""> <div> <div style="flex-direction: row; display: flex"> <div> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #e2225f; border-radius: 100%; " ></div> </div> </div> <div style="flex: 1 1 0%"> <div style="padding-top: 30px"> <div class="bubble" style="width: 65%"> <div class="txt"> <p class="name" style="color: #e2225f"> Franklin (your manager) </p> <p class="message" style="font-size: 1em"> Great! I noticed you passed every time I asked you to share about the project you’re working on. </p> </div> <div class="bubble-arrow"></div> </div> </div> </div> </div> <div style="flex-direction: row; display: flex; justify-content: flex-end" > <div style="flex-direction: row; display: flex"> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #16b653; border-radius: 100%; " ></div> </div> </div> </div> </div> </li> <li class="slide" style=""> <div> <div style="flex-direction: row; display: flex"> <div> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #e2225f; border-radius: 100%; " ></div> </div> </div> <div style="flex: 1 1 0%"> <div style="padding-top: 30px"> <div class="bubble" style="width: 65%"> <div class="txt"> <p class="name" style="color: #e2225f"> Franklin (your manager) </p> <p class="message" style="font-size: 1em"> Hi, <span data-o-member="FirstName"></span>. I have some feedback on our meeting with leadership yesterday. Can I share it with you? </p> </div> <div class="bubble-arrow"></div> </div> </div> </div> </div> <div style="flex-direction: row; display: flex; justify-content: flex-end" > <div style="flex: 1 1 0%"> <div class="bubble alt" style="width: 30%; margin-left: 70%"> <div class="txt"> <p class="name" style="color: #16b653">You</p> <p class="message" style="font-size: 1em">Yes</p> </div> <div class="bubble-arrow alt"></div> </div> </div> <div style="flex-direction: row; display: flex"> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #16b653; border-radius: 100%; " ></div> </div> </div> </div> </div> </li> <li class="slide" style=""> <div> <div style="flex-direction: row; display: flex"> <div> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #e2225f; border-radius: 100%; " ></div> </div> </div> <div style="flex: 1 1 0%"> <div style="padding-top: 30px"> <div class="bubble" style="width: 65%"> <div class="txt"> <p class="name" style="color: #e2225f"> Franklin (your manager) </p> <p class="message" style="font-size: 1em"> Great! I noticed you passed every time I asked you to share about the project you’re working on. </p> </div> <div class="bubble-arrow"></div> </div> </div> </div> </div> <div style="flex-direction: row; display: flex; justify-content: flex-end" > <div style="flex-direction: row; display: flex"> <div style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #16b653; border-radius: 100%; " ></div> </div> </div> </div> </div> </li> </ul> </div> ';

/* <div id="c" class="carousel">
  <ul>
    <li class="slide" style="">
      <div>
        <div style="flex-direction: row; display: flex">
          <div>
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #e2225f;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
          <div style="flex: 1 1 0%">
            <div style="padding-top: 30px">
              <div class="bubble" style="width: 65%">
                <div class="txt">
                  <p class="name" style="color: #e2225f">
                    Franklin (your manager)
                  </p>
                  <p class="message" style="font-size: 1em">
                    Hi, <span data-o-member="FirstName"></span>. I have some
                    feedback on our meeting with leadership yesterday. Can I
                    share it with you?
                  </p>
                </div>
                <div class="bubble-arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="flex-direction: row; display: flex; justify-content: flex-end"
        >
          <div style="flex: 1 1 0%">
            <div class="bubble alt" style="width: 30%; margin-left: 70%">
              <div class="txt">
                <p class="name" style="color: #16b653">You</p>
                <p class="message" style="font-size: 1em">Yes</p>
              </div>
              <div class="bubble-arrow alt"></div>
            </div>
          </div>
          <div style="flex-direction: row; display: flex">
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #16b653;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="slide" style="">
      <div>
        <div style="flex-direction: row; display: flex">
          <div>
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #e2225f;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
          <div style="flex: 1 1 0%">
            <div style="padding-top: 30px">
              <div class="bubble" style="width: 65%">
                <div class="txt">
                  <p class="name" style="color: #e2225f">
                    Franklin (your manager)
                  </p>
                  <p class="message" style="font-size: 1em">
                    Great! I noticed you passed every time I asked you to share
                    about the project you’re working on.
                  </p>
                </div>
                <div class="bubble-arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="flex-direction: row; display: flex; justify-content: flex-end"
        >
          <div style="flex-direction: row; display: flex">
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #16b653;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="slide" style="">
      <div>
        <div style="flex-direction: row; display: flex">
          <div>
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #e2225f;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
          <div style="flex: 1 1 0%">
            <div style="padding-top: 30px">
              <div class="bubble" style="width: 65%">
                <div class="txt">
                  <p class="name" style="color: #e2225f">
                    Franklin (your manager)
                  </p>
                  <p class="message" style="font-size: 1em">
                    Hi, <span data-o-member="FirstName"></span>. I have some
                    feedback on our meeting with leadership yesterday. Can I
                    share it with you?
                  </p>
                </div>
                <div class="bubble-arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="flex-direction: row; display: flex; justify-content: flex-end"
        >
          <div style="flex: 1 1 0%">
            <div class="bubble alt" style="width: 30%; margin-left: 70%">
              <div class="txt">
                <p class="name" style="color: #16b653">You</p>
                <p class="message" style="font-size: 1em">Yes</p>
              </div>
              <div class="bubble-arrow alt"></div>
            </div>
          </div>
          <div style="flex-direction: row; display: flex">
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #16b653;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="slide" style="">
      <div>
        <div style="flex-direction: row; display: flex">
          <div>
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #e2225f;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
          <div style="flex: 1 1 0%">
            <div style="padding-top: 30px">
              <div class="bubble" style="width: 65%">
                <div class="txt">
                  <p class="name" style="color: #e2225f">
                    Franklin (your manager)
                  </p>
                  <p class="message" style="font-size: 1em">
                    Great! I noticed you passed every time I asked you to share
                    about the project you’re working on.
                  </p>
                </div>
                <div class="bubble-arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="flex-direction: row; display: flex; justify-content: flex-end"
        >
          <div style="flex-direction: row; display: flex">
            <div style="position: relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                stroke-width="0.8"
                stroke="currentColor"
                style="width: 140px; height: 140px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div
                style="
                  position: absolute;
                  top: 15px;
                  left: 50px;
                  height: 40px;
                  width: 40px;
                  background-color: #16b653;
                  border-radius: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div> */