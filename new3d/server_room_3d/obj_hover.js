function OnObjHoverOut(e){e.material.emissive.setHex(e.currentHex),$("#device_tag").remove()}function OnObjHoverIn(e){e.currentHex=e.material.emissive.getHex(),e.material.emissive.setHex(3355443);e=`
	<div id="device_tag" class="infopanel" style="top:${event.clientY}px;left:${event.clientX}px;">
		<table class="table table-dark table-sm" style="margin:0px;border-style:solid;border-color:white;border-width:1px;z-index:20;">
			<tbody>
			  <tr>
				<td>${e.parent.tag_info}</td>
			  </tr>
			</tbody>
		</table>		
	</div>`;$("#main").append(e)}