<template>
  <div class="my-container">
    <van-cell-group class="my-info" v-if="user">
      <van-cell
        title="单元格"
        value="内容"
        center
        :border="false"
        class="base-info"
      >
        <van-image
          class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title" class="name">最左APP用户</div>
        <van-button class="update-btn" size="small"> 编辑资料 </van-button>
      </van-cell>
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="count">66</div>
            <div class="text">帖子</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="count">66</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="count">66</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="count">66</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <div class="not-login" v-else>
      <van-image
        class="mobile"
        slot="icon"
        round
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        @click="$router.push('/login')"
      />
      <div class="text" @click="$router.push('/login')">登录 / 注册</div>
    </div>
    <van-grid class="nav-grid mb-8" :border="false" :column-num="2">
      <van-grid-item class="nav-grid-item star" icon="star-o" text="收藏" />
      <van-grid-item
        class="nav-grid-item history"
        icon="browsing-history-o"
        text="历史"
      />
    </van-grid>
    <van-cell title="消息通知" v-if="user" is-link to="" />
    <van-cell class="mb-8" title="章鱼哥" is-link to="" />
    <van-cell class="logout" @click="logout" v-if="user" title="退出登录" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyIndex",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$dialog.confirm({
        title: "退出确认",
        message: "退出当前最左账号，将不能同步收藏，发布评论和云端分享等",
      })
        .then(() => {
          this.$store.commit("setUser", null);
        })
        .catch(() => {
          
        });
      
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="less" scoped>
.my-container {
  .my-info {
    background: #ffe400;
    .base-info {
      background: unset;
      box-sizing: border-box;
      height: 160px;
      padding-top: 40px;
      .avatar {
        box-sizing: border-box;
        width: 72px;
        height: 72px;
        border: 2px solid #fff;
        margin-right: 8px;
      }
      .name {
        font-size: 15px;
      }
      .update-btn {
        border-radius: 4px;
        background: #282828;
        color: #ffffff;
        padding: 0 22px;
        border: none;
      }
    }
    .data-info {
      .data-info-item {
        height: 64px;
        text-align: center;
        .count {
          font-size: 18px;
        }
        .text {
          font-size: 14px;
        }
      }
    }
    /deep/ .van-grid-item__content {
      background: unset;
    }
  }
  /deep/.nav-grid {
    .nav-grid-item {
      height: 88px;
      .van-grid-item__text {
        font-size: 14px;
      }
      .van-grid-item__icon {
        font-size: 22px;
      }
    }
    .star {
      color: rgb(255, 0, 55);
    }
    .history {
      color: rgb(255, 153, 0);
    }
  }
  .logout {
    text-align: center;
    color: orangered;
  }
  .mb-8 {
    margin-bottom: 8px;
  }
  .not-login {
    height: 180px;
    background: #ffe400;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .mobile {
      width: 66px;
      height: 66px;
      border: 2px solid #fff;
      box-sizing: border-box;
    }
    .text {
      font-size: 16px;
    }
  }
}
</style>