<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    class="m-0"
    :multiple="true"
    @change="handleChange"
    @drop="handleDrop"
  >
    <!-- <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p> -->
     <p>select a file or drag and drop here</p>
                            <p>
                              JPG PNG or PDF 
                            </p>
                              <p>(size must not be more than 5MB)</p>
  </a-upload-dragger>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const handleChange = (info: UploadChangeParam) => {
      console.log(info?.file.originFileObj)
      // const status = info.file.status;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    };
    return {
      handleChange,
      fileList: ref([]),
      handleDrop: (e: DragEvent) => {
        console.log(e);
      },
    };
  },
});
</script>