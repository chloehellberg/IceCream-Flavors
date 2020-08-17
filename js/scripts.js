$(document).ready(function() {
const icecream = ["chocolate", "vanilla", "rocky road", "marionberry"];
  icecream.forEach(function(flavor) {
    $("#icecreamlist").append("<li>" + flavor + "</li>");
  }); 
});



//     let list = $("flavor#").val();
//     $("." + flavor).text();
//   });
//   console.log(list);
  
  
// //   $("#arrays").show();

// // $(document).ready(function() {
// //   $("#formOne").submit(function(event) {
// //     let list1 = ["person1","person2", "animal", "exclamation" ,"verb" ,"noun"];
// //     list1.forEach(function(input) {
// //       let story =  $("input#" + input).val();
// //       $("." + input).text(story);
// //     });
// //     $("#arrays").show();
// //     event.preventDefault();
// //   });
// // });

// const languages = ['HTML', 'CSS', 'JavaScript'];
// > languages.forEach(function(language) {
//     alert('I love ' + language + '!');
//   });

// .append

// groceries.forEach(function(grocery) {
//   $("#groceryList").append("<li>" + grocery + "</li>");
// grocery between the li s is "not defined" ...maybe we need to define it again?
// Ah we got it I think!