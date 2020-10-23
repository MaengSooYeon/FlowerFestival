function ramdom(){
    for(i=0; i<2; i++)
    {
            ramdom = prompt("번호를 입력해주세요", "(예 : 1번)") 
            if(ramdom == "1번"){
                alert("해바라기 \n '향일화(向日花) · 산자연 · 조일화(朝日花)'라고도 한다.\n- 꽃말은 '숭배, 기다림'이다.");      
            }
            else if(ramdom == "2번"){
                alert("라벤더 \n 지중해 연안이 원산지. \n 라벤더속에 속하는 25여 종의 식물 모두를 말하거나 한 종을 말한다.\n- 꽃말은 '정절'이다.");
            }
            else if(ramdom == "3번"){
                alert("튤립 \n 백합과의 여러해살이풀로 산자고속 식물의 총칭이다. \n '울금향(鬱金香)'이라고도 한다.\n- 꽃말은 '사랑의 고백, 매혹, 영원한 애정, 경솔'이다.");
            }
            else if(ramdom == "4번"){
                alert("유채꽃 \n 겨자과에 속하는 식물로 밭에서 재배하는 두해살이풀로 \n'평지'라고도 한다.\n- 꽃말은 '쾌활'이다.");
            }
            else if(ramdom == "5번"){
                alert("상사화(相思花) \n '꽃이 필 때 잎은 없고 잎이 자랄 때는 \n 꽃이 피지 않으므로 서로 볼 수 없다'라는 뜻이다.\n- 꽃말은 '이뤄질 수 없는 사랑'이다.");
            }
            else if(ramdom == "6번"){
                alert("백일홍의 \n 꽃이 100일 동안 붉게 핀다는 뜻을 가지며 '백일초'라고도 부른다.\n- 꽃말은 '행복'이다.");
            }
            else{
                alert("번호를 다시 입력해주세요.");
            }
            break;
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