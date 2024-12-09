function checkFortune() {
            var select = document.getElementById('colour-select').value;
            var name = parseInt(document.getElementById('number-input').value, 10);
            var result = "もう一度やってね！"; // デフォルトの値
            
            if (select === "阪神タイガース" && name ==="投手") {
                result = "00	ゲラ	1995.09.25	183	86	右	左";
            } else if (select === "阪神タイガース" && name === "捕手") {
                result = "2	梅野　隆太郎	1991.06.17	173	79	右	右";
            } else if (select === "阪神タイガース" && name ==="内野手") {
                result = "0	木浪　聖也	1994.06.15	179	83	右	左";
            } else if (select === "阪神タイガース" && name === "外野手") {
                result = "1	森下　翔太	2000.08.14	182	89	右	右";
            } else if (select === "阪神タイガース" && name === "監督"){
                result = "80	岡田　彰布	1957.11.25	";
            } else if (select === "読売ジャイアンツ" && name === "投手") {
                result = "15	大勢	1999.06.29	183	90	右	右	";
            } else if (select === "読売ジャイアンツ" && name ==="捕手") {
                result = "22	小林　誠司	1989.06.07	178	86	右	右	";
            } else if (select === "読売ジャイアンツ" && name === "内野手") {
                result = "00	湯浅　大	2000.01.24	172	73	右	右";
            } else if (select === "読売ジャイアンツ" && name === "外野手") {
                result = "7	長野　久義	1984.12.06	180	85	右	右	";
            }else if (select === "読売ジャイアンツ" && name === "監督") {
                result = "83	阿部　慎之助	1979.03.20	";
            }


            document.getElementById('result-output').innerText = "このポジションの選手は【" + result + "】です";
        }
