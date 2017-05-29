function load_data() {
  
  entries = {}



  entries["name"] =  document.getElementById("name").value;
  entries["message"] = document.getElementById("message").value;

  window.alert(entries["name"]);
  window.alert(entries["message"]);
  
  

 $.ajax({
    type: "POST",
    url: "/",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(entries),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
        alert(errMsg);
    }
});

}
