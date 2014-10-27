/**
 * Created by mbeatty on 9/9/2014.
 */
$(document).ready(function(){
    $('.ie input[type="time"]').blur(function(event){
        var $this = $(this);
        var text = $this.val()
        if (text == '100A:00') {
        $this.val('1:00')
        }
    });

//    $('.chrome input[type=date]').attr('type', 'text').datepicker();
});