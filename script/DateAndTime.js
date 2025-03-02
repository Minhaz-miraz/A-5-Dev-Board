const dates = new Date().toLocaleDateString();
const time = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const calender = document.getElementById('date-day')
calender.innerHTML =`<p class="font-bold">${dates}, <br/>
${time}
</p>`;



