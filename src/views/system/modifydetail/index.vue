<template>
  <div class="detail-container">
    <div class="container-t">
      <div class="title-box"><span>张三</span>基本信息</div>
      <div class="table-box">
        <div class="key">性别</div>
        <div class="value">男</div>
        <div class="key">民族</div>
        <div class="value">汉族</div>
        <div class="key">身份证号码</div>
        <div class="value">4213022229900087777</div>

        <div class="key">出生日期</div>
        <div class="value">19890901</div>
        <div class="key">工作岗位</div>
        <div class="value">武汉</div>
        <div class="key">学历</div>
        <div class="value">本科</div>

        <div class="key">其他党团</div>
        <div class="value">共青团</div>
        <div class="key">背景情况</div>
        <div class="value">正常</div>
        <div class="key">入党申请日期</div>
        <div class="value">2021-09-09</div>

        <div class="key">列为入党积极分子日期</div>
        <div class="value">2021-09-09</div>
        <div class="key">列为发展对象日期</div>
        <div class="value">2021-09-09</div>
        <div class="key">接收预备党员日期</div>
        <div class="value">2021-09-09</div>
      </div>
    </div>
    <div class="container-b">
      <div class="step-list">
        <span class="title">一、入党申请</span>
        <el-steps :active="1" finish-status="success" simple>
          <el-step title="01 递交入党申请书"></el-step>
          <el-step title="02 党组织派人谈话"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">二、入党积极分子确定和培养教育</span>
        <el-steps simple>
          <el-step title="03 推荐和确定入党积极分子"></el-step>
          <el-step title="04 上级党委备案"></el-step>
          <el-step title="05 指定培养联系人"></el-step>
          <el-step title="06 培养教育考察"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">三、发展对象确定和考察</span>
        <el-steps simple>
          <el-step title="07 确定发展对象"></el-step>
          <el-step title="08 报上级党委备案"></el-step>
          <el-step title="09 确定入党介绍人"></el-step>
          <el-step title="10 进行政治审查"></el-step>
          <el-step title="11 开展集中培训"></el-step>
        </el-steps>
      </div>

      <div class="step-list">
        <span class="title">流程四</span>
        <el-steps simple>
          <el-step title="12 开展集中培训"></el-step>
          <el-step title="13 支部委员会审查"></el-step>
          <el-step title="14 上级党委预审"></el-step>
          <el-step title="15 填写入党志愿书"></el-step>
          <el-step title="16 支部大会讨论"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">流程五</span>
        <el-steps simple>
          <el-step title="17 上级党委派人谈话"></el-step>
          <el-step title="18 上级党委审批"></el-step>
          <el-step title="19 上一级党委组织部门备案"></el-step>
          <el-step title="20 编入党支部和党小组"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">流程六</span>
        <el-steps simple>
          <el-step title="21 继续培养考察"></el-step>
          <el-step title="22 提出转正申请"></el-step>
          <el-step title="23 支部大会讨论"></el-step>
          <el-step title="24 上级党委审批"></el-step>
          <el-step title="25 材料归档"></el-step>
        </el-steps>
      </div>
    </div>

    <!-- 弹框 -->
    <el-dialog :title="stepTxt" :visible.sync="dialogVisible" width="60%">
      <div class="table-list">
        <div class="key">递交入党申请书日期</div>
        <div>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">入党申请书</div>
        <div>上传附件</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepIndex: 0,
      stepTxt: "",
      dialogVisible: false,
      value1: "",
    };
  },
  mounted() {
    let allStep = document.querySelectorAll(".el-step");
    allStep.forEach((item) => {
      item.addEventListener("click", (e) => {
        let step_txt = e.target.innerText;
        this.stepTxt = step_txt;
        let step_index = e.target.innerText.match(/[1-9][0-9]*/g);
        this.stepIndex = step_index;
        this.dialogVisible = true;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.detail-container {
  padding: 20px;
  .container-t {
    .title-box {
      padding: 10px 0 10px 10px;
      background: #f5f7fa;
      span {
        font-weight: bold;
        color: rgb(219, 29, 29);
        margin-right: 20px;
      }
    }
    .table-box {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      div {
        border: 1px solid rgb(235, 232, 232);
        padding: 0 10px;
        line-height: 35px;
        &.key {
          white-space: nowrap;
          text-align: right;
          background: #f5f7fa;
        }
      }
    }
  }
  .container-b {
    padding-top: 20px;
    .step-list {
      display: flex;
      align-items: center;
      background: #f5f7fa;
      padding: 10px 20px;
      & + .step-list {
        margin-top: 20px;
      }
      .title {
        width: 150px;
        margin-right: 20px;
        border-radius: 4px;
      }
      ::v-deep .el-steps {
        flex: 1;
        padding: 0px;
        background: transparent;
        display: flex;
        overflow: hidden;
      }
    }
  }

  // 表格
  .el-dialog__body {
    padding: 5px 20px;
    .table-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      & > div {
        border: 1px solid #ccc;
        line-height: 40px;
        padding: 0 20px;
        &.key {
          text-align: right;
          background: rgb(245, 244, 244);
        }
        &:nth-last-child(1) {
          color: red;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}
</style>