//Määritellään eri teemat
const teemat = {
  white: {
    "--head-color":
      "radial-gradient(circle, #ffffff 0%, rgb(241, 241, 241) 10%, rgb(125, 125, 125) 30%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 90%)",
    "--eyefur-color":
      "linear-gradient(to bottom, rgb(79, 76, 71) 0%, rgb(206, 198, 186) 20%, rgba(206, 198, 186, 0.8) 50%, rgb(255, 255, 255) 90%)",
    "--eyefur-shadow": "rgba(239, 236, 232, 0.5)",
    "--head-shadow": "rgb(144, 142, 139)",
    "--eyelip-color": "rgb(189, 189, 189)",
    "--eye-border": "rgba(255, 255, 255, 0.2)",
    "--cheek-right-color":
      "linear-gradient(to top, rgb(255, 255, 255),rgb(255, 255, 255),rgba(228, 227, 227, 0.9))",
    "--cheek-left-color":
      "linear-gradient(to top, rgb(255, 255, 255),rgb(255, 255, 255),rgba(228, 227, 227, 0.9))",
    "--muzzle-color":
      "linear-gradient(to bottom, rgb(255, 255, 255), rgba(190, 185, 185, 1))",
    "--center-line":
      "linear-gradient(to bottom, rgb(255, 255, 255), rgba(205, 205, 205, 0.9), rgba(123, 123, 123, 0.3))",
    "--center-line-before":
      "linear-gradient(to bottom, rgb(255, 255, 255), rgba(53, 52, 52, 0.2))",
    "--ear-color":
      "linear-gradient(to bottom, rgb(61, 61, 61), rgb(255, 255, 255), rgb(255, 255, 255))",
    "--fur-color": "rgb(255, 255, 255)",
    "--corner-eye-color": "rgba(189, 189, 189, 0.4)",
    "--belly-color":
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgb(255, 255, 255), rgb(118, 118, 118), rgb(68, 68, 68))",
    "--eye-color": "rgb(244, 217, 15)",
    "--eye-shadow": "rgba(255, 242, 142, 0.9)",
    "--body-color": "rgb(255, 255, 255)",
    "--bodybefore-color":
      "linear-gradient(to bottom, rgb(255, 255, 255), rgb(109, 109, 109), rgb(150, 150, 150))",
    "--paws-color":
      "linear-gradient(to bottom, rgb(255, 255, 255), rgb(140, 138, 136))",
    "--legs-color": " rgb(255, 255, 255)",
    "--nails-color":
      "linear-gradient(to bottom, rgb(144, 142, 139), rgb(0, 0, 0))",
  },
  black: {
    "--head-color":
      "radial-gradient(circle, #000000 10%, rgb(40, 40, 40) 25%, rgb(30, 30, 30) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 90%)",
    "--eyefur-color":
      "linear-gradient(to top, rgb(81, 81, 81) 0%, rgb(41, 41, 41) 20%, rgba(0, 0, 0, 0.8) 50%, rgb(0, 0, 0) 90%)",
    "--eyefur-shadow": "rgba(117, 117, 117, 0.5)",
    "--head-shadow": "rgb(59, 59, 59)",
    "--eyelip-color": "rgb(0, 0, 0)",
    "--eye-border": "rgba(0, 0, 0, 0.2)",
    "--cheek-right-color":
      "linear-gradient(to left,rgb(0, 0, 0),rgb(0, 0, 0),rgb(50, 50, 50))",
    "--cheek-left-color":
      "linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0),rgb(50, 50, 50))",
    "--muzzle-color":
      "linear-gradient(to bottom, rgb(0, 0, 0), rgb(16, 16, 16), rgb(41, 41, 41))",
    "--center-line":
      "linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))",
    "--center-line-before":
      "linear-gradient(to bottom, rgb(0, 0, 0), rgba(53, 52, 52, 0.2))",
    "--ear-color":
      "linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0))",
    "--fur-color": "rgb(0, 0, 0)",
    "--corner-eye-color": "rgba(0, 0, 0, 0.9)",
    "--belly-color":
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgb(39, 39, 39), rgb(0, 0, 0), rgb(0, 0, 0))",
    "--eye-color": "rgb(244, 217, 15)",
    "--eye-shadow": "rgba(255, 242, 142, 0.9)",
    "--body-color": "rgb(0, 0, 0)",
    "--bodybefore-color":
      "linear-gradient(to bottom, rgb(49, 49, 49), rgb(0, 0, 0), rgb(0, 0, 0))",
    "--paws-color": "linear-gradient(to bottom, rgb(0, 0, 0), rgb(29, 29, 29))",
    "--legs-color": " rgb(0, 0, 0)",
    "--nails-color":
      "linear-gradient(to bottom, rgb(144, 142, 139), rgb(0, 0, 0))",
  },
  grey: {
    "--head-color":
      "radial-gradient(circle, #010013 0%, rgb(0, 0, 0) 10%, rgb(61, 61, 61) 30%, rgb(144, 142, 139) 50%, rgb(144, 142, 139) 90%)",
    "--eyefur-color":
      "linear-gradient(to bottom, rgb(79, 76, 71) 0%, rgb(206, 198, 186) 20%, rgba(206, 198, 186, 0.8) 50%, rgba(206, 198, 186, 1) 90%)",
    "--eyefur-shadow": "rgba(239, 236, 232, 0.5)",
    "--head-shadow": "rgb(109, 108, 106)",
    "--eyelip-color": "rgb(97, 91, 84)",
    "--eye-border": "rgba(94, 94, 94, 0.2)",
    "--cheek-right-color":
      "linear-gradient(to top, rgb(236, 233, 233), rgb(159, 159, 159), rgba(109, 109, 109, 0.6))",
    "--cheek-left-color":
      "linear-gradient(to top, rgb(236, 233, 233), rgb(159, 159, 159), rgba(109, 109, 109, 0.6))",

    "--muzzle-color":
      "linear-gradient(to bottom, rgba(53, 52, 52, 1), rgba(190, 185, 185, 1))",
    "--center-line":
      "linear-gradient(to bottom, rgba(53, 52, 52, 1), rgba(53, 52, 52, 0.9), rgba(190, 185, 185, 0.3))",
    "--center-line-before":
      "linear-gradient(to bottom, rgb(61, 61, 61), rgba(53, 52, 52, 0.2))",
    "--ear-color":
      "linear-gradient(to bottom, rgb(61, 61, 61), rgb(144, 142, 139), rgb(144, 142, 139))",
    "--fur-color": "rgb(144, 142, 139)",
    "--corner-eye-color": "rgba(41, 41, 40, 0.4)",
    "--kuono-varjo": "rgba(0, 0, 0, 0.3)",
    "--belly-color":
      "linear-gradient(to bottom, rgba(254, 251, 245, 0.3), rgb(159, 157, 154), rgb(61, 61, 61), rgb(23, 23, 23))",
    "--eye-color": "rgb(244, 217, 15)",
    "--eye-shadow": "rgba(255, 242, 142, 0.9)",
    "--body-color": "rgb(144, 142, 139)",
    "--bodybefore-color":
      "linear-gradient(to bottom, rgb(168, 166, 162), rgb(109, 109, 109), rgb(61, 61, 61))",
    "--paws-color":
      "linear-gradient(to bottom, rgb(144, 142, 139), rgb(71, 70, 69))",
    "--legs-color": "rgb(144, 142, 139)",
    "--nails-color":
      "linear-gradient(to bottom, rgb(144, 142, 139), rgb(0, 0, 0))",
  },
};

//vaihtaa puppyn värin napista
const Btn = document.getElementById("pupBtn");
const varit = ["white", "black", "grey"];
let alkuTeema = varit[0];

function vaihdaVari() {
  let index = varit.indexOf(alkuTeema);
  index = (index + 1) % varit.length;
  alkuTeema = varit[index];

  const uusiTeema = teemat[alkuTeema];
  for (muuttuja in uusiTeema) {
    document.documentElement.style.setProperty(muuttuja, uusiTeema[muuttuja]);
  }
}
Btn.addEventListener("click", vaihdaVari);

//Asetetaan liikkeen aloitus randomiksi
function restartMotion(element, keyframes, options) {
  if (!element) return;

  let animation = element.animate(keyframes, options);

  animation.onfinish = () => {
    setTimeout(
      () => restartMotion(element, keyframes, options),
      Math.random() * 19000
    );
  };
}

function startMotion() {
  let wolfHead = document.querySelector(".head");
  let wolfTongue = document.querySelector(".liplop");
  let wolfTail = document.querySelector(".tail");

  //Animaatiot elementeille
  // Keyframes
  let headKeyframes = [
    { transform: "translate(-50%, -50%) rotate(0deg)" },
    { transform: "translate(-50%, -50%) rotate(8deg)" },
    { transform: "translate(-50%, -50%) rotate(-5deg)" },
    { transform: "translate(-50%, -50%) rotate(0deg)" },
  ];

  // Options
  let headOptions = {
    duration: 2500,
    iterations: 2,
    direction: "alternate",
    easing: "ease-in-out",
  };

  let tongueKeyframes = [
    { transform: "translate(-50%, -50%) translateY(0)" },
    { transform: "translate(-50%, -50%) translateY(15px)" },
    { transform: "translate(-50%, -50%) translateY(-2px)" },
    { transform: "translate(-50%, -50%) translateY(0)" },
  ];

  let tongueOptions = {
    duration: 2000,
    iterations: 2,
    direction: "alternate",
    easing: "ease-in-out",
  };

  let tailKeyframes = [
    { transform: "translateY(0px) rotate(22deg)" },
    { transform: "translateY(0px) rotate(32deg)" },
    { transform: "translateY(0px) rotate(22deg)" },
  ];

  let tailOptions = {
    duration: 1500,
    iterations: "Infinity",
  };

  restartMotion(wolfHead, headKeyframes, headOptions);
  restartMotion(wolfTongue, tongueKeyframes, tongueOptions);
  restartMotion(wolfTail, tailKeyframes, tailOptions);
}

startMotion();

//Silmät liikkuvat hiiren liikkeen mukaan
document.addEventListener("mousemove", function (event) {
  const eyes = document.querySelectorAll(".iris");

  for (let i = 0; i < eyes.length; i++) {
    const iris = eyes[i];
    const pupil = iris.parentElement;
    const eye = pupil.parentElement;

    //etsii silmän sijainnin suhteessa ikkunaan
    const eyeRect = eye.getBoundingClientRect();

    const silmaX = eyeRect.left + eyeRect.width / 2;
    const silmaY = eyeRect.top + eyeRect.height / 2;

    const kulmaX = event.clientX - silmaX;
    const kulmaY = event.clientY - silmaY;
    const angle = Math.atan2(kulmaY, kulmaX);

    const liike = 5;
    const pupilX = Math.cos(angle) * liike;
    const pupilY = Math.sin(angle) * liike;

    iris.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  }
});
