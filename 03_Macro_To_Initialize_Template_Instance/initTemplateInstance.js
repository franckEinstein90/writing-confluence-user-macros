## @noparams

#set($containerManagerClass=$action.class.forName('com.atlassian.spring.container.ContainerManager'))
#set($getInstanceMethod=$containerManagerClass.getDeclaredMethod('getInstance',null))
#set($containerManager=$getInstanceMethod.invoke(null,null))
#set($containerContext=$containerManager.containerContext)
#set($labelManager=$containerContext.getComponent('labelManager'))
#set($pageTitle = $renderContext.getPageTitle())

<script>
   var labels = { "aboriginalaffairs": "Aboriginal Affairs Secretariat",
            "ampd": "AMPD",
            "banff": "Banff",
            "capebretron": "Cape Breton Island"};

$(document).ready(function(){

   $( "input[name='variableValues.projectID']" ).change(function(){
       var projID = $(this).val();
       $( "input[name='variableValues.projectName']" ).change(function(){
             projID = projID + " - " + $(this).val();
             $("form[name='filltemplateform']").find("input[name='title']").val(projID);
       });
    });

    $(".custom_label_to_add").click(function(){
     var bUnitLabel = labels[jQuery(this).val()];
     jQuery.post(contextPath+"/json/addlabelactivity.action", {"entityIdString": "$content.id", "labelString": jQuery(this).val(), "atl_token": jQuery("#atlassian-token").attr("content") } ,function(){
       $("#flip").text(bUnitLabel);
       $("#panel").slideToggle();
     });
   });

   // go through the list of labels assigned to the page
   // and find out which ones are business units
   $("a.aui-label-split-main").each(function( index ) {
       if($(this).text() in labels){
          $("#flip").text(labels[$(this).text()]);
       }
   });


   $("#flip").click(function(){
     $("#panel").slideToggle();
   });
 });

  function createLabelOption(label, index, array){
     $("#labelOptions").html($("#labelOptions").html() + label);
  }
</script>

<style>
#panel, #flip {
  padding: 5px;
  text-align: center;
  background-color: #e5eecc;
  border: solid 1px #c3c3c3;
}

#panel {
  padding: 50px;
  display: none;
}
</style>





#if ($pageTitle)
<div id="flip">Click here to select a Business Unit</div>
<div id="panel">
<span id="#labelOptions">

<input type="checkbox" class="custom_label_to_add" value="aboriginalaffairs">Aboriginal Affairs</input>
<input type="checkbox" class="custom_label_to_add" value="ampd">AMPD</input>
<input type="checkbox" class="custom_label_to_add" value="banff">Banff</input>
<input type="checkbox" class="custom_label_to_add" value="capebreton">Cape Breton Island</input>
</span>
</div>
#end
