document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = 'your_password'; // 設定するパスワード
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');

    // パスワードが一度正しく入力されたかどうかを確認
    if (sessionStorage.getItem('passwordCorrect') === 'true') {
        passwordOverlay.style.display = 'none';
    } else {
        passwordOverlay.style.display = 'flex';
    }

    passwordSubmit.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            sessionStorage.setItem('passwordCorrect', 'true'); // パスワードが正しかったことを保存
            passwordOverlay.style.display = 'none';
        } else {
            passwordError.style.display = 'block';
        }
    });

    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            passwordSubmit.click();
        }
    });
    

    // オーバーレイのフェードアウト処理
const overlay = document.getElementById('overlay');
const movingMessage = document.getElementById('moving-message');

// メッセージを動かす
function moveMessage() {
    const containerWidth = overlay.offsetWidth;
    const messageWidth = movingMessage.offsetWidth;
    let startPosition = -messageWidth;
    movingMessage.style.left = startPosition + 'px';

    function animate() {
        startPosition += 5; // メッセージが動く速度
        if (startPosition > containerWidth) {
            startPosition = -messageWidth;
        }
        movingMessage.style.left = startPosition + 'px';
        requestAnimationFrame(animate);
    }
    animate();
}

// メッセージのアニメーションを開始
moveMessage();

// オーバーレイをフェードアウト
setTimeout(() => {
    overlay.style.transition = 'opacity 1s';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        localStorage.setItem('overlayShown', 'true'); // 表示したことを保存
    }, 1000);
}, 3000);


    const originalTargetDate = new Date('2024-05-31T00:00:00'); // 誕生日の日時を設定
    let targetDate = new Date(originalTargetDate); // クローンを作成
    const timer = document.getElementById('timer');
    const countdownTitle = document.querySelector('#countdown h2');

    function updateCountdown() {
        const now = new Date();
        let difference = targetDate - now;

        // 誕生日が過ぎたかどうかをチェック
        if (now.toDateString() === originalTargetDate.toDateString()) {
            countdownTitle.textContent = 'Happy Birthday!!';
            timer.querySelector('#days').textContent = '00';
            timer.querySelector('#hours').textContent = '00';
            timer.querySelector('#minutes').textContent = '00';
            timer.querySelector('#seconds').textContent = '00';
            return;
        } else if (difference < 0) {
            // 次の年の誕生日を設定
            targetDate.setFullYear(targetDate.getFullYear() + 1);
            difference = targetDate - now;
            countdownTitle.textContent = 'Countdown to Next Years Birthday...';
        } else {
            countdownTitle.textContent = 'Countdown to Your Birthday...';
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        timer.querySelector('#days').textContent = days.toString().padStart(2, '0');
        timer.querySelector('#hours').textContent = hours.toString().padStart(2, '0');
        timer.querySelector('#minutes').textContent = minutes.toString().padStart(2, '0');
        timer.querySelector('#seconds').textContent = seconds.toString().padStart(2, '0');
    }

    function checkInitialCountdown() {
        const now = new Date();
        if (now.toDateString() === originalTargetDate.toDateString()) {
            countdownTitle.textContent = 'Happy Birthday!!';
            timer.querySelector('#days').textContent = '00';
            timer.querySelector('#hours').textContent = '00';
            timer.querySelector('#minutes').textContent = '00';
            timer.querySelector('#seconds').textContent = '00';
        } else if (now > originalTargetDate) {
            targetDate.setFullYear(originalTargetDate.getFullYear() + 1);
            countdownTitle.textContent = 'Countdown to Next Years Birthday...';
        }
        updateCountdown();
    }

    checkInitialCountdown();
    setInterval(updateCountdown, 1000);

    function createBalloon() {
        const balloon = document.createElement('img');
        balloon.src = "images/balloon.png"; // スラッシュを使用してパスを修正
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 30 + 10}%`; // 位置をさらに左寄りに設定
        balloonsContainer.appendChild(balloon);

        const animationDuration = Math.random() * 5 + 5; // アニメーションの持続時間を5秒から10秒に変更
        balloon.style.transition = `transform ${animationDuration}s linear`;
        requestAnimationFrame(() => {
            balloon.style.transform = 'translateY(-120vh)';
        });

        setTimeout(() => {
            balloon.remove();
        }, animationDuration * 1000);
    }

    const balloonsContainer = document.querySelector('.balloons');

    // 5秒間バルーンを生成
    for (let i = 0; i < 10; i++) {
        setTimeout(createBalloon, i * 500);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".month-section");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.9) { // ビューポートの90%位置で発動
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // 初期チェック
});

