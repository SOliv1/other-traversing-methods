{"filter":false,"title":"script.js","tooltip":"/js/script.js","undoManager":{"mark":37,"position":37,"stack":[[{"start":{"row":0,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["$(document).ready(function(){",""," // put your code here","","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["$(document).ready(function(){",""," // put your code here","","});"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":130,"column":0},"action":"insert","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","jQuery-traversing-mt-dom/03-other_traversing_methods/challenge_a/js/script.js ","Find file ","Copy path "," NielMc initial commit ","67eb789 on 21 Sep 2017 ","1 contributor ","46 lines (28 sloc) 951 Bytes ","Raw","Blame","History","","","//waits until page is ready","","$(document).ready(function(){","","  ","","//will need to comment out some code when trying to view effects on theeir own",""," ","","",""," //hides all panels when a panel is clicked","","$(\".theButton\").click(function(){","","  $(\"#panel .container\").siblings().hide();","","   })","","","","","","//hides only the panel that was clicked","","  $(\".theButton\").click(function(){","","  $(this).hide();","","   })","","","","//adds  a fadeTo to all panels when a panel is clicked","","$(\".theButton\").click(function(){","","\t$  (\"#panel .container\").siblings().fadeTo(1000, .5);","","   });","","","","","","//restores all panels to full opacity when reset button clicked ","","$(\".superButton\").click(function(){","","\t$(\"#panel .container\").siblings().fadeTo(1000,1);\t","","   });","","","","//turns panel background black on mouseenter","","$(\".theButton\").mouseenter(function(){","","\t$(this).addClass(\"makeBlack\");","","   });","","",""," //returns to original colour on mouseout ","","$(\".theButton\").mouseout(function(){","","\t$(this).removeClass(\"makeBlack\");","","   });","","","","      ","","","","","","});","","","","","","","","© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":3}],[{"start":{"row":117,"column":0},"end":{"row":130,"column":0},"action":"remove","lines":["© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":4},{"start":{"row":116,"column":0},"end":{"row":117,"column":0},"action":"remove","lines":["",""]},{"start":{"row":115,"column":0},"end":{"row":116,"column":0},"action":"remove","lines":["",""]},{"start":{"row":114,"column":0},"end":{"row":115,"column":0},"action":"remove","lines":["",""]},{"start":{"row":113,"column":0},"end":{"row":114,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":112,"column":0},"end":{"row":113,"column":0},"action":"remove","lines":["",""],"id":5},{"start":{"row":111,"column":0},"end":{"row":112,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":107,"column":0},"end":{"row":108,"column":0},"action":"remove","lines":["",""],"id":6},{"start":{"row":106,"column":0},"end":{"row":107,"column":0},"action":"remove","lines":["",""]},{"start":{"row":105,"column":0},"end":{"row":106,"column":0},"action":"remove","lines":["",""]},{"start":{"row":104,"column":0},"end":{"row":105,"column":0},"action":"remove","lines":["",""]},{"start":{"row":103,"column":6},"end":{"row":104,"column":0},"action":"remove","lines":["",""]},{"start":{"row":103,"column":5},"end":{"row":103,"column":6},"action":"remove","lines":[" "]},{"start":{"row":103,"column":4},"end":{"row":103,"column":5},"action":"remove","lines":[" "]},{"start":{"row":103,"column":0},"end":{"row":103,"column":4},"action":"remove","lines":["    "]},{"start":{"row":102,"column":0},"end":{"row":103,"column":0},"action":"remove","lines":["",""]},{"start":{"row":101,"column":0},"end":{"row":102,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":100,"column":0},"end":{"row":101,"column":0},"action":"remove","lines":["",""],"id":7}],[{"start":{"row":95,"column":36},"end":{"row":96,"column":0},"action":"remove","lines":["",""],"id":8}],[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"remove","lines":["",""],"id":9},{"start":{"row":90,"column":0},"end":{"row":91,"column":0},"action":"remove","lines":["",""]},{"start":{"row":89,"column":6},"end":{"row":90,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":89,"column":6},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":90,"column":0},"end":{"row":90,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":86,"column":0},"end":{"row":87,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":81,"column":0},"end":{"row":82,"column":0},"action":"remove","lines":["",""],"id":12},{"start":{"row":80,"column":0},"end":{"row":81,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":75,"column":35},"end":{"row":76,"column":0},"action":"remove","lines":["",""],"id":13}],[{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"remove","lines":["",""],"id":14},{"start":{"row":67,"column":6},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"remove","lines":["",""],"id":15}],[{"start":{"row":63,"column":33},"end":{"row":64,"column":0},"action":"remove","lines":["",""],"id":16}],[{"start":{"row":61,"column":54},"end":{"row":62,"column":0},"action":"remove","lines":["",""],"id":17}],[{"start":{"row":58,"column":0},"end":{"row":59,"column":0},"action":"remove","lines":["",""],"id":18},{"start":{"row":57,"column":5},"end":{"row":58,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":57,"column":5},"end":{"row":57,"column":6},"action":"insert","lines":[";"],"id":19}],[{"start":{"row":53,"column":35},"end":{"row":54,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":51,"column":39},"end":{"row":52,"column":0},"action":"remove","lines":["",""],"id":21}],[{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"remove","lines":["",""],"id":22}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":23}],[{"start":{"row":45,"column":5},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":24}],[{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"insert","lines":[";"],"id":25}],[{"start":{"row":41,"column":33},"end":{"row":42,"column":0},"action":"remove","lines":["",""],"id":26}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":27},{"start":{"row":35,"column":1},"end":{"row":36,"column":0},"action":"remove","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"remove","lines":[" "]},{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":33,"column":78},"end":{"row":34,"column":0},"action":"remove","lines":["",""],"id":28}],[{"start":{"row":31,"column":2},"end":{"row":32,"column":0},"action":"remove","lines":["",""],"id":29},{"start":{"row":31,"column":1},"end":{"row":31,"column":2},"action":"remove","lines":[" "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"remove","lines":[" "]},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"remove","lines":["",""]},{"start":{"row":29,"column":29},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":27,"column":27},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":30}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":31}],[{"start":{"row":0,"column":0},"end":{"row":25,"column":0},"action":"remove","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","jQuery-traversing-mt-dom/03-other_traversing_methods/challenge_a/js/script.js ","Find file ","Copy path "," NielMc initial commit ","67eb789 on 21 Sep 2017 ","1 contributor ","46 lines (28 sloc) 951 Bytes ","Raw","Blame","History",""],"id":32}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":33}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":34}],[{"start":{"row":43,"column":6},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["   "]},{"start":{"row":44,"column":3},"end":{"row":45,"column":0},"action":"insert","lines":["",""]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":45,"column":3},"end":{"row":65,"column":4},"action":"insert","lines":["//will wait uuntil page ready",""," $(document).ready(function(){","","","","    /*when table header is clicked , removes selection class from all other table rows and","","      adds the selection class to this table headers row only*/","","     $(\"th\").click(function(){","","     \t$(\"tr\").children().removeClass(\"selection\")","","    \t$(this).siblings().addClass(\"selection\");","","","","  });",""," });"],"id":36}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":37}],[{"start":{"row":60,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["",""],"id":38},{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":490,"scrollleft":0,"selection":{"start":{"row":59,"column":0},"end":{"row":59,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":99,"mode":"ace/mode/javascript"}},"timestamp":1567693934321,"hash":"660025946782b47077e4b3f31c72b0d64606c7e5"}