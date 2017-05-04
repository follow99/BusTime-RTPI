function stops(stopid, busnumber, due, timestamp) {
    this.stopid = stopid;
    this.busnumber = busnumber;
    this.due = due;
    this.timestamp = timestamp;

}

function busready() {

    var a = $("#busNum").val();
    if ("" == a.trim()) {
        //$("#timeTable").empty();
        document.getElementById("timeTable").innerHTML = "<p>Stop ID Required!!!</p>"
        $("#timeTable p").css({
            "color": "red",
            "font-size": "200%"
        })
    } else {
        a = a.split(",");

        $("#timeTable").empty();

        $("#timeTable").append("<table class='table table-bordered table-striped table-sm table-condensed' id='tab'><th>StopId</th><th>Route</th><th>Due</th><th>Last Update</th><tr>");
        for (var i = 0; i < a.length; i++) {
            var ll = a[i]
            console.log(ll)
            //setTimeout("abc(" + ll + ")", 10000)
            abc(ll);

        }
        $("#timeTable").append("</table>")
    }

}
//
function abc(ll) {

    $.get("https://xxxxxxxxxxxxxxxx" + ll + "xxxxxxxxx", function callback(data) {
        console.log(data);

        var time = data.timestamp.split(" ");
        for (x in data.results) {

            $("#tab").append("<tr><td>" + data.stopid + "</td><td>" + data.results[x].route + "</td><td>" + data.results[x].duetime + "</td><td>" + time[1] + "</td></tr>")

        }

    })

}

function getStopName(stopNumber) {
    $.get("https://xxxxxxxxxxxxxxxxxxxx" + stopNumber + "xxxxxxxxxx", function (Stopdata) {
        var stopName = Stopdata.results[0].shortname;
        setCookie(stopNumber, stopName);

    });
}

function getCookie() {
    var list = document.cookie.split(";");
    $("#favoritelist").append("<ul class='list-group' id='tab1'>")

    for (var i = 0; i < list.length; i++) {

        console.log(i + ":" + list[i])
        if (list[i].trim() === "") {

        } else {
            var st = list[i].lastIndexOf("=");
            var sp = list[i].slice(0, st);
            var name = list[i].slice(st + 1);
            $("#tab1").append("<div class='alert alert-warning alert-dismissable' abc='" + sp + "' onclick='getVal(this)' style='padding:8px'>" + sp + " " + name + "<button type='button' class='close' data-dismiss='alert' aria-hidden='true' abc='" + sp + "' onmouseover='mOver(this)' onmouseout='mOut(this)' onclick='removeCookie(this)'>&nbsp&nbsp</button></div>");

        }

    }
    $("#favoritelist").append("</ul>")

}

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    //this.cname=cname.replace(",","");
    document.cookie = cname + "=" + cvalue + "; " + expires
    //window.location.reload();
}

function getVal(t) {
    $("#busNum").val(t.getAttribute("abc"));

}

function removeCookie(t) {
    document.cookie = t.getAttribute("abc") + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function mOver(obj) {

    obj.innerHTML = "&times;";
}

function mOut(obj) {
    obj.innerHTML = "&nbsp&nbsp&nbsp&nbsp";
}

function maper() {
    var arr = new Array();
    var add = function (node) {

        arr.push(node)

    }

    function size() {

        return arr.size();
    }

    function get(keys) {
        var keys;
        this.keys = keys

        for (z in arr) {

            if (arr[z].keys == keys) {

                return arr[z].objer

            } else {
                return null
            }

        }
    }

}

function node(keys, objer) {
    var keys;
    var objer;
    this.keys = keys
    this.objer = objer

}