function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "もう一度やってね！"; // デフォルトの値
            
            if (colour === "阪神タイガース" && number ===1) {
                result = "00	ゲラ	1995.09.25	183	86	右	左  <br>";
            } else if (colour === "阪神タイガース" && number === 2) {
                result = "中吉";
            } else if (colour === "阪神タイガース" && number === 3) {
                result = "凶";
            } else if (colour === "阪神タイガース" && number === 4) {
                result = "中吉";
            } else if (colour === "阪神タイガース" && number === 5) {
                result = "中吉";
            } else if (colour === "阪神タイガース" && number === 6) {
                result = "大凶";
            } else if (colour === "阪神タイガース" && number === 7) {
                result = "凶";
            } else if (colour === "阪神タイガース" && number === 8) {
                result = "大吉";
            } else if (colour === "阪神タイガース" && number === 9) {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
