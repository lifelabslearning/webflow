const in_groups_a = document.getElementById("in_groups_a");

in_groups_a.innerHTML = `
<div class="grid-two-cards-w-picture">
<img
  src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6528e623fec11464e7e9a363_in-group.jpg"
  class="left-image"
  alt="Four adults seated at a table in celebration in an office setting."
/>
<label class="card-w-picture">
  <input name="options-a" class="radio" type="radio" />
  <span class="option two-cards-option">
    <span class="answer">In-Group</span>
    <span class="feedback">
      Perceived positively and have a sense of belonging, significance, and respect.
    </span>
  </span>
</label>
<img
  src="https://uploads-ssl.webflow.com/649e0760c15db7cfb8794a93/6528e623cabc4a6c077afc7d_out-group.jpg"
  class="left-image"
  alt="One masculine-presenting adult seated alone, next to a table with four adults."
/>
<label class="card-w-picture">
  <input name="options-b" class="radio" type="radio" />
  <span class="option two-cards-option">
    <span class="answer">Out Group</span>
    <span class="feedback">
      Perceived negatively based on elements of their identities and frequently reminded of their differences.
    </span>
  </span>
</label>
</div>
`;
