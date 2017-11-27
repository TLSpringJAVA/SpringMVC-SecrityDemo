
//服务器的配置
var SERVERIP = "http://localhost:8080/ECP";

//渲染数据方法类
//1、招标信息addTenderInfo------------------------------
function addTenderInfo(list) {
    //list数组，index被点击元素索引
    var str = '';
    var bullType, signUpSTime='', signUpETime='';

    for (var i = 0; i < list.length; i++) {
        var objId = list[i].objId;
        /**
         *  两种方式跳转至详情页
         *  1.通过a标签的 href方式直接跳转
         *  2.可以通过点击事件跳转
         */
        // var url =  'http://localhost:8080/ECP/HomeDetailController.do?method=toProjectDetail&projId='+objId+'&bullType=01&showType=zbgg';
        bullType = list[i].caiGouFangShi;
        if (bullType == '00') {
            bullType = '公开招标'
        } else if (bullType == '02') {
            bullType = '竞争性谈判'
        }
        //报名开始时间
       var signUpStartTime = list[i].signUpStartTime;
        //报名的结束时间
        var signUpEndTimeDate = list[i].signUpEndTimeDate;
        var areaName = list[i].areaName;
        var bulletinTitle=list[i].bulletinTitle;

        str+='<tr class="b1">\n' +
            '      <td><a href=""  target="_blank" objId="'+objId+'">'+bulletinTitle+'</a></td>\n' +
            '      <td>'+areaName+'</td>\n' +
            '      <td>'+signUpStartTime+'</td>\n' +
            '      <td>'+signUpEndTimeDate+'</td>\n' +
            '  </tr>';

    }
    $('#showTable').append(str);
    $('#showTable tr td a').click(function(){
        toProject($(this).attr("objId"));
    });
}

function callback() {}

function toProject(projectId){
    var url =  SERVERIP+'/HomeDetailController.do?method=toProjectDetail&projId='+projectId+'&bullType=01&showType=zbgg';
    window.open(url)

}

function requestBulletinData() {
    var basePath = $("#basePath").val();

    $.ajax({
        type:'get',
        dataType:"jsonp",
        jsonp:"callback",
        jsonpCallback:"callback",
        url: SERVERIP + '/BulletinApiController.do?method=getBulletinList',
        contentType:'application/jsonp',
        success:function(response){//返回json结果
            alert("在回调success方法中返回的数据是:"+response.state);
            var list = response.data;
            addTenderInfo(list);
            for(var i=0;i<list.length;i++){
                var json = list[i];
                var title = json.bulletinTitle;
                console.log("title:"+title);
            }
        },error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            alert(errorThrown);
        }
    });
}