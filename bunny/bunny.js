const card_desc = {
  club: "<p>A club is blurry critique.",
  heart: "<p>A heart is blurry praise.",
  spade: "<p>A spade is specific critique.",
  diamond: "<p>A diamond is specific praise.",
};
const quiz = [
  {
    answer: "club",
    correct_message: `<p>Correct! "That bunny is a little messy" is a club because it's likely a critique (we think?), and it's blurry. We don't know what makes the bunny messy or even if messy is a good or bad thing. We also know from working with 400,000 managers that when feedback is this vague, most people assume it's negative.
      <br/><br/>What would make this feedback more useful? Deblurring, or converting from blurry to specific feedback.
      <br/><br/>To convert it to a spade: "The lines connecting the ear, eyes, and nose makes the face look messy."</p>`,
    incorrect_message: `The feedback above is blurry critique. Which other playing card represents this kind of feedback?</p>`,
  },
  {
    answer: "diamond",
    correct_message: `<p>Correct! "The long ears make it very clear that this is a bunny" is a diamond. You know exactly what makes this bunny look like a bunny. If your job is drawing bunnies for a living, you'll know exactly what you should repeat.</p>`,
    incorrect_message: `The feedback above is specific praise. Which other playing card represents this kind of feedback?</p>`,
  },
  {
    answer: "spade",
    correct_message: `<p>Correct! "Because I can't see a tail, I'm not sure if this is a bunny or a long-eared dog" is a spade. Though it still might be tough to hear a critique (we're all human), this specific critique gives you all the information you need to improve your drawing for next time.</p>`,
    incorrect_message: `The feedback above is specific critique. Which other playing card represents this type?</p>`,
  },
  {
    answer: "heart",
    correct_message: `<p>Correct! "That is the cutest bunny I have ever seen. I can't think of anything more adorable" is a heart. Don't let the length fool you, there is no information that would help you understand why this person loves your bunny so much. 
      <br/><br/>To convert it to a diamond: something as simple as "The folded ear is extra adorable" would allow the same amount of enthusiasm while also boosting the learning.</p>`,
    incorrect_message: `The feedback above is blurry praise. Which other playing card represents this type?</p>`,
  },
  {
    answer: "club",
    correct_message: `<p>Correct! "What is that?" is a club. Why? What is that?" is a club. Why? Because if someone thinks they've successfully completed a task (i.e., drawn a bunny), but they're so far off the other person can't even tell what they've done most folks interpret that as a critique.
      <br/><br/>So what if I truly don't know what they were trying to do? Should I not give feedback? No! This is where a context statement can make all the difference: "I'd love to give you some feedback on your drawing, could you tell me what you were going for?" Now the stage is set for those brain-friendly spades and diamonds.</p>`,
    incorrect_message: `The feedback above is blurry critique. Which other playing card represents this type?</p>`,
  },
];

const displayRadioValue = (id) => {
  const ele = document.getElementsByName(id);
  for (i = 0; i < ele.length; i++) {
    const label = document.getElementById(ele[i].id).nextElementSibling;
    label.classList.remove("correct");
    label.classList.remove("incorrect");
    if (ele[i].checked) {
      if (quiz[id].answer == ele[i].value) {
        label.classList.add("correct");
        document.getElementById("result-" + id).innerHTML =
          quiz[id].correct_message;
      } else {
        label.classList.add("incorrect");
        document.getElementById("result-" + id).innerHTML =
          card_desc[ele[i].value] + " " + quiz[id].incorrect_message;
      }
    }
  }
};

const bunny_0 = document.getElementById("bunny_0");
const bunny_1 = document.getElementById("bunny_1");
const bunny_2 = document.getElementById("bunny_2");
const bunny_3 = document.getElementById("bunny_3");
const bunny_4 = document.getElementById("bunny_4");

bunny_0.innerHTML = `
<div class="bunny-container">
  <div class="bunny-feedback">
    <div style="display: flex; align-items: center; justify-content: center">
      <p class="feedback" style="display: flex">
        "The long ears make it very clear that this is a bunny."
      </p>
    </div>
    <img
      style="margin-top: -150px; margin-bottom: -150px; max-height: 500px"
      src="https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/640ba23fbeb22e916bd5d6bc_bunny_1.svg"
      alt="Detailed drawing of a bunny rabbit"
    />
  </div>

  <fieldset id="1" class="radio-group">
    <p class="quiz-question">What type of feedback is this?</p>
    <div class="card-row">
      <input
        onclick="displayRadioValue('1')"
        type="radio"
        id="radioClub-1"
        data-o-person-activity="Clicked Playing Cards:  radioClub-1"
        name="1"
        value="club"
      />
      <label for="radioClub-1"><span>&#9827;</span>Club</label>
      <input
        onclick="displayRadioValue('1')"
        type="radio"
        id="radioHeart-1"
        data-o-person-activity="Clicked Playing Cards:  radioHeart-1"
        name="1"
        value="heart"
      />
      <label for="radioHeart-1"><span>&#9829;</span>Heart</label>
      <input
        onclick="displayRadioValue('1')"
        type="radio"
        id="radioSpade-1"
        data-o-person-activity="Clicked Playing Cards:  radioSpade-1"
        name="1"
        value="spade"
      />
      <label for="radioSpade-1"><span>&#9824;</span>Spade</label>
      <input
        onclick="displayRadioValue('1')"
        type="radio"
        id="radioDiamond-1"
        data-o-person-activity="Clicked Playing Cards:  radioDiamond-1"
        name="1"
        value="diamond"
      />
      <label for="radioDiamond-1"><span>&#9830;</span>Diamond</label>
    </div>
  </fieldset>
  <div class="result" id="result-1"></div>
</div>
  `;

bunny_1.innerHTML = `
<div class="bunny-container">
  <div class="bunny-feedback">
    <div style="display: flex; align-items: center; justify-content: center">
      <p class="feedback" style="display: flex">"That bunny is messy."</p>
    </div>
    <img
      style="max-height: 220px"
      src="https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/640ba23f56170003bac142f1_bunny_3.svg"
      alt="Messy drawing of a bunny rabbit"
    />
  </div>

  <fieldset id="0" class="radio-group">
    <p class="quiz-question">What type of feedback is this?</p>
    <div class="card-row">
      <input
        onclick="displayRadioValue('0')"
        type="radio"
        id="radioClub-0"
        data-o-person-activity="Clicked Playing Cards:  radioClub-0"
        name="0"
        value="club"
      />
      <label for="radioClub-0"><span>&#9827;</span>Club</label>
      <input
        onclick="displayRadioValue('0')"
        type="radio"
        id="radioHeart-0"
        data-o-person-activity="Clicked Playing Cards:  radioHeart-0"
        name="0"
        value="heart"
      />
      <label for="radioHeart-0"><span>&#9829;</span>Heart</label>
      <input
        onclick="displayRadioValue('0')"
        type="radio"
        id="radioSpade-0"
        data-o-person-activity="Clicked Playing Cards:  radioSpade-0"
        name="0"
        value="spade"
      />
      <label for="radioSpade-0"><span>&#9824;</span>Spade</label>

      <input
        onclick="displayRadioValue('0')"
        type="radio"
        id="radioDiamond-0"
        data-o-person-activity="Clicked Playing Cards:  radioDiamond-0"
        name="0"
        value="diamond"
      />
      <label for="radioDiamond-0"><span>&#9830;</span>Diamond</label>
    </div>
  </fieldset>
  <div class="result" id="result-0"></div>
</div>
  `;

bunny_2.innerHTML = `
<div class="bunny-container">
  <div class="bunny-feedback">
    <div style="display: flex; align-items: center; justify-content: center">
      <p class="feedback" style="display: flex">
        "Because I can't see a tail, I'm not sure if this is a bunny or a
        long-eared dog."
      </p>
    </div>
    <img
      style="max-width: 250px"
      src="https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/640ba23f84373f230c616f0d_bunny_2.svg"
      alt="Detailed drawing of a bunny rabbit"
    />
  </div>

  <fieldset id="2" class="radio-group">
    <p class="quiz-question">What type of feedback is this?</p>
    <div class="card-row">
      <input
        onclick="displayRadioValue('2')"
        type="radio"
        id="radioClub-2"
        data-o-person-activity="Clicked Playing Cards:  radioClub-2"
        name="2"
        value="club"
      />
      <label for="radioClub-2"><span>&#9827;</span>Club</label>
      <input
        onclick="displayRadioValue('2')"
        type="radio"
        id="radioHeart-2"
        data-o-person-activity="Clicked Playing Cards:  radioHeart-2"
        name="2"
        value="heart"
      />
      <label for="radioHeart-2"><span>&#9829;</span>Heart</label>
      <input
        onclick="displayRadioValue('2')"
        type="radio"
        id="radioSpade-2"
        data-o-person-activity="Clicked Playing Cards:  radioSpade-2"
        name="2"
        value="spade"
      />
      <label for="radioSpade-2"><span>&#9824;</span>Spade</label>
      <input
        onclick="displayRadioValue('2')"
        type="radio"
        id="radioDiamond-2"
        data-o-person-activity="Clicked Playing Cards:  radioDiamond-2"
        name="2"
        value="diamond"
      />
      <label for="radioDiamond-2"><span>&#9830;</span>Diamond</label>
    </div>
  </fieldset>
  <div class="result" id="result-2"></div>
</div>
  `;

bunny_3.innerHTML = `
<div class="bunny-container">
  <div class="bunny-feedback">
    <div style="display: flex; align-items: center; justify-content: center">
      <p class="feedback" style="display: flex">
        "That is the cutest bunny I have ever seen. I can't think of anything
        more adorable."
      </p>
    </div>
    <img
      style="max-width: 240px"
      src="https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/640ba23f2e2b166e170cd71c_bunny_4.svg"
      alt="Detailed drawing of a bunny rabbit"
    />
  </div>
  <fieldset id="3" class="radio-group">
    <p class="quiz-question">What type of feedback is this?</p>
    <div class="card-row">
      <input
        onclick="displayRadioValue('3')"
        type="radio"
        id="radioClub-3"
        data-o-person-activity="Clicked Playing Cards:  radioClub-3"
        name="3"
        value="club"
      />
      <label for="radioClub-3"><span>&#9827;</span>Club</label>
      <input
        onclick="displayRadioValue('3')"
        type="radio"
        id="radioHeart-3"
        data-o-person-activity="Clicked Playing Cards:  radioHeart-3"
        name="3"
        value="heart"
      />
      <label for="radioHeart-3"><span>&#9829;</span>Heart</label>
      <input
        onclick="displayRadioValue('3')"
        type="radio"
        id="radioSpade-3"
        data-o-person-activity="Clicked Playing Cards:  radioSpade-3"
        name="3"
        value="spade"
      />
      <label for="radioSpade-3"><span>&#9824;</span>Spade</label>
      <input
        onclick="displayRadioValue('3')"
        type="radio"
        id="radioDiamond-3"
        data-o-person-activity="Clicked Playing Cards:  radioDiamond-3"
        name="3"
        value="diamond"
      />
      <label for="radioDiamond-3"><span>&#9830;</span>Diamond</label>
    </div>
  </fieldset>
  <div class="result" id="result-3"></div>
</div>
  `;

bunny_4.innerHTML = `
<div class="bunny-container">
  <div class="bunny-feedback">
    <div style="display: flex; align-items: center; justify-content: center">
      <p class="feedback" style="display: flex">
        "What&nbsp;<i>is</i>&nbsp;that?"
      </p>
    </div>
    <img
      style="max-width: 240px"
      src="https://uploads-ssl.webflow.com/63d2ab48da2a2f57c52158d4/640ba23f65cb7273805a5b0d_bunny_5.svg"
      alt="Detailed drawing of a bunny rabbit"
    />
  </div>
  <fieldset id="4" class="radio-group">
    <p class="quiz-question">What type of feedback is this?</p>
    <div class="card-row">
      <input
        onclick="displayRadioValue('4')"
        type="radio"
        id="radioClub-4"
        data-o-person-activity="Clicked Playing Cards:  radioClub-4"
        name="4"
        value="club"
      />
      <label for="radioClub-4"><span>&#9827;</span>Club</label>
      <input
        onclick="displayRadioValue('4')"
        type="radio"
        id="radioHeart-4"
        data-o-person-activity="Clicked Playing Cards:  radioHeart-4"
        name="4"
        value="heart"
      />
      <label for="radioHeart-4"><span>&#9829;</span>Heart</label>
      <input
        onclick="displayRadioValue('4')"
        type="radio"
        id="radioSpade-4"
        data-o-person-activity="Clicked Playing Cards:  radioSpade-4"
        name="4"
        value="spade"
      />
      <label for="radioSpade-4"><span>&#9824;</span>Spade</label>
      <input
        onclick="displayRadioValue('4')"
        type="radio"
        id="radioDiamond-4"
        data-o-person-activity="Clicked Playing Cards:  radioDiamond-4"
        name="4"
        value="diamond"
      />
      <label for="radioDiamond-4"><span>&#9830;</span>Diamond</label>
    </div>
  </fieldset>
  <div class="result" id="result-4"></div>
</div>
  `;
