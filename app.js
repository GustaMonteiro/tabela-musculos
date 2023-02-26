const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button')
const cardList = document.querySelector('#card-list');
const searchMethod = document.querySelector('#search-method');

const changeNumberOfColumns = num => {
  return function () {
    cardList.classList.remove('row-cols-md-2');
    cardList.classList.remove('row-cols-md-3');
    cardList.classList.remove('row-cols-md-4');
    cardList.classList.remove('row-cols-md-5');

    cardList.classList.add(`row-cols-md-${num}`);
  }
}

for (let i = 2; i <= 5; i++) {
  const button = document.querySelector(`#show-${i}`);
  button.addEventListener('click', changeNumberOfColumns(i));
}

const allCards = [];

const musclesJson = JSON.parse('[{"name": "Subescapular", "origin": "Fossa Subescapular", "insertion": "Tubérculo menor do úmero (manguito rotador)", "inervation": "Nervo subescapular", "action": "Rotação medial e Adução do ombro", "movePlan": "Transverso", "imageId": 0}, {"name": "Supra-espinhal", "origin": "Fossa supra espinhal da Escápula", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo supraescapular", "action": "Abdução do ombro", "movePlan": "Frontal", "imageId": 1}, {"name": "Infra-espinhal", "origin": "Superfície posterior da escápula", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo supraescapular", "action": "Rotação lateral e Adução do ombro", "movePlan": "Transverso", "imageId": 2}, {"name": "Redondo menor", "origin": "Escápula posterior, borda lateral", "insertion": "Tubérculo maior do úmero (manguito rotador)", "inervation": "Nervo axilar", "action": "Rotação lateral e Adução do ombro", "movePlan": "Transverso", "imageId": 3}, {"name": "Redondo maior", "origin": "Face Posterior do ângulo inferior da Escápula", "insertion": "Lábio medial do sulco intertubercu lar do úmero", "inervation": "Nervo subescapular", "action": "Rotação medial e Adução do ombro", "movePlan": "Sagital, Frontal e transverso", "imageId": 4}, {"name": "Deltóide", "origin": "Terço final da clavícula, Acrômio e espinha da Escápula", "insertion": "Tuberosidade deltoidea do Úmero", "inervation": "Nervo axilar", "action": "Abdução, extensão e flexão", "movePlan": "Frontal, sagital e transverso", "imageId": 5}, {"name": "Bíceps braquial", "origin": "Tubérculo supra glenoidal e Processo coracoide", "insertion": "Tuberosidade Do rádio", "inervation": "Nervo muscu- locutâneo", "action": "Flexão e supinação do antebraço", "movePlan": "Transverso, sagital e Frontal", "imageId": 6}, {"name": "Braquial", "origin": "Face anterior da Metade distal do Úmero", "insertion": "Processo coronoide da ulna", "inervation": "Nervo muscu- locutâneo", "action": "Flexão do antebraço", "movePlan": "Sagital", "imageId": 7}, {"name": "Coracobraquial", "origin": "Processo coracoide da Escápula", "insertion": "Terço médio do úmero", "inervation": "Nervo muscu- locutâneo", "action": "Flexão e adução do ombro", "movePlan": "Transverso", "imageId": 8}, {"name": "Tríceps braquial", "origin": "Tubérculo infragle- noidal, face Posterior do úmero e sulco radial", "insertion": "Olécrano", "inervation": "Nervo radial", "action": "Extensão do antebraço", "movePlan": "Sagital, Frontal e transverso", "imageId": 9}, {"name": "Braquiorradial", "origin": "Crista Supraepi- condilar lateral do Úmero", "insertion": "Processo estiloide do Rádio", "inervation": "Nervo radial", "action": "Pronação, supinação e flexão do antebraço", "movePlan": "Sagital e transverso", "imageId": 10}, {"name": "Extensor radial longo do carpo", "origin": "Crista Supraepi- condilar lateral do Úmero", "insertion": "Base do 2° metacarpal", "inervation": "Nervo radial", "action": "Extensão do punho e abdução da mão (desvio radial)", "movePlan": "Sagital, transverso e frontal", "imageId": 11}, {"name": "Extensor radial curto do carpo", "origin": "Epicôndilo lateral do Úmero", "insertion": "Base do 3° metacarpal", "inervation": "Nervo radial", "action": "Extensão do punho", "movePlan": "Sagital e Frontal", "imageId": 12}, {"name": "Extensor ulnar do carpo", "origin": "Epicôndilo lateral do Úmero", "insertion": "Base do 5° metacarpal", "inervation": "Nervo radial", "action": "Extensão e Adução do punho (desvio ulnar)", "movePlan": "Sigital e Frontal", "imageId": 13}, {"name": "Extensor dos dedos", "origin": "Epicôndilo lateral do úmero", "insertion": "Falanges média e distal do 2° Ao 5° dedos", "inervation": "Nervo radial", "action": "Extensão do punho", "movePlan": "Sagital", "imageId": 14}, {"name": "Extensor do dedo mínimo", "origin": "Epicôndilo lateral do úmero", "insertion": "Tendão extensor do 5° dedo", "inervation": "Nervo radial", "action": "Extensão do 5° dedo", "movePlan": "Sagital", "imageId": 15}, {"name": "Extensor do dedo indicador", "origin": "Face Posterior da ulna", "insertion": "Tendão extensor do 2° dedo", "inervation": "Nervo radial", "action": "Extensão do 2° dedo", "movePlan": "Sagital e transverso", "imageId": 16}, {"name": "Extensor curto do polegar", "origin": "Face Posterior do rádio", "insertion": "Face dorsal da falange Proximal do polegar", "inervation": "Nervo radial", "action": "Extensão do polegar", "movePlan": "Sagital e Frontal", "imageId": 17}, {"name": "Extensor longo do polegar", "origin": "Face Posterior do 1/3 médio da ulna", "insertion": "Falange distal do Polegar", "inervation": "Nervo radial", "action": "Extensão do polegar", "movePlan": "Sagital, Frontal e transverso", "imageId": 18}, {"name": "Pronador redondo", "origin": "Epicôndilo medial do úmero e processo coronoide da ulna", "insertion": "Metade da face lateral do rádio", "inervation": "Nervo mediano", "action": "Pronação e flexão do antebraço", "movePlan": "Transverso e sagital", "imageId": 19}, {"name": "Pronador quadrado", "origin": "1/4 da face anterior da ulna", "insertion": "1/4 da face anterior do rádio", "inervation": "Nervo mediano", "action": "Pronação do antebraço", "movePlan": "Transverso", "imageId": 20}, {"name": "Palmar longo", "origin": "Epicôndilo medial do Úmero", "insertion": "Aponeurose palmar", "inervation": "Nervo mediano", "action": "Flexão de punho", "movePlan": "Sagital", "imageId": 21}, {"name": "Flexor radial do carpo", "origin": "Epicôndilo medial do úmero", "insertion": "Base do 2° metacarpal", "inervation": "Nervo mediano", "action": "Flexão e abdução de punho (desvio radial)", "movePlan": "Sagital, Frontal e transverso", "imageId": 22}, {"name": "Flexor ulnar do carpo", "origin": "Epicôndilo medial e olécrano", "insertion": "Pisiforme, hamato e base do 5° metacarpal", "inervation": "Nervo ulnar", "action": "Flexão e adução do punho (desvio ulnar)", "movePlan": "Sagital e Frontal", "imageId": 23}, {"name": "Flexor superficial dos dedos", "origin": "Epicôndilo medial e Processo coronoide da ulna", "insertion": "Base da falange média do 2° Ao 5° dedos", "inervation": "Nervo mediano", "action": "Flexão de punho e dedos", "movePlan": "Sagital", "imageId": 24}, {"name": "Flexor profundo dos dedos", "origin": "Face anterior da ulna e Membrana interóssea", "insertion": "Base da falange distal do 2° Ao 5° dedos", "inervation": "Nervo mediano e ulnar", "action": "Flexão de punho e dedos", "movePlan": "Sagital", "imageId": 25}, {"name": "Flexor longo do polegar", "origin": "Face anterior do rádio e membrana interóssea", "insertion": "Falange distal do Polegar", "inervation": "Nervo mediano", "action": "Flexão do polegar", "movePlan": "Sagital e Frontal", "imageId": 26}, {"name": "Abdutor longo do polegar", "origin": "Face Posterior do rádio e ulna e membrana interóssea", "insertion": "Base do 1° metacarpal", "inervation": "Nervo radial", "action": "Abdução do polegar", "movePlan": "Frontal, sagital e transverso", "imageId": 27}, {"name": "Ancôneo", "origin": "Epicôndilo lateral do Úmero", "insertion": "Olécrano", "inervation": "Nervo radial", "action": "Extensão do antebraço", "movePlan": "Sagital", "imageId": 28}, {"name": "Supinador", "origin": "Epicôndilo lateral do úmero", "insertion": "Face lateral superior do rádio", "inervation": "Nervo radial", "action": "Supinação do antebraço", "movePlan": "Transverso", "imageId": 29}, {"name": "Abdutor curto do polegar", "origin": "Escafoide e Trapézio", "insertion": "Falange Proximal do polegar", "inervation": "Nervo mediano", "action": "Abdução e flexão do polegar", "movePlan": "---", "imageId": 30}, {"name": "Flexor curto do polegar", "origin": "Trapézio, trapezoide e capitato", "insertion": "Falange Proximal do polegar", "inervation": "Nervo mediano", "action": "Flexão do polegar", "movePlan": "---", "imageId": 31}, {"name": "Oponente do polegar", "origin": "Trapézio", "insertion": "1° metacarpal", "inervation": "Nervo mediano", "action": "Oposição do polegar", "movePlan": "---", "imageId": 32}, {"name": "Adutor do polegar", "origin": "2° e 3° metacarpal e Capitato", "insertion": "Falange Proximal do polegar", "inervation": "Nervo ulnar", "action": "Adução do polegar", "movePlan": "---", "imageId": 33}, {"name": "Abdutor do dedo mínimo", "origin": "Pisiforme e tendão flexor ulnar do carpo", "insertion": "Falange Proximal do dedo mínimo", "inervation": "Nervo ulnar", "action": "Abdução do dedo mínimo", "movePlan": "---", "imageId": 34}, {"name": "Palmar curto", "origin": "Aponeurose palmar", "insertion": "Pele da Margem medial da palma da Mão", "inervation": "Nervo ulnar", "action": "Auxilia o movimento em garra", "movePlan": "---", "imageId": 35}, {"name": "Oponente do dedo mínimo", "origin": "Hamato", "insertion": "5° metacarpal", "inervation": "Nervo ulnar", "action": "Oposição do dedo mínimo", "movePlan": "---", "imageId": 36}, {"name": "Flexor curto do dedo mínimo", "origin": "Hamato", "insertion": "Falange Proximal do dedo mínimo", "inervation": "Nervo ulnar", "action": "Flexão do dedo mínimo", "movePlan": "---", "imageId": 37}, {"name": "Lumbricais", "origin": "Tendões Flexores dos dedos", "insertion": "Borda radial No dorso dos dedos", "inervation": "Nervo ulnar e mediano", "action": "Flexão e extensão do 2° ao 5° dedos", "movePlan": "---", "imageId": 38}, {"name": "Interósseos palmares", "origin": "Extensão dos ossos metacárpicos dos dedos", "insertion": "Base da falange Proximal", "inervation": "Nervo ulnar", "action": "Adução dos dedos", "movePlan": "---", "imageId": 39}, {"name": "Interósseos dorsais", "origin": "Borda ulnar e radial dos Ossos metacárpicos", "insertion": "Base da falange Proximal", "inervation": "Nervo ulnar", "action": "Abdução dos dedos", "movePlan": "---", "imageId": 40}, {"name": "Platisma", "origin": "Base da Mandíbula", "insertion": "Pele por Baixo da clavícula e Fáscia peitoral", "inervation": "Nervo facial", "action": "Traciona o Lábio inferior e o ângulo bucal", "movePlan": "Sagital, transverso e frontal", "imageId": 41}, {"name": "Esternocleidomastoideo", "origin": "Clavícula e Manúbrio", "insertion": "Processo Mastoide", "inervation": "Nervo acessório e nervo cervical", "action": "Flexão da cabeça", "movePlan": "Sagital, transverso e frontal", "imageId": 42}, {"name": "Escaleno anterior", "origin": "Vértebras", "insertion": "Costelas", "inervation": "Nervos cervicais", "action": "Inclinação do pescoço e auxilia na Inspiração", "movePlan": "---", "imageId": 43}, {"name": "Escaleno médio", "origin": "Vértebras", "insertion": "Costelas", "inervation": "Nervos cervicais", "action": "Inclinação do pescoço e auxilia na Inspiração", "movePlan": "---", "imageId": 44}, {"name": "Escaleno posterior", "origin": "Vértebras", "insertion": "Costelas", "inervation": "Nervos cervicais", "action": "Inclinação do pescoço e auxilia na Inspiração", "movePlan": "---", "imageId": 45}, {"name": "Trapézio", "origin": "Linha nucal Superior, ligamento nucal e Processos espinhosos da c7 à t12", "insertion": "Borda Posterior da clavícula, Acrômio e espinha da Escápula", "inervation": "Nervo acessório", "action": "Elevação e depressão do ombro e adução e rotação superior das Escápulas", "movePlan": "Frontal, sagital e transverso", "imageId": 46}, {"name": "Latíssimo do dorso", "origin": "Processos Espinhosos das Vértebras torácicas e lombares", "insertion": "Face Proximal e distal do Úmero", "inervation": "Nervo toracodorsal", "action": "Adução, extensão e rotação medial do Braço e depressão do ombro", "movePlan": "Sagital, Frontal e transverso", "imageId": 47}, {"name": "Romboides", "origin": "Processos Espinhosos da c7 à t5", "insertion": "Borda medial da escápula", "inervation": "Nervo dorsal da escápula", "action": "Adução e rotação inferior das escápulas e elevação do ombro", "movePlan": "Transverso E frontal", "imageId": 48}, {"name": "Levantador da Escápula", "origin": "Processo transverso do atlas até à c4", "insertion": "ngulo superior da escápula", "inervation": "Nervo dorsal da escápula", "action": "Elevação e adução da escápula", "movePlan": "Frontal", "imageId": 49}, {"name": "Serrátil posterior superior", "origin": "Processos Espinhosos da c7 à t3", "insertion": "Borda Superior e face externa da 2° a 5° Costelas", "inervation": "Nervos intercostais", "action": "Elevação das primeiras costelas (ação inspiratória)", "movePlan": "---", "imageId": 50}, {"name": "Serrátil posterior inferior", "origin": "Processos Espinhosos da t11 à l3", "insertion": "Borda inferior e face externa das 4 últimas costelas", "inervation": "Nervos intercostais", "action": "Depressão das últimas costelas (ação expiratória)", "movePlan": "---", "imageId": 51}, {"name": "Esplênio da cabeça", "origin": "Processos Espinhosos da c7 à t4", "insertion": "1/3 lateral da linha nucal Superior e processo mastoide do osso temporal", "inervation": "Nervos espinhais", "action": "Extensão, inclinação e Rotação homolateral da cabeça", "movePlan": "Sagital, transverso e frontal", "imageId": 52}, {"name": "Esplênio do pescoço", "origin": "Processo Espinhoso da t3 à t6", "insertion": "Processo transverso das 3 primeiras Vértebras cervicais", "inervation": "Nervos espinhais", "action": "Extensão, inclinação e Rotação homolateral da cabeça", "movePlan": "Sagital, transverso e frontal", "imageId": 53}, {"name": "Semiespinhal da Cabeça", "origin": "Processo transverso de c7 à t7", "insertion": "Processo articular de c4 à c6 e Processo espinhoso de c7", "inervation": "Nervos espinhais", "action": "Extensão e inclinação homolateral da cabeça", "movePlan": "---", "imageId": 54}, {"name": "Semiespinhal do Pescoço", "origin": "Processo transverso de t1 à t6", "insertion": "Processo Espinhoso c1 à c7", "inervation": "Nervos espinhais", "action": "Extensão e rotação contrala- teral do Pescoço", "movePlan": "---", "imageId": 55}, {"name": "Semiespinhal do tórax", "origin": "Processos transversos Das t6 à t10", "insertion": "Processo Espinhoso c6 à t4", "inervation": "Nervos espinhais", "action": "Extensão e rotação contrala- teral do Pescoço", "movePlan": "---", "imageId": 56}, {"name": "Eretor da espinha", "origin": "Porção da cabeça: Ligado ao semi- espinhal da Cabeça<br><br>Porção do pescoço: ligamento nucal e Processos espinhosos de c7 a t2<br><br>Porção do tórax: processos Espinhosos t11 a l2", "insertion": "Porção do pescoço: processos espinhosos c2 a c4<br><br>Porção do tórax: processos espinhosos das Torácicas superiores", "inervation": "Nervos espinhais", "action": "Extensão da coluna vertebral", "movePlan": "Sagital, Frontal e transverso", "imageId": 57}, {"name": "Rotadores", "origin": "Processos transversos das Vértebras cervicais, torácicas e lombares", "insertion": "Lâminas e Processos transverso da vértebra acima", "inervation": "Nervos espinhais", "action": "Rotação e flexão lateral da Coluna", "movePlan": "---", "imageId": 58}, {"name": "Peitoral maior", "origin": "Borda anterior da clavícula e face anterior do Esterno até a 7° costela", "insertion": "Crista do Tubérculo maior", "inervation": "Nervos peitorais lateral e medial", "action": "Adução, rotação medial e Flexão do ombro", "movePlan": "Transverso E frontal", "imageId": 59}, {"name": "Peitoral menor", "origin": "Processo coracoide", "insertion": "Face externa da 3°, 4° e 5° costelas", "inervation": "Nervo peitoral medial", "action": "Depressão do ombro, rotação inferior da Escápula e elevação das Costelas", "movePlan": "Transverso E frontal", "imageId": 60}, {"name": "Serrátil anterior", "origin": "Superfícies externas das 8-9 primeiras costelas", "insertion": "Face costal Da margem medial da Escápula", "inervation": "Nervo torácico longo", "action": "Ação inspiratória, Rotação, abdução e depressão da Escápula", "movePlan": "Transverso E frontal", "imageId": 61}, {"name": "Subclávio", "origin": "Face inferior da clavícula 1° costela e cartilagem costal", "insertion": "Face inferior da clavícula", "inervation": "Nervo do subclávio", "action": "Depressão da clavícula e Do ombro", "movePlan": "Transverso E frontal", "imageId": 62}, {"name": "Intercostais internos", "origin": "Borda inferior da costela", "insertion": "Borda superior da costela", "inervation": "Nervos intercostais", "action": "Depressão das costelas e auxilia na Expiração", "movePlan": "---", "imageId": 63}, {"name": "Intercostais externos", "origin": "Borda inferior da costela", "insertion": "Borda superior da costela", "inervation": "Nervos intercostais", "action": "Elevação das costelas e auxilia na Inspiração", "movePlan": "---", "imageId": 64}, {"name": "Levantadores das costelas", "origin": "Processo transverso da 7° Vértebra cervical à 11° torácica", "insertion": "Face externa da 1° à 12° costela", "inervation": "Nervos intercostais", "action": "Elevação das costelas", "movePlan": "---", "imageId": 65}, {"name": "Subcostais", "origin": "Face interna da costela", "insertion": "Face interna da 2° ou 3° costela", "inervation": "Nervos intercostais", "action": "Estabili- Zação intercostal", "movePlan": "---", "imageId": 66}, {"name": "Transverso do tórax", "origin": "Face interna Do esterno", "insertion": "Face interna da 2° a 6° cartilagem costais", "inervation": "Nervos intercostais", "action": "Estabili- Zação da parte antero- inferior do tórax", "movePlan": "---", "imageId": 67}, {"name": "Reto do abdome", "origin": "Processo xifoide, 5° a 6° cartilagens costais", "insertion": "Púbis e sínfise Púbica", "inervation": "Nervos intercostais", "action": "Flexão do tronco", "movePlan": "Sagital e Frontal", "imageId": 68}, {"name": "Oblíquo externo do abdome", "origin": "Face externa das Últimas 7 costelas", "insertion": "1/2 anterior da crista ilíaca, eias, tubérculo e púbis e linha alba", "inervation": "Nervos intercostais", "action": "Flexão e rotação do tronco", "movePlan": "Sagital, Frontal e transverso", "imageId": 69}, {"name": "Oblíquo interno do abdome", "origin": "Aponeurose toraco- lombar", "insertion": "Crista ilíaca, eias e ligamento inguinal", "inervation": "Nervos intercostais", "action": "Flexão e rotação do tronco", "movePlan": "Sagital, Frontal e transverso", "imageId": 70}, {"name": "Transverso do abdome", "origin": "Cartilagens costais, Aponeurose toracolom- bar, crista ilíaca e Ligamento inguinal", "insertion": "Púbis e linha alba", "inervation": "Nervos intercostais", "action": "Aumento da pressão intra- abdominal e estabili- zação da coluna lombar", "movePlan": "Transverso", "imageId": 71}, {"name": "Quadrado lombar", "origin": "Crista ilíaca", "insertion": "12° costela E processo transverso de 1° a 4° Vértebra lombar", "inervation": "Nervo intercostal", "action": "Inclinação homolateral do tronco e depressão da 12° costela", "movePlan": "Frontal, sagital", "imageId": 72}, {"name": "Ilíaco", "origin": "2/3 Superiores da fossa ilíaca, crista ilíaca e sacro", "insertion": "Trocanter Menor do fêmur", "inervation": "Nervo femoral", "action": "Flexão de quadril, Anteroversão da pelve e Coluna lombar", "movePlan": "Sagital e transverso", "imageId": 73}, {"name": "Psoas maior", "origin": "Processo transverso das Vértebras lombares e discos interver- Tebrais", "insertion": "Trocanter Menor do fêmur", "inervation": "Nervos lombares", "action": "Flexão da coxa e da Coluna lombar e inclinação homolateral", "movePlan": "Sagital e transverso", "imageId": 74}, {"name": "Glúteo máximo", "origin": "Ílio, sacro e Cóccix", "insertion": "Trato iliotibial e Tuberosidade glútea do fêmur", "inervation": "Nervo glúteo inferior", "action": "Extensão e rotação lateral do quadril", "movePlan": "Sagital, transverso e frontal", "imageId": 75}, {"name": "Glúteo médio", "origin": "Face lateral Do osso ilíaco", "insertion": "Troncanter maior do Fêmur", "inervation": "Nervo glúteo superior", "action": "Abdução e rotação medial do quadril", "movePlan": "Frontal, transverso e sagital", "imageId": 76}, {"name": "Glúteo mínimo", "origin": "Face lateral Do osso ilíaco", "insertion": "Trocanter maior do Fêmur", "inervation": "Nervo glúteo superior", "action": "Abdução e rotação medial de quadril", "movePlan": "Frontal, transverso e sagital", "imageId": 77}, {"name": "Piriforme", "origin": "Face pélvica do sacro", "insertion": "Trocanter maior do fêmur", "inervation": "Nervo para o músculo piriforme", "action": "Abdução e rotação lateral do quadril", "movePlan": "Transverso", "imageId": 78}, {"name": "Gêmeo superior", "origin": "Espinha isquiática", "insertion": "Trocanter maior do fêmur", "inervation": "Nervo para o músculo gêmeo superior", "action": "Rotação lateral do quadril", "movePlan": "Transverso", "imageId": 79}, {"name": "Gêmeo inferior", "origin": "Tuberosidade isquiática", "insertion": "Trocanter maior do fêmur", "inervation": "Nervo para o músculo gêmeo inferior e Quadrado femoral", "action": "Rotação lateral do quadril", "movePlan": "Transverso", "imageId": 80}, {"name": "Obturatório interno", "origin": "Membrana Obturatória e ísquio", "insertion": "Trocanter maior do Fêmur", "inervation": "Nervo para o músculo obturatório interno", "action": "Rotação lateral do quadril", "movePlan": "Transverso", "imageId": 81}, {"name": "Obturatório externo", "origin": "Margem do forame obturado", "insertion": "Fossa trocantérica Do fêmur", "inervation": "Nervo obturatório", "action": "Rotação lateral do quadril", "movePlan": "Transverso", "imageId": 82}, {"name": "Quadrado femoral", "origin": "Tuberosidade Isquiática", "insertion": "Crista Intertro- cantérica", "inervation": "Nervo para o músculo quadrado femoral", "action": "Rotação lateral do quadril", "movePlan": "Transverso", "imageId": 83}, {"name": "Tensor da fáscia lata", "origin": "Crista ilíaca e espinha ilíaca ântero- superior", "insertion": "Trato iliotibial", "inervation": "Nervo glúteo superior", "action": "Flexão, abdução e rotação medial do quadril e Rotação lateral do Joelho", "movePlan": "Frontal, sagital e transverso", "imageId": 84}, {"name": "Sartório", "origin": "Espinha ilíaca anteros- superior", "insertion": "Tuberosidade da tíbia (pata de Ganso)", "inervation": "Nervo femoral", "action": "Abdução, flexão e rotação lateral da Coxa e flexão e rotação medial do joelho", "movePlan": "Sagital, transverso e frontal", "imageId": 85}, {"name": "Reto femoral", "origin": "Espinha ilíaca ante- roinferior", "insertion": "Patela e Tuberosidade da tíbia", "inervation": "Nervo femoral", "action": "Flexão do quadril e Extensão do joelho", "movePlan": "Sagital", "imageId": 86}, {"name": "Vasto medial", "origin": "Linha áspera e linha inter- trocantérica", "insertion": "Patela e Tuberosidade da tíbia", "inervation": "Nervo femoral", "action": "Extensão do joelho", "movePlan": "Sagital", "imageId": 87}, {"name": "Vasto lateral", "origin": "Trocanter maior, linha áspera e linha inter- trocantérica", "insertion": "Patela e Tuberosidade da tíbia", "inervation": "Nervo femoral", "action": "Extensão do joelho", "movePlan": "Sagital", "imageId": 88}, {"name": "Vasto intermédio", "origin": "Face anterior e lateral do Fêmur", "insertion": "Patela e Tuberosidade da tíbia", "inervation": "Nervo femoral", "action": "Extensão do joelho", "movePlan": "Sagital", "imageId": 89}, {"name": "Bíceps femoral", "origin": "Tuberosidade Isquiática", "insertion": "Côndilo lateral da Tíbia e cabeça da Fíbula", "inervation": "Nervo isquiático", "action": "Extensão do quadril, Flexão e rotação lateral do Joelho", "movePlan": "Sagital e transvrso", "imageId": 90}, {"name": "Semitendinoso", "origin": "Tuberosidade Isquiática", "insertion": "Superfície medial da Tuberosidade da tíbia (pata de Ganso)", "inervation": "Nervo isquiático", "action": "Extensão do quadril, Flexão e rotação medial do Joelho", "movePlan": "Sagital e transverso", "imageId": 91}, {"name": "Semimembranoso", "origin": "Tuberosidade Isquiática", "insertion": "Côndilo medial da Tíbia", "inervation": "Nervo isquiático", "action": "Extensão do quadril, Flexão e rotação medial do Joelho", "movePlan": "Sagital e transverso", "imageId": 92}, {"name": "Grácil", "origin": "Ramo inferior do púbis", "insertion": "Superfície medial da Tuberosidade da tíbia (pata de Ganso)", "inervation": "Nervo obturatório", "action": "Adução da coxa, flexão e rotação medial do Joelho", "movePlan": "Frontal, sagital e tansverso", "imageId": 93}, {"name": "Pectíneo", "origin": "Ramo superior do púbis", "insertion": "Linha pectínea do fêmur", "inervation": "Nervo femoral", "action": "Flexão do quadril e Adução da coxa", "movePlan": "Sagital, Frontal e transverso", "imageId": 94}, {"name": "Adutor longo", "origin": "Superfície anterior do púbis e sínfise Púbica", "insertion": "Linha áspera", "inervation": "Nervo obturatório", "action": "Adução da coxa", "movePlan": "Frontal e sagital", "imageId": 95}, {"name": "Adutor curto", "origin": "Ramo inferior do púbis", "insertion": "Linha áspera", "inervation": "Nervo obturatório", "action": "Adução da coxa", "movePlan": "Frontal, transverso e sagital", "imageId": 96}, {"name": "Adutor magno", "origin": "Tuberosidade Isquiática, ramo do púbis e do ísquio", "insertion": "Linha áspera Do fêmur e tubérculo adutor", "inervation": "Nervo obturatório", "action": "Adução da coxa", "movePlan": "Frontal, transverso e sagital", "imageId": 97}, {"name": "Tibial anterior", "origin": "Côndilo lateral e Metade proximal da face lateral da tíbia", "insertion": "Cuneiforme medial e base do 1° metatarsal", "inervation": "Nervo fibular profundo", "action": "Dorsiflexão e inversão do pé", "movePlan": "Sagital e Frontal", "imageId": 98}, {"name": "Extensor longo dos dedos", "origin": "Côndilo lateral da Tíbia, fíbula e membrana interóssea", "insertion": "Falanges média e distal do 2° Ao 5° dedos", "inervation": "Nervo fibular profundo", "action": "Dorsiflexão, eversão do pé e extensão dos dedos", "movePlan": "Sagital e Frontal", "imageId": 99}, {"name": "Extensor longo do hálux", "origin": "Fíbula anterior e Membrana interóssea", "insertion": "Falange distal do Hálux", "inervation": "Nervo fibular profundo", "action": "Extensão do hálux, dorsiflexão e inversão do pé", "movePlan": "Sagital e Frontal", "imageId": 100}, {"name": "Fibular terceiro", "origin": "1/3 distal da face anterior da Fíbula", "insertion": "Base do 5° metatarsal", "inervation": "Nervo fibular profundo", "action": "Eversão do pé", "movePlan": "Sagital e Frontal", "imageId": 101}, {"name": "Fibular longo", "origin": "Côndilo lateral da Tíbia e cabeça da Fíbula", "insertion": "1° metatarsal e Cuneiforme medial", "inervation": "Nervo fibular superficial", "action": "Plantiflexão e eversão do pé", "movePlan": "Frontal e sagital", "imageId": 102}, {"name": "Fibular curto", "origin": "Face lateral Da fíbula", "insertion": "Base do 5° metatarsal", "inervation": "Nervo fibular superficial", "action": "Plantiflexão e eversão do pé", "movePlan": "Frontal e sagital", "imageId": 103}, {"name": "Gastrocnêmio medial / lateral", "origin": "Côndilo medial e lateral do Fêmur", "insertion": "Calcâneo", "inervation": "Nervo tibial", "action": "Flexão do joelho e plantiflexão do tornozelo", "movePlan": "Sagital", "imageId": 104}, {"name": "Sóleo", "origin": "Face Posterior da tíbia e cabeça da Fíbula", "insertion": "Calcâneo", "inervation": "Nervo tibial", "action": "Plantiflexão do tornozelo", "movePlan": "Sagital", "imageId": 105}, {"name": "Plantar delgado", "origin": "Côndilo lateral do Fêmur", "insertion": "Calcâneo", "inervation": "Nervo tibial", "action": "Auxilia o tríceps sural", "movePlan": "Frontal e sagital", "imageId": 106}, {"name": "Poplíteo", "origin": "Côndilo lateral do Fêmur", "insertion": "Face Posterior da tíbia", "inervation": "Nervo tibial", "action": "Flexão e rotação medial do Joelho", "movePlan": "Transverso e sagital", "imageId": 107}, {"name": "Flexor longo dos dedos", "origin": "Face Posterior da tíbia", "insertion": "Falanges distais do 2° Ao 5° dedos", "inervation": "Nervo tibial", "action": "Plantiflexão e inversão do tornozelo", "movePlan": "Sagital e Frontal", "imageId": 108}, {"name": "Flexor longo do hálux", "origin": "Face Posterior da fíbula e membrana interóssea", "insertion": "Falange distal do Hálux", "inervation": "Nervo tibial", "action": "Flexão do hálux, plantiflexão e inversão do tornozelo", "movePlan": "Sagital e Frontal", "imageId": 109}, {"name": "Tibial posterior", "origin": "Face Posterior da tíbia e fíbula", "insertion": "3 Cuneiformes, cuboide, navicular e base do 2° Ao 4° metatarsais", "inervation": "Nervo tibial", "action": "Plantiflexão e inversão do pé", "movePlan": "Frontal e sagital", "imageId": 110}, {"name": "Abdutor do hálux", "origin": "Calcâneo", "insertion": "Flange Proximal do hálux", "inervation": "Nervo plantar medial", "action": "Flexão e abdução do hálux", "movePlan": "---", "imageId": 111}, {"name": "Flexor curto do hálux", "origin": "Cuboide e cuneiforme lateral", "insertion": "Falange Proximal do hálux", "inervation": "Nervo plantar medial", "action": "Flexão da falange Proximal do hálux", "movePlan": "---", "imageId": 112}, {"name": "Adutor do hálux", "origin": "2°, 3° e 4° metatarsais", "insertion": "Falange Proximal do hálux", "inervation": "Nervo plantar lateral", "action": "Adução do hálux", "movePlan": "---", "imageId": 113}, {"name": "Abdutor do dedo mínimo", "origin": "Calcâneo", "insertion": "Falange Proximal do 5° dedo", "inervation": "Nervo plantar lateral", "action": "Abdução do 5° dedo", "movePlan": "---", "imageId": 114}, {"name": "Flexor curto do dedo mínimo", "origin": "Cuboide", "insertion": "Falange Proximal do 5° dedo", "inervation": "Nervo plantar lateral", "action": "Flexão da falange Proximal do 5° dedo", "movePlan": "---", "imageId": 115}, {"name": "Flexor curto dos dedos", "origin": "Calcâneo e Aponeurose plantar", "insertion": "Flange intermédia do 2° ao 5° dedos", "inervation": "Nervo plantar medial", "action": "Flexão dos dedos", "movePlan": "---", "imageId": 116}, {"name": "Quadrado plantar", "origin": "Calcâneo", "insertion": "Tendões do Flexor dos dedos", "inervation": "Nervo plantar lateral", "action": "Flexão dos dedos", "movePlan": "---", "imageId": 117}, {"name": "Lumbricais", "origin": "Tendão do flexor longo dos dedos", "insertion": "Tendão do extensor longo dos dedos e falanges Proximais", "inervation": "Nervo plantar medial e plantar lateral", "action": "Flexão das falanges Proximais", "movePlan": "---", "imageId": 118}, {"name": "Interósseos plantares", "origin": "Borda medial do 3° ao 5° Metatarsos", "insertion": "Borda medial das falanges Proximais do 3° ao 5° dedos", "inervation": "Nervo plantar lateral", "action": "Adução e flexão dos dedos", "movePlan": "---", "imageId": 119}, {"name": "Interósseos dorsais", "origin": "Entre os Ossos metatársicos", "insertion": "Bases das falanges Proximais do 2° ao 4° dedos", "inervation": "Nervo plantar lateral", "action": "Abdução e flexão dos dedos", "movePlan": "---", "imageId": 120}, {"name": "Extensor curto dos dedos", "origin": "Calcâneo", "insertion": "Tendão do 2°, 3° e 4° Extensor longo dos dedos", "inervation": "Nervo fibular profundo", "action": "Extensão do 2° ao 4° dedos", "movePlan": "---", "imageId": 121}, {"name": "Extensor curto do hálux", "origin": "Calcâneo", "insertion": "Falange Proximal do hálux", "inervation": "Nervo fibular profundo", "action": "Extensão do hálux", "movePlan": "---", "imageId": 122}]');

class Muscle {
  constructor(name, origin, insertion, inervation, action, movePlan, imageId) {
    this.name = name;
    this.origin = origin;
    this.insertion = insertion;
    this.inervation = inervation;
    this.action = action;
    this.movePlan = movePlan;
    this.imageId = imageId;
  }
}

const createCard = muscle => {
  const col = document.createElement('div');
  col.classList.add('ol');

  const card = document.createElement('div');
  card.classList.add('card'); // , 'h-100'

  const image = document.createElement('img');
  image.src = `images/${muscle.imageId}.jpg`;
  image.alt = `Imagem do ${muscle.name.toLowerCase()}`;
  image.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const muscleName = document.createElement('h5');
  muscleName.innerText = muscle.name.toUpperCase();
  muscleName.classList.add('card-title');

  const infos = document.createElement('ul');
  infos.classList.add('list-group', 'list-group-flush');

  const origin = document.createElement('li');
  origin.innerHTML = `<strong>ORIGEM:</strong> ${muscle.origin.toUpperCase()}`;
  origin.classList.add('list-group-item');

  const insertion = document.createElement('li');
  insertion.innerHTML = `<strong>INSERÇÃO:</strong> ${muscle.insertion.toUpperCase()}`;
  insertion.classList.add('list-group-item');

  const inervation = document.createElement('li');
  inervation.innerHTML = `<strong>INERVAÇÃO:</strong> ${muscle.inervation.toUpperCase()}`;
  inervation.classList.add('list-group-item');

  const action = document.createElement('li');
  action.innerHTML = `<strong>AÇÃO:</strong> ${muscle.action.toUpperCase()}`;
  action.classList.add('list-group-item');

  const movePlan = document.createElement('li');
  movePlan.innerHTML = `<strong>PLANO DE MOVIMENTO:</strong> ${muscle.movePlan.toUpperCase()}`;
  movePlan.classList.add('list-group-item');

  cardBody.appendChild(muscleName);

  infos.appendChild(origin);
  infos.appendChild(insertion);
  infos.appendChild(inervation);
  infos.appendChild(action);
  infos.appendChild(movePlan);

  card.appendChild(image);
  card.appendChild(cardBody);
  card.appendChild(infos);

  col.appendChild(card);

  return col;
}

for (let muscle of musclesJson) {
  const card = createCard(new Muscle(muscle.name, muscle.origin, muscle.insertion, muscle.inervation, muscle.action, muscle.movePlan, muscle.imageId));
  const content = `${muscle.name} ${muscle.origin} ${muscle.insertion} ${muscle.inervation} ${muscle.action} ${muscle.movePlan}`.toLowerCase();
  allCards.push({
    content: content,
    card: card
  });
}

const showAllCards = () => {
  for (let card of allCards) {
    cardList.appendChild(card.card);
  }
}

const removeAllCards = () => {
  while (cardList.firstChild) {
    cardList.removeChild(cardList.lastChild);
  }
}

let currentSearchMethod = searchMethod.value;

const searchMuscles = () => {
  if (!searchBar.value)
    return showAllCards();
  removeAllCards();

  if (currentSearchMethod == '1') {
    for (let card of allCards) {
      if (card.card.firstElementChild.childNodes[1].firstElementChild.innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
        cardList.appendChild(card.card);
      }
    }
  }
  else {
    for (let card of allCards) {
      if (card.content.includes(searchBar.value.toLowerCase())) {
        cardList.appendChild(card.card);
      }
    }
  }
}

searchBar.addEventListener('input', searchMuscles)

searchMethod.addEventListener('change', () => {
  currentSearchMethod = searchMethod.value;
  searchMuscles();
})

showAllCards();
