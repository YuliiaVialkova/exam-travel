<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['list', 'placeholder', 'label', 'modelValue', 'name'])
const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)
const opened = ref(false)

const chooseItem = function (title) {
  value.value = title
  emit('update:modelValue', title)
}

const addStyle = computed(() => {
  return opened.value ? 'choose-input__list_opened' : ''
})

const onChangeFocus = (val) => {
  setTimeout(() => {
    opened.value = val
  }, 300)
}
</script>
<template>
  <label class="choose-input">
    <div class="choose-input__label">{{ props.label }}</div>
    <input
      type="text"
      :name="props.name"
      :placeholder="props.placeholder"
      class="choose-input__input"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
      @focusin="onChangeFocus(true)"
      @focusout="onChangeFocus(false)"
    />
    <ul class="choose-input__list" :class="addStyle">
      <li class="choose-input__item" v-for="el in list" :key="el.id" @click="chooseItem(el.title)">
        {{ el.title }}
      </li>
    </ul>
  </label>
</template>

<style lang="scss">
.choose-input {
  &__label {
    font-size: var(--label-font-size, 1rem);
    color: var(--label-color, #808080);
  }

  &__input {
    width: var(--input-width, auto);
    padding: var(--input-padding);
    border-radius: var(--input-border-radius, 5px);
    background-color: var(--input-background-color, #fff);
    color: var(--input-color);
    font-size: var(--input-font-size);
    font-weight: var(--input-font-weight, 400);
    line-height: var(--input-line-height);
    height: var(--input-height, 50px);
    letter-spacing: var(--input-letter-spacing);
    border-top: var(--input-border-top);
    border-left: var(--input-border-left);
    border-right: var(--input-border-right);
    border-bottom: var(--input-border-bottom);
    position: var(--input-position);
  }
  &__list {
    position: absolute;
    display: none;
    background-color: #fff;
    padding: 0;
    cursor: pointer;
    margin: 0;

    &_opened {
      display: block;
    }
  }

  &__item {
    list-style-type: none;
    padding: 10px;
  }
}
</style>
