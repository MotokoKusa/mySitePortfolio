<template>
  <section class="about">
    <div class="container">
      <div class="about__wrap">
        <div class="about__photo">
          <img
            class="about__photo-pic"
            src="../../assets/images/me.jpg"
            alt="Me"
          />
        </div>
        <div class="about__content text--color-1">
          <h3>{{ $t("about.title") }}</h3>
          <p
            v-for="(el, idx) in $tm('about.description')"
            :key="idx"
            v-html="$rt(el)"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SAbout",
};
</script>
