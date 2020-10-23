var count = 0;
function myFunction(){
for(i=0; i<7; i++)
{
        quiz1 = prompt("광양 매화꽃축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)") 
        if(quiz1 == "벚꽃" || quiz1 == "매화꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
        
        quiz2 = prompt("제주 유채꽃축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz2 == "유채꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
 
        quiz3 = prompt("부천 백만송이 장미축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz3 == "장미꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
 
        quiz4 = prompt("고성 라벤더축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz4 == "라벤더" || quiz4 == "라벤더꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
  
        quiz5 = prompt("평창 백일홍축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz5 == "백일홍" || quiz5 == "백일홍꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }

        quiz6 = prompt("영광 불갑산 상사화축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz6 == "상사화" || quiz6 == "상사화꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
  
        quiz7 = prompt("허브아일랜드 불빛동화 축제는 무슨 꽃을 주제로 한 축제인가요?", "(예 : 장미꽃)")
        if(quiz7 == "허브" || quiz7 == "허브꽃"){
            alert("정답입니다~!");
            count++; 
        }
        else{
            alert("아쉽게도 틀렸습니다ㅜ_ㅜ");
        }
        break;
    }
}

function score(){
    if(count==7){
      alert("맞은 개수 : " + count + "개\n축하합니다 !! 축제에 대해 잘 알고 계시는군요!!");
    }
    else if (count < 7 && count > 4){
      alert("맞은 개수 : " + count + "개\n아깝지만 그래도 잘하셨습니다!!");
    }
    else if (count < 3 && count >= 0){
      alert("맞은 개수 : " + count + "개\n다시 한번 도전해볼까요?")
    }
  }

function Choice(n){
    for(i=1; i<=2; i++){
        if(n==i)
            document.getElementById('div'+i).style.display='block';
        else
            document.getElementById('div'+i).style.display='none';
    }
  }