<template>
  <SelectComponent :options="options" :selectedValue="selectedValue" :onChange="onChange" />
</template>

<script>
import downloadFormats from '../data/downloadFormats.json';

export default {
  props: {
    selectedValue: { type: String },
    onChange: { type: Function },
  },
  data() {
    return {
      options: downloadFormats.map((v) => ({
        value: v.target,
        label: v.i18nKey,
      })),
    };
  },
};
</script>

<style scoped></style>
