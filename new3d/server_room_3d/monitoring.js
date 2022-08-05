let temperature,humidityMonitoring,powerMonitoring;function MonitoringUpdate(){$.ajax({url:"http://132.145.121.108:8081/render/api/environmentMonitoring",dataType:"json",crossDomain:!0,contentType:"application/json",xhrFields:{withCredentials:!0}}).done(function(o){null!=temperature&&(temperature.data.datasets.forEach(t=>{t.data[0]=o[0].numberNormal,t.data[1]=o[0].numberAbnormal}),temperature.update()),null!=humidityMonitoring&&(humidityMonitoring.data.datasets.forEach(t=>{t.data[0]=o[2].numberNormal,t.data[1]=o[2].numberAbnormal}),humidityMonitoring.update()),null!=powerMonitoring&&(powerMonitoring.data.datasets.forEach(t=>{t.data[0]=o[1].numberNormal,t.data[1]=o[1].numberAbnormal}),powerMonitoring.update()),MonitoringTextUpdate(o)}).fail(function(t,o){console.log(t),console.log(o)})}function MonitoringTextUpdate(t){var o=Math.round(100*t[0].numberNormal/(t[0].numberNormal+t[0].numberAbnormal));$("#temperature-percent").html(o+"%"),$("#temperature-count").html(t[0].numberAbnormal+"/"+(t[0].numberNormal+t[0].numberAbnormal)),$("#temperature-normal").html(t[0].numberNormal+" ("+o+"%)");o=Math.round(100*t[2].numberNormal/(t[2].numberNormal+t[2].numberAbnormal));$("#power-percent").html(o+"%"),$("#power-count").html(t[2].numberAbnormal+"/"+(t[2].numberNormal+t[2].numberAbnormal)),$("#power-normal").html(t[2].numberNormal+" ("+o+"%)");o=Math.round(100*t[1].numberNormal/(t[1].numberNormal+t[1].numberAbnormal));$("#humidity-percent").html(o+"%"),$("#humidity-count").html(t[1].numberAbnormal+"/"+(t[1].numberNormal+t[1].numberAbnormal)),$("#humidity-normal").html(t[1].numberNormal+" ("+o+"%)")}function MonitoringInit(){$.ajax({url:"http://132.145.121.108:8081/render/api/environmentMonitoring",dataType:"json",crossDomain:!0,contentType:"application/json",xhrFields:{withCredentials:!0}}).done(function(t){MonitoringTextUpdate(t);var o=document.getElementById("temperature").getContext("2d");temperature=new Chart(o,{type:"doughnut",data:{labels:["正常","異常"],datasets:[{data:[t[0].numberNormal,t[0].numberAbnormal],backgroundColor:["rgba(111, 245, 226, 1)","rgba(57, 83, 100, 1)"],borderColor:["rgba(111, 245, 2226, 0.5)","rgba(57, 83, 100, 0.5)"],borderWidth:1}]},options:{maintainAspectRatio:!1,cutout:40,plugins:{legend:{position:"bottom",labels:{boxWidth:12,color:"white",font:{size:12}}}}}});o=document.getElementById("powerMonitoring").getContext("2d");powerMonitoring=new Chart(o,{type:"doughnut",data:{labels:["正常","異常"],datasets:[{data:[t[1].numberNormal,t[1].numberAbnormal],backgroundColor:["rgba(0, 205, 249, 1)","rgba(57, 83, 100, 1)"],borderColor:["rgba(0, 205, 249, 0.5)","rgba(57, 83, 100, 0.5)"],borderWidth:1}]},options:{maintainAspectRatio:!1,cutout:40,plugins:{legend:{position:"bottom",labels:{boxWidth:12,color:"white",font:{size:12}}}}}});o=document.getElementById("humidityMonitoring").getContext("2d");humidityMonitoring=new Chart(o,{type:"doughnut",data:{labels:["正常","異常"],datasets:[{data:[t[2].numberNormal,t[2].numberAbnormal],backgroundColor:["rgba(241, 238, 127, 1)","rgba(57, 83, 100, 1)"],borderColor:["rgba(241, 238, 127, 0.5)","rgba(57, 83, 100, 0.5)"],borderWidth:1}]},options:{maintainAspectRatio:!1,cutout:40,plugins:{legend:{position:"bottom",labels:{boxWidth:12,color:"white",font:{size:12}}}}}})}).fail(function(t,o){console.log(t),console.log(o)})}window.addEventListener("load",function(t){MonitoringInit()});