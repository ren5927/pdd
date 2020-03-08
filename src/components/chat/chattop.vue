
<template>
  <div>
    <div class="chattop">
      <van-icon name="chat-o" size="80" color="#999" class="chaticon" />
      <p>还没有聊天消息哦</p>
      <p style="color:#999">与商家、官方客服的聊天会显示在这里</p>
      <p style="color:#3aa4e9">联系官方客服</p>
    </div>
    <div class="chatmiddle">
      <van-icon name="diamond" size="30" color="#e02e24" class="diamond" />
      <p style="color:#e02e24">精选推荐</p>
    </div>
  </div>
</template>
<style scoped lang="less">
.chattop {
  width: 100%;
  height: 650px;
  text-align: center;
  font-size: 30px;
  background-color: rgba(244, 244, 244);
  .chaticon {
    margin-top: 100px;
  }
  p {
    margin: 20px auto;
  }
}

.chatmiddle {
  background-color: #fff;
  height: 100px;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .diamond {
    margin-right: 20px;
  }
  p {
    font-size: 30px;
    display: inline;
  }
}
</style>