

function clickBtn(){

  const button =$(".btn");
  button.click(function() {
    $(this).siblings(".text").toggleClass("display");
  });
}


function init() {

  clickBtn();
}

$(document).ready(init);
