  function copyTextE() {
      var text = document.getElementById("text_e").innerText;
      var input = document.getElementById("input_e");
      input.value = text; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      alert("【邮箱已复制好了】①编辑:1237信息发送邮箱 ②菲菲立即联系您！");
    }
	function copyTextQ() {
      var text = document.getElementById("text_q").innerText;
      var input = document.getElementById("input_q");
      input.value = text; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      alert("【QQ已复制好了】①加QQ发1237 ②菲菲立即联系您！");
    }