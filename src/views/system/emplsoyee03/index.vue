<template>
  <div class="app-container">
    <el-form :model="queryParams"
             ref="queryForm"
             :inline="true"
             v-show="showSearch"
             label-width="68px">
      <el-form-item label="姓名"
                    prop="userUame">
        <el-input v-model="queryParams.userUame"
                  placeholder="请输入姓名"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="学号"
                    prop="jobNumber">
        <el-input v-model="queryParams.jobNumber"
                  placeholder="请输入学号"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="政治面貌"
                    prop="politic">
        <el-select v-model="queryParams.politic"
                   placeholder="请选择政治面貌"
                   clearable
                   size="small"
                   style="width: 240px">
          <el-option v-for="item in politics"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="性别" prop="gender">
        <el-input
          v-model="queryParams.gender"
          placeholder="请输入性别"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="出生日期"
                    prop="birthday">
        <el-date-picker clearable
                        size="small"
                        v-model="queryParams.birthday"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择出生日期">
        </el-date-picker>
      </el-form-item> -->
      <!-- <el-form-item label="曾用名" prop="nameUsed">
        <el-input
          v-model="queryParams.nameUsed"
          placeholder="请输入曾用名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="民族" prop="national">
        <el-input
          v-model="queryParams.national"
          placeholder="请输入民族"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单位" prop="unit">
        <el-input
          v-model="queryParams.unit"
          placeholder="请输入单位"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="家庭出生" prop="homeAddress">
        <el-input
          v-model="queryParams.homeAddress"
          placeholder="请输入家庭出生"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="人员类型" prop="personType">
        <el-select v-model="queryParams.personType" placeholder="请选择人员类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="政治面貌" prop="politic">
        <el-input
          v-model="queryParams.politic"
          placeholder="请输入政治面貌"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="毕业院校及专业" prop="graduate">
        <el-input
          v-model="queryParams.graduate"
          placeholder="请输入毕业院校及专业"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <el-input
          v-model="queryParams.education"
          placeholder="请输入学历"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="现任职务" prop="position">
        <el-input
          v-model="queryParams.position"
          placeholder="请输入现任职务"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技术职称" prop="technology">
        <el-input
          v-model="queryParams.technology"
          placeholder="请输入技术职称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="学位" prop="degree">
        <el-input
          v-model="queryParams.degree"
          placeholder="请输入学位"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="籍贯" prop="nativePlace">
        <el-input
          v-model="queryParams.nativePlace"
          placeholder="请输入籍贯"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="出生地" prop="birthplace">
        <el-input
          v-model="queryParams.birthplace"
          placeholder="请输入出生地"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="家庭住址" prop="family">
        <el-input
          v-model="queryParams.family"
          placeholder="请输入家庭住址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="邮编" prop="postcode">
        <el-input
          v-model="queryParams.postcode"
          placeholder="请输入邮编"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="入团时间" prop="joinDate">
        <el-date-picker clearable size="small"
          v-model="queryParams.joinDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择入团时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="参加工作时间" prop="workDate">
        <el-date-picker clearable size="small"
          v-model="queryParams.workDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择参加工作时间">
        </el-date-picker>
      </el-form-item> -->
      <!-- <el-form-item label="所在党组织" prop="organId">
        <el-input
          v-model="queryParams.organId"
          placeholder="请输入所在党组织"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="身份证号"
                    prop="idCard">
        <el-input v-model="queryParams.idCard"
                  placeholder="请输入身份证号"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item> -->
      <!-- <el-form-item label="联系电话"
                    prop="telephone">
        <el-input v-model="queryParams.telephone"
                  placeholder="请输入联系电话"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary"
                   icon="el-icon-search"
                   size="mini"
                   @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh"
                   size="mini"
                   @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="loading"
              :data="emplsoyeeList"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55"
                       align="center" />
      <!-- <el-table-column label="主键Id"
                       align="center"
                       prop="eid" /> -->
      <el-table-column label="姓名"
                       align="center"
                       prop="userUame" />
      <el-table-column label="工号/学号"
                       align="center"
                       prop="jobNumber" />
      <el-table-column label="政治面貌"
                       align="center"
                       prop="politic" />
      <el-table-column label="当前流程"
                       align="center"
                       prop="processName" />
      <el-table-column prop="gender"
                       label="性别"
                       align="center"
                       width="60">
        <template slot-scope="scope">
          <span>{{scope.row.gender === 0 ?'男':scope.row.gender === 1 ?'女':'性别未知'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="身份证号"
                       align="center"
                       prop="idCard" />
      <el-table-column label="所在党支部"
                       align="center"
                       width="110">
        <template slot-scope="scope">
          <span>{{scope.row.organs.organName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="所在院校"
                       align="center"
                       width="150px"
                       prop="graduate" />
      <!-- <el-table-column label="出生日期"
                       align="center"
                       prop="birthday"
                       width="130">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.birthday, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="曾用名"
                       align="center"
                       prop="nameUsed" /> -->
      <!-- <el-table-column label="民族"
                       align="center"
                       prop="national" />
      <el-table-column label="单位"
                       align="center"
                       prop="unit" /> -->
      <!-- <el-table-column label="家庭出生"
                       align="center"
                       prop="homeAddress" /> -->
      <!-- <el-table-column label="人员类型"
                       align="center"
                       prop="personType" /> -->
      <!-- <el-table-column label="政治面貌"
                       align="center"
                       prop="politic" />
      <el-table-column label="毕业院校及专业"
                       align="center"
                       width="150px"
                       prop="graduate" /> -->
      <!-- <el-table-column label="学历"
                       align="center"
                       prop="education" /> -->
      <!-- <el-table-column label="现任职务"
                       align="center"
                       prop="position" /> -->
      <!-- <el-table-column label="技术职称"
                       align="center"
                       prop="technology" /> -->
      <!-- <el-table-column prop="degree"
                       label="学位"
                       align="center"
                       width="60">
        <template slot-scope="scope">
          <span>{{scope.row.degree === 1 ?'学士':scope.row.degree === 2 ?'硕士':scope.row.degree === 3 ?'博士':'学历未知'}}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="学位"
                       align="center"
                       prop="degree" /> -->
      <!-- <el-table-column label="籍贯"
                       align="center"
                       prop="nativePlace" /> -->
      <!-- <el-table-column label="出生地"
                       align="center"
                       prop="birthplace" />
      <el-table-column label="家庭住址"
                       align="center"
                       prop="family" /> -->
      <!-- <el-table-column label="邮编"
                       align="center"
                       prop="postcode" />
      <el-table-column label="入团时间"
                       align="center"
                       prop="joinDate"
                       width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.joinDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="参加工作时间"
                       align="center"
                       prop="workDate"
                       width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.workDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="学号"
                       align="center"
                       prop="jobNumber" />
      <el-table-column label="联系电话"
                       align="center"
                       prop="telephone" /> -->
      <!-- <el-table-column label="操作"
                       align="center"
                       class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="text"
                     icon="el-icon-edit"
                     @click="handleUpdate(scope.row)"
                     v-hasPermi="['system:emplsoyee:edit']">修改</el-button>
          <el-button size="mini"
                     type="text"
                     icon="el-icon-delete"
                     @click="handleDelete(scope.row)"
                     v-hasPermi="['system:emplsoyee:remove']">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination v-show="total>0"
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getList" />

    <!-- 添加或修改人员信息对话框 -->
    <el-dialog :title="title"
               :visible.sync="open"
               width="1200px"
               append-to-body>
      <el-form ref="form"
               :model="form"
               :rules="rules"
               label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名"
                          prop="userUame">
              <el-input v-model="form.userUame"
                        placeholder="请输入姓名"
                        maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期"
                          prop="birthday">
              <el-date-picker clearable
                              size="small"
                              v-model="form.birthday"
                              type="date"
                              width="200"
                              value-format="yyyy-MM-dd"
                              placeholder="选择出生日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="民族"
                          prop="national">
              <el-input v-model="form.national"
                        placeholder="请输入民族" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位"
                          prop="unit">
              <el-input v-model="form.unit"
                        placeholder="请输入单位" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="政治面貌"
                          prop="politic">
              <el-input v-model="form.politic"
                        placeholder="请输入政治面貌" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="院校专业"
                          prop="graduate">
              <el-input v-model="form.graduate"
                        placeholder="请输入毕业院校及专业" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="现任职务"
                          prop="position">
              <el-input v-model="form.position"
                        placeholder="请输入现任职务" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学位"
                          prop="degree">
              <el-select v-model="form.degree"
                         placeholder="请输入学位"
                         clearable>
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <!-- <el-input v-model="form.degree"
                        placeholder="请输入学位" /> -->
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="学号"
                          prop="jobNumber">
              <el-input v-model="form.jobNumber"
                        placeholder="请输入学号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="党组织"
                          prop="organId">
              <el-input v-model="form.organId"
                        placeholder="请输入所在党组织" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="身份证号"
                          prop="idCard">
              <el-input v-model="form.idCard"
                        placeholder="请输入身份证号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话"
                          prop="telephone">
              <el-input v-model="form.telephone"
                        placeholder="请输入联系电话" />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-form-item label="姓名"
                      prop="userUame">
          <el-input v-model="form.userUame"
                    placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="性别"
                      prop="gender">
          <el-input v-model="form.gender"
                    placeholder="请输入性别" />
        </el-form-item>
        <el-form-item label="出生日期"
                      prop="birthday">
          <el-date-picker clearable
                          size="small"
                          v-model="form.birthday"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择出生日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="曾用名"
                      prop="nameUsed">
          <el-input v-model="form.nameUsed"
                    placeholder="请输入曾用名" />
        </el-form-item>
        <el-form-item label="民族"
                      prop="national">
          <el-input v-model="form.national"
                    placeholder="请输入民族" />
        </el-form-item>
        <el-form-item label="单位"
                      prop="unit">
          <el-input v-model="form.unit"
                    placeholder="请输入单位" />
        </el-form-item>
        <el-form-item label="家庭出生"
                      prop="homeAddress">
          <el-input v-model="form.homeAddress"
                    placeholder="请输入家庭出生" />
        </el-form-item>
        <el-form-item label="人员类型"
                      prop="personType">
          <el-select v-model="form.personType"
                     placeholder="请选择人员类型">
            <el-option label="请选择字典生成"
                       value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="政治面貌"
                      prop="politic">
          <el-input v-model="form.politic"
                    placeholder="请输入政治面貌" />
        </el-form-item>
        <el-form-item label="毕业院校及专业"
                      prop="graduate">
          <el-input v-model="form.graduate"
                    placeholder="请输入毕业院校及专业" />
        </el-form-item>
        <el-form-item label="学历"
                      prop="education">
          <el-input v-model="form.education"
                    placeholder="请输入学历" />
        </el-form-item>
        <el-form-item label="现任职务"
                      prop="position">
          <el-input v-model="form.position"
                    placeholder="请输入现任职务" />
        </el-form-item>
        <el-form-item label="技术职称"
                      prop="technology">
          <el-input v-model="form.technology"
                    placeholder="请输入技术职称" />
        </el-form-item>
        <el-form-item label="学位"
                      prop="degree">
          <el-input v-model="form.degree"
                    placeholder="请输入学位" />
        </el-form-item>
        <el-form-item label="籍贯"
                      prop="nativePlace">
          <el-input v-model="form.nativePlace"
                    placeholder="请输入籍贯" />
        </el-form-item>
        <el-form-item label="出生地"
                      prop="birthplace">
          <el-input v-model="form.birthplace"
                    placeholder="请输入出生地" />
        </el-form-item>
        <el-form-item label="家庭住址"
                      prop="family">
          <el-input v-model="form.family"
                    placeholder="请输入家庭住址" />
        </el-form-item>
        <el-form-item label="邮编"
                      prop="postcode">
          <el-input v-model="form.postcode"
                    placeholder="请输入邮编" />
        </el-form-item>
        <el-form-item label="入团时间"
                      prop="joinDate">
          <el-date-picker clearable
                          size="small"
                          v-model="form.joinDate"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择入团时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="参加工作时间"
                      prop="workDate">
          <el-date-picker clearable
                          size="small"
                          v-model="form.workDate"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择参加工作时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="学号"
                      prop="jobNumber">
          <el-input v-model="form.jobNumber"
                    placeholder="请输入学号" />
        </el-form-item>
        <el-form-item label="所在党组织"
                      prop="organId">
          <el-input v-model="form.organId"
                    placeholder="请输入所在党组织" />
        </el-form-item>
        <el-form-item label="身份证号"
                      prop="idCard">
          <el-input v-model="form.idCard"
                    placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="联系电话"
                      prop="telephone">
          <el-input v-model="form.telephone"
                    placeholder="请输入联系电话" />
        </el-form-item> -->
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listEmplsoyee, getEmplsoyee, delEmplsoyee, addEmplsoyee, updateEmplsoyee, exportEmplsoyee } from "@/api/system/emplsoyee";

export default {
  name: "Emplsoyee",
  components: {
  },
  data () {
    return {
      options: [{ label: '学士', value: 1 }, { label: '硕士', value: 2 }, { label: '博士', value: 3 }],
      // 政治面貌
      politics: [{ label: '群众', value: '群众' }, { label: '团员', value: '团员' },
      { label: '入党申请人', value: '入党申请人' }, { label: '入党积极分子', value: '入党积极分子' },
      { label: '发展对象', value: '发展对象' }, { label: '预备党员', value: '预备党员' },
      { label: '党员', value: '党员' }],
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 人员信息表格数据
      emplsoyeeList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userUame: null,
        gender: null,
        birthday: null,
        nameUsed: null,
        national: null,
        unit: null,
        homeAddress: null,
        personType: null,
        politic: null,
        graduate: null,
        education: null,
        position: null,
        technology: null,
        degree: null,
        nativePlace: null,
        birthplace: null,
        family: null,
        postcode: null,
        joinDate: null,
        workDate: null,
        jobNumber: null,
        organId: null,
        idCard: null,
        telephone: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created () {
    this.getList();
  },
  methods: {
    /** 查询人员信息列表 */
    getList () {
      this.loading = true;
      listEmplsoyee(this.queryParams).then(response => {
        this.emplsoyeeList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel () {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset () {
      this.form = {
        eid: null,
        userUame: null,
        gender: null,
        birthday: null,
        nameUsed: null,
        national: null,
        unit: null,
        homeAddress: null,
        personType: null,
        politic: null,
        graduate: null,
        education: null,
        position: null,
        technology: null,
        degree: null,
        nativePlace: null,
        birthplace: null,
        family: null,
        postcode: null,
        joinDate: null,
        workDate: null,
        jobNumber: null,
        organId: null,
        idCard: null,
        telephone: null,
        createTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery () {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery () {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange (selection) {
      this.ids = selection.map(item => item.eid)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd () {
      this.reset();
      this.open = true;
      this.title = "添加人员信息";
    },
    /** 修改按钮操作 */
    handleUpdate (row) {
      this.reset();
      const eid = row.eid || this.ids
      getEmplsoyee(eid).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改人员信息";
      });
    },
    /** 提交按钮 */
    submitForm () {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.eid != null) {
            updateEmplsoyee(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addEmplsoyee(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete (row) {
      const eids = row.eid || this.ids;
      this.$confirm('是否确认删除人员信息编号为"' + eids + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        return delEmplsoyee(eids);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => { });
    },
    /** 导出按钮操作 */
    handleExport () {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有人员信息数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportEmplsoyee(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => { });
    }
  }
};
</script>
