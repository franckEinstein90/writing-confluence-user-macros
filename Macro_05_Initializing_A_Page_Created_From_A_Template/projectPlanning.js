## @noparams

#set ($containerManagerClass = $action.class.forName('com.atlassian.spring.container.ContainerManager'))
#set ($getInstanceMethod=$containerManagerClass.getDeclaredMethod('getInstance', null))
#set ($containerManager = $getInstanceMethod.invoke(null, null))
#set ($containerContext=$containerManager.containerContext)

#set ($testVar = $content.getId().toString())
#set ($contentSelector = $content.getSelector())

<span>$contentSelector.toString()</span>
#set ($pageHistory = $content.getHistory())
#set ($creator = $pageHistory.getCreatedBy().getDisplayName())

<span>$creator</span>


<script>

   $(document).ready(function(){

    var labelArray = labels.split(";");
    labelArray.forEach(createLabelOption);
  });

  function createLabelOption(label, index, array){
     $("#labelOptions").html($("#labelOptions").html() + label);
  }
</script>
