<template>
  <div class="detail-container">
    <div class="container-t">
      <div class="title-box">
        <span>{{ detailsData.userUame || "--" }}</span>基本信息
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
        <el-steps :active="stepProgress"
                  finish-status="success"
                  simple>
          <el-step title="01 递交入党申请书"></el-step>
          <el-step title="02 党组织派人谈话"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">二、入党积极分子确定和培养教育</span>
        <el-steps :active="stepProgress - 2"
                  finish-status="success"
                  simple>
          <el-step title="03 推荐和确定入党积极分子"></el-step>
          <el-step title="04 上级党委备案"></el-step>
          <el-step title="05 指定培养联系人"></el-step>
          <el-step title="06 培养教育考察"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">三、发展对象确定和考察</span>
        <el-steps :active="stepProgress - 6"
                  finish-status="success"
                  simple>
          <el-step title="07 确定发展对象"></el-step>
          <el-step title="08 报上级党委备案"></el-step>
          <el-step title="09 确定入党介绍人"></el-step>
          <el-step title="10 进行政治审查"></el-step>
          <el-step title="11 开展集中培训"></el-step>
        </el-steps>
      </div>

      <div class="step-list">
        <span class="title">四、入党前培训</span>
        <el-steps :active="stepProgress - 11"
                  finish-status="success"
                  simple>
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
        <el-steps :active="stepProgress - 17"
                  finish-status="success"
                  simple>
          <el-step title="18 上一级党委组织部门备案"></el-step>
          <el-step title="19 编入党支部和党小组"></el-step>
          <el-step title="20 继续培养考察"></el-step>
        </el-steps>
      </div>
      <div class="step-list">
        <span class="title">六、预备党员转正</span>
        <el-steps :active="stepProgress - 20"
                  finish-status="success"
                  simple>
          <el-step title="21 提出转正申请"></el-step>
          <el-step title="22 支部大会讨论"></el-step>
          <el-step title="23 上级党委审批"></el-step>
          <el-step title="24 材料归档"></el-step>
        </el-steps>
      </div>
    </div>

    <!-- 弹框 -->
    <el-dialog :title="stepTxt"
               :visible.sync="dialogVisible"
               width="70%">
      <!-- 步骤一 -->
      <div class="step-box columns2"
           v-if="stepIndex === '1'">
        <div class="key">递交入党申请书日期</div>
        <div>
          <el-date-picker v-model="form.joinDate"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">入党申请书</div>
        <div class="upload">上传附件</div>
      </div>
      <!-- 步骤二 -->
      <div class="step-box columns2"
           v-if="stepIndex === '2'">
        <div class="key">党组织派人谈话日期</div>
        <div>
          <el-date-picker v-model="value1"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">谈话人姓名</div>
        <div>
          <el-input v-model="talkerName"
                    placeholder="请输入内容"></el-input>
        </div>
        <div class="key">谈话人职务</div>
        <div>
          <el-input v-model="talkerPost"
                    placeholder="请输入内容"></el-input>
        </div>
        <div class="key">谈话人联系方式</div>
        <div>
          <el-input v-model="talkerTelephone"
                    placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤三 -->
      <div class="step-box columns2"
           v-if="stepIndex === '3'">
        <div class="key">推荐方式</div>
        <!-- <div>
          <el-checkbox v-model="checked">党员推荐</el-checkbox>
          <el-checkbox v-model="checked">群团推优</el-checkbox>
          <el-checkbox v-model="checked">共青团推优</el-checkbox>
          <el-checkbox v-model="checked">工会推优</el-checkbox>
          <el-checkbox v-model="checked">妇联推优</el-checkbox>
        </div> -->
        <div>
          <template>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="党员推荐"></el-checkbox>
              <el-checkbox label="群团推优"></el-checkbox>
              <el-checkbox label="共青团推优"></el-checkbox>
              <el-checkbox label="工会推优"></el-checkbox>
              <el-checkbox label="妇联推优"></el-checkbox>
            </el-checkbox-group>
          </template>
        </div>
        <div class="key">支委会或支部大会日期</div>
        <div>
          <el-date-picker v-model="date3"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">支委会或支部大会意见</div>
        <div>
          <el-radio v-model="radio3"
                    label="1">同意</el-radio>
          <el-radio v-model="radio3"
                    label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤四 -->
      <div v-if="stepIndex === '4'">等待上级党委备案</div>
      <!-- 步骤五 -->
      <div class="step-box columns6"
           v-if="stepIndex === '5'">
        <div class="key">联系人一</div>
        <div>
          <el-input v-model="fiveRelation1"
                    placeholder="请输入联系人一"></el-input>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="fivePost1"
                    placeholder="请输入职务"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="fivePhone1"
                    placeholder="请输入联系电话"></el-input>
        </div>
        <div class="key">联系人二</div>
        <div>
          <el-input v-model="fiveRelation2"
                    placeholder="请输入联系人二"></el-input>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="fivePost2"
                    placeholder="请输入职务"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="fivePhone2"
                    placeholder="请输入联系电话"></el-input>
        </div>
      </div>
      <!-- 步骤六 / 步骤二十-->
      <el-tabs type="border-card"
               v-if="stepIndex === '6' || stepIndex === '20'">
        <el-tab-pane label="培养教育">
          <div class="step-box columns3">
            <div class="key">培养教育日期</div>
            <div>
              <el-date-picker v-model="juDateStart6"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
              </el-date-picker>
            </div>
            <div>
              <el-date-picker v-model="juDateEnd6"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="key">培养教育内容</div>
            <div>
              <el-input type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="juContent6">
              </el-input>
            </div>
            <div></div>
            <div class="key">附件</div>
            <div>
              <el-upload class="upload-demo"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :before-remove="beforeRemove"
                         :before-upload="beforeUpload"
                         multiple
                         :limit="3"
                         :on-success='otherVoucherSuccess'
                         :file-list="fileList"
                         :show-file-list="true">
                <el-button size="small"
                           type="primary">上传附件</el-button>
              </el-upload>
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
              <el-date-picker v-model="kcDataStart6"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
              </el-date-picker>
            </div>
            <div>
              <el-date-picker v-model="kcDataEnd6"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="key">考察内容</div>
            <div>
              <el-input type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="kcContent6">
              </el-input>
            </div>
            <div></div>
            <div class="key">附件</div>
            <div>
              <el-upload class="upload-demo"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :before-remove="beforeRemove"
                         :before-upload="beforeUpload"
                         multiple
                         :limit="3"
                         :on-success='otherVoucherSuccess'
                         :file-list="fileList"
                         :show-file-list="true">
                <el-button size="small"
                           type="primary">上传附件</el-button>
              </el-upload>
            </div>
            <div>
              类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- 步骤七 -->
      <div class="step-box columns2"
           v-if="stepIndex === '7'">
        <div class="key">支委会或支部大会日期</div>
        <div>
          <el-date-picker v-model="zbDate7"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">支委会或支部大会意见</div>
        <div>
          <el-radio v-model="radio7"
                    label="1">同意</el-radio>
          <el-radio v-model="radio7"
                    label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤八 -->
      <div v-if="stepIndex === '8'">等待报上级党委备案</div>
      <!-- 步骤九 -->
      <div class="step-box columns6"
           v-if="stepIndex === '9'">
        <div class="key">入党介绍人一</div>
        <div>
          <el-input v-model="nineRelation1"
                    placeholder="请输入联系人"></el-input>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="ninePost1"
                    placeholder="请输入职务"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="ninePhone1"
                    placeholder="请输入联系电话"></el-input>
        </div>
        <div class="key">入党介绍人二</div>
        <div>
          <el-input v-model="nineRelation2"
                    placeholder="请输入联系人"></el-input>
        </div>
        <div class="key">职务</div>
        <div>
          <el-input v-model="ninePost2"
                    placeholder="请输入内容"></el-input>
        </div>
        <div class="key">联系电话</div>
        <div>
          <el-input v-model="ninePhone2"
                    placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤十 -->
      <div class="step-box columns2"
           v-if="stepIndex === '10'">
        <div class="key">开展政审的主体</div>
        <div>
          <el-radio v-model="radio10"
                    label="1">党支部</el-radio>
          <el-radio v-model="radio10"
                    label="2">基层党委</el-radio>
        </div>
        <div class="key">具体负责人</div>
        <div>
          <el-input v-model="person10"
                    placeholder="请输入具体负责人"></el-input>
        </div>
        <div class="key">政审方式</div>
        <!-- <div>
          <el-checkbox v-model="checked">同本人谈话</el-checkbox>
          <el-checkbox v-model="checked">查阅有关档案材料</el-checkbox>
          <el-checkbox v-model="checked">找有关单位和人员了解情况</el-checkbox>
          <el-checkbox v-model="checked">函调</el-checkbox>
          <el-checkbox v-model="checked">外调</el-checkbox>
        </div> -->
        <div>
          <template>
            <el-checkbox-group v-model="checkList10">
              <el-checkbox label="同本人谈话"></el-checkbox>
              <el-checkbox label="查阅有关档案材料"></el-checkbox>
              <el-checkbox label="找有关单位和人员了解情况"></el-checkbox>
              <el-checkbox label="函调"></el-checkbox>
              <el-checkbox label="外调"></el-checkbox>
            </el-checkbox-group>
          </template>
        </div>
        <div class="key">政审结论</div>
        <div>
          <el-radio v-model="radio11"
                    label="1">合格</el-radio>
          <el-radio v-model="radio11"
                    label="2">不合格</el-radio>
        </div>
        <div class="key">政审完成日期</div>
        <div>
          <el-date-picker v-model="finishDate10"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">附件</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button> &nbsp; &nbsp;类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
          </el-upload>
        </div>
      </div>
      <!-- 步骤十一 -->
      <div class="step-box columns3"
           v-if="stepIndex === '11'">
        <div class="key">集中培训日期</div>
        <div>
          <el-date-picker v-model="pxDateStart11"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择起始日期">
          </el-date-picker>
        </div>
        <div>
          <el-date-picker v-model="pxDateEnd11"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择截止日期">
          </el-date-picker>
        </div>
        <div class="key">培训天数</div>
        <div>
          <el-input v-model="day11"
                    placeholder="请输入内容"></el-input>
        </div>
        <div></div>
        <div class="key">培训学时</div>
        <div>
          <el-input v-model="xs11"
                    placeholder="请输入内容"></el-input>
        </div>
        <div></div>
        <div class="key">开展集中培训的主体</div>
        <div>
          <el-radio v-model="radio12"
                    label="1">基层党委</el-radio>
          <el-radio v-model="radio12"
                    label="2">县级党委组织部门</el-radio>
        </div>
        <div></div>
        <div class="key">集中培训考核</div>
        <div>
          <el-radio v-model="radio13"
                    label="1">合格</el-radio>
          <el-radio v-model="radio13"
                    label="2">不合格</el-radio>
        </div>
        <div></div>
        <div class="key">附件</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤十二 -->
      <div class="step-box columns2"
           v-if="stepIndex === '12'">
        <div class="key">支部委员会审查日期</div>
        <div>
          <el-date-picker v-model="scDate12"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">支部委员会审查意见</div>
        <div>
          <el-radio v-model="radio14"
                    label="1">同意</el-radio>
          <el-radio v-model="radio14"
                    label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤十三 -->
      <div class="step-box columns2"
           v-if="stepIndex === '13'">
        <div class="key">上级党委预审日期</div>
        <div>
          <el-date-picker v-model="zsDate13"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">上级党委预审意见</div>
        <div>
          <el-radio v-model="radio15"
                    label="1">同意</el-radio>
          <el-radio v-model="radio15"
                    label="2">不同意</el-radio>
        </div>
        <div class="key">听取执法部门意见情况</div>
        <div>
          <el-radio v-model="radio16"
                    label="1">是</el-radio>
          <el-radio v-model="radio16"
                    label="2">否</el-radio>
        </div>
      </div>
      <!-- 步骤十四 -->
      <div class="step-box columns2"
           v-if="stepIndex === '14'">
        <div class="key">入党志愿书编号</div>
        <div>
          <el-input v-model="number14"
                    placeholder="请输入入党志愿书编号"></el-input>
        </div>
      </div>
      <!-- 步骤十五 -->
      <div class="step-box columns4"
           v-if="stepIndex === '15'">
        <div class="key">支部大会召开日期</div>
        <div>
          <el-date-picker v-model="date15"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div></div>
        <div></div>
        <div class="key">应到人数</div>
        <div>
          <el-input v-model="count15"
                    placeholder="请输入应到人数"></el-input>
        </div>
        <div class="key">应到会有表决权人数</div>
        <div>
          <el-input v-model="sjcount15"
                    placeholder="请输入应到会有表决权人数"></el-input>
        </div>
        <div class="key">实到人数</div>
        <div>
          <el-input v-model="sdcount15"
                    placeholder="请输入实到人数"></el-input>
        </div>
        <div class="key">实到会有表决权人数</div>
        <div>
          <el-input v-model="bjcount15"
                    placeholder="请输入实到会有表决权人数"></el-input>
        </div>
        <div class="key">支部大会意见</div>
        <div>
          <el-radio v-model="zbradio15"
                    label="1">同意</el-radio>
          <el-radio v-model="zbradio15"
                    label="2">不同意</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会会议记录</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
        <div></div>
      </div>
      <!-- 步骤十六 -->
      <div class="step-box columns2"
           v-if="stepIndex === '16'">
        <div class="key">谈话日期</div>
        <div>
          <el-date-picker v-model="date16"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">谈话人</div>
        <div>
          <el-input v-model="person16"
                    placeholder="请输入谈话人"></el-input>
        </div>
        <div class="key">谈话人职务</div>
        <div>
          <el-input v-model="post16"
                    placeholder="请输入内容"></el-input>
        </div>
      </div>
      <!-- 步骤十七 -->
      <div class="step-box columns2"
           v-if="stepIndex === '17'">
        <div class="key">党委会召开日期</div>
        <div>
          <el-date-picker v-model="date17"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">党委会意见</div>
        <div>
          <el-radio v-model="radio17"
                    label="1">同意</el-radio>
          <el-radio v-model="radio17"
                    label="2">不同意</el-radio>
        </div>
        <div class="key">会议记录</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤十八 -->
      <div class="step-box columns2"
           v-if="stepIndex === '18'">
        <div class="key">党委组织部备案日期</div>
        <div>
          <el-date-picker v-model="date18"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">党委组织部备案意见</div>
        <div>
          <el-radio v-model="radio18"
                    label="1">同意</el-radio>
          <el-radio v-model="radio18"
                    label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤十九 -->
      <div class="step-box columns2"
           v-if="stepIndex === '19'">
        <div class="key">编入党支部</div>
        <div>
          <el-input v-model="organ19"
                    placeholder="请输入编入党支部"></el-input>
        </div>
        <div class="key">编入党小组</div>
        <div>
          <el-input v-model="group19"
                    placeholder="请输入编入党小组"></el-input>
        </div>
      </div>
      <!-- 步骤二十一 -->
      <div class="step-box columns2"
           v-if="stepIndex === '21'">
        <div class="key">提出转正申请日期</div>
        <div>
          <el-date-picker v-model="date21"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">转正申请书</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <!-- 步骤二十二 -->
      <div class="step-box columns4"
           v-if="stepIndex === '22'">
        <div class="key">是否推迟讨论转正</div>
        <div>
          <el-radio v-model="radioworker"
                    label="1">是</el-radio>
          <el-radio v-model="radioworker"
                    label="2">否</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会召开日期</div>
        <div>
          <el-date-picker v-model="date22"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div></div>
        <div></div>
        <div class="key">应到人数</div>
        <div>
          <el-input v-model="count22"
                    placeholder="请输入应到人数"></el-input>
        </div>
        <div class="key">应到会有表决权人数</div>
        <div>
          <el-input v-model="sjcount22"
                    placeholder="请输入应到会有表决权人数"></el-input>
        </div>
        <div class="key">实到人数</div>
        <div>
          <el-input v-model="sdcount22"
                    placeholder="请输入实到人数"></el-input>
        </div>
        <div class="key">实到会有表决权人数</div>
        <div>
          <el-input v-model="bjcount22"
                    placeholder="请输入实到会有表决权人数"></el-input>
        </div>
        <div class="key">支部大会意见</div>
        <div>
          <el-radio v-model="radio22"
                    label="1">同意</el-radio>
          <el-radio v-model="radio22"
                    label="2">不同意</el-radio>
        </div>
        <div></div>
        <div></div>
        <div class="key">支部大会会议记录</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
        <div></div>
      </div>
      <!-- 步骤二十三 -->
      <div class="step-box columns2"
           v-if="stepIndex === '23'">
        <div class="key">党委会召开日期</div>
        <div>
          <el-date-picker v-model="date23"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">党委会意见</div>
        <div>
          <el-radio v-model="radio23"
                    label="1">同意</el-radio>
          <el-radio v-model="radio23"
                    label="2">不同意</el-radio>
        </div>
      </div>
      <!-- 步骤二十四 -->
      <div class="step-box columns2"
           v-if="stepIndex === '24'">
        <div class="key">归档日期</div>
        <div>
          <el-date-picker v-model="date24"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="key">档案保存主体</div>
        <div>
          <el-radio v-model="radio24"
                    label="1">基层党委</el-radio>
          <el-radio v-model="radio24"
                    label="2">县级党委组织部门</el-radio>
        </div>
        <div class="key">入党志愿书</div>
        <div>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     :before-upload="beforeUpload"
                     multiple
                     :limit="3"
                     :on-success='otherVoucherSuccess'
                     :file-list="fileList"
                     :show-file-list="true">
            <el-button size="small"
                       type="primary">上传附件</el-button>
          </el-upload>
        </div>
        <div class="key"></div>
        <div>
          类型：pdf,doc,docx,xls,xlsx,wps,jpg,png,gif,bmp,rar,zip;大小不超过2M
        </div>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="handleSubmit">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getEmplsoyee, updateEmplsoyee } from "@/api/system/emplsoyee";
export default {
  data () {
    return {
      detailsData: {},
      fileList: [],
      stepIndex: 0,
      stepProgress: 0,
      stepTxt: "",
      dialogVisible: false,
      //02 党组织派人谈话
      // 谈话人姓名   谈话人职务  谈话人联系方式
      talkerName: "", talkerPost: "", talkerTelephone: "",
      // 03 推荐和确定入党积极分子
      // 推荐方式   支委会或支部大会日期   支委会或支部大会意见
      checkList: [], date3: "", radio3: "",
      //05 指定培养联系人
      //请输入联系人一   请输入职务  请输入联系电话
      fiveRelation1: "", fivePost1: "", fivePhone1: "",
      //请输入联系人二   请输入职务  请输入联系电话
      fiveRelation2: "", fivePost2: "", fivePhone2: "",
      //06 培养教育考察
      // 培养教育日期   培养教育内容
      juDateStart6: "", juDateEnd6: "", juContent6: "",
      // 考察  考察日期   考察内容
      kcDataStart6: "", kcDataEnd6: "", kcContent6: "",
      //07 确定发展对象
      zbDate7: "", radio7: "",
      //09 确定入党介绍人
      // 请选择联系人   请输入职务  请输入联系电话
      nineRelation1: "", ninePost1: "", ninePhone1: "",
      // 请选择联系人   请输入职务  请输入联系电话
      nineRelation2: "", ninePost2: "", ninePhone2: "",
      // 10 进行政治审查
      // 开展政审的主体  具体负责人  政审结论 政审结论  政审完成日期
      radio10: "", person10: "", checkList10: [], radio11: "", finishDate10: "",
      // 11 开展集中培训
      // 集中培训日期  培训天数  培训学时  开展集中培训的主体  集中培训考核
      pxDateStart11: "", pxDateEnd11: "", day11: "", xs11: "", radio12: "", radio13: "",
      // 12 支部委员会审查
      // 支部委员会审查日期  支部委员会审查意见
      scDate12: "", radio14: "",
      // 13 上级党委预审
      // 上级党委预审日期  上级党委预审意见  听取执法部门意见情况
      zsDate13: "", radio15: "", radio16: "",
      // 14 填写入党志愿书
      // 入党志愿书编号
      number14: "",
      // 15 支部大会讨论
      // 支部大会召开日期  应到人数  应到会有表决权人数  实到人数  实到会有表决权人数  支部大会意见
      date15: "", count15: "", sjcount15: "", sdcount15: "", bjcount15: "", zbradio15: "",
      // 16 上级党委派人谈话
      // 谈话日期   谈话人   谈话人职务
      date16: "", person16: "", post16: "",
      // 17 上级党委审批
      // 党委会召开日期   党委会意见
      date17: "", radio17: "",
      // 18 上一级党委组织部门备案
      // 党委组织部备案日期   党委组织部备案意见
      date18: "", radio18: "",
      // 19 编入党支部和党小组
      // 编入党支部   编入党小组
      organ19: "", group19: "",
      // 21 提出转正申请
      // 提出转正申请日期
      date21: "",
      // 22 支部大会讨论
      // 是否推迟讨论转正   支部大会召开日期   应到人数    应到会有表决权人数  实到人数   实到会有表决权人数   支部大会意见
      radioworker: "", date22: "", count22: "", sjcount22: "", sdcount22: "", bjcount22: "", radio22: "",
      // 23 上级党委审批
      // 党委会召开日期   党委会意见
      date23: "", radio23: "",
      // 24 材料归档
      // 归档日期   档案保存主体
      date24: "", radio24: "",

      value1: "",
      input: "",
      value: "",
      radio: "",
      checked: "",
      textarea: "",
      form: {},
    };
  },
  mounted () { },
  created () {
    this.getDetails();
  },
  methods: {
    getDetails () {
      getEmplsoyee(this.$route.query.eid).then((res) => {
        this.detailsData = res.data;
        this.stepProgress = res.data.currentProcess;
      });
    },
    beforeUpload (file) {
      // 允许上传格式
      let fileType = ['jpg', 'png', 'jpeg', 'pdf', 'docx', 'doc', 'zip', 'rar', 'xls', 'xlsx', 'bmp'];
      let fileName = file.name
      // console.log(fileName.substr(fileName.lastIndexOf(".") + 1))
      if (!fileType.includes(fileName.substr(fileName.lastIndexOf(".") + 1))) {
        this.$message({
          message: `上传提示：当前支持类型：pdf,doc,docx,xlx,xlsx,jpg,png,gif,bmp,rar,zip;大小不超过2M`,
          type: 'warning'
        });
        return false;
      };
      this.fileList.push(file.name);
    },
    handleSubmit () {
      debugger;
      if (this.radio3 === "2" || this.radio7 === "2" || this.radio11 === "2"
        || this.radio13 === "2" || this.radio14 === "2" || this.radio15 === "2"
        || this.zbradio15 === "2" || this.radio17 === "2" || this.radio18 === "2"
        || this.radioworker === "2" || this.radio22 === "2" || this.radio23 === "2") {
        this.msgSuccess("保存成功");
        this.dialogVisible = false;
      } else {
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
        if (this.stepIndex === "24") {
          options.politic = "党员";
        }
        updateEmplsoyee(options).then((res) => {
          if (res.code === 200) {
            this.msgSuccess("保存成功");
            this.dialogVisible = false;
            this.stepProgress < 24 && this.stepProgress++;
          } else this.msgError(res.msg);
        });
      }
    },
  },
  watch: {
    dialogVisible (val) {
      !val && (this.form = {});
    },
    stepProgress (val) {
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