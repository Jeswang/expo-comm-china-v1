// 判断当前是否在展示 sub buttons
var sub_is_showing = false;
//每行有 12 个 box
var box_per_line = 12;
//button 的位置信息
var button_ids = [get_box_id_by(3, 6),
get_box_id_by(4, 3),
get_box_id_by(4, 5),
get_box_id_by(4, 8),
get_box_id_by(3,11),

get_box_id_by(5,10),
get_box_id_by(6, 8),
get_box_id_by(6, 4)];
//button 的背景色
var button_color = ["ffdd00","0172be","ee183a","21b24b","fb9010","5c2c90","e820a4","00acb0"];
var button_content = ["创新与开发","吃好喝好","企业报名","软硬结合","商务和旅行","生活指南","协作与云","影音娱乐"];
var dialog_color = ["c03f1c","cafa37","8d3fcf","fffc00","4182da","da3655","2ed559","36ccae"];
//sub button 的 id
var sub_button_ids = [[17,18,30,40,42],[27,39,49,50],[28,29,39,51,52,53],[30,31,42,44,54,55,56],[22,33,45,46,47],[44,45,46,56,58,69,70],[54,55,56,66,68,78,79],[50,51,52,62,64,74,75,76]];
//以下三个函数为生成 box 中内容的方法
function get_button_info(num){
    return "<div class=\"fang\" style=\"background-color:#"+button_color[num]+";\"><div class=\"fang_content\">0"+(num+1)+"<p>"+button_content[num]+"</p></div></div>";
}
function get_show_button_info_gray(num, button_num){
    return "<div class=\"fang\" style=\"background:"+"url(.\/images\/"+num+"_"+button_num+"_"+"gray.png)"+";\"></div>"; }
    function get_show_button_info(num, button_num){
        return "<div class=\"fang\" style=\"background:"+"url(.\/images\/"+num+"_"+button_num+".png)"+";\"></div>";
    }
//根据行号和列号获取 id
function get_box_id_by(line, row){
    return box_per_line*(line-1)+row-1;
}

function get_box_id_name(num){
    return "#" + button_ids[num].toString();
}
// 设置 button 的 html
function set_button_html(num) {
    $(get_box_id_name(num)).html(get_button_info(num));
}
//打开 sub buttons
function show_sub_buttons(num){
    //flip all back 将其他按钮翻转回去
    flip_all_button_off_except(num);
    setTimeout(function () {
        flip_sub_buttons(num);
        $(get_box_id_name(num)).flippy({
            color_target: "",
            direction: "left",
            duration: "250",
            verso:"<div class=\"gray closed\"></div>",
            onFinish: function(){}
        });
    }, 350);
    setTimeout(function(){
        sub_is_showing = true;
    }, 350+250);
}
//关闭 sub buttons
function hide_sub_buttons(num){
    var block_id = button_ids[num]
    flip_sub_buttons(num);
    setTimeout(function(){
        flip_all_button_on();
        sub_is_showing = false;
    }, 350);
}
//为 botton 设置点击函数
function set_button_click(num){
    $(get_box_id_name(num)).unbind('click');
    $(get_box_id_name(num)).parent().unbind("mouseenter");
    $(get_box_id_name(num)).parent().unbind("mouseleave");
    $(get_box_id_name(num)).click(function(event) {
        event.preventDefault();

        if(sub_is_showing)
        {
            hide_sub_buttons(num);
        }
        else
        {
            show_sub_buttons(num);
        }
    })
}

function set_icon(button_name, num, button_num){
    return function(){
        $(button_name + " .fang").css("background", "url(.\/images\/"+num+"_"+button_num+"_"+"color.png) no-repeat center #"+dialog_color[num]+"");
    }
}

function set_gray_icon(button_name, num, button_num){
    return function(){
        $(button_name + " .fang").css("background", "url(.\/images\/"+num+"_"+button_num+"_"+"gray.png) no-repeat center");
    }
}

//TODO 添加名字
var modal_name = [["ShareSDK","Jiasale","蛐蛐儿","云知声","Face++ 人脸识别云平台"],["果酷","酒咔嚓","豆果网","番茄快点"],["Simnect","数拓","个推","InnoSpace创智空间","MC²创业孵化器","Testin云测试"],["Sciener科技侠","优时代科技","Mostor","智能360家庭版","联智天际","3D观屏镜","海豚浏览器"],["weego","TouchChina","墨迹天气","名片全能王","紫冬口译"],["e家洁","嘀嘀打车","微代驾","春雨掌上医生","大姨吗月经助手","图渊","寻鹿"],["teambition","微部落","纷享销客","青云","云之家","坚果云","Backwire"],["Jing.FM","你听","唱吧","ISPIANO","V电影","抠电影","啪啪","万花筒视频"]];
var modal_info = [["一款为APP提供社会化功能的组件, 开发者可以快速集成到自己的APP中 « <a href=\"http://www.36kr.net/ShareSDK\" target=\"_blank\">查看详情</a>","通过提供一个购物按钮，让网站主添加至网站的产品介绍页面，即可实现产品的在线购买 « <a href=\"http://www.36kr.net/JiaSale-yiduandaimarangwangzhanshixiandianshang\" target=\"_blank\">查看详情</a>","利用声音实现跨平台文件的快速传输。同时实现微博等社交功能 « <a href=\"http://www.36kr.net/er111\" target=\"_blank\">查看详情</a>","为第三方手机应用提供语音识别、语音输入、语音搜索等解决方案 « <a href=\"http://www.36kr.net/yunzhishengyuyinyun\" target=\"_blank\">查看详情</a>","研发人脸检测、识别、分析和重建技术，将人脸识别技术应用到互联网及移动应用场景中 « <a href=\"http://www.36kr.net/Face2B2B-renlianshibieyunpingtai\" target=\"_blank\">查看详情</a>"],["拥有标准体系，合理搭配，冰盒运送的鲜切水果配送 « <a href=\"http://www.36kr.net/guokuwang1\" target=\"_blank\">查看详情</a>","拍摄酒标，搜索、记录、分享你的杯酒人生 « <a href=\"http://www.36kr.net/jiu1\" target=\"_blank\">查看详情</a>","华人美食菜谱社区，提供各种美食图片、菜谱大全、食谱大全、家常菜做法大全 « <a href=\"http://www.36kr.net/douguowang1\" target=\"_blank\">查看详情</a>","手机点餐应用，让点菜更加轻松便捷 « <a href=\"http://www.36kr.net/fanqiekuaidian\" target=\"_blank\">查看详情</a>"],["移动广告平台，让用户参与到广告之中，让广告联接人们的线上线下生活 « <a href=\"http://www.36kr.net/Simnectyulehuahudongguanggaopingtai\" target=\"_blank\">查看详情</a>","商家通过智能手机或平板电脑自助制作高质量数字营销内容，并在海报机和电子菜单中展示 « <a href=\"http://www.36kr.net/shutuoshuziyilabao\" target=\"_blank\">查看详情</a>","手机推送解决方案提供商，为您的应用提供长连接SDK和服务器接入的整体解决方案 « <a href=\"http://www.36kr.net/getui1\" target=\"_blank\">查看详情</a>","超短期、细胞型企业的创业服务平台 « <a href=\"http://www.36kr.net/service/i/220\" target=\"_blank\">查看详情</a>","大学生和年轻人创业的互联网创业孵化器","免费向移动开发者提供真实智能终端环境的应用真机自动化测试服务 « <a href=\"http://www.36kr.net/Testinyunce1\" target=\"_blank\">查看详情</a>"],["手机即刻变成钥匙，开始用app开门了 « <a href=\"http://www.36kr.net/sciener-shouzhineng\" target=\"_blank\">查看详情</a>","一体化人体工学设备的设计、研发与营销,包括一体化人体工学电脑座椅 « <a href=\"http://www.36kr.net/uChairquanqiushoukuanyitihuarentigongxuediannaozuoyi\" target=\"_blank\">查看详情</a>","集合无线路由器、移动硬盘、移动电源、NFC和电子加密等功能于一体的软硬件产品 « <a href=\"http://www.36kr.net/QQtangfuzhuxiazaiwang-QQtang4.3quannengguaQQtang4.3waiguaQQtang4.2waiguaQQtangguaQQtangquannengguade\" target=\"_blank\">查看详情</a>","智能家居系统提供商，彻底解放双手。说话就能控制家电的智能家居产品 « <a href=\"http://www.36kr.net/zhineng360jiatingban\" target=\"_blank\">查看详情</a>","打造软硬件结合的创新产业链，致力于个性礼品定制，个性智能家居设计、开源软硬件定制 « <a href=\"http://www.36kr.net/PcDuino\" target=\"_blank\">查看详情</a>","聚焦高质量立体美女图片社区、立体短视频的打造 « <a href=\"http://www.36kr.net/litiyingxiangyulerukoudz48bbb1b49b37ed77602ea8c0e092d3c4\" target=\"_blank\">查看详情</a>","基于WebKit内核，对各种PC网站以及手机网站都尽量给予PC端浏览般的支持 « <a href=\"http://www.36kr.net/hailanqi1\" target=\"_blank\">查看详情</a>"],["基于旅行者的兴趣，通过智能计算提供完整的旅行路线解决方案 « <a href=\"http://www.36kr.net/WeeGowoqulvxing\" target=\"_blank\">查看详情</a>","国内各大城市和景点的手机导游及旅行应用，“中国好景点”开发团队 « <a href=\"http://www.36kr.net/TouchChina\" target=\"_blank\">查看详情</a>","手机天气预报软件，几乎兼容全系列手机 « <a href=\"http://www.36kr.net/mojitianqi1\" target=\"_blank\">查看详情</a>","海量名片快速识别，智能管理，多终端同步共享 « <a href=\"http://www.36kr.net/mingpianquannengwang\" target=\"_blank\">查看详情</a>","集语音识别、语音合成、多语言翻译技术大成的语音类翻译应用 « <a href=\"http://www.36kr.net/zidongkouyizidongyuyinyun\" target=\"_blank\">查看详情</a>"],["一款基于地理位置的找小时工应用，随时随地给身边的小时工打电话 « <a href=\"http://www.36kr.net/ejiajie\" target=\"_blank\">查看详情</a>","智能搜索周边出租车，提升城市预约叫车比例 « <a href=\"http://www.36kr.net/dache1\" target=\"_blank\">查看详情</a>","寻找离客户最近的专业酒后代驾司机，已北京、上海、成都三地提供服务 « <a href=\"http://www.36kr.net/weidaijia\" target=\"_blank\">查看详情</a>","一款让用户“自诊+问诊”的手机客户端 « <a href=\"http://www.36kr.net/chunyuzhangshangyisheng1\" target=\"_blank\">查看详情</a>","一款女生月经期助手应用，通过健康测试让你更了解自己的身体状况 « <a href=\"http://www.36kr.net/dayima1\" target=\"_blank\">查看详情</a>","室内地图服务商，用户可通过智能手机、平板电脑等移动终端随时随地查询本地生活信息 « <a href=\"http://www.36kr.net/tuyuanPalmap1\" target=\"_blank\">查看详情</a>","从事高精度室内定位、室内地图服务及产品研发的高科技企业 « <a href=\"http://www.36kr.net/xunlushengdianqian\" target=\"_blank\">查看详情</a>"],["在线团队协作平台，即时发布分享讨论，实时更新任务管理，无缝同步文件共享 « <a href=\"http://www.36kr.net/Teambition1\" target=\"_blank\">查看详情</a>","高效团队分享和协作工具，高透明度提升团队效率，实现单点登录和消息对接 « <a href=\"http://www.36kr.net/weibuluo\" target=\"_blank\">查看详情</a>","销售团队适用的企业社会化云服务平台 « <a href=\"http://www.36kr.net/facishare\" target=\"_blank\">查看详情</a>","提供云计算IaaS层服务，包括：计算、存储、网络和安全，按“秒”计费实现弹性特征，瞄准中国的DevOps开发市场 « <a href=\"http://www.36kr.net/qingyunQingCloud\" target=\"_blank\">查看详情</a>","为企业构建私密的社交化工作空间，凝聚企业共识，激发员工创新，提高协作效率 « <a href=\"http://www.36kr.net/yunzhijia1\" target=\"_blank\">查看详情</a>","一款免费的云存储服务，可以帮助人们在时间、任何地方、用任何设备快速访问自己和工作伙伴的文件 « <a href=\"http://www.36kr.net/jianguoyun1\" target=\"_blank\">查看详情</a>","跨平台与设备的实时云数据同步服务，在此基础上逐步发展成为一款功能齐全的BaaS产品 « <a href=\"http://www.36kr.net/Backwire\" target=\"_blank\">查看详情</a>"],["新型智能电台,首创自然语言描述搜索音乐新模式，让音乐搜索回归最简单最直接的方式 « <a href=\"http://www.36kr.net/Jing.fm1\" target=\"_blank\">查看详情</a>","音乐分享平台，根据不同时间、不同场景聆听适合的音乐 « <a href=\"http://www.36kr.net/niting1\" target=\"_blank\">查看详情</a>","免费社交K歌手机应用，提供有趣的智能打分系统，所得评分可分享给好友PK « <a href=\"http://www.36kr.net/changba1\" target=\"_blank\">查看详情</a>","“硬件+软件+内容+平台+服务”为核心为钢琴教育行业提供B2C,B2B,C2C产品及服务 « <a href=\"http://www.36kr.net/ISPIANO\" target=\"_blank\">查看详情</a>","服务微电影行业平台，实时分享全球最新最好的微电影，提供各种相关微电影拍摄教程 « <a href=\"http://www.36kr.net/Vdianying\" target=\"_blank\">查看详情</a>","线上购票，线下观影；线上邀约，线下交友。基于移动社交的O2O电子商务手机应用 « <a href=\"http://www.36kr.net/koudianying\" target=\"_blank\">查看详情</a>","一款融合拍照和录音的移动社交应用，采用照片+声音的方式，让每一张照片都充满故事 « <a href=\"http://www.36kr.net/papa1\" target=\"_blank\">查看详情</a>","为市面上的主流电视盒子打造视频聚合平台，提供常需的电视剧、电影、综艺等电视消费内容 « <a href=\"http://www.36kr.net/wanhuatong\" target=\"_blank\">查看详情</a>"]];
var modal_pic = [];
var modal_color = ["#c03f1c","#cafa37","#8d3fcf","#fffc00","#4182da","#da3655","#2ed559","#36ccae"];

function modal_open_function(dialog_color){
    return function (dialog) {
        dialog.container.css("background-color", dialog_color);
        dialog.overlay.fadeIn('slow', function () {
            dialog.container.slideDown('slow', function () {
                dialog.data.fadeIn('slow');
            });
        });
    };
}

function set_click_function(button_name, num, button_num){
    return function(){
        //修改 #basic-modal-content 中的内容，然后展示出来。
        $('.modal_icon').html("<div style=\"background:"+"url(images\/"+num+"_"+button_num+"_color.png) no-repeat center"+";height:100px;\"></div>");
        $('.modal_name').html(modal_name[num][button_num].toString());
        $('.modal_info').html(modal_info[num][button_num].toString());
        $('#basic-modal-content').modal(
        {

            //#ffffff 可以替换为数组中的成员
            onOpen: modal_open_function(modal_color[num]),
            //TODO: Close 默认有一个类和一段 html, 这两个参数可以修改它.
            closeClass: "modalClose",
            closeHTML: "<a href='#'></a>"
        });

        return false;
    }
}
//翻转 sub buttons
function flip_sub_buttons(num){
    for (var block in sub_button_ids[num])
    {
        var button_name = "#"+ sub_button_ids[num][block].toString();

        if(sub_is_showing){
            $(button_name).flippy({
                color_target: "",
                direction: "right",
                duration: "250",
                verso: "",
            });
            $(button_name).unbind("click");
            $(button_name).unbind("mouseenter");
            $(button_name).unbind("mouseleave");
        }
        else
        {
            $(button_name).flippy({
                color_target: "white",
                direction: "left",
                duration: "250",
                verso: get_show_button_info_gray(num, block)
            });

            $(button_name).unbind("mouseenter");
            $(button_name).unbind("mouseleave");
            $(button_name).mouseenter(set_icon(button_name, num, block))
            $(button_name).mouseleave(set_gray_icon(button_name, num, block));

            $(button_name).unbind("click");
            $(button_name).click(set_click_function(button_name, num, block));
        }

    }
}

//将所有的 button 设置为开启
function flip_all_button_on(){
    for (var i=0; i<8; i++){
        $(get_box_id_name(i)).flippy({
            color_target: "",
            direction: "right",
            duration: "250",
            verso: get_button_info(i),
        });
        set_button_click(i);
    }
}

//将所有除了 num 的 button 设置为关闭
function flip_all_button_off_except(num){
    for (var i=0; i<8; i++){
        if(i != num){
            $(get_box_id_name(i)).flippy({
                color_target: "",
                direction: "left",
                duration: "250",
                verso: "",
            });
            $(get_box_id_name(i)).unbind('click');
        }

    }
}

//主函数
$(function() {
    // 7 * 12 一共 84 个 box
    for (var i=0;i<84;i++)
    {
        var $one_block = $( "<div class=\"box\"><div class=\"fang gray\" id=\""+i+"\"></div></div>" );
        $( ".wrapper" ).append( $one_block);
    }

    $('.box').mouseenter(function() {
        $(this).fadeTo("normal", 0.8);
    });
    $('.box').mouseleave(function() {
        $(this).fadeTo("normal", 1.0);
    });


    for (var i=0; i<8; i++){
        set_button_html(i);
        set_button_click(i);
    }
});
