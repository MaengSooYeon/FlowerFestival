function Recommend() 
    { 
      var x = parseInt(Math.random() * 16);
      switch(x)
      {
        case 1 : recommendsrc = "../image/SpringFestival1.png";
                                alert("당신에게 추천할 축제는 '광양 매화꽃축제입니다!!'");
                                break;
        case 2 : recommendsrc = "../image/SpringFestival2.png";
                                alert("당신에게 추천할 축제는 '진해 벚꽃축제입니다!!'");
                                break;
        case 3 : recommendsrc ="../image/SpringFestival3.png";
                                alert("당신에게 추천할 축제는 '제주 유채꽃축제입니다!!'");
                                break;
        case 4 : recommendsrc = "../image/SpringFestival4.png";  
                                alert("당신에게 추천할 축제는 '태안 튤립축제입니다!!'");            
                                break;
        case 5 : recommendsrc = "../image/SummerFestival1.png"; 
                                alert("당신에게 추천할 축제는 '부천 백만송이 장미축제입니다!!'");
                                break;
        case 6 : recommendsrc = "../image/SummerFestival2.png";
                                alert("당신에게 추천할 축제는 '고성 라벤더축제입니다!!'");
                                break;
        case 7 : recommendsrc = "../image/SummerFestival3.png"; 
                                alert("당신에게 추천할 축제는 '태백 해바라기축제입니다!!'");
                                break;
        case 8 : recommendsrc = "../image/SummerFestival4.png"; 
                                alert("당신에게 추천할 축제는 '세종 나라꽃무궁화축제입니다!!'");
                                break;
        case 9 : recommendsrc = "../image/AutumnFestival1.png"; 
                                alert("당신에게 추천할 축제는 '평창 백일홍축제입니다!!'");
                                break;
        case 10 : recommendsrc ="../image/AutumnFestival2.png"; 
                                alert("당신에게 추천할 축제는 '영광 불갑산 상사화축제입니다!!'");
                                break;
        case 11 : recommendsrc ="../image/AutumnFestival3.png";  
                                alert("당신에게 추천할 축제는 '태안 가을꽃축제입니다!!'");
                                break;
        case 12 : recommendsrc ="../image/AutumnFestival4.png"; 
                                alert("당신에게 추천할 축제는 '고양 가을꽃축제입니다!!'");
                                break;
        case 13 : recommendsrc ="../image/WinterFestival1.png"; 
                                alert("당신에게 추천할 축제는 '지리산 남원바래봉 눈꽃축제입니다!!'");
                                break;
        case 14 : recommendsrc ="../image/WinterFestival2.png"; 
                                alert("당신에게 추천할 축제는 '허브아일랜드 불빛동화축제입니다!!'");
                                break;
        case 15 : recommendsrc ="../image/WinterFestival3.png"; 
                                alert("당신에게 추천할 축제는 '청평 얼음꽃축제입니다!!'");
                                break;
        case 16 : recommendsrc ="../image/WinterFestival4.png"; 
                                alert("당신에게 추천할 축제는 '대구 이월드 별빛축제입니다!!'");
                                break;
        default : alert("버튼을 다시 눌러주세요")
      }
      document.recommendform.recommendbutton.value = '사진을 선택 중 입니다.';
      window.setTimeout("changeFestival();", 500);
    }
  function first()
    {
      document['recommend'].src = "../image/SpringFestival1.png";
    }
  function Choice(n){
    for(i=1; i<=2; i++){
        if(n==i)
            document.getElementById('div'+i).style.display='block';
        else
            document.getElementById('div'+i).style.display='none';
    }
  }