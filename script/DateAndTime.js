const p = document.createElement("p");

p.innerHTML = `<p id='day'>
                ${new Date().toLocaleDateString("en-US", { weekday: "long" })},<br />
                <span id="date" class="font-bold"> ${new Date().toLocaleDateString()} </span>
              </p>`


document.getElementById("date_time").appendChild(p);