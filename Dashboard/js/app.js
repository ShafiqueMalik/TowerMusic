function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
        $('.avatar-preview').css('background-image', "url(" + e.target.result + ")");
        $(".avatar-preview .fa").hide();
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}



$(document).ready(function () {
    $("#avatar").change(function () {
        readURL(this);
    });
    $(".avatar-preview").click(function () {
        $(".plus-con").trigger("click");
        $(this).off("click");
    })
})