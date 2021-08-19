import loadingUrl from "@/assets/images/loading.svg";
import styles from "./loading.module.less";
//得到el中loading效果的img
function getLoadingImg(el) {
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}
export default function(el, binding) {
  let curImg = getLoadingImg(el);
  //判断是否处于加载中
  if(binding.value) {
    //加载中
    if(!curImg) {
      let img = createLoadingImg();
      el.style.position = "relative";
      el.appendChild(img);
    }
  }else {
    if(curImg) {
      curImg.remove();
    }
  }
}