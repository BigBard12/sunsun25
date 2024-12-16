function checkFortune() {
            var position = document.getElementById('position-select').value;
            var league = document.getElementById('league-select').value;
            var result = "エラー"; // デフォルトの値
            
            if(position === "投手" && league ==="セリーグ") {
               result = "18　読売ジャイアンツ　菅野　智之（すがの・ともゆき）ー4年ぶり5度目";
                        <img src==018_41745137.jpg>
            }else if (position === "投手" && league === "パリーグ") {
               result = "35 福岡ソフトバンクホークス Ｌ．モイネロ（LIVAN MOINELO）ー初受賞";
            }else if (position === "捕手" && league === "セリーグ") {
               result = "50　横浜DeNAベイスターズ　山本　祐大（やまもと・ゆうだい）ー初受賞";
            }else if (position === "捕手" && league === "パリーグ") {
               result = "19　福岡ソフトバンクホークス　甲斐　拓也（かい・たくや）ー2年ぶり7度目";
            }else if (position === "一塁手" && league ==="セリーグ") {
               result = "25　読売ジャイアンツ　岡本　和真（おかもと・かずま）ー初受賞（他に三塁手で2度）";
            }else if (position === "一塁手" && league === "パリーグ") {
               result = "25　福岡ソフトバンクホークス　山川　穂高（やまかわ・ほたか）ー初受賞";
            }else if (position === "二塁手" && league === "セリーグ") {
               result = "2　読売ジャイアンツ　吉川　尚輝（よしかわ・なおき）ー初受賞";
            }else if (position === "二塁手" && league === "パリーグ") {
               result = "0　東北楽天ゴールデンイーグルス　小深田　大翔（こぶかた・ひろと）ー初受賞";
            }else if (position === "三塁手" && league === "パリーグ"){
               result = "6　読売ジャイアンツ　坂本　勇人（さかもと・はやと）ー初受賞（他に遊撃手で5度）";
            }else if (position === "三塁手" && league === "パリーグ") {
               result = "24　福岡ソフトバンクホークス　栗原　陵矢（くりはら・りょうや）ー初受賞";
            }else if (position === "遊撃手" && league === "セリーグ") {
               result = "61　広島東洋カープ　矢野　雅哉（やの・まさや）ー初受賞";
            }else if (position === "遊撃手" && league === "パリーグ") {
               result = "6　埼玉西武ライオンズ　源田　壮亮（げんだ・そうすけ）ー7連続7度目";
            } else if (position === "外野手1" && league ==="セリーグ") {
               result = "9 広島東洋カープ 秋山　翔吾（あきやま・しょうご）ー初受賞（他にパ外野手で6度）";
            }else if (position === "外野手1" && league === "パリーグ") {
               result = "8　東北楽天ゴールデンイーグルス　辰己　涼介（たつみ・りょうすけ）ー4年連続4度目";
            }else if (position === "外野手2" && league === "セリーグ") {
               result = "1　中日ドラゴンズ　岡林　勇希（おかばやし・ゆうき）ー3年連続3度目";
            }else if (position === "外野手2" && league === "パリーグ") {
               result = "23　福岡ソフトバンクホークス　周東　佑京（しゅうとう・うきょう）ー初受賞";
            }else if (position === "外野手3" && league === "セリーグ") {
               result = "5　阪神タイガース　近本　光司（ちかもと・こうじ）ー4年連続4度目";
            }else if (position === "外野手3" && league === "パリーグ") {
               result = "66　北海道日本ハムファイターズ　万波　中正（まんなみ・ちゅうせい）－2年連続2度目";
            } 


            document.getElementById('result-output').innerText = "このポジションの受賞選手は【" + result + "】です";
        }
