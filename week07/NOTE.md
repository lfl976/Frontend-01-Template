# 每周总结可以写在这里

1. 学习了通过flex为页面布局，在创建结束标签的时候确定元素的位置。确定好位置后通过images这个库绘制元素

2. 学习了从 https://www.w3.org/TR/?tag=css 这个网站查找css标准

   ```javascript
   var lis = document.getElementById("container").children;
   
   var result = [];
   
   for (let li of lis) {
     if (li.getAttribute("data-tag").match(/css/))
       result.push({
         name: li.children[1].innerText,
         url: li.children[1].children[0].href,
       });
   }
   console.log(result);
   
   let iframe = document.createElement("iframe");
   document.body.innerHTML = "";
   document.body.appendChild(iframe);
   
   function happen(element, event) {
     return new Promise(function (resolve) {
       let handler = () => {
         resolve();
         element.removeEventListener(event, handler);
       };
       element.addEventListener(event, handler);
     });
   }
   
   void (async function () {
     for (let standard of standards) {
       iframe.src = standard.url;
       console.log(standard.name);
       await happen(iframe, "load");
     }
   })();
   ```

   

