function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     src/male0001.png
     src/male0002.png
     src/male0003.png
     src/male0004.png
     src/male0005.png
     src/male0006.png
     src/male0007.png
     src/male0008.png
     src/male0009.png
     src/male0010.png
     src/male0011.png
     src/male0012.png
     src/male0013.png
     src/male0014.png
     src/male0015.png
     src/male0016.png
     src/male0017.png
     src/male0018.png
     src/male0019.png
     src/male0020.png
     src/male0021.png
     src/male0022.png
     src/male0023.png
     src/male0024.png
     src/male0025.png
     src/male0026.png
     src/male0027.png
     src/male0028.png
     src/male0029.png
     src/male0030.png
     src/male0031.png
     src/male0032.png
     src/male0033.png
     src/male0034.png
     src/male0035.png
     src/male0036.png
     src/male0037.png
     src/male0038.png
     src/male0039.png
     src/male0040.png
     src/male0041.png
     src/male0042.png
     src/male0043.png
     src/male0044.png
     src/male0045.png
     src/male0046.png
     src/male0047.png
     src/male0048.png
     src/male0049.png
     src/male0050.png
     src/male0051.png
     src/male0052.png
     src/male0053.png
     src/male0054.png
     src/male0055.png
     src/male0056.png
     src/male0057.png
     src/male0058.png
     src/male0059.png
     src/male0060.png
     src/male0061.png
     src/male0062.png
     src/male0063.png
     src/male0064.png
     src/male0065.png
     src/male0066.png
     src/male0067.png
     src/male0068.png
     src/male0069.png
     src/male0070.png
     src/male0071.png
     src/male0072.png
     src/male0073.png
     src/male0074.png
     src/male0075.png
     src/male0076.png
     src/male0077.png
     src/male0078.png
     src/male0079.png
     src/male0080.png
     src/male0081.png
     src/male0082.png
     src/male0083.png
     src/male0084.png
     src/male0085.png
     src/male0086.png
     src/male0087.png
     src/male0088.png
     src/male0089.png
     src/male0090.png
     src/male0091.png
     src/male0092.png
     src/male0093.png
     src/male0094.png
     src/male0095.png
     src/male0096.png
     src/male0097.png
     src/male0098.png
     src/male0099.png
     src/male0100.png
     src/male0101.png
     src/male0102.png
     src/male0103.png
     src/male0104.png
     src/male0105.png
     src/male0106.png
     src/male0107.png
     src/male0108.png
     src/male0109.png
     src/male0110.png
     src/male0111.png
     src/male0112.png
     src/male0113.png
     src/male0114.png
     src/male0115.png
     src/male0116.png
     src/male0117.png
     src/male0118.png
     src/male0119.png
     src/male0120.png
     src/male0121.png
     src/male0122.png
     src/male0123.png
     src/male0124.png
     src/male0125.png
     src/male0126.png
     src/male0127.png
     src/male0128.png
     src/male0129.png
     src/male0130.png
     src/male0131.png
     src/male0132.png
     src/male0133.png
     src/male0134.png
     src/male0135.png
     src/male0136.png
     src/male0137.png
     src/male0138.png
     src/male0139.png
     src/male0140.png
     src/male0141.png
     src/male0142.png
     src/male0143.png
     src/male0144.png
     src/male0145.png
     src/male0146.png
     src/male0147.png
     src/male0148.png
     src/male0149.png
     src/male0150.png
     src/male0151.png
     src/male0152.png
     src/male0153.png
     src/male0154.png
     src/male0155.png
     src/male0156.png
     src/male0157.png
     src/male0158.png
     src/male0159.png
     src/male0160.png
     src/male0161.png
     src/male0162.png
     src/male0163.png
     src/male0164.png
     src/male0165.png
     src/male0166.png
     src/male0167.png
     src/male0168.png
     src/male0169.png
     src/male0170.png
     src/male0171.png
     src/male0172.png
     src/male0173.png
     src/male0174.png
     src/male0175.png
     src/male0176.png
     src/male0177.png
     src/male0178.png
     src/male0179.png
     src/male0180.png
     src/male0181.png
     src/male0182.png
     src/male0183.png
     src/male0184.png
     src/male0185.png
     src/male0186.png
     src/male0187.png
     src/male0188.png
     src/male0189.png
     src/male0190.png
     src/male0191.png
     src/male0192.png
     src/male0193.png
     src/male0194.png
     src/male0195.png
     src/male0196.png
     src/male0197.png
     src/male0198.png
     src/male0199.png
     src/male0200.png
     src/male0201.png
     src/male0202.png
     src/male0203.png
     src/male0204.png
     src/male0205.png
     src/male0206.png
     src/male0207.png
     src/male0208.png
     src/male0209.png
     src/male0210.png
     src/male0211.png
     src/male0212.png
     src/male0213.png
     src/male0214.png
     src/male0215.png
     src/male0216.png
     src/male0217.png
     src/male0218.png
     src/male0219.png
     src/male0220.png
     src/male0221.png
     src/male0222.png
     src/male0223.png
     src/male0224.png
     src/male0225.png
     src/male0226.png
     src/male0227.png
     src/male0228.png
     src/male0229.png
     src/male0230.png
     src/male0231.png
     src/male0232.png
     src/male0233.png
     src/male0234.png
     src/male0235.png
     src/male0236.png
     src/male0237.png
     src/male0238.png
     src/male0239.png
     src/male0240.png
     src/male0241.png
     src/male0242.png
     src/male0243.png
     src/male0244.png
     src/male0245.png
     src/male0246.png
     src/male0247.png
     src/male0248.png
     src/male0249.png
     src/male0250.png
     src/male0251.png
     src/male0252.png
     src/male0253.png
     src/male0254.png
     src/male0255.png
     src/male0256.png
     src/male0257.png
     src/male0258.png
     src/male0259.png
     src/male0260.png
     src/male0261.png
     src/male0262.png
     src/male0263.png
     src/male0264.png
     src/male0265.png
     src/male0266.png
     src/male0267.png
     src/male0268.png
     src/male0269.png
     src/male0270.png
     src/male0271.png
     src/male0272.png
     src/male0273.png
     src/male0274.png
     src/male0275.png
     src/male0276.png
     src/male0277.png
     src/male0278.png
     src/male0279.png
     src/male0280.png
     src/male0281.png
     src/male0282.png
     src/male0283.png
     src/male0284.png
     src/male0285.png
     src/male0286.png
     src/male0287.png
     src/male0288.png
     src/male0289.png
     src/male0290.png
     src/male0291.png
     src/male0292.png
     src/male0293.png
     src/male0294.png
     src/male0295.png
     src/male0296.png
     src/male0297.png
     src/male0298.png
     src/male0299.png
     src/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

const toggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("icon-sun");
const moonIcon = document.getElementById("icon-moon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
