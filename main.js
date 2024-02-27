// 弗迪电池推送平台 需要 置顶
home();
className("android.widget.TextView").text("企业微信").findOne().click();

text("弗迪电池推送平台").findOne().parent().click();

var { width, height } = device; 

while(1){
    sleep(2000);
    var startDakas = text("点击打卡").find();
    if(startDakas.length == 0){
         swipe(width / 2, height / 4, width / 2, height / 4 * 3, 500);// 模拟下拉刷新操作
    }else{
        startDakas[0].parent().click();
        break;
    }
}

// exit();

// 关闭问卷
sleep(15000);
//className("android.view.View").desc("javascript:;").findOne().click();

id("ler").findOne().click();
sleep(2000);
id("ler").findOne().click();
home();
home();
className("android.widget.TextView").text("企业微信").findOne().click();
text("弗迪电池推送平台").findOne().parent().click();
var { width, height } = device; 
while(1){
    sleep(2000);
    var startDakas = text("点击打卡").find();
    if(startDakas.length == 0){
         swipe(width / 2, height / 4, width / 2, height / 4 * 3, 500);// 模拟下拉刷新操作
    }else{
        startDakas[0].parent().click();
        break;
    }
}

//text("继续打卡").findOne().click()


// 找答题框
sleep(3000);
text("提交").findOne(); //相当于等待页面加载
sleep(3000);
var rootNode = className("android.view.View").depth(8).find();
console.log(rootNode.length)
var lastNode = rootNode[rootNode.length-2];
//var lastNode = rootNode
// console.log(lastNode.childCount());
// console.log(lastNode.child(lastNode.childCount()-1).text());
for(var i=0 ; i < lastNode.childCount(); i++)
{
    console.log(lastNode.child(i).className());
   
}


// 先试错
for(var i=0 ; i < lastNode.childCount(); i++)
{
    console.log(lastNode.child(i).className());
    if(lastNode.child(i).className() == "android.widget.TextView"){
        lastNode.child(i+1).child(0).click();
        console.log("123")
    }
}

// 最后一题抄写题
var xiestr = lastNode.child(lastNode.childCount()-2).child(0).text().split(".")[1];
console.log(xiestr);
lastNode.child(lastNode.childCount()-1).setText(xiestr);

className("android.widget.Button").text("提交").findOne().click();
sleep(3000);



if(className("android.view.View").desc("关闭").exists()){ //有时候会出现这玩意，先判断是否存在存在的话就把它删了
  className("android.view.View").desc("关闭").findOne().click();  
}

sleep(3000);
text("重答").findOne(); //相当于等待页面加载
sleep(3000);

// 再次答题
//var button_re = className("android.widget.Button").text("重答").findOne();
var answers = [];
if (1)
{
    // 重新获取最新页面
    rootNode = className("android.view.View").depth(8).find();
    lastNode = rootNode[rootNode.length-1];
    var answerString = lastNode.child(lastNode.childCount()-1).text();

    // 使用正则表达式提取答案
    var regex = /正确答案为:([A-Z])/g;
    var match;
    var answerList = [];

    while ((match = regex.exec(answerString)) !== null) {
        var answer = match[1];
        answerList.push(answer);
    }

    // 打印答案列表
    console.log(answerList);

    var numberList = [];

    for (var i = 0; i < answerList.length; i++) {
        var letter = answerList[i];
        var number = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        numberList.push(number);
    }

    console.log(numberList);

    className("android.widget.Button").text("重答").findOne().click();
    sleep(3000);
    
    text("提交").findOne(); //相当于等待页面加载
    sleep(3000);

    // 重新获取最新页面
    rootNode = className("android.view.View").depth(8).find();
    lastNode = rootNode[rootNode.length-2];

    // 选择正确答案
    var tiNum = 0;
    for(var i=0 ; i < lastNode.childCount(); i++)
    {
        sleep(100);
        if(lastNode.child(i).className() == "android.widget.TextView"){
            lastNode.child(i+numberList[tiNum]).child(0).click();
            tiNum++;
        }
    }

    // 提交
    className("android.widget.Button").text("提交").findOne().click();
    sleep(4000);


}

//className("android.widget.Button").text("继续打卡").findOne();

id("ler").findOne().click();
sleep(2000);
id("ler").findOne().click();
home();

console.log("over");
exit();

