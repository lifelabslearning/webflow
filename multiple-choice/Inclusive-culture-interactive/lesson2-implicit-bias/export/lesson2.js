const implicit_bias_a = document.getElementById("implicit_bias_a");

implicit_bias_a.innerHTML = `
<div class="grid-two-cards-w-picture">
<img
  src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6528e623e4171f39a0029231_age-bias.jpg"
  class="left-image"
  alt="Feminine-presenting adult seated next to a masculine-presenting adult looking at a laptop on a desk.
  "
/>
<label class="card-w-picture">
  <input name="options-a" class="radio" type="radio" />
  <span class="option two-cards-option">
    <span class="answer">Age Bias</span>
    <span class="feedback">
      A hiring panel can exhibit age bias by assuming younger candidates lack experience, or older candidates may not adapt to new technology.
    </span>
  </span>
</label>
<img
  src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6528e6231c309ba460860efc_halo-effect.jpg"
  class="left-image"
  alt="Three adult professionals seated at a table in front of a gesturing masculine-presenting individual."
/>
<label class="card-w-picture">
  <input name="options-b" class="radio" type="radio" />
  <span class="option two-cards-option">
    <span class="answer">Halo Effect </span>
    <span class="feedback">
      A manager can overestimate a direct report's abilities and assign projects they are not skilled to take on, setting them up to underperform.
    </span>
  </span>
</label>
<img
  src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6528e6239c34008379c5b5da_contrast-effect.jpg"
  class="left-image"
  alt="Seated feminine-presenting adult reviewing papers in both hands in a home office setting."
/>
<label class="card-w-picture">
  <input name="options-c" class="radio" type="radio" />
  <span class="option two-cards-option">
    <span class="answer">Contrast Effect</span>
    <span class="feedback">
      Comparing an employee's performance to another employee instead of the company standards can negatively impact promotions and pay raises.
    </span>
  </span>
</label>
</div>
`;
