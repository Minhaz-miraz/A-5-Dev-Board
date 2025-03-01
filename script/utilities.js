function buttonEvent(button) {
    let totalDone = document.getElementById('total-task-done');
    let totalDoneCvt = parseInt(document.getElementById('total-task-done').innerText);

    let taskAssigned = document.getElementById('task-assigned');
    let taskAssignedCvt = parseInt(document.getElementById('task-assigned').innerText);
    alert('Board Updated Successfully');
    const taskAdded = totalDoneCvt + 1;
    totalDoneCvt = taskAdded;
    totalDone.innerText = taskAdded.toString();

    const taskReduced = taskAssignedCvt - 1;
    taskAssignedCvt = taskReduced;
    taskAssigned.innerText = taskAssignedCvt;
if(taskAssignedCvt === 0){
    alert('congrats!!you have completed all recent task!');
}



    return button;
}



function buttonDisable(disable) {
    if (disable == document.getElementById('btn1')) {

        document.getElementById('btn1').disabled = true;
        document.getElementById('btn1').style.backgroundColor = "gray";
        document.getElementById('btn1').style.cursor = "default";
        return disable;
    }
    if (disable == document.getElementById('btn2')) {

        document.getElementById('btn2').disabled = true;
        document.getElementById('btn2').style.backgroundColor = "gray";
        document.getElementById('btn2').style.cursor = "default";
        return disable;
    }
    if (disable == document.getElementById('btn3')) {


        document.getElementById('btn3').disabled = true;
        document.getElementById('btn3').style.backgroundColor = "gray";
        document.getElementById('btn3').style.cursor = "default";
        return disable;
    }
    if (disable == document.getElementById('btn4')) {

        document.getElementById('btn4').disabled = true;
        document.getElementById('btn4').style.backgroundColor = "gray";
        document.getElementById('btn4').style.cursor = "default";
        return disable;
    }
    if (disable == document.getElementById('btn5')) {

        document.getElementById('btn5').disabled = true;
        document.getElementById('btn5').style.backgroundColor = "gray";
        document.getElementById('btn5').style.cursor = "default";
        return disable;
    }
    if (disable == document.getElementById('btn6')) {

        document.getElementById('btn6').disabled = true;
        document.getElementById('btn6').style.backgroundColor = "gray";
        document.getElementById('btn6').style.cursor = "default";
        return disable;
    }
}
