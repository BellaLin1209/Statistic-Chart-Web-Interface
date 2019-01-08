/** Date: 2018/12/20 
*** Creator:John Chang.Bella Lin 
*** Project:Test Manager Web Interface
**/


/** 載入 **/
$(document).ready(function(){
    console.log("HELLO! Web is ready");

    /** 重新整理後回到最上層 **/
    if(document.body.scrollTop > 0) {
    console.log(1);
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;

});







/** json parsing start **/
   
    //宣告
    var JSONResult="";//json string
    var JSONObject =null;//json to object
    var TestTitle="";//測試名稱
    var ob_ProcessTime_PT_AVG=new Array();
    var ob_ProcessTime_RES_AVG=new Array();
    var ob_ProcessTime_S2E_AVG=new Array();
    var ob_RequestCount_AMOUNT=new Array();
    var ob_RequestCount_DURATION=new Array();
    var ob_RequestCount_PERFORMANCE=new Array();
    var ob_ErrorCode_Summary=new Array();
    var ob_ErrorCode_List=new Array();
   

    //分類取值
    function KeyTypeClass(key,obj_value){

      var k="";
        switch (key)
        {
           
        case "ErrorCode_Summary": 
            ob_ErrorCode_Summary=obj_value;
             
            k="START_TIMESTAMP";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="FINISH_TIMESTAMP";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="CONNECTION";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="DURATION";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="TM_SEND_REQUEST";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="CC_GET_REQUEST";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="SM_GET_REQUEST";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="SKILL_GET_REQUEST";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="AVERAGE_PROCESS_TIME";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            k="ERROR_RATE";
            document.getElementById(k).innerHTML = ob_ErrorCode_Summary[k];
            
             
          break;
        case "ErrorCode_List":
            ob_ErrorCode_List=obj_value;
            
            var  k0="NULL";
            document.getElementById(k0).innerHTML = ob_ErrorCode_List[k0];
            var  k1="200code";
            document.getElementById(k1).innerHTML = ob_ErrorCode_List[k1];
            var  k2="ERROR_TOTAL";
            document.getElementById(k2).innerHTML = ob_ErrorCode_List[k2];
            var  k3="-1(SM)";
            document.getElementById(k3).innerHTML = ob_ErrorCode_List[k3];
            var  k4="-3(SM)";
            document.getElementById(k4).innerHTML = ob_ErrorCode_List[k4];
            var  k5="500(SM)";
            document.getElementById(k5).innerHTML = ob_ErrorCode_List[k5];
            var  k6="500(CC)";
            document.getElementById(k6).innerHTML = ob_ErrorCode_List[k6];
            var  k7="502(CC)";
            document.getElementById(k7).innerHTML = ob_ErrorCode_List[k7];
            var  k8="OTHER";
            document.getElementById(k8).innerHTML = ob_ErrorCode_List[k8];
            var  k9="504(CC)";
            //504cc details
            var Obj_504cc = ob_ErrorCode_List[k9];
            var str = "";
            const Obj_504cc_key = Object.keys(Obj_504cc);

            var count =0;
            for(var j = 0; j < Obj_504cc_key.length; j++){

              var total="504(CC)_TOTAL";
              if(Obj_504cc_key[j]!=total){
                str+="<tr>";
                str+= "<th class='ErrorCode_List_th2'>"+Obj_504cc_key[j]+"</th>";
                str+= "<td>"+ Obj_504cc[Obj_504cc_key[j]] +"</td>";
                str+="</tr>";

                //error code statis.
                Timeout_ErrorCode_PieChart_title[count] = Obj_504cc_key[j];
                Timeout_ErrorCode_PieChart_value[count] = Obj_504cc[Obj_504cc_key[j]];
                count++;
              }else{
                  document.getElementById(total).innerHTML = Obj_504cc[Obj_504cc_key[j]];
              }
            }
            count =0;
            k10="504(CC)_Details";
            document.getElementById(k10).innerHTML = str;


          
            //圖7 : error 圓餅圖
            var ev0 =  ob_ErrorCode_List[k0];
            var ev3 =  ob_ErrorCode_List[k3];
            var ev4 =  ob_ErrorCode_List[k4];
            var ev5 =  ob_ErrorCode_List[k5];
            var ev6 =  ob_ErrorCode_List[k6];
            var ev7 =  ob_ErrorCode_List[k7];
            var ev8 =  ob_ErrorCode_List[k8];
            var ev9 =  ob_ErrorCode_List[k9]["504(CC)_TOTAL"];
        
          
            ErrorCode_PieChart_title = [k0,k3,k4,k5,k6,k7,k8,k9];
            ErrorCode_PieChart_value = [ev0,ev3,ev4,ev5,ev6,ev7,ev8,ev9];


            

          break;
        case "RequestCount_PERFORMANCE":
            ob_RequestCount_PERFORMANCE=obj_value;
            
            var v1 =  ob_RequestCount_PERFORMANCE["TM(LC)_send_to_CC"];
            var v2 =  ob_RequestCount_PERFORMANCE["CC_get_from_TM(LC)"];
            var v3 =  ob_RequestCount_PERFORMANCE["CC_send_to_CI"];
            var v4 =  ob_RequestCount_PERFORMANCE["CI_get_from_CC"];
            var v5 =  ob_RequestCount_PERFORMANCE["CI_send_to_SM"];
            var v6 =  ob_RequestCount_PERFORMANCE["SM_get_from_CI"];
            var v7 =  ob_RequestCount_PERFORMANCE["SM_send_to_SKILL"];
            var v8 =  ob_RequestCount_PERFORMANCE["SKILL_get_from_SM"];
            var v9 =  ob_RequestCount_PERFORMANCE["SKILL_send_to_SM"];
            var v10 = ob_RequestCount_PERFORMANCE["SM_get_from_SKILL"]
            var v11 = ob_RequestCount_PERFORMANCE["SM_send_to_CC"];
            var v12 = ob_RequestCount_PERFORMANCE["CC_get_from_SM"];
            var v13 = ob_RequestCount_PERFORMANCE["CC_send_to_LC"];
            var v14 = ob_RequestCount_PERFORMANCE["TM(LC)_send_to_CC"];
          
      
           PT_RC_PERFORMANCE_line_value[0].data = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14];
          
     
            
          break;
        case "ProcessTime_PT_AVG":
             ob_ProcessTime_PT_AVG=obj_value;
            
            k="CC_BF_SM";
            PT_AVG_Bar_value[0].data=[ob_ProcessTime_PT_AVG[k]];
            k="CI";
            PT_AVG_Bar_value[1].data=[ob_ProcessTime_PT_AVG[k]];
            k="SM_BF_SKILL";
            PT_AVG_Bar_value[2].data=[ob_ProcessTime_PT_AVG[k]];
            k="SKILL";
            PT_AVG_Bar_value[3].data=[ob_ProcessTime_PT_AVG[k]];
            k="SM_AF_SKILL";
            PT_AVG_Bar_value[4].data=[ob_ProcessTime_PT_AVG[k]];
            k="CC_AF_SM";
            PT_AVG_Bar_value[5].data=[ob_ProcessTime_PT_AVG[k]];

           
          break;
        case "RequestCount_AMOUNT":
            ob_RequestCount_AMOUNT=obj_value;
            
            var Av1 =  ob_RequestCount_AMOUNT["TM(LC)_send_to_CC"];
            var Av2 =  ob_RequestCount_AMOUNT["CC_get_from_TM(LC)"];
            var Av3 =  ob_RequestCount_AMOUNT["CC_send_to_CI"];
            var Av4 =  ob_RequestCount_AMOUNT["CI_get_from_CC"];
            var Av5 =  ob_RequestCount_AMOUNT["CI_send_to_SM"];
            var Av6 =  ob_RequestCount_AMOUNT["SM_get_from_CI"];
            var Av7 =  ob_RequestCount_AMOUNT["SM_send_to_SKILL"];
            var Av8 =  ob_RequestCount_AMOUNT["SKILL_get_from_SM"];
            var Av9 =  ob_RequestCount_AMOUNT["SKILL_send_to_SM"];
            var Av10 = ob_RequestCount_AMOUNT["SM_get_from_SKILL"]
            var Av11 = ob_RequestCount_AMOUNT["SM_send_to_CC"];
            var Av12 = ob_RequestCount_AMOUNT["CC_get_from_SM"];
            var Av13 = ob_RequestCount_AMOUNT["CC_send_to_LC"];
            var Av14 = ob_RequestCount_AMOUNT["TM(LC)_send_to_CC"];
          
      
           PT_RC_AMOUN_Bar_value[0].data = [Av1,Av2,Av3,Av4,Av5,Av6,Av7,Av8,Av9,Av10,Av11,Av12,Av13,Av14];
         

          break;
        case "ProcessTime_S2E_AVG":
            ob_ProcessTime_S2E_AVG=obj_value;

            k="SM_S2E";
            PT_S2E_Bar_value[0].data=[ob_ProcessTime_S2E_AVG[k]];
            k="CC_S2E";
            PT_S2E_Bar_value[1].data=[ob_ProcessTime_S2E_AVG[k]];
            k="TM_S2E";
            PT_S2E_Bar_value[2].data=[ob_ProcessTime_S2E_AVG[k]];
   

          break;
        case "RequestCount_DURATION":
            ob_RequestCount_DURATION=obj_value;
            
            
            var Dv1 =  ob_RequestCount_DURATION["TM(LC)_send_to_CC"];
            var Dv2 =  ob_RequestCount_DURATION["CC_get_from_TM(LC)"];
            var Dv3 =  ob_RequestCount_DURATION["CC_send_to_CI"];
            var Dv4 =  ob_RequestCount_DURATION["CI_get_from_CC"];
            var Dv5 =  ob_RequestCount_DURATION["CI_send_to_SM"];
            var Dv6 =  ob_RequestCount_DURATION["SM_get_from_CI"];
            var Dv7 =  ob_RequestCount_DURATION["SM_send_to_SKILL"];
            var Dv8 =  ob_RequestCount_DURATION["SKILL_get_from_SM"];
            var Dv9 =  ob_RequestCount_DURATION["SKILL_send_to_SM"];
            var Dv10 = ob_RequestCount_DURATION["SM_get_from_SKILL"]
            var Dv11 = ob_RequestCount_DURATION["SM_send_to_CC"];
            var Dv12 = ob_RequestCount_DURATION["CC_get_from_SM"];
            var Dv13 = ob_RequestCount_DURATION["CC_send_to_LC"];
            var Dv14 = ob_RequestCount_DURATION["TM(LC)_send_to_CC"];
          
      
           PT_RC_DURATION_line_value[0].data = [Dv1,Dv2,Dv3,Dv4,Dv5,Dv6,Dv7,Dv8,Dv9,Dv10,Dv11,Dv12,Dv13,Dv14];


          break;
        case "ProcessTime_RES_AVG":
            ob_ProcessTime_RES_AVG=obj_value;
            

            var Rv1 = ob_ProcessTime_RES_AVG["CC2CI"]
            var Rv2 = ob_ProcessTime_RES_AVG["CI2SM"];
            var Rv3 = ob_ProcessTime_RES_AVG["SM2SKILL"];
            var Rv4 = ob_ProcessTime_RES_AVG["SKILL2SM"];
            var Rv5 = ob_ProcessTime_RES_AVG["SM2CC"];
          
      
           PT_RES_Bar_value[0].data = [Rv1,Rv2,Rv3,Rv4,Rv5];
        

           
          break;
        }
    }

    //取得JSON內容
    function getJson() {
      init();
     try {
          JSONObject=JSON.parse(JSONResult)[0];
          alert("報告取得完成");

          //取得測試的名稱
          TestTitle = Object.keys(JSONObject);
          document.getElementById("TestTitle").innerHTML = TestTitle;
          
          const List_TestContentKey = Object.keys(JSONObject[TestTitle]);
          for(var j = List_TestContentKey.length - 1; j >= 0; j--){
            var key =  List_TestContentKey[j];
            var value = JSONObject[TestTitle][List_TestContentKey[j]];
            KeyTypeClass(key ,value);//分類取值
          }
          /** 圖1: chart_ProcessTime_PT_AVG **/
          getChart_PT_AVG(false);
          /** 圖2: chart_ProcessTime_S2E_AVG **/
          getChart_PT_S2E_AVG(false);
          /** 圖3: chart_ProcessTime_RES_AVG **/
          getChart_PT_RES_AVG(false);
          /** 圖4: chart_RequestCount_AMOUN **/
          getChart_RC_AMOUNT(false);
          /** 圖5: RequestCount_PERFORMANCE  **/
          getChart_RC_PERFORMANCE(false);
          /** 圖6: RequestCount_DURATION **/
          getChart_RC_Duration(false);

          /** 圖7 **/
          getErrorPieChart(false);
          getTimeout_ErrorPieChart(false);

           /** 圖8 **/
          getErrorPieChart2(false);
          getTimeout_ErrorPieChart2(false);

        
        } catch (exception) {
          // this code handles exceptions
           alert("發現錯誤 : "+exception);
           init();
        }
    }



  //選擇json檔案
  function selectJsonFile(evt) {
       
        JSONResult="";
        var files = evt.target.files; // FileList object
        for (var i = 0, f; f = files[i] ; i++) {
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    var span = document.createElement('span');
                    span.innerHTML = e.target.result;
                    JSONResult += e.target.result;
                };
            })(f);
            reader.readAsText(f);   
        }

    }
  
  
  document.getElementById('files').addEventListener('change', selectJsonFile, false);








/** 圖表 **/

var chart1,chart2,chart3,chart4,chart5,chart6,chart7,chart8,chart9,chart10;
/** 圖1: chart_ProcessTime_PT_AVG **/
/** pt_avg 值 **/
var PT_AVG_Bar_value = [{
  name: 'CC_BF_SM',
  data: [0]
},{
  name: 'CI',
  data: [0]
},{
  name: 'SM_BF_SKILL',
  data: [0]
},{
  name: 'SKILL',
  data: [0]
},{
  name: 'SM_AF_SKILL',
  data: [0]
},{
  name: 'CC_AF_SM',
  data: [0]
}];

/** x 軸標題 **/
function getChart_PT_AVG(init){
    var options = {
        chart: {
            height: 400,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        series: PT_AVG_Bar_value,
        xaxis: {
            type: 'String',
            categories: TestTitle,
        },
        legend: {
            position: 'right',
        },
        fill: {
            opacity: 2
        },
    }

   chart1 = new ApexCharts(document.querySelector("#chart_ProcessTime_PT_AVG"),options);
    
   chart1.render();

  console.log("init:"+init);
   if(init==true){
    chart1.destroy();
    console.log("chart1 is init");
  }else{
    console.log("chart1 is run");
  }
}
/** 圖2: chart_ProcessTime_S2E_AVG **/
/** pt_S2E_avg 值 **/
var PT_S2E_Bar_value = [{
            name: 'SM_S2E',
            data: [0]
        }, {
            name: 'CC_S2E',
            data: [0]
        }, {
            name: 'TM_S2E',
            data: [0]
        }];
function getChart_PT_S2E_AVG(init){
    var options = {
        chart: {
            height: 400,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '30%',
            },
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: PT_S2E_Bar_value,
        xaxis: {
            categories: TestTitle,
        },
        yaxis: {
            title: {
                text: 'Average Process Time (ms)'
            }
        },
        fill: {
            opacity: 2

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return  val + " ms"
                }
            }
        }
    }

    chart2 = new ApexCharts(document.querySelector("#chart_ProcessTime_S2E_AVG"),options);

    chart2.render();

       console.log("init:"+init);
   if(init==true){
          chart2.destroy();
           console.log("chart2 is init");
  }else{
    console.log("chart2 is run");
  }
}
/** 圖3: chart_ProcessTime_RES_AVG **/
/** pt_RES_avg 標題 **/
var PT_RES_Bar_title=['CC2CI','CI2SM','SM2SKILL','SKILL2SM','SM2CC'];
/** pt_RES_avg 值 **/
var PT_RES_Bar_value = [{
            name: TestTitle,
            data: []
        }];
function getChart_PT_RES_AVG(init){
    var options = {
         chart: {
                height: 400,
                type: 'line',
                shadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 1
                },
                toolbar: {
                    show: true
                }
            },
            colors: [ '#545454'],
            dataLabels: {
                enabled: true,
                colors: '#000000'
            },
            stroke: {
                curve: 'smooth'
            },
            series: PT_RES_Bar_value,
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity:2
                },
            },
            markers: {
                size: 6
            },
            xaxis: {
                categories: PT_RES_Bar_title,
                title: {
                    text: 'Component'
                }
            },
            yaxis: {
                title: {
                    text: 'Average Process Time (ms)'
                },
                // min: 'auto',
                // max: 'auto'
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: 20,
                offsetX: -5
            }
    }

    chart3 = new ApexCharts(document.querySelector("#chart_ProcessTime_RES_AVG"),options);

    chart3.render();

      console.log("init:"+init);
   if(init==true){
          chart3.destroy();
      
            console.log("chart3 is init");
  }else{
    console.log("chart3 is run");
  }
}
/** 圖5: chart_RequestCount_AMOUN **/
/** pt_AMOUN_avg 值 **/
var PT_RC_AMOUN_X_title=['TM(LC)_send_to_CC','CC_get_from_TM(LC)','CC_send_to_CI','CI_get_from_CC', 'CI_send_to_SM','SM_get_from_CI','SM_send_to_SKILL',
                              'SKILL_get_from_SM','SKILL_send_to_SM','SM_get_from_SKILL','SM_send_to_CC','CC_get_from_SM', 'CC_send_to_LC','TM(LC)_send_to_CC'];
/** pt_AMOUN_avg 值 **/
var PT_RC_AMOUN_Bar_value = [{
            name: TestTitle,
            data: []
        }];
 var X_colors = ['#FF4560', '#008FFB', '#008FFB', '#D10CE8',  '#D10CE8', '#775DD0','#775DD0', '#546E7A','#546E7A','#FEB019','#FEB019',  '#26a69a',  '#26a69a','#FF4560'];
function getChart_RC_AMOUNT(init){

   
        var options = {
            chart: {
                height: 450,
                type: 'line',
                events: {
                    click: function(chart, w, e) {
                        console.log(chart, w, e )
                    }
                },
            },
            colors: ['#FF4560'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: true,
                fontSize: '12px'

            },
            series: PT_RC_AMOUN_Bar_value,
            xaxis: {
                categories: PT_RC_AMOUN_X_title,
                labels: {
                    style: {
                        colors: X_colors,
                        fontSize: '10px',
                        width: 600
                    }
                }
            },
            legend: {
            position: 'top',
            horizontalAlign: 'left',
            floating: true,
            offsetY: 30,
            offsetX: -2
        }

        }

        chart4 = new ApexCharts(document.querySelector("#chart_RequestCount_AMOUNT"),options);
        chart4.render();

         console.log("init:"+init);
   if(init==true){
          chart4.destroy();
            console.log("chart4 is init");
  }else{
    console.log("chart4 is run");
  }
}
/** 圖5: RequestCount_PERFORMANCE  **/
/** RES x 軸標題 **/
var PT_RC_PERFORMANCE_X_title=['TM(LC)_send_to_CC','CC_get_from_TM(LC)','CC_send_to_CI','CI_get_from_CC', 'CI_send_to_SM','SM_get_from_CI','SM_send_to_SKILL',
                              'SKILL_get_from_SM','SKILL_send_to_SM','SM_get_from_SKILL','SM_send_to_CC','CC_get_from_SM', 'CC_send_to_LC','TM(LC)_send_to_CC'];
/** pt_RES_avg 值 **/
var PT_RC_PERFORMANCE_line_value = [{
            name: TestTitle,
            data: []
        }];
function getChart_RC_PERFORMANCE (init){
    var options = {
        chart: {
            height: 400,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: PT_RC_PERFORMANCE_line_value,
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 1
            },
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        xaxis: {
            categories: PT_RC_PERFORMANCE_X_title,
            labels: {
                    style: {
                        colors: X_colors,
                        fontSize: '12px',
                        width: 500
                    }
                }
        },
        yaxis: {
            title: {
                text: 'Requests / sec'
            },
            // min: 'auto',
            // max: 'auto',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            floating: true,
            offsetY: 30,
            offsetX: -2
        }
    }

     chart5 = new ApexCharts(
        document.querySelector("#chart_RequestCount_PERFORMANCE"),
        options
    );

    chart5.render();

       console.log("init:"+init);
   if(init==true){
          chart5.destroy();
           console.log("chart5 is init");
  }else{
    console.log("chart5 is run");
  }
}
/** 圖6: RequestCount_DURATION **/
/** RES x 軸標題 **/
var PT_RC_DURATION_X_title=['TM(LC)_send_to_CC','CC_get_from_TM(LC)','CC_send_to_CI','CI_get_from_CC', 'CI_send_to_SM','SM_get_from_CI','SM_send_to_SKILL',
                              'SKILL_get_from_SM','SKILL_send_to_SM','SM_get_from_SKILL','SM_send_to_CC','CC_get_from_SM', 'CC_send_to_LC','TM(LC)_send_to_CC'];
/** pt_RES_avg 值 **/
var PT_RC_DURATION_line_value = [{
            name: TestTitle,
            data: []
        }];
function getChart_RC_Duration(init){
    var options = {
        chart: {
            height: 450,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: true,
            }
        },
        colors: ['#26a69a'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: PT_RC_DURATION_line_value,
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        xaxis: {
            categories: PT_RC_DURATION_X_title,
            labels: {
                    style: {
                        colors: X_colors,
                        fontSize: '12px',
                        width: 500
                    }
                }
        },
        yaxis: {
            title: {
                text: 'Duration'
            },
            // min: 'auto',
            // max: 'auto'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY:  25,
            offsetX: -5
        }
    }

     chart6 = new ApexCharts(
        document.querySelector("#chart_RequestCount_DURATION"),
        options
    );

    chart6.render();

         console.log("init:"+init);
   if(init==true){
          chart6.destroy();
           console.log("chart6 is init");
  }else{
    console.log("chart6 is run");
  }
}


/** 錯誤比例 **/
var ErrorCode_PieChart_value=[];
var ErrorCode_PieChart_title=[];
var ColorArray=['#1ab7ea', '#0084ff', '#39539E', '#0077B5','#FF4560', '#008FFB', '#D10CE8' ,'#775DD0', '#546E7A','#FEB019','#FEB019', '#26a69a','#FF4560'];
function getErrorPieChart(init){
    var options = {
              chart: {
                height: 400,
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: ColorArray,
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#000000']
                },
                formatter: function(val, opt) {
                    return  (opt.dataPointIndex+1)+". "+opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: false
                }
            },
            series: [{
                data: ErrorCode_PieChart_value
            }],
            stroke: {
                width: 1,
                colors: ['#FFF']
            },
            xaxis: {
                categories:ErrorCode_PieChart_title,
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            legend: {
            position: 'top',
            horizontalAlign: 'left',
            floating: true,
            offsetY: 30,
            offsetX: -2
        },
            subtitle: {
                text: '錯誤分類',
                align: 'center',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: true
                },
                y: {
                    formatter: function (val) {
                        return  val + " 個"
                    }
                }
            }
        }

        chart7 = new ApexCharts(
            document.querySelector("#chart_Error_PieChart1_1"),
            options
        );
        
        chart7.render();

       console.log("init:"+init);
   if(init==true){
          chart7.destroy();
            console.log("chart7 is init");
  }else{
    console.log("chart7 is run");
  }
}

/** 錯誤比例1-2 **/
function getTimeout_ErrorPieChart(init){
    var options = {
            chart: {
               height: 400,
                type: 'donut',
            },
            series: ErrorCode_PieChart_value,
            labels: ErrorCode_PieChart_title,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            colors: ColorArray,
            plotOptions: {
                radialBar: {
                    offsetY: 30,

                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            
                        },
                        value: {
                            show: true,
                        }
                    }
                }
            }
           
        }

        chart8 = new ApexCharts(
            document.querySelector("#chart_Error_PieChart1_2"),
            options
        );
        
        chart8.render();
 console.log("init:"+init);
   if(init==true){
          chart8.destroy();
           console.log("chart8 is init");
  }else{
    console.log("chart8 is run");
  }
}




/**  504timeout 錯誤比例1 **/
var Timeout_ErrorCode_PieChart_value=[];
var Timeout_ErrorCode_PieChart_title=[];
function getErrorPieChart2(init){
    var options = {
              chart: {
                height: 400,
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: ColorArray,
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#000000']
                },
                formatter: function(val, opt) {
                    return  (opt.dataPointIndex+1)+". "+opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: false
                }
            },
            series: [{
                data: Timeout_ErrorCode_PieChart_value
            }],
            stroke: {
                width: 1,
                colors: ['#FFF']
            },
            xaxis: {
                categories:Timeout_ErrorCode_PieChart_title,
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            subtitle: {
                text: '錯誤分類',
                align: 'center',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: true
                },
                y: {
                    formatter: function (val) {
                        return  val + " 個"
                    }
                }
            },

        }

        chart9 = new ApexCharts(
            document.querySelector("#chart_Error_PieChart2_1"),
            options
        );
        
        chart9.render();
        console.log("init:"+init);
   if(init==true){
        chart9.destroy();
           console.log("chart9 is init");
  }else{
    console.log("chart9 is run");
  }
}

/** 504timeout 錯誤比例2 **/
function getTimeout_ErrorPieChart2(init){
var options = {
            chart: {
               height: 400,
                type: 'donut',
            },
            series: Timeout_ErrorCode_PieChart_value,
            labels: Timeout_ErrorCode_PieChart_title,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            colors: ColorArray,
            plotOptions: {
                radialBar: {
                    offsetY: 30,

                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            
                        },
                        value: {
                            show: true,
                        }
                    }
                }
            }
        }


  chart10 = new ApexCharts(
            document.querySelector("#chart_Error_PieChart2_2"),
            options
        );
        
        chart10.render();
 console.log("init:"+init);
   if(init==true){
        chart10.destroy();
      console.log("chart10 is init");
  }else{
    console.log("chart10 is run");
  }
    

        
  }
  
    



/** 初始化 **/
function init(){
  console.log("init");


/** 圖1: chart_ProcessTime_PT_AVG **/
getChart_PT_AVG(true);
/** 圖2: chart_ProcessTime_S2E_AVG **/
getChart_PT_S2E_AVG(true);
/** 圖3: chart_ProcessTime_RES_AVG **/
getChart_PT_RES_AVG(true);
/** 圖4: chart_RequestCount_AMOUN **/
getChart_RC_AMOUNT(true);
/** 圖5: RequestCount_PERFORMANCE  **/
getChart_RC_PERFORMANCE(true);
/** 圖6: RequestCount_DURATION **/
getChart_RC_Duration(true);

/** 圖7 **/
getErrorPieChart(true);
getTimeout_ErrorPieChart(true);

 /** 圖8 **/
getErrorPieChart2(true);
getTimeout_ErrorPieChart2(true);


}
