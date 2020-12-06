hideElement("label33");
//login
onEvent("image1", "click", function( ) {
  setScreen("Login");
});
onEvent("image3", "click", function( ) {
  open("https://www.instagram.com/quantum__boys__/");
});
onEvent("image4", "click", function( ) {
  open("https://quantumboys.business.site/");
});
onEvent("image5", "click", function( ) {
  setScreen("Click");
});
onEvent("button2", "click", function( ) {
  setScreen("Login");
});
//Dashboard events
onEvent("image6", "click", function( ) {
  setScreen("Attendence");
});
onEvent("image20", "click", function( ) {
  open("http://www.ymcaallahabad.com/Event_gallery.php");
});
onEvent("image21", "click", function( ) {
  open("http://www.ymcaallahabad.com/");
});
onEvent("image22", "click", function( ) {
  open("https://www.youtube.com/user/ymcaallahabad");
});
onEvent("image23", "click", function( ) {
  open("https://m.facebook.com/ymcaallahabad");
});
onEvent("image24", "click", function( ) {
  open("https://www.instagram.com/ymcaallahabad/");
});
onEvent("label13", "click", function( ) {
  setScreen("Click2");
});
onEvent("image16", "click", function( ) {
  setScreen("Attendence");
});
onEvent("button4", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("image17", "click", function( ) {
  setScreen("Classes");
});
onEvent("button6", "click", function( ) {
  open("https://web.mini.sagokomm.com/#/");
});
onEvent("button7", "click", function( ) {
  open("https://www.youtube.com/user/ymcaallahabad");
});
onEvent("button8", "click", function( ) {
  open("https://play.google.com/store/apps/details?id=com.swankinfytech.sagokommmini&hl=en");
});
onEvent("button9", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("image18", "click", function( ) {
  setScreen("Messages");
});
onEvent("button12", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("button11", "click", function( ) {
  setScreen("M1");
});
onEvent("button14", "click", function( ) {
  setScreen("Messages");
});
onEvent("image19", "click", function( ) {
  setScreen("Homework");
});
onEvent("button16", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("button17", "click", function( ) {
  setScreen("H1");
});
onEvent("button18", "click", function( ) {
  setScreen("H2");
});
onEvent("button22", "click", function( ) {
  setScreen("Homework");
});
onEvent("button23", "click", function( ) {
  setScreen("Homework");
});
//Pop events
onEvent("image27", "click", function( ) {
  setScreen("Pop");
});
onEvent("button21", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("button25", "click", function( ) {
  setScreen("Profile");
});
onEvent("button26", "click", function( ) {
  setScreen("Attendence");
});
onEvent("button27", "click", function( ) {
  setScreen("Messages");
});
onEvent("button28", "click", function( ) {
  open("https://student.ymcaallahabad.com/#/dashboard");
});
onEvent("button29", "click", function( ) {
  setScreen("Click2");
});
onEvent("button30", "click", function( ) {
  open("https://ymcaallahabad.com/#/news");
});
onEvent("image41", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("image47", "click", function( ) {
  setScreen("Profile");
});
onEvent("image50", "click", function( ) {
  setScreen("Attendence");
});
onEvent("image51", "click", function( ) {
  setScreen("Messages");
});
onEvent("image53", "click", function( ) {
  open("https://student.ymcaallahabad.com/#/dashboard");
});
onEvent("image55", "click", function( ) {
  open("https://ymcaallahabad.com/#/news");
});
onEvent("image56", "click", function( ) {
  setScreen("Click2");
});
onEvent("image57", "click", function( ) {
  setScreen("Login");
});
onEvent("image44", "click", function( ) {
  setScreen("Click2");
});
onEvent("image42", "click", function( ) {
  setScreen("Click2");
});
onEvent("image46", "click", function( ) {
  open("http://www.ymcaallahabad.in/News_pdf/1604986591.pdf");
});
onEvent("image45", "click", function( ) {
  setScreen("Click2");
});
onEvent("image43", "click", function( ) {
  setScreen("Profile");
});
//Profile Event
onEvent("button31", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("button34", "click", function( ) {
  setScreen("Click");
});
onEvent("button32", "click", function( ) {
  setScreen("Messages");
});
onEvent("image52", "click", function( ) {
  open("https://www.instagram.com/ymcaallahabad/");
});
onEvent("image54", "click", function( ) {
  open("https://m.facebook.com/ymcaallahabad");
});
onEvent("image48", "click", function( ) {
  open("http://www.ymcaallahabad.com/#");
});
onEvent("image15", "click", function( ) {
  setScreen("Profile");
});
//click2
onEvent("button35", "click", function( ) {
  setScreen("Dashboard");
});
onEvent("button19", "click", function( ) {
  setScreen("Login");
});
onEvent("Opening", "click", function( ) {
  playSound("assets/category_digital/startup.mp3");
});
onEvent("button1", "click", function( ) {
  playSound("assets/category_digital/startup.mp3");
});
//Login System//Creat Record
onEvent("button37", "click", function( ) {
  setScreen("SignUp");
});
onEvent("button36", "click", function( ) {
  createRecord(getText("User1"), {UserName:getText("User1") , Photo:getImageURL("Photo1") , Password:getText("Pass") , Class:getText("class") , Name:getText("name") }, function(record) {
    
  });
  setScreen("Login");
});
onEvent("button1", "click", function( ) {
readRecords(getText("sed"), {}, function(records) {
  for (var i =0; i < records.length; i++) {
    if ((records[i]).Password ==getText("fdr")) {
      setScreen("Dashboard");
    } else {
        showElement("label33");
        setTimeout(function() {
          hideElement("label33");
        }, 2000);
    }
    setImageURL("image15", records[i].Photo);
    setImageURL("image49", records[i].Photo);
    setImageURL("image43", records[i].Photo);
    
    setProperty("label2", "text", records[i].Name);
    setProperty("label30", "text", records[i].Name);
    setProperty("label32", "text", records[i].Name);
    setProperty("label3", "text", records[i].Class);
    setProperty("label34", "text", records[i].Class);
  }
});
});
