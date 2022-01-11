$("#calGrade").click(function () {
    let assigGrade = $("#assigScore").val();
    let assigQuiz = $("#quizScore").val();
    let assigExam = $("#examScore").val();
    let assigIntex = $("#intexScore").val();
    let assigGroup = $("#groupScore").val();

    let finalScore = assigGrade * 0.55;
    finalScore += assigQuiz * 0.10;
    finalScore += assigExam * 0.20;
    finalScore += assigIntex * 0.10;
    finalScore += assigGroup * 0.05;

    document.getElementById("theForm").style.display = "none"

    $("#fScore").html(finalScore.toString().concat("%"));
    $("#qScore").html(assigQuiz.toString().concat("%"));
    $("#aScore").html(assigGrade.toString().concat("%"));
    $("#eScore").html(assigExam.toString().concat("%"));
    $("#iScore").html(assigIntex.toString().concat("%"));
    $("#gScore").html(assigGroup.toString().concat("%"));
    document.getElementById("displayR").style.display = "block"
});

