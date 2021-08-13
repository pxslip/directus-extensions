<template>
  <v-input v-model="value" @input="handleChange($event.target.value)" :class="{ invalid: !validates }" />
</template>

<script>
export default {
  emits: ['input'],
  props: {
    value: String,
    validationRegex: {
      type: String,
      default: /\d{4}-\d{2}-\d{2}/,
    },
  },
  data() {
    return {
      regex: null,
      validates: true,
    };
  },
  created() {
    this.regex = new RegExp(this.validationRegex);
  },
  methods: {
    handleChange(value) {
      this.$emit('input', value);
      this.validates = this.regex?.test(value);
    },
  },
};
</script>

<style scoped>
input.invalid {
  border: 1px solid #b92323;
}
</style>
