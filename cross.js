var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

var rcolor = "color: rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ");";

$("body").css(rcolor);
// $( "#cr" ).one( "click", function() {
//   header.append('<style>.circle:before{' + rcolor + '}</style>');
// });
