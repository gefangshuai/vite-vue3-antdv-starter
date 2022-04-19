<template>
  <extra-table-container url="/api/users" title="Extra Table Container">
    <template #expandedRowRender="{ record }">
      <p class="padding-left-lg">
        {{ record.name }}
      </p>
    </template>

    <template v-slot:extra>
      <a-button type="primary">Add User</a-button>
    </template>
    <s-table-column title="Username" prop="name"></s-table-column>
    <s-table-column title="Email" prop="email"></s-table-column>
    <s-table-column title="Avatar" prop="avatar"></s-table-column>
    <s-table-column
        title="CreatedAt"
        prop="createdAt"
        fixed="right"
    ></s-table-column>
  </extra-table-container>
</template>

<script>
  import ExtraTableContainer from "_libs/container/table/ExtraTableContainer.vue";
  import STableColumn from "_libs/s-table/STableColumn.vue";
  export default {
    name: "ExampleExtraTableContainer",
    components: {STableColumn, ExtraTableContainer}
  }
</script>

<style scoped>

</style>