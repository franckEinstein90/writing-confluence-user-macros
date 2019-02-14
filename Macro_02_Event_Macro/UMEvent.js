## Macro has a body: Y 
## Body processing: Rendered
##
## Developed by: Franck Binard
## Date created: dd/mm/yyyy
## Installed by: Franck Binard

## @param fromDate:title=From Date|type=date|desc=Start of Date Range - Format: dd/mm/YYYY |required=true
## @param toDate:title= To Date|type=date|desc=End of Date Range - Format: dd/mm/YYYY |required=true
## @param shortTitle:title= Event Title|type=string|desc=Short Description of Event|required=true
## @param showInBody:title= Display this range in your page|type=boolean|desc=Display on the page |required=true

#set($fromDate= $paramfromDate)
#set($toDate= $paramtoDate)
#set($eventTitle=$paramshortTitle)
#set($showInBody = $paramshowInBody)

#if ($showInBody == false)
   <span class="dateRange" style="display: none">
#else
   <span class="dateRange" style="display: inline">
#end
Begin Date:<span class="beginDate">$fromDate</span>
<BR/>
End Date:<span class="endDate">$toDate</span>
<BR/>
<span class="eventTitle">$eventTitle</span>
<span class="eventDesc">
$body
</span>
</span>

