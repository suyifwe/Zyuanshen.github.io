function jumpPage(searchValue) {
    window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
  }
  // 按Enter键,执行事件
  function entersearch(event){
      if (event.keyCode == 13)
      {
          to();
      }
  }
  // 按钮点击触发函数
  function to(){
      var searchValue = document.getElementById("searchInput").value;

      //window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
     jumpPage(searchValue);
     //alert(searchValue);
  }
