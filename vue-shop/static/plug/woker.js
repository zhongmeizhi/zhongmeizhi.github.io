var welcome = "Welcome to my blog. This is vue project (four) of wap. Just for practice.",
	num = 0,
	msg = "",
	welcomeLen = welcome.length,
	tot;

var wk = ()=>{
	if (num<welcomeLen) {
		msg += welcome[num];
		postMessage(msg);
		num++;
	} else{
		clearTimeout(tot);
	}
	tot = setTimeout(wk,50)
};

wk();
