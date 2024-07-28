// window.onload = (event) => {

//   window.scrollTo(0, 0);
//   let el = document.getElementById('greeting');
//   let date = new Date();
//   let hours = date.getHours();
//   let greet = 'こんにちは。';
//   if (5 <= hours && hours < 12) {
//     greet = 'おはようございます。';
//   } else if (18 <= hours || hours <  5) {
//     greet = 'こんばんは。';
//   }
//   el.innerHTML = greet;

//   clickKazari('present-l', 'p1');
//   clickKazari('present-m', 'p2');
//   clickKazari('present-s', 'p3');
//   clickKazari('kazari-s', 'p4');
//   clickKazari('kazari-l', 'p5');
//   clickKazari('bell-s', 'p6');
//   clickKazari('bell-l', 'p7');

//   function clickKazari(kazariName, id) {
//     document.getElementById(kazariName).addEventListener('click', () => {
//       hideMessage();
//       let result = document.getElementById(id);
//       result.classList.add('visible');
  
//       // メッセージのアニメーションが終了してからスクロールを調整
//       setTimeout(() => {
//         result.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }, 600); // アニメーションの時間と合わせる
//     });
//   }
  

//   let close = document.querySelectorAll(".message-close-x");
//   close.forEach((target) => {
//     target.addEventListener('click', () => {
//       hideMessage();
//     });
//   });

//   function hideMessage(){
//     let messagebox = document.querySelectorAll(".text");
//     messagebox.forEach((target) => {
//       target.classList.remove('visible');
//     });
//   }
// };

// function restoreScrollPosition() {
//   let savedPosition = localStorage.getItem('scrollPosition');
//   if (savedPosition !== null) {
//     window.scrollTo(0, parseInt(savedPosition));
//   }
// }

// window.onload = (event) => {
//   // 挨拶メッセージの設定
//   let el = document.getElementById('greeting');
//   let date = new Date();
//   let hours = date.getHours();
//   let greet = 'こんにちは。';
//   if (5 <= hours && hours < 12) {
//     greet = 'おはようございます。';
//   } else if (18 <= hours || hours <  5) {
//     greet = 'こんばんは。';
//   }
//   el.innerHTML = greet;

//   // クリックイベントの設定
//   clickKazari('present-l', 'p1');
//   clickKazari('present-m', 'p2');
//   clickKazari('present-s', 'p3');
//   clickKazari('kazari-s', 'p4');
//   clickKazari('kazari-l', 'p5');
//   clickKazari('bell-s', 'p6');
//   clickKazari('bell-l', 'p7');

//   function clickKazari(kazariName, id) {
//     document.getElementById(kazariName).addEventListener('click', () => {
//       hideMessage();
//       let result = document.getElementById(id);
//       result.classList.add('visible');
  
//       // メッセージのアニメーションが終了してからスクロールを調整
//       setTimeout(() => {
//         result.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }, 600); // アニメーションの時間と合わせる
//     });
//   }

//   let close = document.querySelectorAll(".message-close-x");
//   close.forEach((target) => {
//     target.addEventListener('click', () => {
//       hideMessage();
//     });
//   });

//   function hideMessage(){
//     let messagebox = document.querySelectorAll(".text");
//     messagebox.forEach((target) => {
//       target.classList.remove('visible');
//     });
//   }
// };

window.onload = (event) => {
  // 挨拶メッセージの設定
  let el = document.getElementById('greeting');
  setGreeting();

  // クリックイベントの設定
  setupClickEvents();

  // リセットボタンの設定
  document.getElementById('reset').addEventListener('click', () => {
    resetAll();
  });

  function setupClickEvents() {
    clickKazari('present-l', 'p1');
    clickKazari('present-m', 'p2');
    clickKazari('present-s', 'p3');
    clickKazari('kazari-s', 'p4');
    clickKazari('kazari-l', 'p5');
    clickKazari('bell-s', 'p6');
    clickKazari('bell-l', 'p7');
  
    let close = document.querySelectorAll(".message-close-x");
    close.forEach((target) => {
      target.addEventListener('click', () => {
        hideMessage();
      });
    });
  }

  function clickKazari(kazariName, id) {
    document.getElementById(kazariName).addEventListener('click', () => {
      hideMessage();
      let result = document.getElementById(id);
      result.classList.add('visible');
  
      // メッセージのアニメーションが終了してからスクロールを調整
      setTimeout(() => {
        result.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600); // アニメーションの時間に合わせて調整
    });
  }

  function hideMessage() {
    let messagebox = document.querySelectorAll(".text");
    messagebox.forEach((target) => {
      target.classList.remove('visible');
    });
  }

  function setGreeting() {
    let date = new Date();
    let hours = date.getHours();
    let greet;

    if (5 <= hours && hours < 12) {
      greet = 'おはようございます。';
    } else if (12 <= hours && hours < 18) {
      greet = 'こんにちは。';
    } else {
      greet = 'こんばんは。';
    }

    el.innerHTML = greet;
  }

  function resetAll() {
    // メッセージを隠す
    hideMessage();

    // 挨拶メッセージを再設定
    setGreeting();

    // ポップアップ内の最上部にスクロール
    let popup = document.querySelector('.text'); // ポップアップのクラス名やIDに合わせて調整してください
    if (popup) {
      popup.scrollTop = 0;
    }
  }
};

