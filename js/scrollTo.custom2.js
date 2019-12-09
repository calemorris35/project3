jQuery(function(){
  // Target
  var $target = $('body');

// important code section

        //end of important code section for taking the user to a specific section horizontally on click

        $('#button-intro').click(function() {
        $target.scrollTo($('#intro') , 800);
  });

        $('#button-when').click(function() {
        $target.scrollTo($('#when') , 800);
  });

        $('#button-mining').click(function() {
        $target.scrollTo($('#mining') , 800);
  });

         $('#button_combo').click(function() {
        $target.scrollTo($('#page5') , 800);
  });

        $('#button2_new').click(function() {
        $target.scrollTo($('#page1') , 800);
  });
        $('#normal_done').click(function() {
        $target.scrollTo($('#page6') , 800);
  });
        $('#dry_done').click(function() {
        $target.scrollTo($('#page6') , 800);
  });
        $('#oily_done').click(function() {
        $target.scrollTo($('#page6') , 800);
  });
        $('#combo_done').click(function() {
        $target.scrollTo($('#page6') , 800);
  });


});
