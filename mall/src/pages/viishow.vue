<template>
  <div>
    <ul id="FanLi">
      <button class="btn fq" @click="LoveFanfan">说出你的爱</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "alipay",
  data() {
    return {
      Weixiu: [
        "viishow",
        "燕子",
        "饭饭",
        "超哥",
        "静静",
        "小白",
        "苏西",
        "花花姐",
        "林师傅",
        "臭弟弟",
        "猪蹄",
        "小苗",
        "阿择",
        "豆子",
        "贝贝",
        "猫宁",
        "表妹",
        "小马哥",
        "小可爱",
        "站姐",
        "小鱼儿",
        "艾斯",
        "童童",
        "学长",
        "大葱",
        "十元",
        "春春",
        "螺蛳粉",
        "黑猫",
        "翰晨",
        "高政政",
        "顽皮"
        //33
      ],

      isSet: 1,
      j: 0
    };
  },
  methods: {
    LoveFanfan() {
      if (this.isSet == 1) {
        // setTimeout(() => {
        //   this.showWx();
        // }, 1000);
        console.log("true", this.isSet);
        setInterval(() => {
          this.showWx();
        }, 100);
        this.isSet = 0;
      } else {
        console.log("false", this.isSet);
        clearInterval();
        this.isSet = 1;
      }
    },

    showWx() {
      let Fan = document.getElementById("FanLi");
      //随机获取一个名字
      let i = Math.floor(Math.random() * 31);
      // 创建一个li
      let li = document.createElement("li");
      // 添加一个li
      if (this.j <= 31) {
        li.innerHTML = "我爱" + this.Weixiu[this.j] + "！";
        this.j++;
        li.style.backgroundColor = this.randomColor();
        li.style.width = "48.5%";
        Fan.appendChild(li);
        return 0;
      }
      li.innerHTML = "我爱" + this.Weixiu[i];

      li.style.backgroundColor = this.randomColor();
      Fan.appendChild(li);
    },
    randomColor() {
      var arrNum = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ];
      var arrFirst = "#";
      var index;
      for (var i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * 16);
        arrFirst += arrNum[index];
      }
      return arrFirst;
    }
  }
};
</script>

<style lang="scss">
#FanLi {
  display: block;
  width: 800px;
  // height: 500px;
  margin: 20px auto;
  border: 5px solid rgb(56, 169, 218);
  border-radius: 20px;
  li {
    width: 150px;
    height: 50px;
    color: white;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
    font-size: 23px;
    margin: 5px;
    display: inline-block;
    // background-color: rgb(181, 29, 29);
    border: 1px slide rgb(86, 115, 211);
  }
}
.fq {
  margin: 30px 45%;
  font-size: 20px;
  width: 150px;
  height: 150px;
  padding: 10px;
  margin-left: 40%;
  border-radius: 50%;
}
</style>