<template>
  <div :class="['portfolio', { 'dark-themes': isLightThemes }]">
    <SHeader @handler-change-themes="changeThemes" />
    <transition name="component-fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </transition>
  </div>
</template>

<script>
import "@/styles/main.scss";
import SHeader from "@/components/SHeader/SHeader";
import { ref } from "vue";

export default {
  components: {
    SHeader,
  },

  setup() {
    const isLightThemes = ref(false);
    const changeThemes = () => {
      isLightThemes.value = !isLightThemes.value;
    };

    return {
      isLightThemes,
      changeThemes,
    };
  },
};
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
