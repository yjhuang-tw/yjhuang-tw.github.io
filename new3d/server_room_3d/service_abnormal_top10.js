let serviceAbnormal,service_abnormal;function ServiceAbnormalTop10Update(){$.ajax({url:"http://132.145.121.108:8081/render/api/serviceAbnormalTop10",dataType:"json",crossDomain:!0,contentType:"application/json",xhrFields:{withCredentials:!0}}).done(function(o){if(null!=serviceAbnormal){let e=o[0].count;for(let a=1;a<o.length;++a)o[a].count>e&&(e=o[a].count);serviceAbnormal.data.datasets[0].data=[],serviceAbnormal.data.labels=[],serviceAbnormal.data.datasets[0].backgroundColor=[];for(let r=0;r<o.length;++r){serviceAbnormal.data.datasets[0].data.push(o[r].count),serviceAbnormal.data.labels.push(o[r].serviceName);var t=o[r].count/e*113;let a=service_abnormal.createLinearGradient(0,113-t,0,103);a.addColorStop(0,"rgba(222, 185, 34, 1)"),a.addColorStop(1,"rgba(56,  58,  1, 1)"),serviceAbnormal.data.datasets[0].backgroundColor.push(a)}serviceAbnormal.update()}}).fail(function(a,r){console.log(a),console.log(r)})}function ServiceAbnormalTop10Init(){service_abnormal=document.getElementById("serviceAbnormal").getContext("2d"),serviceAbnormal=new Chart(service_abnormal,{type:"bar",data:{labels:["*"],datasets:[{label:"# of Abnormal",maxBarThickness:8,data:[],backgroundColor:["rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)","rgba(1, 248, 246, 1)"],borderColor:["rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)","rgba(1, 248, 246, 0.5)"],borderWidth:0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:"rgba(120, 194, 223, 1.0)",font:{size:10},maxRotation:90,minRotation:90},grid:{color:"rgba(44, 68, 80, 1.0)",borderColor:"rgba(120, 194, 223, 1.0)"}},y:{ticks:{color:"rgba(120, 194, 223, 1.0)"},display:!0,beginAtZero:!0,grid:{color:"rgba(44, 68, 80, 1.0)",borderColor:"rgba(120, 194, 223, 1.0)"}}}}}),ServiceAbnormalTop10Update()}window.addEventListener("load",function(a){ServiceAbnormalTop10Init()});