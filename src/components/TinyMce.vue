<template>
  <div style="position: relative" class="document-editor">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      @input="ChangeContent"
    ></ckeditor>

    <pre>{{ editorData }}</pre>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "<p>Content of the editor.</p> <code>asuik <h1>aaa</h1></code>",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "|",
          "|",
          "link",
          "undo",
          "redo",
        ],
        // The configuration of the editor.
      },
    };
  },
  methods: {
    ChangeContent: (c) => {
      console.log("edit", c);
    },
  },
};
</script>
<style lang="css">
.ck.ck-editor__main > .ck-editor__editable {
  min-height: 300px;
}
</style>