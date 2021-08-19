import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/images/default.gif";

//待处理图片数组
let imgs = [];

//处理图片
function setImage(img) {
  //全部设置为默认图片
  img.dom.src = defaultGif;
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  //判断图片是否在视口内
  if(rect.top <= clientHeight && rect.top >= -height) {
    //在视口范围内
    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }

}


function setImages() {
  for(const img of imgs) {
    setImage(img);
  }
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

//图片懒加载
export default {
  inserted(el, binding) {
    //处理图片
    const img = {
      dom: el,
      src: binding.value,
    }
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  }
}