# BOSS 自动分页 + 过滤已被同事沟通过的简历 脚本

var loadData = function(){
	if ($('.loadmore').html().indexOf("没有") < 0) {
		console.info("还没到底，再来一次～")
		window.scrollTo(0, document.body.scrollHeight);
    	setTimeout(loadData, 600);
	} else {
		console.info("到底了，只看没有没推过的简历")
		$('.iboss-goutongjilu').each(function(){
       		$(this).parent().parent().hide();
    	})
    	console.log("滚动到顶部");
    	document.body.scrollIntoView();
	}
};

loadData();
