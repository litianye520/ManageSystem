<template>
  <div class="app-container">
    <el-form :model="queryParams"
             ref="queryForm"
             :inline="true"
             v-show="showSearch"
             label-width="90px">
      <el-form-item label="党组织名称"
                    prop="organName">
        <el-input v-model="queryParams.organName"
                  placeholder="请输入党组织名称"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <!-- <el-form-item label="党组织父id" prop="organParentId">
        <el-input
          v-model="queryParams.organParentId"
          placeholder="请输入党组织父id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="党组织编号"
                    prop="organNumber">
        <el-input v-model="queryParams.organNumber"
                  placeholder="请输入党组织编号"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <!-- <el-form-item label="关联部门Id"
                    prop="deptId">
        <el-input v-model="queryParams.deptId"
                  placeholder="请输入关联部门Id"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item> -->
      <!-- <el-form-item label="党组织是否有效"
                    prop="organEnable">
        <el-input v-model="queryParams.organEnable"
                  placeholder="请输入党组织是否有效"
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

    <el-row :gutter="10"
            class="mb8">
      <el-col :span="1.5">
        <el-button type="primary"
                   plain
                   icon="el-icon-plus"
                   size="mini"
                   @click="handleAdd"
                   v-hasPermi="['system:organs:add']">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="success"
                   plain
                   icon="el-icon-edit"
                   size="mini"
                   :disabled="single"
                   @click="handleUpdate"
                   v-hasPermi="['system:organs:edit']">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger"
                   plain
                   icon="el-icon-delete"
                   size="mini"
                   :disabled="multiple"
                   @click="handleDelete"
                   v-hasPermi="['system:organs:remove']">删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning"
                   plain
                   icon="el-icon-download"
                   size="mini"
                   :loading="exportLoading"
                   @click="handleExport"
                   v-hasPermi="['system:organs:export']">导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch"
                     @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading"
              :data="organsList"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55"
                       align="center" />
      <!-- <el-table-column label="党组织Id"
                       align="center"
                       prop="organId" /> -->
      <el-table-column label="党组织名称"
                       align="center"
                       prop="organName" />
      <!-- <el-table-column label="党组织父id"
                       align="center"
                       prop="organParentId" /> -->
      <el-table-column label="党组织编号"
                       align="center"
                       prop="organNumber" />
      <!-- <el-table-column label="关联部门Id"
                       align="center"
                       prop="deptId" /> -->
      <el-table-column label="部门名称"
                       align="center">
        <template slot-scope="scope">
          <span>{{scope.row.depts.deptName}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="organEnable"
                       label="党组织是否有效"
                       align="center">
        <!-- 0是 1否 -->
        <template slot-scope="scope">
          <span>{{scope.row.organEnable === 0 ?'是':'否'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       align="center"
                       class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="text"
                     icon="el-icon-edit"
                     @click="handleUpdate(scope.row)"
                     v-hasPermi="['system:organs:edit']">修改</el-button>
          <el-button size="mini"
                     type="text"
                     icon="el-icon-delete"
                     @click="handleDelete(scope.row)"
                     v-hasPermi="['system:organs:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0"
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getList" />

    <!-- 添加或修改党组织对话框 -->
    <el-dialog :title="title"
               :visible.sync="open"
               width="500px"
               append-to-body>
      <el-form ref="form"
               :model="form"
               :rules="rules"
               label-width="100px">
        <el-form-item label="党组织名称"
                      prop="organName">
          <el-input v-model="form.organName"
                    placeholder="请输入党组织名称" />
        </el-form-item>
        <!-- <el-form-item label="党组织父id"
                      prop="organParentId">
          <el-input v-model="form.organParentId"
                    placeholder="请输入党组织父id" />
        </el-form-item> -->
        <el-form-item label="党组织编号"
                      prop="organNumber">
          <el-input v-model="form.organNumber"
                    placeholder="请输入党组织编号" />
        </el-form-item>
        <!-- <el-form-item label="关联部门Id"
                      prop="deptId">
          <el-input v-model="form.deptId"
                    placeholder="请输入关联部门Id" />
        </el-form-item> -->
        <el-form-item label="关联部门">
          <el-select v-model="form.deptId"
                     placeholder="请选择关联部门">
            <el-option v-for="item in deptOptions"
                       :key="item.deptId"
                       :label="item.deptName"
                       :value="item.deptId"
                       :disabled="item.status == 1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否有效"
                      prop="organEnable">
          <el-radio-group v-model="form.organEnable">
            <el-radio v-for="dict in statusOptions"
                      :key="dict.dictValue"
                      :value="dict.dictValue"
                      :label="dict.dictValue">{{dict.dictLabel}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="是否有效"
                      prop="organEnable">
          <el-select v-model="form.organEnable"
                     placeholder="请选择是否有效">
            <el-option v-for="item in statusEnables"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
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
import { listOrgans, getOrgans, delOrgans, addOrgans, updateOrgans, exportOrgans } from "@/api/system/organs";
import { listDepts, listAllDepts } from '@/api/system/depts';

export default {
  name: "Organs",
  components: {
  },
  data () {
    return {
      // 是否有效 0 是   1 否
      statusEnables: [{ label: '是', value: 0 }, { label: '否', value: 1 }],
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
      // 党组织表格数据
      organsList: [],
      statusOptions: [],
      // 所属部门
      deptOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        organName: null,
        organParentId: null,
        organNumber: null,
        deptId: null,
        organEnable: null,
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
    this.getDicts("sys_enabled").then(response => {
      this.statusOptions = response.data;
    });
    this.getDeptList();
  },
  methods: {
    /** 查询党组织列表 */
    getList () {
      this.loading = true;
      listOrgans(this.queryParams).then(response => {
        this.organsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    getDeptList () {
      listAllDepts().then(response => {
        if (response.code == 200) {
          this.deptOptions = response.data;
        }
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
        organId: null,
        organName: null,
        organParentId: null,
        organNumber: null,
        deptId: null,
        organEnable: "0",
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
      this.ids = selection.map(item => item.organId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd () {
      this.reset();
      this.open = true;
      this.title = "添加党组织";
    },
    /** 修改按钮操作 */
    handleUpdate (row) {
      this.reset();
      const organId = row.organId || this.ids
      getOrgans(organId).then(response => {
        this.form = response.data;
        this.form.deptId = Number(this.form.deptId);
        this.form.organEnable = String(this.form.organEnable);
        this.open = true;
        this.title = "修改党组织";
      });
    },
    /** 提交按钮 */
    submitForm () {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.organId != null) {
            updateOrgans(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrgans(this.form).then(response => {
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
      const organIds = row.organId || this.ids;
      this.$confirm('是否确认删除党组织编号为"' + organIds + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        return delOrgans(organIds);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => { });
    },
    /** 导出按钮操作 */
    handleExport () {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有党组织数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportOrgans(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => { });
    }
  }
};
</script>
