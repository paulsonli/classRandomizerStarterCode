$(document).ready(function(){
var ScriptEder = ["Paulson", "Brian", "Kevin", "Tareek", "Ricky"];
$("#studentButton").click(function(){
    var rngStudents = (Math.floor(Math.random()*ScriptEder.length));
    $("#studentDisplay").html(ScriptEder[rngStudents]);
    console.log(ScriptEder[rngStudents]);
});

var ScriptEducator = ["Dennis", "Nate", "Joe", "Chinnell"];
$("#teacherButton").click(function(){
    var rngTeachers = (Math.floor(Math.random()*ScriptEducator.length));
    $("#teacherDisplay").html(ScriptEducator[rngTeachers])
    console.log(ScriptEducator[rngTeachers]);
});

$("#addStudent").click(function(){
    var addStudentName = $("#StudentInput").val();
    ScriptEder.push(addStudentName);
    console.log(addStudentName);
    
});

$("#addTeacher").click(function(){
   var addTeacherName = $("#TeacherInput").val();
   ScriptEducator.push(addTeacherName);
   console.log(addTeacherName);
});
    
    
    
    
});