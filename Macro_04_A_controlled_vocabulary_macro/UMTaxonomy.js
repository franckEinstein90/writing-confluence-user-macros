## @noparams
#set($tagListPage = $pageManager.getPage(326271087))

<script>

 function taxonomyTerm(rawInfoStr){
    var re = /\<td\>(.+)?\<\/td\>\<td\>(.+)\<\/td\>/;
    var vals = re.exec(rawInfoStr);
  //  console.log(vals)
    this.termName = vals[1];
    this.confluenceLabel = vals[2];
    this.Display = function(){
      alert(this.termName + "--" + this.confluenceLabel);
    }
  }

 var rawContent = '$tagListPage.getBodyAsString()';
 rawContent = rawContent.slice(
                 rawContent.indexOf("taxonomy") + 8,
                 rawContent.indexOf("/taxonomy") );

  var rawInfo =  rawContent.split("</tr><tr>").filter(
   function ( dataRow ) {
    return (dataRow.indexOf("<td>") > -1);
  });

  function strToTaxonomyTerm (rawInfoLine){
      var taxTerm = new taxonomyTerm(rawInfoLine);
       console.log("===>" + taxTerm.termName + "----" + taxTerm.confluenceLabel);
      return taxTerm;
  }
  var taxonomy =  rawInfo.map(strToTaxonomyTerm);


</script>
<span id="display">

</span>
