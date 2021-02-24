<<<<<<< HEAD
function redirect(link){
    window.open(link);
}
url = window.location.href
if(url.includes("Activities")){
    if(url.includes("activity_")){
        var id = "#activity_"+url[url.indexOf("activity_")+"activity_".length]
        $(id).css({
            border: "5px solid rgb(255,0,22)"
        });
        setTimeout(function(){
            $(id).css({
                border: "5px solid transparent"
            });
            setTimeout(function(){
                $(id).css({
                    border: "5px solid rgb(255,0,22)"
                });
                setTimeout(function(){
                    $(id).css({
                        border: "5px solid transparent"
                    });
                },500)
            },500)
        }, 500);
    }
}

=======
function redirect(link){
    window.open(link);
}
url = window.location.href
if(url.includes("Activities")){
    if(url.includes("activity_")){
        var id = "#activity_"+url[url.indexOf("activity_")+"activity_".length]
        $(id).css({
            border: "5px solid rgb(255,0,22)"
        });
        setTimeout(function(){
            $(id).css({
                border: "5px solid transparent"
            });
            setTimeout(function(){
                $(id).css({
                    border: "5px solid rgb(255,0,22)"
                });
                setTimeout(function(){
                    $(id).css({
                        border: "5px solid transparent"
                    });
                },500)
            },500)
        }, 500);
    }
}

>>>>>>> 194054ba3130774d9b836bede67b9737fb36b809
