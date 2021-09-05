<template>
  <div class="detail-container">
    <div class="container-t">
      <div class="title-box">
        <span>{{ detailsData.userUame || "--" }}</span
        >基本信息
      </div>
      <div class="table-box">
        <div class="key">性别</div>
        <div class="value">
          {{ detailsData.gender === 0 ? "男" : "女" || "--" }}
        </div>
        <div class="key">民族</div>
        <div class="value">{{ detailsData.national || "--" }}</div>
        <div class="key">身份证号码</div>
        <div class="value">{{ detailsData.idCard || "--" }}</div>

        <div class="key">出生日期</div>
        <div class="value">{{ detailsData.birthday || "--" }}</div>
        <div class="key">工作岗位</div>
        <div class="value">{{ detailsData.position || "--" }}</div>
        <div class="key">学历</div>
        <div class="value">{{ detailsData.unit || "--" }}</div>

        <!-- <div class="key">其他党团</div>
        <div class="value">{{ detailsData.userUame }}</div>
        <div class="key">背景情况</div>
        <div class="value">{{ detailsData.userUame }}</div> -->
        <div class="key">入党申请日期</div>
        <div class="value">{{ detailsData.joinDate || "--" }}</div>

        <div class="key">列为入党积极分子日期</div>
        <div class="value">{{ detailsData.aitivTime || "--" }}</div>
        <div class="key">列为发展对象日期</div>
        <div class="value">{{ detailsData.developTime || "--" }}</div>
        <div class="key">接收预备党员日期</div>
        <div class="value">{{ detailsData.memberTime || "--" }}</div>
      </div>
    </div>
    <div class="container-b">
      <div class="step-list">
        <span class="title">一、入党申请</span>
        <el-steps :active="stepProgress" finish-status="success" simple>
          <el-step title="01 递交入党申请书"></el-step>
          <el-step title="02 党组织派人谈话"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">二、入党积极分子确定和培养教育</span>
        <el-steps :active="stepProgress - 2" finish-status="success" simple>
          <el-step title="03 推荐和确定入党积极分子"></el-step>
          <el-step title="04 上级党委备案"></el-step>
          <el-step title="05 指定培养联系人"></el-step>
          <el-step title="06 培养教育考察"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">三、发展对象确定和考察</span>
        <el-steps :active="stepProgress - 6" finish-status="success" simple>
          <el-step title="07 确定发展对象"></el-step>
          <el-step title="08 报上级党委备案"></el-step>
          <el-step title="09 确定入党介绍人"></el-step>
          <el-step title="10 进行政治审查"></el-step>
          <el-step title="11 开展集中培训"></el-step>
        </el-steps>
      </div>

      <div class="step-list">
        <span class="title">四、入党前培训</span>
        <el-steps :active="stepProgress - 11" finish-status="success" simple>
          <el-step title="12 支部委员会审查"></el-step>
          <el-step title="13 上级党委预审"></el-step>
          <el-step title="14 填写入党志愿书"></el-step>
          <el-step title="15 支部大会讨论"></el-step>
          <el-step title="16 上级党委派人谈话"></el-step>
          <el-step title="17 上级党委审批"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">五、预备党员考察</span>
        <el-steps :active="stepProgress - 17" finish-status="success" simple>
          <el-step title="18 上一级党委组织部门备案"></el-step>
          <el-step title="19 编入党支部和党小组"></el-step>
          <el-step title="20 继续培养考察"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">六、预备党员转正</span>
        <el-steps :active="stepProgress - 20" finish-status="success" simple>
          <el-step title="21 提出转正申请"></el-step>
          <el-step title="22 支部大会讨论"></el-step>
          <el-step title="23 上级党委审批"></el-step>
          <el-step title="24 材料归档"></el-step>
        </el-steps>
      </div>
    </div>

    <!-- 弹框 -->
    <el-dialog :title="stepTxt" :visible.sync="dialogVisible" width="70%">
      <!-- 步骤一 -->
      <div class="step-box columns2" v-if="stepIndex === '1'">
        <div class="key">递交入党申请书日期</div>
        <div>
          <el-date-picker
            v-model="form.joinDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">入党申请书</div>
        <div class="upload">上传附件</div>
      </div>
      <!-- 步骤二 -->
      <div class="step-box columns2" v-if="stepIndex === '2'">
        <div class="key">党组织派人谈话日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">谈话人姓名</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">谈话人职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">谈话人联系方式</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤三 -->
      <div class="step-box columns2" v-if="stepIndex === '3'">
        <div class="key">推荐方式</div>
        <div>
          <el-checkbox v-model="checked">党员推荐</el-checkbox>
          <el-checkbox v-model="checked">群团推优</el-checkbox>
          <el-checkbox v-model="checked">共青团推优</el-checkbox>
          <el-checkbox v-model="checked">工会推优</el-checkbox>
          <el-checkbox v-model="checked">妇联推优</el-checkbox>
        </div>
        <div class="key">支委会或支部大会日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">支委会或支部大会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤四 -->
      <div v-if="stepIndex === '4'">等待中共金沙县安底镇委员会备案</div>
      <!-- 步骤五 -->
      <div class="step-box columns6" v-if="stepIndex === '5'">
        <div class="key">联系人一</div>
        <div>
          <el-select v-model="value" placeholder="请选择联系人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系人二</div>
        <div>
          <el-select v-model="value" placeholder="请选择联系人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤六 / 步骤二十-->
      <el-tabs
        type="border-card"
        v-if="stepIndex === '6' || stepIndex === '20'"
      >
        <el-tab-pane label="培养教育">
          <div class="step-box columns3">
            <div class="key">培养教育日期</div>
            <div>
              <el-date-picker
                v-model="value1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
            <div>
              <el-date-picker
                v-model="value1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
            <div class="key">培养教育内容</div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
              >
              </el-input>
            </div>
            <div></div>
            <div class="key">附件</div>
            <div>
              <el-button type="primary">上传附件</el-button>
            </div>
            <div>
              类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="考察">
          <div class="step-box columns3">
            <div class="key">考察日期</div>
            <div>
              <el-date-picker
                v-model="value1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
            <div>
              <el-date-picker
                v-model="value1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
            <div class="key">考察内容</div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
              >
              </el-input>
            </div>
            <div></div>
            <div class="key">附件</div>
            <div>
              <el-button type="primary">上传附件</el-button>
            </div>
            <div>
              类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- 步骤七 -->
      <div class="step-box columns2" v-if="stepIndex === '7'">
        <div class="key">支委会或支部大会日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">支委会或支部大会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤八 -->
      <div v-if="stepIndex === '8'">等待中共金沙县安底镇委员会备案</div>
      <!-- 步骤九 -->
      <div class="step-box columns6" v-if="stepIndex === '9'">
        <div class="key">入党介绍人一</div>
        <div>
          <el-select v-model="value" placeholder="请选择联系人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">入党介绍人二</div>
        <div>
          <el-select v-model="value" placeholder="请选择联系人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤十 -->
      <div class="step-box columns2" v-if="stepIndex === '10'">
        <div class="key">开展政审的主体</div>
        <div>
          <el-radio v-model="radio" label="1">党支部</el-radio>
          <el-radio v-model="radio" label="2">基层党委</el-radio>
        </div>
        <div class="key">具体负责人</div>
        <div>
          <el-select v-model="value" placeholder="请选择具体负责人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">政审方式</div>
        <div>
          <el-checkbox v-model="checked">同本人谈话</el-checkbox>
          <el-checkbox v-model="checked">查阅有关档案材料</el-checkbox>
          <el-checkbox v-model="checked">找有关单位和人员了解情况</el-checkbox>
          <el-checkbox v-model="checked">函调</el-checkbox>
          <el-checkbox v-model="checked">外调</el-checkbox>
        </div>
        <div class="key">政审结论</div>
        <div>
          <el-radio v-model="radio" label="1">合格</el-radio>
          <el-radio v-model="radio" label="2">不合格</el-radio>
        </div>
        <div class="key">政审完成日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">附件</div>
        <div>
          <el-button type="primary">上传附件</el-button
          >类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤十一 -->
      <div class="step-box columns3" v-if="stepIndex === '11'">
        <div class="key">集中培训日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择起始日期"
          >
          </el-date-picker>
        </div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择截止日期"
          >
          </el-date-picker>
        </div>
        <div class="key">培训天数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div></div>
        <div class="key">培训学时</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div></div>
        <div class="key">开展集中培训的主体</div>
        <div>
          <el-radio v-model="radio" label="1">基层党委</el-radio>
          <el-radio v-model="radio" label="2">县级党委组织部门</el-radio>
        </div>
        <div></div>
        <div class="key">集中培训考核</div>
        <div>
          <el-radio v-model="radio" label="1">合格</el-radio>
          <el-radio v-model="radio" label="2">不合格</el-radio>
        </div>
        <div></div>
        <div class="key">附件</div>
        <div>
          <el-button type="primary">上传附件</el-button>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤十二 -->
      <div class="step-box columns2" v-if="stepIndex === '12'">
        <div class="key">支部委员会审查日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">支部委员会审查意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤十三 -->
      <div class="step-box columns2" v-if="stepIndex === '13'">
        <div class="key">上级党委预审日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">上级党委预审意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
        <div class="key">听取执法部门意见情况</div>
        <div>
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </div>
      </div>
      <!-- 步骤十四 -->
      <div class="step-box columns2" v-if="stepIndex === '14'">
        <div class="key">入党志愿书编号</div>
        <div>
          <el-input v-model="input" placeholder="请输入"></el-input>
        </div>
      </div>
      <!-- 步骤十五 -->
      <div class="step-box columns4" v-if="stepIndex === '15'">
        <div class="key">支部大会召开日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div></div>
        <div></div>
        <div class="key">应到人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">应到会有表决权人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">实到人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">实到会有表决权人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">支部大会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会会议记录</div>
        <div>
          <el-button type="primary">上传附件</el-button>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
        <div></div>
      </div>
      <!-- 步骤十六 -->
      <div class="step-box columns2" v-if="stepIndex === '16'">
        <div class="key">谈话日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">谈话人</div>
        <div>
          <el-select v-model="value" placeholder="请选择谈话人">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="key">谈话人职务</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤十七 -->
      <div class="step-box columns2" v-if="stepIndex === '17'">
        <div class="key">党委会召开日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">党委会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
        <div class="key">会议记录</div>
        <div>
          <el-button type="primary">上传文件</el-button>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤十八 -->
      <div class="step-box columns2" v-if="stepIndex === '18'">
        <div class="key">党委组织部备案日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">党委组织部备案意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤十九 -->
      <div class="step-box columns2" v-if="stepIndex === '19'">
        <div class="key">编入党支部</div>
        <div>中共金沙县安底镇民主村甘桩党支部</div>
        <div class="key">编入党小组</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤二十一 -->
      <div class="step-box columns2" v-if="stepIndex === '21'">
        <div class="key">提出转正申请日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">转正申请书</div>
        <div>
          <el-button type="primary">上传附件</el-button>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤二十二 -->
      <div class="step-box columns4" v-if="stepIndex === '22'">
        <div class="key">是否推迟讨论转正</div>
        <div>
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会召开日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div></div>
        <div></div>
        <div class="key">应到人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">应到会有表决权人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">实到人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">实到会有表决权人数</div>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="key">支部大会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会会议记录</div>
        <div>
          <el-button type="primary">上传附件</el-button>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
        <div></div>
      </div>
      <!-- 步骤二十三 -->
      <div class="step-box columns2" v-if="stepIndex === '23'">
        <div class="key">党委会召开日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">党委会意见</div>
        <div>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤二十四 -->
      <div class="step-box columns2" v-if="stepIndex === '24'">
        <div class="key">归档日期</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div class="key">档案保存主体</div>
        <div>
          <el-radio v-model="radio" label="1">基层党委</el-radio>
          <el-radio v-model="radio" label="2">县级党委组织部门</el-radio>
        </div>
        <div class="key">入党志愿书</div>
        <div>
          <el-button type="primary">上传附件</el-button>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="handleSubmit">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getEmplsoyee, updateEmplsoyee } from "@/api/system/emplsoyee";
export default {
  data() {
    return {
      detailsData: {},
      stepIndex: 0,
      stepProgress: 0,
      stepTxt: "",
      dialogVisible: false,
      value1: "",
      input: "",
      value: "",
      radio: "",
      checked: "",
      textarea: "",
      form: {},
    };
  },
  mounted() {},
  created() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      getEmplsoyee(this.$route.query.eid).then((res) => {
        this.detailsData = res.data;
        this.stepProgress = res.data.currentProcess;
      });
    },
    handleSubmit() {
      let options = {
        eid: this.$route.query.eid,
        currentProcess: Number(this.stepIndex),
      };
      this.stepIndex === "1" && (options.joinDate = this.form.joinDate);
      if (this.stepIndex === "3") {
        let dt = new Date();
        let y, m, d;
        y = dt.getFullYear();
        m = dt.getMonth() + 1;
        d = dt.getDay();
        options.aitivTime = `${y}-${m}-${d}`;
        options.politic = "入党积极分子";
      }
      if (this.stepIndex === "7") {
        options.politic = "入党申请人";
      }
      if (this.stepIndex === "8") {
        let dt = new Date();
        let y, m, d;
        y = dt.getFullYear();
        m = dt.getMonth() + 1;
        d = dt.getDay();
        options.developTime = `${y}-${m}-${d}`;
        options.politic = "发展对象";
      }
      if (this.stepIndex === "18") {
        let dt = new Date();
        let y, m, d;
        y = dt.getFullYear();
        m = dt.getMonth() + 1;
        d = dt.getDay();
        options.memberTime = `${y}-${m}-${d}`;
        options.politic = "预备党员";
      }
      updateEmplsoyee(options).then((res) => {
        if (res.code === 200) {
          this.msgSuccess("保存成功");
          this.dialogVisible = false;
          this.stepProgress < 24 && this.stepProgress++;
        } else this.msgError(res.msg);
      });
    },
  },
  watch: {
    dialogVisible(val) {
      !val && (this.form = {});
    },
    stepProgress(val) {
      this.$nextTick(() => {
        let allStep = document.querySelectorAll(".el-step");
        allStep.forEach((item) => {
          item.onclick = null;
        });
        allStep[val].onclick = (e) => {
          let step_txt = e.target.innerText;
          this.stepTxt = step_txt;
          let step_index = e.target.innerText.match(/[1-9][0-9]*/g);
          this.stepIndex = step_index.join();
          this.dialogVisible = true;
        };
      });
    },
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
    .step-box {
      display: grid;
      &.columns2 {
        grid-template-columns: repeat(2, 1fr);
      }
      &.columns3 {
        grid-template-columns: repeat(3, 1fr);
      }
      &.columns4 {
        grid-template-columns: repeat(4, 1fr);
      }
      &.columns6 {
        grid-template-columns: repeat(6, 1fr);
      }
      & > div {
        border: 1px solid #ccc;
        min-height: 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        &.key {
          justify-content: flex-end;
          background: rgb(245, 244, 244);
        }
        &.upload {
          color: red;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  ::v-deep .el-step__title,
  ::v-deep .el-step__head {
    &.is-process {
      color: red;
      border-color: red;
    }
    &.is-success {
      border-color: #dabb00;
      color: #dabb00;
    }
  }
}
</style>