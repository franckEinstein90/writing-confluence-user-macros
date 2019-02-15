## @noparams

#set($containerManagerClass=$action.class.forName('com.atlassian.spring.container.ContainerManager'))
#set($getInstanceMethod=$containerManagerClass.getDeclaredMethod('getInstance',null))
#set($containerManager=$getInstanceMethod.invoke(null,null))
#set($containerContext=$containerManager.containerContext)
#set($labelManager=$containerContext.getComponent('labelManager'))
#set($pageTitle = $renderContext.getPageTitle())

$action.getHelper().renderConfluenceMacro("{005_taxonomy_manager}")

<script>
$(document).ready(function(){

function makeTaxTermOption(taxTerm){
      var inputChoice = "<input type=\"radio\" class=\"custom_label_to_add\" value=\"" + taxTerm.confluenceLabel + "\">" + taxTerm.termName + "<\/input>";
      console.log(inputChoice);
      $("#labelOptions").append(inputChoice);
   }
   taxonomy.forEach(makeTaxTermOption);

  function extractConfluenceLabel(taxTerm){
    return taxTerm.confluenceLabel;
}

   var labels = taxonomy.map(extractConfluenceLabel);


   $( "input[name='variableValues.projectID']" ).change(function(){
       var projID = $(this).val();
       $( "input[name='variableValues.projectName']" ).change(function(){
             projID = projID + " - " + $(this).val();
             $("form[name='filltemplateform']").find("input[name='title']").val(projID);
       });
    });

    $(".custom_label_to_add").click(function(){
     var bUnitLabel = jQuery(this).val();
     //other business units are removed (if applicable)
     $("a.aui-label-split-main").each(function( index ) {
              if($(this).val() in labels){
                jQuery.post(contextPath+'/json/removelabelactivity.action',
                        {'entityIdString': '$content.id',
                        'labelIdString': $(this).text(),
                        'atl_token': jQuery('#atlassian-token').attr('content') });
              }
          });

     //Selected business unit label is added
     jQuery.post(contextPath+"/json/addlabelactivity.action",
                 {"entityIdString": "$content.id",
                  "labelString": jQuery(this).val(),
                  "atl_token": jQuery("#atlassian-token").attr("content") } ,
                   function(){
                           $("#flip").text(bUnitLabel);
                           $("#panel").slideToggle();
                           //Page is reloded to show changes
                          window.location.reload();
     });
   });

   // go through the list of labels assigned to the page
   // and find out which ones are business units
   $("a.aui-label-split-main").each(function( index ) {
       if($(this).text() in labels){
          var confLabel = $(this).text();
          $("#flip").text(confLabel);
       }
   });


   $("#flip").click(function(){
     $("#panel").slideToggle();
   });
 });


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
<span id="labelOptions">

</span>
</div>
#end
