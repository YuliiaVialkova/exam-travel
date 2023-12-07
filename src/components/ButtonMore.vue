<template>
  <div class="button-more">
    <a class="button-more__more-link" href="#">Детальніше</a>
  </div>
</template>

<style lang="scss">
.button-more {
  padding: 10px 18px;
  border-radius: 6px;
  background-color: var(--btn-bg-color);

  &__more-link {
    text-decoration: none;
    font-size: toRem(16px);
    color: var(--white-color);
  }
}
</style>
