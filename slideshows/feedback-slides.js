const feedback_carousel = document.getElementById("feedback-carousel");
console.log("feedback_carousel", feedback_carousel);

feedback_carousel.innerHTML =
  '<div id="intro"> <div> <p style="padding: 20px; text-align: center"> Click on each colleague below to see how your impact statement might change based on your relationship with each person. </p> <div style="display: flex; justify-content: space-evenly; margin: 20px 0" > <button id="franklin-manager" onclick="selectCarousel(\'franklin\')" type="button" class="person-button" style="text-align: center" > <svg xmlns="http://www.w3.org/2000/svg" fill="#e2225f" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div class="person-head"></div> <p style="margin-top: 0px">Franklin (your manager)</p> </button> <button id="fletcher-report" onclick="selectCarousel(\'fletcher\')" type="button" class="person-button" style="text-align: center" > <svg xmlns="http://www.w3.org/2000/svg" fill="#5a9abd" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <p style="margin-top: 0px">Fletcher (your direct report)</p> </button> </div> <div style="display: flex; justify-content: space-evenly"> <button id="fiona-peer" type="button" onclick="selectCarousel(\'fiona\')" class="person-button" style="text-align: center" > <svg xmlns="http://www.w3.org/2000/svg" fill="#50adbb" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <p style="margin-top: 0px">Fiona (your peer)</p> </button> <button id="farah-peer" type="button" onclick="selectCarousel(\'farah\')" class="person-button" style="text-align: center" > <svg xmlns="http://www.w3.org/2000/svg" fill="#fade57" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <p style="margin-top: 0px">Farah (your peer)</p> </button> </div> </div> </div> <div id="carousel-container"> <div id="tabs-franklin" class="tabs"> <div class="tab-franklin tab"> <div> <div style="flex-direction: row; display: flex"> <div> <div class="person-container" style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #e2225f; border-radius: 100%; " ></div> </div> </div> <div style="flex: 1 1 0%"> <div style="padding-top: 30px"> <div class="bubble" style="width: 65%"> <div class="txt"> <p class="name" style="color: #e2225f"> Franklin (your manager) </p> <p class="message" style="font-size: 1em"> Hi, <span data-o-member="FirstName"></span>. I have some feedback on our meeting with leadership yesterday. Can I share it with you? </p> </div> <div class="bubble-arrow"></div> </div> </div> </div> </div> <div style=" flex-direction: row; display: flex; justify-content: flex-end; " > <div style="flex: 1 1 0%"> <div class="bubble alt" style="width: 30%; margin-left: 70%"> <div class="txt"> <p class="name" style="color: #16b653">You</p> <p class="message" style="font-size: 1em">Yes</p> </div> <div class="bubble-arrow alt"></div> </div> </div> <div style="flex-direction: row; display: flex"> <div class="person-container" style="position: relative"> <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" style="width: 140px; height: 140px" > <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg> <div style=" position: absolute; top: 15px; left: 50px; height: 40px; width: 40px; background-color: #16b653; border-radius: 100%; " ></div> </div> </div> </div> </div> </div> <div class="tab-franklin tab">Franklin 2</div> <div class="tab-franklin tab">Franklin 3</div> <div class="tab-franklin tab">Franklin 4</div> <div style="overflow: auto"> <div style="text-align: center"> <button type="button" aria-label="Previous" class="prevBtn" id="prevBtn-franklin" onclick="nextPrev(-1, \'franklin\')" > Previous </button> <button type="button" id="nextBtn-franklin" aria-label="Next" onclick="nextPrev(1, \'franklin\')" > Next </button> </div> </div> <div id="steps-franklin" style="text-align: center; margin-top: 40px"> <span class="step finish"></span> <span class="step"></span> <span class="step"></span> <span class="step"></span> </div> </div> <div id="tabs-fletcher" class="tabs"> <div class="tab-fletcher tab">Fletcher 1</div> <div class="tab-fletcher tab">Fletcher 2</div> <div class="tab-fletcher tab">Fletcher 3</div> <div class="tab-fletcher tab">Fletcher 4</div> <div style="overflow: auto"> <div style="text-align: center"> <button type="button" aria-label="Previous" class="prevBtn" id="prevBtn-fletcher" onclick="nextPrev(-1, \'fletcher\')" > Previous </button> <button type="button" id="nextBtn-fletcher" aria-label="Next" onclick="nextPrev(1, \'fletcher\')" > Next </button> </div> </div> <div id="steps-fletcher" style="text-align: center; margin-top: 40px"> <span class="step finish"></span> <span class="step"></span> <span class="step"></span> <span class="step"></span> </div> </div> <div id="tabs-fiona" class="tabs"> <div class="tab-fiona tab">Fiona 1</div> <div class="tab-fiona tab">Fiona 2</div> <div class="tab-fiona tab">Fiona 3</div> <div class="tab-fiona tab">Fiona 4</div> <div style="overflow: auto"> <div style="text-align: center"> <button type="button" aria-label="Previous" class="prevBtn" id="prevBtn-fiona" onclick="nextPrev(-1, \'fiona\')" > Previous </button> <button type="button" id="nextBtn-fiona" aria-label="Next" onclick="nextPrev(1, \'fiona\')" > Next </button> </div> </div> <div id="steps-fiona" style="text-align: center; margin-top: 40px"> <span class="step finish"></span> <span class="step"></span> <span class="step"></span> <span class="step"></span> </div> </div> <div id="tabs-farah" class="tabs"> <div class="tab-farah tab">Farah 1</div> <div class="tab-farah tab">Farah 2</div> <div class="tab-farah tab">Farah 3</div> <div class="tab-farah tab">Farah 4</div> <div style="overflow: auto"> <div style="text-align: center"> <button type="button" aria-label="Previous" class="prevBtn" id="prevBtn-farah" onclick="nextPrev(-1, \'farah\')" > Previous </button> <button type="button" id="nextBtn-farah" aria-label="Next" onclick="nextPrev(1, \'farah\')" > Next </button> </div> </div> <div id="steps-farah" style="text-align: center; margin-top: 40px"> <span class="step finish"></span> <span class="step"></span> <span class="step"></span> <span class="step"></span> </div> </div> </div>';

// const a = new myCarousel();

// a.init({
//   id: "a",
//   slidenav: true,
//   animate: false,
//   startAnimated: false,
// });

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
