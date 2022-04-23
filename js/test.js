
function __city__(){
    jQuery.getScript('http://pv.sohu.com/cityjson',function(){
        var data={};
        var IP = returnCitySN["cip"];
        var City = returnCitySN["cname"];
        var Domain=decodeURI(decodeURI(window.location.href));
        data.IP=IP;
        data.City=City;
        $.ajax({
            type:'POST',
            url:'',
            data:data,
            success:function(response,stutas,xhr){
            }
        });
    });
}