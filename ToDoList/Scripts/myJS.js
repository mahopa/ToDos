var MyApp = {};
MyApp.items = [];
//this is the function to Delete the done items
MyApp.clearDone = function () {
    "use strict";
    //this is to save the not complete items
    var holderArray = [];
    //loop over items looking for  NOT done items
    for (var x in MyApp.items) {
        //checks if item is NOT done
        if (!MyApp.items[x].isDone) {
            //pulls out the item if NOT done to save it
            holderArray.push(MyApp.items[x]);
        }
    }
    //move temporary array of NOT done items into items array
    MyApp.items = holderArray;
    //after array is modified redraw the div
    MyApp.writeItems();
};
MyApp.toggleDone = function (index) {
    "use strict";
    //This takes the existing boolean and reveses it
    //stores it in the original location
    MyApp.items[index].isDone = !MyApp.items[index].isDone;
    MyApp.writeItems();
};
MyApp.writeItems = function () {
    "use strict";
    var stringHolder = "";
    //loops over items adds them to string
    for (var i in MyApp.items) {
        if (MyApp.items[i].isDone) {
            //if finished strike through
            //First Button Version
            // stringHolder += "<span class='done btn btn-success' onclick='MyApp.toggleDone(" + i + ")'>";
            //
            //version with glyphicons
            stringHolder += "<span class='done glyphicon glyphicon-ok' onclick='MyApp.toggleDone(" + i + ")'>";
        }
        else {
            //else don't
            //First Button Version
            //stringHolder += "<span class='btn btn-danger' onclick='MyApp.toggleDone(" + i + ")'>";

            stringHolder += "<span class='' onclick='MyApp.toggleDone(" + i + ")'>";
           
        }
        stringHolder += MyApp.items[i]['taskName'];
        stringHolder += "</span>";
        stringHolder += "<br/>";
    }
    document.getElementById("list").innerHTML = stringHolder;
};
MyApp.addItem = function () {
    "use strict";
    var newItem = document.getElementById("item-input");
    //temp item to be put into array later
    var holder = {
        taskName: newItem.value,
        isDone: false
    };
    MyApp.items.push(holder);
    newItem.value = "";
    MyApp.writeItems();
};
