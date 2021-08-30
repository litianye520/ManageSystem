<template>
  <div class="app-container">
    <el-form :model="queryParams"
             ref="queryForm"
             :inline="true"
             v-show="showSearch"
             label-width="68px">
      <el-form-item label="部门名称"
                    prop="deptName">
        <el-input v-model="queryParams.deptName"
                  placeholder="请输入部门名称"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <!-- <el-form-item label="部门父id" prop="deptParentId">
        <el-input
          v-model="queryParams.deptParentId"
          placeholder="请输入部门父id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="部门编号"
                    prop="deptNumber">
        <el-input v-model="queryParams.deptNumber"
                  placeholder="请输入部门编号"
                  clearable
                  size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <!-- <el-form-item label="部门是否有效(0 否  1 是)" prop="deptEnable">
        <el-input
          v-model="queryParams.deptEnable"
          placeholder="请输入部门是否有效(0 否  1 是)"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
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
                   v-hasPermi="['system:depts:add']">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="success"
                   plain
                   icon="el-icon-edit"
                   size="mini"
                   :disabled="single"
                   @click="handleUpdate"
                   v-hasPermi="['system:depts:edit']">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger"
                   plain
                   icon="el-icon-delete"
                   size="mini"
                   :disabled="multiple"
                   @click="handleDelete"
                   v-hasPermi="['system:depts:remove']">删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning"
                   plain
                   icon="el-icon-download"
                   size="mini"
                   :loading="exportLoading"
                   @click="handleExport"
                   v-hasPermi="['system:depts:export']">导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch"
                     @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading"
              :data="deptsList"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55"
                       align="center" />
      <!-- <el-table-column label="部门Id"
                       align="center"
                       prop="deptId" /> -->
      <el-table-column label="部门名称"
                       align="center"
                       prop="deptName" />
      <!-- <el-table-column label="部门父id"
                       align="center"
                       prop="deptParentId" /> -->
      <el-table-column label="部门编号"
                       align="center"
                       prop="deptNumber" />
      <el-table-column prop="deptEnable"
                       label="部门是否有效"
                       align="center">
        <!-- 0是 1否 -->
        <template slot-scope="scope">
          <span>{{scope.row.deptEnable === 0 ?'是':'否'}}</span>
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
                     v-hasPermi="['system:depts:edit']">修改</el-button>
          <el-button size="mini"
                     type="text"
                     icon="el-icon-delete"
                     @click="handleDelete(scope.row)"
                     v-hasPermi="['system:depts:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0"
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getList" />

    <!-- 添加或修改db部门对话框 -->
    <el-dialog :title="title"
               :visible.sync="open"
               width="500px"
               append-to-body>
      <el-form ref="form"
               :model="form"
               :rules="rules"
               label-width="80px">
        <el-form-item label="部门名称"
                      prop="deptName">
          <el-input v-model="form.deptName"
                    placeholder="请输入部门名称" />
        </el-form-item>
        <!-- <el-form-item label="部门父id"
                      prop="deptParentId">
          <el-input v-model="form.deptParentId"
                    placeholder="请输入部门父id" />
        </el-form-item> -->
        <el-form-item label="部门编号"
                      prop="deptNumber">
          <el-input v-model="form.deptNumber"
                    placeholder="请输入部门编号" />
        </el-form-item>
        <!-- <el-form-item label="部门是否有效(0 否  1 是)"
                      prop="deptEnable">
          <el-input v-model="form.deptEnable"
                    placeholder="请输入部门是否有效(0 否  1 是)" />
        </el-form-item> -->
        <el-form-item label="是否有效"
                      prop="deptEnable">
          <el-radio-group v-model="form.deptEnable">
            <el-radio v-for="dict in statusOptions"
                      :key="dict.dictValue"
                      :label="dict.dictValue">{{dict.dictLabel}}</el-radio>
          </el-radio-group>
        </el-form-item>
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
import { listDepts, getDepts, delDepts, addDepts, updateDepts, exportDepts } from "@/api/system/depts";

export default {
  name: "Depts",
  components: {
  },
  data () {
    return {
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
      // db部门表格数据
      deptsList: [],
      // 状态数据字典
      statusOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        deptName: null,
        // deptParentId: null,
        deptNumber: null,
        // deptEnable: null,
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
  },
  methods: {
    /** 查询db部门列表 */
    getList () {
      this.loading = true;
      listDepts(this.queryParams).then(response => {
        this.deptsList = response.rows;
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
        deptId: null,
        deptName: null,
        deptParentId: null,
        deptNumber: null,
        deptEnable: "0",
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
      this.ids = selection.map(item => item.deptId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd () {
      this.reset();
      this.open = true;
      this.title = "添加db部门";
    },
    /** 修改按钮操作 */
    handleUpdate (row) {
      this.reset();
      const deptId = row.deptId || this.ids
      getDepts(deptId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改db部门";
      });
    },
    /** 提交按钮 */
    submitForm () {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.deptId != null) {
            updateDepts(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addDepts(this.form).then(response => {
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
      const deptIds = row.deptId || this.ids;
      this.$confirm('是否确认删除db部门编号为"' + deptIds + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        return delDepts(deptIds);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => { });
    },
    /** 导出按钮操作 */
    handleExport () {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有db部门数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportDepts(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => { });
    }
  }
};
</script>
