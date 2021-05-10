<template>
  <div class="login-container">
    <van-nav-bar
      title="登录/注册"
      class="app-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-field
        v-model="user.username"
        icon-prefix="zuiyou"
        left-icon="shouji"
        style="color: #999"
        clearable
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.password"
        clearable
        type="password"
        icon-prefix="zuiyou"
        left-icon="yanzhengma"
        style="color: #999"
        placeholder="请输入密码"
      >
        <template #button v-if="!isCheck">
          <van-button size="small" color="#999999" @click="testing"
            >未验证</van-button
          >
        </template>
        <template #button v-else>
          <van-button size="small" type="info">已验证</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="btn">
      <van-button color="#282828" block @click="onLogin">登录</van-button>
      <van-dialog
        class="dialog"
        v-model="show"
        title="验证"
        @confirm="result"
        @cancel="exit"
        show-cancel-button
      >
        <div class="top">
          <p>{{ first }}</p>
          <p>+</p>
          <p>{{ last }}</p>
          <van-button size="mini" type="info" @click="refresh">刷新</van-button>
        </div>
        <div class="mid">
          <van-cell-group :border="false">
            <van-field
              input-align="center"
              v-model="value"
              placeholder="请输入结果"
            />
          </van-cell-group>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import login from "@/api/user";

export default {
  name: "LoginIndex",
  data() {
    return {
      isCheck: false,
      show: false,

      first: 0,
      last: 0,
      value: null,
      user: {
        username: "", //用户名
        password: "", //密码
      },
    };
  },
  methods: {
    async onLogin() {
      if (this.user.username == "") {
        this.$toast.fail("请输入用户名");
      } else if (this.user.password == "") {
        this.$toast.fail("请输入密码");
      } else if (this.user.password == "" && this.user.username == "") {
        this.$toast.fail("请输入用户名和密码");
      } else if (this.isCheck) {
        const res = await login(this.user);
        console.log(res.data);
        if (res.data.code == 200 && res.data.message == true) {
          this.$toast.success("登录成功");
          //this.user.username
          this.$store.commit('setUser',this.user.username)
          setTimeout(() => {
            this.$router.back();
          }, 500);
        } else if (res.data.code == 200 && res.data.message == false) {
          this.$toast.fail("密码错误");
        } else {
          this.$toast.fail("用户不存在");
        }
      } else {
        this.$toast.fail("请先验证");
      }
    },
    testing() {
      this.show = true;
      this.firstNum();
      this.lastNum();
    },
    result() {
      console.log(this.value);
      if (this.value == this.first + this.last) {
        this.isCheck = true;
      } else {
        this.$toast.fail("回答错误");
      }
      this.value = null;
    },
    exit() {
      this.value = null;
    },
    open() {},
    firstNum() {
      this.first = Math.round(Math.random() * 10);
    },
    lastNum() {
      this.last = Math.round(Math.random() * 10);
    },
    refresh() {
      this.firstNum();
      this.lastNum();
    },
  },
  
};
</script>

<style lang="less" scoped>
.login-container {
  .van-cell-group {
    margin-top: 8px;
  }
  .btn {
    padding: 0 20px;
    margin-top: 32px;
    display: flex;
    .van-button:first-child {
      margin-right: 8px;
      .van-button__text {
        color: #ffe400;
      }
    }
    .dialog {
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 28px;
        }
        p:nth-child(1) {
          margin-left: 16px;
        }
        p:nth-child(3) {
          margin-right: 16px;
        }
      }
      .mid {
        width: 120px;
        margin: 0 auto;
      }
    }
  }
}
</style>