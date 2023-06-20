(function() {
  'use strict';

  // 获取包含特定 class 的父级 <div> 元素
  var accountListDiv = document.querySelector('div.account-list');

  // 如果找到了匹配的父级 <div> 元素
  if (accountListDiv) {
    // 获取该父级 <div> 元素下的 <ul> 元素
    var ulElement = accountListDiv.querySelector('ul');

    // 如果找到了 <ul> 元素
    if (ulElement) {
      // 获取所有的 <li> 元素
      var listItems = ulElement.getElementsByTagName('li');

      // 循环遍历 <li> 元素
      for (var i = listItems.length - 1; i >= 0; i--) {
        var listItem = listItems[i];
        var listItemContent = listItem.textContent.trim();

        // 如果 <li> 内容中不包含星号，则删除该元素
        if (listItemContent.indexOf('*') === -1) {
          listItem.parentNode.removeChild(listItem);
        }
      }
    }
  }
})();
