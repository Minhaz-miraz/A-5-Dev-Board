// let totalDone = document.getElementById('total-task-done');
// let totalDoneCvt = parseInt(document.getElementById('total-task-done').innerText);

// let taskAssigned = document.getElementById('task-assigned');
// let taskAssignedCvt = parseInt(document.getElementById('task-assigned').innerText);

// document.getElementById('btn1')
//     .addEventListener('click', function () {
//         alert('Board Updated Successfully');
//         const taskAdded = totalDoneCvt + 1;
//         totalDoneCvt = taskAdded;
//         totalDone.innerText = taskAdded.toString();

//         const taskReduced = taskAssignedCvt - 1;
//         taskAssignedCvt = taskReduced;
//         taskAssigned.innerText = taskAssignedCvt;



//         // button disable
//         document.getElementById('btn1').disabled = true;
//         document.getElementById('btn1').style.backgroundColor = "gray";
//         document.getElementById('btn1').style.cursor = "default";
//     })

// document.getElementById('btn2')
//     .addEventListener('click', function () {
//         alert('Board Updated Successfully')
//         const taskAdded = totalDoneCvt + 1;
//         totalDoneCvt = taskAdded;
//         totalDone.innerText = taskAdded.toString();

//         const taskReduced = taskAssignedCvt - 1;
//         taskAssignedCvt = taskReduced;
//         taskAssigned.innerText = taskAssignedCvt;



//         // button disable
//         document.getElementById('btn2').disabled = true;
//         document.getElementById('btn2').style.backgroundColor = "gray";
//         document.getElementById('btn2').style.cursor = "default";

//     })
// document.getElementById('btn3')
//     .addEventListener('click', function () {
//         alert('Board Updated Successfully')

//         const taskAdded = totalDoneCvt + 1;
//         totalDoneCvt = taskAdded;
//         totalDone.innerText = taskAdded.toString();

//         const taskReduced = taskAssignedCvt - 1;
//         taskAssignedCvt = taskReduced;
//         taskAssigned.innerText = taskAssignedCvt;



//         // button disable
//         document.getElementById('btn3').disabled = true;
//         document.getElementById('btn3').style.backgroundColor = "gray";
//         document.getElementById('btn3').style.cursor = "default";


//     })


// button-update-stats

document.getElementById('btn1').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn1'));
    buttonDisable(document.getElementById('btn1'));
})
document.getElementById('btn2').addEventListener('click', function () {
    buttonEvent(document.getElementById('btn2'));
    buttonDisable(document.getElementById('btn2'));
})

document.getElementById('btn3').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn3'));
    buttonDisable(document.getElementById('btn3'));
})

document.getElementById('btn4').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn4'));
    buttonDisable(document.getElementById('btn4'));
})

document.getElementById('btn5').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn5'));
    buttonDisable(document.getElementById('btn5'));
})

document.getElementById('btn6').addEventListener('click', function () {
    // function-in-utilities
    buttonEvent(document.getElementById('btn6'));
    buttonDisable(document.getElementById('btn6'));
})







