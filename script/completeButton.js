
// button-update-stats

document.getElementById('btn1').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn1'));
    buttonDisable(document.getElementById('btn1'));
    const title1 = `you have completed the task Fix Mobile Button Issue at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');
    taskAct.innerHTML = `<p class="text-3xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
})
document.getElementById('btn2').addEventListener('click', function () {
    buttonEvent(document.getElementById('btn2'));
    buttonDisable(document.getElementById('btn2'));
    const title1 = `you have completed the task Add Dark Mode at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');
    taskAct.innerHTML = `<p class="text-2xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
})

document.getElementById('btn3').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn3'));
    buttonDisable(document.getElementById('btn3'));
    const title1 = `you have completed the task Optimize Home page at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');
    taskAct.innerHTML = `<p class="text-2xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
})

document.getElementById('btn4').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn4'));
    buttonDisable(document.getElementById('btn4'));
    const title1 = `you have completed the task Add new emoji 🤲 at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');
    taskAct.innerHTML = `<p class="text-2xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
    
})

document.getElementById('btn5').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn5'));
    buttonDisable(document.getElementById('btn5'));
    const title1 = `you have completed the task Integrate OpenAI API at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');e
    taskAct.innerHTML = `<p class="text-2xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
})

document.getElementById('btn6').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn6'));
    buttonDisable(document.getElementById('btn6'));
    const title1 = `you have completed the task Improve Job searching at ${new Date().toLocaleTimeString()}`;
    const taskAct = document.createElement('p');
    taskAct.innerHTML = `<p class="text-2xl font-semibold bg-white my-10 w-80"></p>`;
    taskAct.innerText = title1;
    document.getElementById('activity').appendChild(taskAct);
})







