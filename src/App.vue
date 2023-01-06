<template>
  <div :class="['portfolio', { 'dark-themes': isLightThemes }]">
    <SHeader @handler-change-themes="changeThemes" />
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
        name="route"
        duration="500"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
    <SFooter v-if="$route.name !== 'main'" />
  </div>
</template>

<script>
import "@/styles/main.scss";
import SHeader from "@/components/SHeader/SHeader";
import SFooter from "@/components/SFooter/SFooter";
import { onUpdated, ref } from "vue";

export default {
  components: {
    SHeader,
    SFooter,
  },

  setup() {
    const isLightThemes = ref(false);
    const changeThemes = () => {
      isLightThemes.value = !isLightThemes.value;
    };
    let t;
    const up = () => {
      const top = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
      if (top > 0) {
        window.scrollBy(0, (top + 100) / -10);
        t = setTimeout(() => {
          up();
        }, 20);
      } else clearTimeout(t);
      return false;
    };

    onUpdated(() => {
      up();
    });

    return {
      isLightThemes,
      changeThemes,
    };
  },
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.5s;
}

.animate__animated.animate__fadeOutRight {
  --animate-duration: 0.5s;
}
</style>
