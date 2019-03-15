<template>
  <div class="pos">
    <el-tabs>
      <el-tab-pane label="点餐">
        点餐
      </el-tab-pane>
      <el-tab-pane label="挂单">
        挂单
      </el-tab-pane>
      <el-tab-pane label="外卖">
        外卖
      </el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" border show-summary style="width: 100%" >
      <el-table-column prop="goodsName" label="商品"  ></el-table-column>
      <el-table-column prop="count" label="量" width="50"></el-table-column>
      <el-table-column prop="price" label="金额" width="70"></el-table-column>
      <el-table-column  label="操作" width="100" fixed="right">
        <template scope="scope">
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">增加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="warning" >挂单</el-button>
    <el-button type="danger" >删除</el-button>
    <el-button type="success" >结账</el-button>
  </div>
</template>
<script>
	export default {
		name: 'Pos',
		data () {
			return {
			tableData: [{
				goodsName: '可口可乐',
				price: 8,
				count:1
			}, {
				goodsName: '香辣鸡腿堡',
				price: 15,
				count:1
			}, {
				goodsName: '爱心薯条',
				price: 8,
				count:1
			}, {
				goodsName: '甜筒',
				price: 8,
				count:1
			}]
			}
		},
	    mounted:function(){
		    var orderHeight=document.body.clientHeight;
		    document.getElementById("order-list").style.height=orderHeight+'px';
	    },
	}
</script>
<style scoped>
</style>