import SmoothScroll from "smooth-scroll";

//ABOUT
import Match from "../assets/imgs/About/Match.png";
import Marketplace from "../assets/imgs/About/Marketplace.png";
import Comunidade from "../assets/imgs/About/Comunidade.png";
//ECO STARTUPS
import Captable from "../assets/imgs/Eco/Captable.png";
import Pateo76 from "../assets/imgs/Eco/pateo76.png";
import Renata from "../assets/imgs/Eco/Renata.png";
import TuristechBrasil from "../assets/imgs/Eco/turistech_brasil.png";
import Turistech from "../assets/imgs/Eco/Turistech.png";
//TESTMNIALS
import Bianca from "../assets/imgs/Testmonials/Bianca.png";
import Iago from "../assets/imgs/Testmonials/Iago.png";
import Larissa from "../assets/imgs/Testmonials/Larissa.png";
//MIDIA
import Midia1 from "../assets/imgs/Midia/01.png";
import Midia2 from "../assets/imgs/Midia/02.png";
import Midia3 from "../assets/imgs/Midia/03.png";
import Midia4 from "../assets/imgs/Midia/04.png";
import Midia5 from "../assets/imgs/Midia/05.png";
import Midia6 from "../assets/imgs/Midia/06.png";
import Midia7 from "../assets/imgs/Midia/07.png";
import Midia8 from "../assets/imgs/Midia/08.png";
import Midia9 from "../assets/imgs/Midia/09.png";
import Midia10 from "../assets/imgs/Midia/10.png";

//CONTACTS
import facebook from "../assets/imgs/Contacts/facebook.png";
import instagram from "../assets/imgs/Contacts/instagram.png";
import linkedin from "../assets/imgs/Contacts/linkedin.png";
import tiktok from "../assets/imgs/Contacts/tiktok.png";
import whats from "../assets/imgs/Contacts/whats.png";
import pinterest from "../assets/imgs/Contacts/pinterest.png";

export const NAVBAR_HEIGHT = 80;

export const colors = {
  text: {
    blue: "#000068",
    highlighted: "#BA66B2",
    grey: "#2F2F2F",
    lightGrey: "#747474",
    disabled: "#D1D1D1",
    white: "#FBFBFB",
  },
  primary: {
    lightness: "#E6E6F0",
  },
  secundary: {
    dark: "#82477D",
    light: "#DDB3D9",
  },
  background: {
    primary: "#F8F8F8",
    secundary: "#F2F2FE",
  },
  status: {
    negative: "#BE4949",
    positive: "#67B55A",
  },
};

// DATA esta dividido em seções, cada seção tem um objeto que contêm seus textos
export const DATA = {
  firstScreenData: {
    subTitle1: "VIAJAR É UMA CONEXÃO MÁGICA! ",
    title1: `Procurando companhia
    para viajar e experiências
    inesquecíveis?`,
    subTitle2: `O XL8 te ajuda a encontrar as melhores companhias e ofertas para
    proporcionar experiências inesquecíveis e dar vida aos seus sonhos
    de viagem.`,
    title2: "Tá esperando o quê?",
    subTitle3: `Nós ajudamos você! Conheça a comunidade e planeje sua próxima
    viagem!`,
    title3: "No XL8 a gente viaja junto!",
  },
  aboutData: {
    subTitle: "O XL8",
    title: "O que nós fazemos?",
    cards: [
      //card 1
      {
        title: "Match de viajantes",
        text: `Encontre companhia com base nos seus interesses em comum. Tudo isso com segurança e privacidade.`,
        image: Match,
      },
      //card 2
      {
        title: "Marketplace de viagens",
        text: `Hotéis, pacotes, ofertas, hospedagens e os melhores preços e parceiros.`,
        image: Marketplace,
      },
      //card 3
      {
        title: "Comunidade Colaborativa",
        text: `Comunidade Colaborativa`,
        image: Comunidade,
      },
    ],
    title2: "No ecossistema de startups",
    ecoCards: [
      //card eco 1
      {
        image: Captable,
        title: `Captamos R$1 Milhão
        em rodada fechada​`,
      },
      //card eco 2
      {
        image: Pateo76,
        title: `Única traveltech entre
        as 20 selecionadas​​`,
      },
      //card eco 3
      {
        image: TuristechBrasil,
        title: `Ganhamos o 2º lugar
        na categoria startup​​​`,
      },
      //card eco 4
      {
        image: Turistech,
        title: `Fomos convidadas para expor e compor painéis​​`,
      },
      //card eco 5
      {
        image: Renata,
        title: `Speaker​
        de inovação
        no turismo.​​​​​`,
      },
    ],
  },
  testmonialData: {
    subTitle: "Depoimentos",
    title: "Depoimentos de quem viajou pelo XL8",
    cards: [
      //card 1
      {
        image: Bianca,
        title: "Bianca, 27 anos",
        subTitle: "São Paulo, SP",
        text: `Dançamos MUITO nessa viagem e conhecemos muita gente. Se não fosse pelo app eu jamais teria conhecido a Samara! 💖`,
      },
      //card 2
      {
        image: Iago,
        title: "Iago Torres, 32 anos",
        subTitle: "Pelotas, RS",
        text: `Amei conhecer Curitiba, foi uma das melhores viagens que eu fiz. Agora estou me preparando para ir em setembro para Bahia, e Rio de Janeiro novamente.`,
      },
      //card 3
      {
        image: Larissa,
        title: "Larissa Miranda, 40 anos",
        subTitle: "Rio de Janeiro, RJ",
        text: `+ 1 conexão pinguim!
        O Rio de Janeiro nunca decepciona, lugar de gente feliz e boa energia. Dessa vez fui conhecer o rio scenarium com a queridíssima Kennia de minas que uma companhia 10/10.
        Obrigada XL8, está sendo incrível conhecer viajantes do Brasil!`,
      },
    ],
  },
  companyData: {
    subTitle: "Em breve",
    title: "XL8 e a sua Empresa",
    text: `Em breve, uma comunidade corporativa de viagens para sua empresa.`,
    buttonText: "SAIBA MAIS",
  },
  midiaData: {
    subTitle: "Na mídia",
    title: "O que estão falando do XL8",
    cards: [
      //card 1
      {
        id: 1,
        image: Midia1,
      },
      {
        id: 2,
        image: Midia2,
      },
      {
        id: 3,
        image: Midia3,
      },
      {
        id: 4,
        image: Midia4,
      },
      {
        id: 5,
        image: Midia5,
      },
      {
        id: 6,
        image: Midia6,
      },
      {
        id: 7,
        image: Midia7,
      },
      {
        id: 8,
        image: Midia8,
      },
      {
        id: 9,
        image: Midia9,
      },
      {
        id: 10,
        image: Midia10,
      },
    ],
  },
  bannerData: {
    title: "Baixe o App",
    text: `Vamos juntos? Nossa viagem começa agora!
    Obtenha a experiência completa do app para Android e IOS.`,
    subTitle: "No XL8 a gente viaja junto!",
  },
  contactData: {
    subTitle: "Contato",
    title: "Fale com o XL8",
    text: `Ficou com alguma dúvida? Sinta-se a vontade para enviar sua mensagem:`,
  },
  footer: {
    contacts: [
      {
        id: 1,
        image: facebook,
        link: "https://www.facebook.com/XL8/",
      },
      {
        id: 2,
        image: instagram,
        link: "https://www.instagram.com/XL8/",
      },
      {
        id: 3,
        image: linkedin,
        link: "https://www.linkedin.com/company/XL8/",
      },
      {
        id: 4,
        image: tiktok,
        link: "https://www.tiktok.com/@XL8",
      },
      {
        id: 5,
        image: whats,
        link: "https://api.whatsapp.com/send?phone=5511993823279",
      },
      {
        id: 6,
        image: pinterest,
        link: "https://www.pinterest.com.au/XL8/",
      },
    ],
  },
  b2b: {
    subTitle: "EM BREVE",
    title: `XL8 e sua Empresa`,
    text: `Em breve, uma comunidade corporativa de viagens para sua empresa.`,
    secondText:"",
    formTitle: "Entre em contato com o XL8",
  },
};

export const SmoothScrollTo = (divId) => {
    let scroll = new SmoothScroll();
    let anchor = document.querySelector(divId);
    let options = { speed: 3000, easing: "easeIn" };
    scroll.animateScroll(anchor.offsetTop - 80, { options: options });
};
  
