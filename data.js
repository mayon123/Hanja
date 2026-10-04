// Vocabulary data. To add more: add a word line to a group, or copy a whole group block.
// Format: { hanja, reading, meaning, words: [ ["한국어", "English"], ... ] }
// Progress is saved per hanja+word, so editing/adding here never loses your scores.
window.HANJA_DATA = [
  {
    hanja: "所", reading: "소", meaning: "place; that which...",
    words: [
      ["주소", "address"],
      ["안내소", "information desk / information centre"],
      ["숙소", "accommodation / lodging"],
      ["명소", "famous place / attraction"],
      ["장소", "place / location"],
      ["소재하다", "to be located / situated"],
      ["소지품", "personal belongings"],
      ["소지하다", "to possess / to carry"],
      ["대여소", "rental station / rental shop"],
      ["소원", "wish / desire"],
      ["연구소", "research institute / laboratory"],
      ["소중하다", "to be precious / valuable"],
      ["관광안내소", "tourist information centre"],
      ["고소공포증", "acrophobia / fear of heights"],
    ],
  },
  {
    hanja: "小", reading: "소", meaning: "small / little",
    words: [
      ["소심하다", "to be timid / introverted"],
      ["소인", "child / young person (official term)"],
    ],
  },
  {
    hanja: "消", reading: "소", meaning: "extinguish / disappear / eliminate",
    words: [
      ["취소하다", "to cancel"],
      ["취소", "cancellation"],
      ["소식", "news / word / tidings"],
    ],
  },
  {
    hanja: "少", reading: "소", meaning: "few / little / young",
    words: [
      ["청소년", "teenager / adolescent / youth"],
      ["소년", "boy / youth"],
    ],
  },
  {
    hanja: "燒", reading: "소", meaning: "burn",
    words: [
      ["소주", "soju"],
      ["소맥", "somaek / soju + beer"],
    ],
  },
  {
    hanja: "掃", reading: "소", meaning: "sweep / clear away",
    words: [
      ["청소하다", "to clean / clean up"],
      ["청소기", "vacuum cleaner"],
      ["청소", "cleaning"],
    ],
  },
  {
    hanja: "素", reading: "소", meaning: "plain / usual",
    words: [
      ["평소", "normally / usual times"],
      ["평소에", "usually / ordinarily"],
    ],
  },
  {
    hanja: "紹", reading: "소", meaning: "continue / inherit / introduce",
    words: [
      ["소개하다", "to introduce"],
      ["소개", "introduction"],
      ["소개팅", "blind date"],
    ],
  },
  {
    hanja: "蔬", reading: "소", meaning: "vegetables / greens",
    words: [
      ["채소", "vegetable / vegetables"],
    ],
  },
  {
    hanja: "笑", reading: "소", meaning: "smile / laugh",
    words: [
      ["미소", "smile"],
    ],
  },
  {
    hanja: "逍", reading: "소", meaning: "stroll / wander",
    words: [
      ["소풍", "picnic / outing"],
      ["소풍 가다", "to go on a picnic"],
    ],
  },
  {
    hanja: "社", reading: "사", meaning: "company, society, organization",
    words: [
      ["회사", "company"],
      ["항공사", "airline"],
      ["보험사", "insurance company"],
      ["사교적", "sociable / outgoing"],
      ["사교적이다", "to be sociable / outgoing"],
      ["사장", "CEO / head of a company"],
      ["사장님", "business owner / boss"],
      ["여행사", "travel agency"],
      ["본사", "head office / headquarters"],
      ["회사원", "office worker / company employee"],
      ["사원", "employee / company worker"],
      ["신입 사원", "new employee"],
    ],
  },
  {
    hanja: "事", reading: "사", meaning: "affair, matter, business",
    words: [
      ["행사", "event"],
      ["사업", "business"],
      ["사고", "accident"],
      ["차 사고", "car accident"],
      ["사건", "incident / case"],
      ["사실", "fact"],
      ["식사", "meal"],
      ["식사하다", "to have a meal"],
      ["인사", "greeting"],
      ["인사하다", "to greet"],
      ["기사", "news article"],
      ["사연", "story / circumstances"],
      ["사무실", "office"],
    ],
  },
  {
    hanja: "使", reading: "사", meaning: "cause; send on a mission / envoy",
    words: [
      ["사용하다", "to use"],
      ["대사관", "embassy"],
      ["저승사자", "Grim Reaper"],
    ],
  },
  {
    hanja: "射", reading: "사", meaning: "shoot / eject / emit",
    words: [
      ["주사", "injection"],
      ["사격", "target shooting / marksmanship"],
    ],
  },
  {
    hanja: "詞", reading: "사", meaning: "word / words",
    words: [
      ["부사", "adverb"],
      ["명사", "noun"],
      ["동사", "verb"],
      ["형용사", "adjective"],
      ["가사", "lyrics"],
    ],
  },
  {
    hanja: "史", reading: "사", meaning: "history / chronicle / annals",
    words: [
      ["역사", "history"],
    ],
  },
  {
    hanja: "寫", reading: "사", meaning: "write / copy",
    words: [
      ["사진", "picture / photo"],
      ["사진을 찍다", "to take pictures"],
      ["사진 찍기 금지", "no photography / photography prohibited"],
      ["사진빨", "photo effect / looking good in photos"],
    ],
  },
  {
    hanja: "徙", reading: "사", meaning: "move one's abode / migrate",
    words: [
      ["이사하다", "to move house"],
      ["이사", "move / moving"],
      ["이사 가다", "to move house"],
      ["이사 오다", "to move in / move here"],
    ],
  },
  {
    hanja: "仕", reading: "사", meaning: "serve / perform a duty",
    words: [
      ["봉사", "volunteer work"],
    ],
  },
  {
    hanja: "瀉", reading: "사", meaning: "drain off / discharge",
    words: [
      ["설사", "diarrhea"],
    ],
  },
  {
    hanja: "舍", reading: "사", meaning: "house / dwelling",
    words: [
      ["기숙사", "dormitory"],
    ],
  },
  {
    hanja: "師", reading: "사", meaning: "teacher / master / specialist",
    words: [
      ["약사", "pharmacist"],
      ["의사", "doctor"],
      ["강사", "instructor / lecturer"],
      ["요리사", "cook / chef"],
    ],
  },
  {
    hanja: "士", reading: "사", meaning: "professional / specialist",
    words: [
      ["기사", "driver"],
      ["기사님", "driver (polite)"],
    ],
  },
  {
    hanja: "査", reading: "사", meaning: "investigate / examine / seek into",
    words: [
      ["검사", "inspection / examination / test"],
    ],
  },
  {
    hanja: "四", reading: "사", meaning: "four",
    words: [
      ["사", "four (Sino-Korean)"],
      ["사월", "April"],
    ],
  },
  {
    hanja: "獅", reading: "사", meaning: "lion",
    words: [
      ["사자", "lion"],
    ],
  },
  {
    hanja: "謝", reading: "사", meaning: "thank",
    words: [
      ["감사", "thanks / gratitude"],
      ["감사히", "gratefully / thankfully"],
    ],
  },
  {
    hanja: "司", reading: "사", meaning: "take charge of / control / manage",
    words: [
      ["상사", "boss / superior"],
    ],
  },
  {
    hanja: "詐", reading: "사", meaning: "cheat / defraud / swindle",
    words: [
      ["사기꾼", "scammer / fraudster"],
      ["사기 사건", "scam case / fraud incident"],
    ],
  },
  {
    hanja: "砂", reading: "사", meaning: "sand",
    words: [
      ["사탕", "candy"],
    ],
  },
  {
    hanja: "沙", reading: "사", meaning: "sand",
    words: [
      ["사과", "apple"],
    ],
  },
  {
    hanja: "辭", reading: "사", meaning: "words / speech",
    words: [
      ["건배사", "toast / toast speech"],
    ],
  },
  {
    hanja: "山", reading: "산", meaning: "mountain",
    words: [
      ["산", "mountain"],
      ["등산", "hiking"],
      ["등산하다", "to hike / to climb a mountain"],
      ["등산을 가다", "to go hiking"],
      ["등산로", "hiking trail"],
      ["산불", "forest fire"],
      ["산딸기", "wild strawberry / raspberry"],
      ["유달산", "Yudalsan"],
      ["피레네 산", "Pyrenees Mountains"],
      ["부산", "Busan"],
      ["아산", "Asan"],
      ["익산", "Iksan"],
    ],
  },
  {
    hanja: "産", reading: "산", meaning: "produce / made in",
    words: [
      ["임산부", "pregnant woman"],
      ["해산물", "seafood"],
      ["수산물", "seafood / marine products"],
      ["부동산", "real estate"],
      ["미국산 소고기", "US beef"],
      ["호주산 소고기", "Australian beef"],
      ["국내산 소고기", "domestic beef (Hanwoo)"],
      ["중국산", "made in China"],
    ],
  },
  {
    hanja: "散", reading: "산", meaning: "disperse",
    words: [
      ["산책", "walk / stroll"],
      ["산책하다", "to take a walk"],
      ["산책시키다", "to take for a walk"],
    ],
  },
  {
    hanja: "算", reading: "산", meaning: "calculate / count",
    words: [
      ["계산하다", "to pay / to calculate"],
    ],
  },
  {
    hanja: "傘", reading: "산", meaning: "umbrella / parasol",
    words: [
      ["우산", "umbrella"],
    ],
  },
  {
    hanja: "殺", reading: "살", meaning: "kill",
    words: [
      ["살인", "murder"],
    ],
  },
  {
    hanja: "三", reading: "삼", meaning: "three",
    words: [
      ["삼", "three (Sino-Korean)"],
      ["삼시 세끼", "three meals a day"],
    ],
  },
  {
    hanja: "蔘", reading: "삼", meaning: "ginseng",
    words: [
      ["삼계탕", "ginseng chicken soup"],
    ],
  },
  {
    hanja: "上", reading: "상", meaning: "above",
    words: [
      ["이상", "more than / above"],
      ["더 이상", "anymore / any longer / no more"],
      ["세상", "world"],
      ["향상시키다", "to improve"],
      ["옥상", "rooftop"],
      ["상사", "boss / superior"],
    ],
  },
  {
    hanja: "像", reading: "상", meaning: "shape / image",
    words: [
      ["상상", "imagination"],
      ["상상력", "imagination / creativity"],
      ["상상하다", "to imagine"],
      ["영상", "video"],
      ["동영상", "video"],
      ["동영상 강의", "online courses"],
    ],
  },
  {
    hanja: "想", reading: "상", meaning: "think",
    words: [
      ["상상", "imagination"],
      ["상상력", "imagination / creativity"],
      ["상상하다", "to imagine"],
      ["환상적이다", "to be fantastic"],
    ],
  },
  {
    hanja: "常", reading: "상", meaning: "normal / constant",
    words: [
      ["항상", "always"],
      ["일상", "daily life"],
      ["수상하다", "suspicious"],
    ],
  },
  {
    hanja: "傷", reading: "상", meaning: "wound",
    words: [
      ["상처", "wound"],
      ["상하다", "to get spoiled / to get damaged"],
    ],
  },
  {
    hanja: "床", reading: "상", meaning: "table / bed",
    words: [
      ["책상", "desk"],
    ],
  },
  {
    hanja: "象", reading: "상", meaning: "appearance",
    words: [
      ["인상", "impression"],
      ["인상적", "impressive"],
      ["인상적이다", "to be impressive"],
      ["첫인상", "first impression"],
      ["대상자", "target person / candidate"],
      ["상모", "sangmo (traditional hat in folk dance performance)"],
    ],
  },
  {
    hanja: "相", reading: "상", meaning: "mutual",
    words: [
      ["상관", "relationship / concern / connection"],
      ["상관없다", "to not matter / to have nothing to do with"],
    ],
  },
  {
    hanja: "狀", reading: "상", meaning: "form / state",
    words: [
      ["증상", "symptoms"],
      ["심장마비 증상", "heart attack symptom"],
      ["상황", "situation / circumstance"],
    ],
  },
  {
    hanja: "賞", reading: "상", meaning: "reward / appreciate",
    words: [
      ["상", "award / price"],
      ["우등상", "honor award / excellence award"],
      ["감상", "to appreciate (art / music / film)"],
    ],
  },
  {
    hanja: "色", reading: "색", meaning: "color",
    words: [
      ["색", "color"],
      ["색깔", "color"],
      ["검은색", "black"],
      ["빨간색", "red"],
      ["노란색", "yellow"],
      ["파란색", "blue"],
      ["하얀색", "white"],
      ["흰색", "white"],
      ["초록색", "green"],
      ["녹색", "green"],
      ["보라색", "purple"],
      ["회색", "gray"],
      ["주황색", "orange"],
      ["염색", "dyeing / hair dye"],
      ["염색하다", "to dye one's hair"],
      ["음색", "vocal tone / voice color"],
      ["색감", "color tone / color feel"],
      ["이색", "unique / out of the ordinary"],
      ["이색적이다", "to be unique / special"],
      ["이색 카페", "quirky cafe"],
      ["이색 콘서트", "unique concert"],
      ["색채의 축제", "Festival of Colors"],
    ],
  },
  {
    hanja: "塞", reading: "색", meaning: "block / stop up",
    words: [
      ["어색하다", "to be uncomfortable / awkward (語塞)"],
    ],
  },
];
